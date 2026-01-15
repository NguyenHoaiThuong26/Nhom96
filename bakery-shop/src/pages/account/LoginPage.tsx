import { useState } from "react";
import { useNavigate } from "react-router-dom"
import AuthService from "../../service/AuthService"


function LoginPage() {
  const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await AuthService.login(identifier, password)

      navigate("/home")
    } catch (err: any) {
      setError(err.message || "Đăng nhập thất bại")
    } finally {
      setLoading(false)
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

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
              Welcome to Nhom96
            </h1>
            <p className="text-sm text-gray-500">
              Sign in to your account or create a new one
            </p>
          </div>

           {/* ERROR */}
          {error && (
            <div className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
              {error}
            </div>
          )}


          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5 text-left">
            <div>
              <label className="block text-sm font-medium text-[#5c3a2e] mb-1">
                Username or Email
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
                placeholder="username or email"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />

            </div>

            <div>
              <label className="block text-sm font-medium text-[#5c3a2e] mb-1">
                Password
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

            {/* Remember me */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-3 h-3 accent-[#cc5970]"
                />
                <span className="text-[#5c3a2e]">Remember me</span>
              </label>

              <a href="#" className="text-[#cc5970] hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#cc5970] text-white py-3 rounded-lg font-medium hover:bg-[#b84d61] transition disabled:opacity-70"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Social login */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <div className="flex-1 h-px bg-gray-300/40" />
              Or continue with
              <div className="flex-1 h-px bg-gray-300/40" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Google */}
              <button
                type="button"
                onClick={() => handleSocialLogin("Google")}
                className="
                  flex items-center justify-center gap-2
                  rounded-xl border border-gray-300/60 bg-gray-50
                  py-3 text-sm font-medium text-gray-700
                  hover:bg-white hover:border-gray-300
                  transition
                "
              >
                <span className="w-4 h-4 flex items-center justify-center font-bold text-gray-500">
                  G
                </span>
                Google
              </button>

              {/* Facebook */}
              <button
                type="button"
                onClick={() => handleSocialLogin("Facebook")}
                className="
                  flex items-center justify-center gap-2
                  rounded-xl border border-gray-300/60 bg-gray-50
                  py-3 text-sm font-medium text-gray-700
                  hover:bg-white hover:border-gray-300
                  transition
                "
              >
                <span className="w-4 h-4 flex items-center justify-center font-bold text-gray-500">
                  f
                </span>
                Facebook
              </button>
            </div>

          </div>

          <div className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-[#cc5970] font-medium hover:underline"
            >
              Sign up
            </a>
          </div>

          <div className="pt-6 mt-4 border-t border-gray-200/50 text-center space-y-2">
            <p className="text-sm text-gray-500">
              Your data is secure with Nhom96
            </p>
            <p className="text-xs text-gray-400">
              We use industry-standard encryption to protect your information
            </p>
          </div>

        </div>
      </main>

    </div>
  );
}

export default LoginPage;
