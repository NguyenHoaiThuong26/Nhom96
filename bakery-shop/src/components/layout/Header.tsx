import { Search, User, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"

const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
  { label: "Journal", path: "/journal" },
  { label: "Locations", path: "/locations" },
  { label: "Catering", path: "/catering" },
  { label: "Contact", path: "/contact" },
]

export default function Header() {
  const navigate = useNavigate()

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm caret-transparent">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow">
            <span className="text-lg font-bold text-white">96</span>
          </div>
          <span className="text-2xl font-semibold tracking-wide text-amber-700">
            Nhom96
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden gap-8 font-medium text-gray-700 md:flex">
          {navigationLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative transition hover:text-[#cc5970]
              after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0
              after:bg-[#cc5970] after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <HeaderIcon label="Search">
            <Search className="h-5 w-5" />
          </HeaderIcon>

          {/* Account */}
          <HeaderIcon label="Account" onClick={() => navigate("/profile")}>
            <User className="h-5 w-5" />
          </HeaderIcon>

          {/* Cart */}
          <button
            aria-label="Cart"
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

/* Component icon dùng lại */
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
