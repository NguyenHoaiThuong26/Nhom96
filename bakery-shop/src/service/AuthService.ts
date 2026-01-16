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

export interface RegisterPayload {
  username: string
  email: string
  password: string
  fullName?: string
  phone?: string
  address?: string
  dateOfBirth?: string
}

export default class AuthService {
  static async login(identifier: string, password: string): Promise<User> {
    const isEmail = identifier.includes("@")

    const query = isEmail
      ? `/users?email=${identifier}&password=${password}`
      : `/users?username=${identifier}&password=${password}`

    const res = await axios.get<UserResponse[]>(`${API_URL}${query}`)

    if (res.data.length === 0) {
      throw new Error("Tên đăng nhập hoặc mật khẩu không đúng")
    }

    // loại bỏ password trước khi dùng trong app
    const { password: _pwd, ...user } = res.data[0]

    localStorage.setItem("user", JSON.stringify(user))
    return user
  }

  /* ================= REGISTER ================= */
  static async register(data: RegisterPayload): Promise<User> {
    // 1️⃣ Kiểm tra username đã tồn tại chưa
    const usernameRes = await axios.get<UserResponse[]>(
      `${API_URL}/users?username=${data.username}`
    )

    if (usernameRes.data.length > 0) {
      throw new Error("Username đã tồn tại")
    }

    // 2️⃣ Kiểm tra email đã tồn tại chưa
    const emailRes = await axios.get<UserResponse[]>(
      `${API_URL}/users?email=${data.email}`
    )

    if (emailRes.data.length > 0) {
      throw new Error("Email đã được sử dụng")
    }

    // 3️⃣ Tạo user mới
    const createRes = await axios.post<UserResponse>(
      `${API_URL}/users`,
      data
    )

    // 4️⃣ Loại bỏ password trước khi dùng trong app
    const { password: _pwd, ...user } = createRes.data

    return user
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
