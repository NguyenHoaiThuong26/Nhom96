import { useState } from "react";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!acceptTerms) {
      alert("You must accept the Terms & Conditions");
      return;
    }

    console.log({
      username,
      email,
      password,
      acceptTerms,
    });
  };

  return (
    <div className="min-h-screen relative bg-[url('/login-background.png')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main content */}
      <main className="relative z-10 pt-28 pb-16 px-4 flex justify-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-8">
          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-[#5c3a2e]">
              Create your account
            </h1>
            <p className="text-sm text-gray-500">
              Join Nhom96 and start your journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-5 text-left">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-[#5c3a2e] mb-1">
                Username
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
                placeholder="your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#5c3a2e] mb-1">
                Email Address
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

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-[#5c3a2e] mb-1">
                Confirm Password
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

            {/* Terms */}
            <div className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 w-3 h-3 accent-[#cc5970]"
              />
              <p className="text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-[#cc5970] hover:underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#cc5970] hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#cc5970] text-white py-3 rounded-lg font-medium hover:bg-[#b84d61] transition"
            >
              Create Account
            </button>
          </form>

          {/* Footer text */}
          <div className="pt-6 mt-4 border-t border-gray-200/50 text-center space-y-2">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <a href="/login" className="text-[#cc5970] hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignupPage;
