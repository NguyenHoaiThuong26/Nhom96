import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    lines: ["Đại học Nông Lâm Tp Hồ Chí Minh"],
  },
  {
    icon: Phone,
    lines: ["0938998972"],
  },
  {
    icon: Mail,
    lines: ["nhom96@gmail.com"],
  },
];

const storeHours = [
  { day: "Thứ Hai - Thứ Sáu", hours: "7AM - 7PM" },
  { day: "Thứ Bảy", hours: "8AM - 8PM" },
  { day: "Chủ Nhật", hours: "8AM - 6PM" },
];

const quickLinks = [
  "Trang chủ",
  "Cửa hàng",
  "Liên hệ",
];

export default function Footer() {
  return (
    <footer className="bg-[#5c3a2e] text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Phần trên */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Thương hiệu */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#f9e2a1]">
              69 Bakery
            </h2>
            <p className="text-sm leading-6">
              "Trao gửi yêu thương qua từng lớp bánh kem mềm mịn, được làm thủ công mỗi ngày từ nguyên liệu cao cấp, mang đến hương vị ngọt thanh và vẻ đẹp hoàn mỹ cho bữa tiệc của bạn."
            </p>

            <div className="flex gap-4 pt-2">
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Twitter} />
            </div>
          </div>

          {/* Liên hệ */}
          <div>
            <h3 className="text-xl font-semibold text-[#f9e2a1] mb-4">
              Liên hệ
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <item.icon className="w-5 h-5 text-[#f9e2a1]" />
                  <div className="text-sm leading-6">
                    {item.lines.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Giờ mở cửa */}
          <div>
            <h3 className="text-xl font-semibold text-[#f9e2a1] mb-4">
              Giờ mở cửa
            </h3>
            <ul className="space-y-2 text-sm">
              {storeHours.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <h3 className="text-xl font-semibold text-[#f9e2a1] mb-4">
              Liên kết nhanh
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-[#f9e2a1] transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Phần dưới */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm gap-4">
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-[#f9e2a1] transition">
              Chính sách bảo mật
            </a>
            <a href="#terms" className="hover:text-[#f9e2a1] transition">
              Điều khoản dịch vụ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Icon mạng xã hội */
function SocialIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
      <Icon className="w-5 h-5 text-[#f9e2a1]" />
    </button>
  );
}
