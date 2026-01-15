import axios from "axios"

export default class ApiService {
  private static API_URL = "http://localhost:3001"

  static get<T>(url: string) {
    return axios.get<T>(`${this.API_URL}${url}`)
  }

  static post<T>(url: string, data: any) {
    return axios.post<T>(`${this.API_URL}${url}`, data)
  }

  static put<T>(url: string, data: any) {
    return axios.put<T>(`${this.API_URL}${url}`, data)
  }

  static delete<T>(url: string) {
    return axios.delete<T>(`${this.API_URL}${url}`)
  }
}
