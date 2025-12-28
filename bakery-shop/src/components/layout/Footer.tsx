import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    lines: ["123 Baker Street", "Downtown, NY 10012"],
  },
  {
    icon: Phone,
    lines: ["(555) 123-BAKE"],
  },
  {
    icon: Mail,
    lines: ["hello@crumbcraft.com"],
  },
];

const storeHours = [
  { day: "Monday - Friday", hours: "7AM - 7PM" },
  { day: "Saturday", hours: "8AM - 8PM" },
  { day: "Sunday", hours: "8AM - 6PM" },
];

const quickLinks = [
  "Our Menu",
  "Catering",
  "Locations",
  "Gift Cards",
  "Careers",
];

export default function Footer() {
  return (
    <footer className="bg-[#5c3a2e] text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-[#f9e2a1]">
              CrumbCraft
            </h2>
            <p className="text-sm leading-6">
              Artisan bakery crafting fresh breads, pastries, and treats
              daily with love and premium ingredients.
            </p>

            <div className="flex gap-4 pt-2">
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Twitter} />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-[#f9e2a1] mb-4">
              Contact Us
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

          {/* Store Hours */}
          <div>
            <h3 className="text-xl font-semibold text-[#f9e2a1] mb-4">
              Store Hours
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

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#f9e2a1] mb-4">
              Quick Links
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

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm gap-4">
          <p>© 2024 CrumbCraft Bakery. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-[#f9e2a1] transition">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#f9e2a1] transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* icon social */
function SocialIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
      <Icon className="w-5 h-5 text-[#f9e2a1]" />
    </button>
  );
}
