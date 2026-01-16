import { Search, User, ShoppingCart, LogOut } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import AuthService from "../../service/AuthService"



const navigationLinks = [
  { label: "Trang chủ", path: "/home" },
  { label: "Cửa hàng", path: "/shop" },
  { label: "Giới thiệu", path: "/about" },
  { label: "Liên hệ", path: "/contact" },
]

export default function Header() {
  const navigate = useNavigate()
  const user = AuthService.getCurrentUser()
  const [open, setOpen] = useState(false)

  const handleUserClick = () => {
    if (!user) {
      navigate("/login")
      return
    }

    // Bật/tắt dropdown
    setOpen((prev) => !prev)
  }

  const handleLogout = () => {
    AuthService.logout()
    setOpen(false)
    navigate("/login")
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow">
            <span className="text-lg font-bold text-white">96</span>
          </div>
          <span className="text-2xl font-semibold tracking-wide text-amber-700">
            96 Bakery
          </span>
        </Link>

        {/* Thanh điều hướng */}
        <nav className="hidden gap-8 font-medium md:flex">
          {navigationLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                relative transition
                ${
                  isActive
                    ? "text-[#cc5970] after:w-full"
                    : "text-gray-700 hover:text-[#cc5970]"
                }
                after:absolute after:-bottom-1 after:left-0 after:h-0.5
                after:bg-[#cc5970] after:transition-all
                `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>


        {/* Các hành động */}
        <div className="flex items-center gap-3">
          <HeaderIcon label="Tìm kiếm">
            <Search className="h-5 w-5" />
          </HeaderIcon>

          {/* Tài khoản */}
          <div className="relative">
            <HeaderIcon label="Tài khoản" onClick={handleUserClick}>
              <User className="h-5 w-5" />
            </HeaderIcon>

            {/* Dropdown khi đã đăng nhập */}
            {user && open && (
              <div className="absolute right-0 mt-2 w-44 rounded-xl bg-white shadow-lg border border-gray-100">
                <button
                  onClick={() => {
                    setOpen(false)
                    navigate("/profile")
                  }}
                  className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50"
                >
                  <User className="h-4 w-4" />
                  Hồ sơ
                </button>

                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4" />
                  Đăng xuất
                </button>
              </div>
            )}
          </div>

          {/* Giỏ hàng */}
          <button
            aria-label="Giỏ hàng"
            onClick={() => navigate("/cart")}
            className="relative rounded-full p-2 transition hover:bg-amber-50"
          >
            <ShoppingCart className="h-5 w-5 text-gray-700" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[10px] text-white">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

/* Component icon dùng chung */
function HeaderIcon({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode
  label: string
  onClick?: () => void
}) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className="rounded-full p-2 text-gray-700 transition hover:bg-amber-50"
    >
      {children}
    </button>
  )
}
