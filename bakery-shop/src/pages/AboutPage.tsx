import { ChevronDown } from "lucide-react";
import TimelineHeaderSection from "../components/about/TimelineHeaderSection";
import TimelineCardsSection from "../components/about/TimelineCardsSection";
import CoreValuesSection from "../components/about/CoreValuesSection";
import TeamIntroSection from "../components/about/TeamIntroSection";
import TeamProfilesSection from "../components/about/TeamProfilesSection";
import Header from "./../components/layout/Header";
import Footer from "./../components/layout/Footer";

export default function AboutHeroSection() {
  return (
    <>
      <Header />
      {/* ===== PHẦN HERO ===== */}
      <section className="relative h-screen overflow-hidden pt-20">
        {/* Hình nền */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/images/about-background.png')] bg-no-repeat bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        {/* Chỉ báo cuộn */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown size={32} className="text-white opacity-80" />
        </div>

        {/* Nội dung */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 flex justify-end">
            <div className="max-w-xl w-full">
              <article className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12">
                <header className="text-left mb-8">
                  <h1 className="text-5xl font-bold text-[#5c3a2e]">
                    Hành trình lan tỏa
                  </h1>
                  <span className="block mt-2 text-5xl font-pacifico text-[#cc5970]">
                    Vị ngọt của hạnh phúc
                  </span>
                </header>

                <div className="text-left text-xl text-[#374050] leading-relaxed space-y-2 mb-10">
                  <p>Từ những mẻ bánh nướng thủ công đầu tiên đến khi trở thành người bạn đồng hành trong mọi bữa tiệc, mỗi chiếc bánh kem đều mang theo câu chuyện về sự tỉ mỉ, tình yêu và những kỷ niệm vô giá.</p>
                </div>

                <div className="flex justify-start">
                  <button className="px-8 py-4 rounded-full bg-[#cc5970] text-white text-lg font-semibold shadow-lg hover:scale-105 transition-transform">
                    Gặp gỡ đội ngũ thợ làm bánh
                  </button>
                </div>
              </article>

            </div>
          </div>
        </div>
      </section>

      {/* ===== PHẦN DÒNG THỜI GIAN ===== */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col">
            <TimelineHeaderSection />
            <TimelineCardsSection />
          </div>
        </div>
      </section>

      {/* ===== PHẦN ĐỘI NGŨ ===== */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <TeamIntroSection />
          <TeamProfilesSection />
        </div>
      </section>

      {/* ===== PHẦN GIÁ TRỊ CỐT LÕI ===== */}
      <CoreValuesSection />

      <Footer />
    </>
  );
}
