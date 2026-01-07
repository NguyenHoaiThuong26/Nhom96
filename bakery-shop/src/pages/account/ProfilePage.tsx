"use client"

import { useState } from "react"
import UserProfileSidebar from "../../components/profile/ProfileSidebar"
import ProfileInformation from "../../components/profile/ProfileInformation"
import OrderHistory from "../../components/profile/OrderHistory"
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

type AccountTab = "profile" | "orders"

export default function MyAccountPage() {
  const [activeTab, setActiveTab] = useState<AccountTab>("profile")

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileInformation />
      case "orders":
        return <OrderHistory />
      default:
        return null
    }
  }

  return (
    <>
    <Header />

    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50 px-4 pt-24">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            My Account
          </h1>
          <p className="mt-2 text-gray-600">
            Manage your profile and order history
          </p>
        </header>

        {/* Main Content */}
        <div className="flex flex-col gap-6 lg:flex-row">
          <UserProfileSidebar
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          <main className="flex-1">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>

    <Footer />
  </>
  )
}
