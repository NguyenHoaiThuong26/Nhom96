import { useState } from "react";
import {
  Cake,
  Award,
  TrendingUp,
  Store,
  Globe,
  Leaf,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const timelineData = [
  {
    icon: Cake,
    year: "2021",
    title: "Khởi Nguồn Đam Mê",
    description: ["Ra đời từ tình yêu với nghệ thuật", "làm bánh kem thủ công"],
  },
  {
    icon: Award,
    year: "2022",
    title: "Vị Ngon Được Công Nhận",
    description: ["Top 10 tiệm bánh ngọt được", "yêu thích nhất khu vực"],
  },
  {
    icon: TrendingUp, 
    year: "2023",
    title: "Vạn Lời Yêu Thương",
    description: ["Đồng hành cùng hơn 100.000", "bữa tiệc sinh nhật & kỷ niệm"],
  },
  {
    icon: Store,
    year: "2023",
    title: "Mở Rộng Không Gian",
    description: ["Khai trương chi nhánh Flagship", "với không gian trải nghiệm cao cấp"],
  },
  {
    icon: Globe,
    year: "2024",
    title: "Kết Nối Ngọt Ngào",
    description: ["Hệ thống đặt bánh cá nhân hóa", "trực tuyến chính thức ra mắt"],
  },
  {
    icon: Globe,
    year: "2025",
    title: "Vươn Tầm Thương Hiệu",
    description: ["Sáng tạo hơn 50 dòng bánh độc quyền", "phục vụ tại các thành phố lớn"],
  },
  {
    icon: Leaf,
    year: "2026",
    title: "Bánh Kem 'Xanh'",
    description: ["Sử dụng 100% nguyên liệu tự nhiên", "và bao bì thân thiện môi trường"],
  },
];


export default function TimelineCardsSection() {
  const CARD_WIDTH = 320;
  const VISIBLE_CARDS = 3;

  const [scrollX, setScrollX] = useState(0);

  const maxScroll =
    (timelineData.length - VISIBLE_CARDS) * CARD_WIDTH;

  const scrollPrev = () =>
    setScrollX((prev) => Math.max(0, prev - CARD_WIDTH));

  const scrollNext = () =>
    setScrollX((prev) => Math.min(maxScroll, prev + CARD_WIDTH));

  return (
    <section
      className="relative mt-12"
      aria-label="Company Timeline"
    >
      {/* Cards */}
      <div className="overflow-hidden min-h-[340px]">

        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${scrollX}px)` }}
        >
          {timelineData.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={index}
                className="w-80 shrink-0 px-4"
              >
                <div
                  className="
                    h-72
                    bg-white/90 backdrop-blur
                    rounded-2xl
                    p-8
                    flex flex-col items-center text-center
                    transition-all duration-300
                    shadow-[0_20px_30px_-10px_rgba(0,0,0,0.15)]
                    hover:shadow-[0_30px_40px_-12px_rgba(0,0,0,0.2)]
                    hover:-translate-y-1
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      w-16 h-16
                      rounded-full
                      bg-[#cc5970]/10
                      flex items-center justify-center
                      mb-4
                      shadow-[0_0_0_6px_rgba(204,89,112,0.08)]
                    "
                  >
                    <Icon size={32} className="text-[#cc5970]" />
                  </div>

                  {/* Year */}
                  <time className="font-pacifico text-3xl text-[#cc5970] mb-2">
                    {item.year}
                  </time>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#5c3a2e] mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <div className="text-[#4a5462] text-base leading-relaxed space-y-1">
                    {item.description.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={scrollPrev}
        disabled={scrollX === 0}
        aria-label="Previous"
        className="
          absolute left-0 top-1/2 -translate-y-1/2
          w-12 h-12
          flex items-center justify-center
          bg-white rounded-full
          shadow-[0_10px_20px_rgba(0,0,0,0.15)]
          disabled:opacity-30 disabled:cursor-not-allowed
          hover:scale-105 transition
        "
      >
        <ChevronLeft />
      </button>

      <button
        onClick={scrollNext}
        disabled={scrollX >= maxScroll}
        aria-label="Next"
        className="
          absolute right-0 top-1/2 -translate-y-1/2
          w-12 h-12
          flex items-center justify-center
          bg-white rounded-full
          shadow-[0_10px_20px_rgba(0,0,0,0.15)]
          disabled:opacity-30 disabled:cursor-not-allowed
          hover:scale-105 transition
        "
      >
        <ChevronRight />
      </button>
    </section>
  );
}
