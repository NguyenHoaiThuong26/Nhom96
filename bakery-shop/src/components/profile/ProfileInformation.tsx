"use client"

import { useState } from "react"
import { Save } from "lucide-react"

interface ProfileFormData {
  fullName: string
  email: string
  phone: string
  address: string
  dateOfBirth: string
}

export default function ProfileInformation() {
  const [formData, setFormData] = useState<ProfileFormData>({
    fullName: "Sarah Baker",
    email: "sarah@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Maple Street, Springfield, IL 62701",
    dateOfBirth: "1990-05-15",
  })

  const [isSaving, setIsSaving] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const saveProfile = async () => {
    // 🔁 Sau này thay bằng API thật
    await new Promise((resolve) => setTimeout(resolve, 500))
  }

  const handleSave = async () => {
    setIsSaving(true)
    await saveProfile()
    setIsSaving(false)

    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Profile Information
          </h2>
          <p className="mt-2 text-gray-600">
            Update your personal details
          </p>
        </div>

        {showSuccess && (
          <div className="rounded-lg bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
            ✓ Changes saved successfully
          </div>
        )}
      </div>

      {/* Form */}
      <div className="space-y-6">
        {/* Full Name */}
        <FormInput
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
        />

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            value={formData.email}
            disabled
            className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-600"
          />
          <p className="mt-1 text-xs text-gray-500">
            Email cannot be changed
          </p>
        </div>

        {/* Phone */}
        <FormInput
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <textarea
            name="address"
            rows={3}
            value={formData.address}
            onChange={handleChange}
            className="mt-2 w-full rounded-xl border border-rose-200 bg-white px-4 py-3 focus:ring-2 focus:ring-rose-200"
          />
        </div>

        {/* Date of Birth */}
        <FormInput
          label="Date of Birth"
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        disabled={isSaving}
        className="mt-8 flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-400 to-amber-400 px-8 py-3 font-semibold text-white hover:shadow-lg disabled:opacity-70"
      >
        <Save className="h-5 w-5" />
        {isSaving ? "Saving..." : "Save Changes"}
      </button>
    </div>
  )
}

/* ===== Reusable Input ===== */
function FormInput({
  label,
  ...props
}: {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-rose-200 bg-white px-4 py-3 focus:ring-2 focus:ring-rose-200"
      />
    </div>
  )
}
