import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AuthService from "../../service/AuthService"
import { Link } from "react-router-dom"


function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Kiểm tra mật khẩu xác nhận
    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp")
      return
    }
    
    if (password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự")
      return
    }

    try {
      setLoading(true)

      await AuthService.register({
        username,
        email,
        password,
      })

      setError(null)
      setSuccess("Đăng ký thành công! Vui lòng đăng nhập.")

      setTimeout(() => {
        navigate("/login")
      }, 1500)

    } catch (err: any) {
      setError(err.message || "Đăng ký thất bại")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative bg-[url('/images/login-background.png')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main content */}
      <main className="relative z-10 pt-28 pb-16 px-4 flex justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-8">
          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-[#5c3a2e]">
              Tạo tài khoản
            </h1>
            <p className="text-sm text-gray-500">
              Tham gia Nhom96 và bắt đầu hành trình của bạn
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
            <div className="rounded-lg bg-green-50 px-4 py-2 text-sm text-green-600">
              {success}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-5 text-left">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-[#5c3a2e] mb-1">
                Tên đăng nhập
              </label>
              <input
                type="text"
                className="
                  w-full rounded-xl border border-gray-300/60 bg-gray-50
                  px-5 py-3 text-sm
                  focus:bg-white focus:border-[#cc5970]
                  focus:ring-2 focus:ring-[#cc5970]/30
                  outline-none transition
                "
                placeholder="tên đăng nhập của bạn"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#5c3a2e] mb-1">
                Địa chỉ Email
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
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#5c3a2e] mb-1">
                Mật khẩu
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

            {/* Confirm Password */}
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

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#cc5970] text-white py-3 rounded-lg font-medium hover:bg-[#b84d61] transition"
            >
              {loading ? "Đang tạo tài khoản..." : "Đăng ký"}
            </button>
          </form>

          {/* Footer text */}
          <div className="pt-6 mt-4 border-t border-gray-200/50 text-center space-y-2">
            <p className="text-sm text-gray-500">
              Đã có tài khoản?{" "}
              <Link to="/login" className="text-[#cc5970] hover:underline">
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignupPage;
