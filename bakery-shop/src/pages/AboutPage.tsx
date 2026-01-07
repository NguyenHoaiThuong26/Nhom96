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
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/images/about-background.png')] bg-no-repeat bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown size={32} className="text-white opacity-80" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 flex justify-end">
            <div className="max-w-xl w-full">
              <article className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12">
                <header className="text-center mb-8">
                  <h1 className="text-5xl font-bold text-[#5c3a2e]">
                    Our Story is
                  </h1>
                  <span className="block mt-2 text-5xl font-pacifico text-[#cc5970]">
                    Baked Daily
                  </span>
                </header>

                <div className="text-center text-lg text-[#374050] space-y-1 mb-10">
                  <p>From humble beginnings to becoming your</p>
                  <p>neighborhood&apos;s favorite bakery, every loaf tells a</p>
                  <p>story of passion, tradition, and community.</p>
                </div>

                <div className="flex justify-center">
                  <button className="px-8 py-4 rounded-full bg-[#cc5970] text-white text-lg font-semibold shadow-lg hover:scale-105 transition-transform">
                    Meet Our Bakers
                  </button>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE SECTION (PHẦN MỚI) ===== */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col">
            <TimelineHeaderSection />
            <TimelineCardsSection />
          </div>
        </div>
      </section>

       {/* ===== TEAM SECTION (PHẦN MỚI) ===== */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <TeamIntroSection />
          <TeamProfilesSection />
        </div>
      </section>

      {/* ===== CORE VALUES SECTION (PHẦN MỚI) ===== */}
      <CoreValuesSection />

      <Footer />
    </>
  );
}
