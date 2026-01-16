"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LogOut, User as UserIcon, ShoppingBag } from "lucide-react"
import AuthService from "../../service/AuthService"
import type { User } from "../../service/AuthService"


type Tab = "profile" | "orders"

interface UserProfileSidebarProps {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}

const NAV_ITEMS = [
  {
    key: "profile" as Tab,
    label: "Profile Information",
    icon: UserIcon,
  },
  {
    key: "orders" as Tab,
    label: "Order History",
    icon: ShoppingBag,
  },
]

export default function UserProfileSidebar({
  activeTab,
  onTabChange,
}: UserProfileSidebarProps) {
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)

  // ✅ Lấy user đã đăng nhập
  useEffect(() => {
    const currentUser = AuthService.getCurrentUser()

    if (!currentUser) {
      navigate("/login")
      return
    }

    setUser(currentUser)
  }, [navigate])

  // ✅ Logout
  const handleLogout = () => {
    AuthService.logout()
    navigate("/login")
  }

  if (!user) return null

  // ✅ Tạo initials
  const initials = user.fullName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <aside className="w-full lg:w-80">
      <div className="rounded-2xl bg-white p-6 shadow-sm lg:sticky lg:top-6">
        {/* User Info */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 to-rose-200 text-3xl font-bold text-amber-900">
            {initials}
          </div>

          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-900">
              {user.fullName}
            </h2>
            <p className="text-sm text-gray-600">
              {user.email}
            </p>
          </div>
        </div>

        <Divider />

        {/* Navigation */}
        <nav className="space-y-2">
          {NAV_ITEMS.map(({ key, label, icon: Icon }) => (
            <NavItem
              key={key}
              active={activeTab === key}
              onClick={() => onTabChange(key)}
              icon={<Icon className="h-5 w-5" />}
              label={label}
            />
          ))}
        </nav>

        <Divider />

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-red-50 px-4 py-3 font-medium text-red-700 transition hover:bg-red-100"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  )
}

/* ===== Small Components ===== */

function NavItem({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  label: string
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition ${
        active
          ? "bg-gradient-to-r from-rose-100 to-amber-100 text-rose-900 shadow-sm"
          : "text-gray-700 hover:bg-gray-50"
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  )
}

function Divider() {
  return (
    <div className="my-6 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
  )
}
