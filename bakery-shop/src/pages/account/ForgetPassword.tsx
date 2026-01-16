import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthService from "../../service/AuthService"

function ForgetPasswordPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess(false)

    const trimmedEmail = email.trim()
    const trimmedPassword = password.trim()
    const trimmedConfirm = confirmPassword.trim()

    if (!trimmedEmail || !trimmedPassword || !trimmedConfirm) {
      setError("Vui lòng nhập đầy đủ thông tin")
      return
    }

    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setError("Email không hợp lệ")
      return
    }

    if (trimmedPassword.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự")
      return
    }

    if (trimmedPassword !== trimmedConfirm) {
      setError("Mật khẩu xác nhận không khớp")
      return
    }

    try {
      setLoading(true)
      await AuthService.resetPasswordByEmail(trimmedEmail, trimmedPassword)
      setSuccess(true)

      setTimeout(() => {
        navigate("/login")
      }, 2000)
    } catch (err: any) {
      setError(err.message || "Đặt lại mật khẩu thất bại")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative bg-[url('/images/login-background.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/40" />

      <main className="relative z-10 pt-28 pb-16 px-4 flex justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-8">
          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-[#5c3a2e]">
              Quên mật khẩu
            </h1>
            <p className="text-sm text-gray-500">
              Nhập email để đặt lại mật khẩu mới
            </p>
          </div>

          {/* ERROR */}
          {error && (
            <div className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* SUCCESS */}
          {success && (
            <div className="rounded-lg bg-green-50 px-4 py-2 text-sm text-green-700">
              Đặt lại mật khẩu thành công, đang chuyển về trang đăng nhập...
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleResetPassword} className="space-y-5 text-left">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#5c3a2e] mb-1">
                Email
              </label>
              <input
                type="email"
                className="
                  w-full rounded-xl border border-gray-300/60 bg-gray-50 
                  px-5 py-3 text-sm 
                  focus:bg-white focus:border-[#cc5970] 
                  focus:ring-2 focus:ring-[#cc5970]/30 
                  outline-none transition
                "
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* New password */}
            <div>
              <label className="block text-sm font-medium text-[#5c3a2e] mb-1">
                Mật khẩu mới
              </label>
              <input
                type="password"
                className="
                  w-full rounded-xl border border-gray-300/60 bg-gray-50 
                  px-5 py-3 text-sm 
                  focus:bg-white focus:border-[#cc5970] 
                  focus:ring-2 focus:ring-[#cc5970]/30 
                  outline-none transition
                "
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Confirm password */}
            <div>
              <label className="block text-sm font-medium text-[#5c3a2e] mb-1">
                Xác nhận mật khẩu
              </label>
              <input
                type="password"
                className="
                  w-full rounded-xl border border-gray-300/60 bg-gray-50 
                  px-5 py-3 text-sm 
                  focus:bg-white focus:border-[#cc5970] 
                  focus:ring-2 focus:ring-[#cc5970]/30 
                  outline-none transition
                "
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#cc5970] text-white py-3 rounded-lg font-medium hover:bg-[#b84d61] transition disabled:opacity-70"
            >
              {loading ? "Đang xử lý..." : "Đặt lại mật khẩu"}
            </button>
          </form>

          <div className="text-center text-sm text-gray-600">
            Nhớ mật khẩu rồi?{" "}
            <a href="/login" className="text-[#cc5970] hover:underline">
              Đăng nhập
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ForgetPasswordPage
