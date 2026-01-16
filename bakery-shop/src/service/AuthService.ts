import axios from "axios"

const API_URL = "http://localhost:3001"

export interface User {
  id: number
  username: string
  email: string
  fullName: string
  phone: string
  address: string
  dateOfBirth: string
}

interface UserResponse extends User {
  password: string
}

export interface UpdateUserPayload {
  fullName?: string
  email?: string
  phone?: string
  address?: string
  dateOfBirth?: string
}

export interface RegisterPayload {
  username: string
  email: string
  password: string
  fullName?: string
  phone?: string
  address?: string
  dateOfBirth?: string
}

export interface Order {
  id: string
  userId: number
  date: string
  status: string
}

export interface OrderItem {
  id: string
  orderId: string
  cakeId: number
  cakeName: string
  price: number
  quantity: number
}

export interface OrderWithItems extends Order {
  items: OrderItem[]
  total: number
}


export default class AuthService {

  /* ================= Login ================= */
  static async login(identifier: string, password: string): Promise<User> {

  // kiểm tra email 
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const isEmail = EMAIL_REGEX.test(identifier)

    
    const query = isEmail
      ? `/users?email=${identifier}&password=${password}`
      : `/users?username=${identifier}&password=${password}`

    const res = await axios.get<UserResponse[]>(`${API_URL}${query}`)

    if (res.data.length === 0) {
      throw new Error("Tên đăng nhập hoặc mật khẩu không đúng")
    }

    // loại bỏ password
    const { password: _pwd, ...user } = res.data[0]

    localStorage.setItem("user", JSON.stringify(user))
    return user
  }

  /* ================= REGISTER ================= */
  static async register(data: RegisterPayload): Promise<User> {
    // Kiểm tra username đã tồn tại chưa
    const usernameRes = await axios.get<UserResponse[]>(
      `${API_URL}/users?username=${data.username}`
    )

    if (usernameRes.data.length > 0) {
      throw new Error("Username đã tồn tại")
    }

    // Kiểm tra email đã tồn tại chưa
    const emailRes = await axios.get<UserResponse[]>(
      `${API_URL}/users?email=${data.email}`
    )

    if (emailRes.data.length > 0) {
      throw new Error("Email đã được sử dụng")
    }

    // Tạo user mới
    const createRes = await axios.post<UserResponse>(
      `${API_URL}/users`,
      data
    )

    // loại bỏ password
    const { password: _pwd, ...user } = createRes.data

    return user
  }

  /* ================= FORGET PASSWORD ================= */
  static async resetPasswordByEmail (email: string, newPassword: string): Promise<void> {
    // Tìm user theo email
    const res = await axios.get<UserResponse[]>(
      `${API_URL}/users?email=${email}`
    )

    if (res.data.length === 0) {
      throw new Error("Email không tồn tại")
    }

    const user = res.data[0]

    // Cập nhật password
    await axios.patch(`${API_URL}/users/${user.id}`, {
      password: newPassword,
    })
  }


  /* ================= UPDATE PROFILE ================= */
  static async updateProfile(userId: number, data: UpdateUserPayload): Promise<User> {
    
    // lấy user hiện tại
    const currentRes = await axios.get<UserResponse>(
      `${API_URL}/users/${userId}`
    )

    const currentUser = currentRes.data

    if (!currentUser) {
      throw new Error("User không tồn tại")
    }

    // gộp dữ liệu
    const updatedUser: UserResponse = {
      ...currentUser,
      ...data,
      password: currentUser.password,
    }

    // cập nhật user
    const updateRes = await axios.put<UserResponse>(
      `${API_URL}/users/${userId}`,
      updatedUser
    )

    // loại bỏ password
    const { password: _pwd, ...user } = updateRes.data

    // cập nhật localStorage
    localStorage.setItem("user", JSON.stringify(user))

    return user
  }

  /* ================= LOAD HISTORY ORDER ================= */
  static async getOrderHistory(): Promise<OrderWithItems[]> {
    const user = this.getCurrentUser()

    if (!user) {
      throw new Error("Chưa đăng nhập")
    }

    // Lấy danh sách orders của user
    const ordersRes = await axios.get<Order[]>(
      `${API_URL}/orders?userId=${user.id}`
    )

    const orders = ordersRes.data

    const ordersWithItems = await Promise.all(
      orders.map(async (order) => {
        const itemsRes = await axios.get<OrderItem[]>(
          `${API_URL}/orderItems?orderId=${order.id}`
        )

        const items = itemsRes.data

        const total = items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        )

        return {
          ...order,
          items,
          total, 
        }
      })
   )

    return ordersWithItems
  }



  static logout() {
    localStorage.removeItem("user")
  }

  static getCurrentUser(): User | null {
    const user = localStorage.getItem("user")
    return user ? JSON.parse(user) : null
  }

  static isAuthenticated(): boolean {
    return !!localStorage.getItem("user")
  }
}
