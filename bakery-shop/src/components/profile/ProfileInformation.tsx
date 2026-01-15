import { Save } from "lucide-react"
import AuthService from "../../service/AuthService"
import { useEffect, useState } from "react"

interface ProfileFormData {
  fullName: string
  email: string
  phone: string
  address: string
  dateOfBirth: string
}

const EMPTY_PROFILE: ProfileFormData = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  dateOfBirth: "",
}

export default function ProfileInformation() {
  const [formData, setFormData] = useState<ProfileFormData>(EMPTY_PROFILE)
  const [isSaving, setIsSaving] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  /* ✅ Load user nếu đã đăng nhập */
  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if (user) {
      setFormData({
        fullName: user.fullName ?? "",
        email: user.email ?? "",
        phone: user.phone ?? "",
        address: user.address ?? "",
        dateOfBirth: user.dateOfBirth ?? "",
      })
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = async () => {
    setIsSaving(true)

    // 🔁 Sau này gọi PUT /users/:id
    await new Promise((resolve) => setTimeout(resolve, 500))

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
        <FormInput
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

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
        </div>

        <FormInput
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

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

        <FormInput
          label="Date of Birth"
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
      </div>

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
