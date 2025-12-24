import { Search, User, ShoppingCart } from "lucide-react";

const navigationLinks = [
  "Home",
  "Shop",
  "About",
  "Journal",
  "Locations",
  "Catering",
  "Contact",
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow">
            <span className="font-bold text-white text-lg">96</span>
          </div>
          <span className="text-2xl font-semibold text-amber-700 tracking-wide">
            Nhom96
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navigationLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative hover:text-[#cc5970] transition after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#cc5970] hover:after:w-full after:transition-all"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <HeaderIcon label="Search">
            <Search className="w-5 h-5" />
          </HeaderIcon>

          <HeaderIcon label="Account">
            <User className="w-5 h-5" />
          </HeaderIcon>

          <button
            aria-label="Cart"
            className="relative p-2 rounded-full hover:bg-amber-50 transition"
          >
            <ShoppingCart className="w-5 h-5 text-gray-700" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-white text-[10px] rounded-full flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

/* Component icon dùng lại */
function HeaderIcon({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <button
      aria-label={label}
      className="p-2 rounded-full hover:bg-amber-50 transition text-gray-700"
    >
      {children}
    </button>
  );
}
