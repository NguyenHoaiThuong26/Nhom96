import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/DIV-2.png)" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/90 backdrop-blur border-b">
        <div className="max-w-screen-xl mx-auto px-4 h-20 flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-700 font-[Pacifico]">
            CrumbCraft
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-[#5c3a2e]">
            Welcome to CrumbCraft
          </h1>
          <p className="text-center text-gray-500 mt-2">
            Sign in to your account
          </p>

          {/* Form */}
          <form className="mt-8 space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#5c3a2e]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="mt-2 w-full h-12 rounded-lg border px-4 bg-gray-50 focus:ring-2 focus:ring-[#cc5970]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#5c3a2e]">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-2 w-full h-12 rounded-lg border px-4 bg-gray-50 focus:ring-2 focus:ring-[#cc5970]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>

              <a className="text-[#cc5970] hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-12 bg-[#cc5970] text-white rounded-lg font-medium hover:bg-[#b84d61] transition"
            >
              Login Securely
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-6">
            Your data is secure with CrumbCraft
          </p>
        </div>
      </main>
    </div>
  );
}
