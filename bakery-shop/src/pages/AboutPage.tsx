export default function AboutHeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('/DIV-4.png')] bg-no-repeat bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Scroll indicator */}
      <img
        src="/images/about-background.png"
        alt="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-8 h-8 z-10"
      />

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
  );
}
