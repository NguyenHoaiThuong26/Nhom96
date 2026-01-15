import ApiService from "../service/ApiService"

export interface User {
  id: number
  username: string
  email: string
  fullName: string
  phone: string
  address: string
  dateOfBirth: string
}

export default class AuthService {
  static async login(identifier: string, password: string): Promise<User> {
    // kiểm tra là email hay username
    const isEmail = identifier.includes("@")

    const query = isEmail
      ? `/users?email=${identifier}&password=${password}`
      : `/users?username=${identifier}&password=${password}`

    const res = await ApiService.get<any[]>(query)

    if (res.data.length === 0) {
      throw new Error("Tên đăng nhập hoặc mật khẩu không đúng")
    }

    const { password: _, ...user } = res.data[0]

    localStorage.setItem("user", JSON.stringify(user))
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
