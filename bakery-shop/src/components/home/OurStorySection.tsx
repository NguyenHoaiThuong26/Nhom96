
export default function OurStorySection() {
    const stats = [
    { value: "500+", label: "Happy Customers" },
    { value: "50+", label: "Daily Varieties" },
    ]

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/home-our-story.png"
                alt="Artisan baker kneading dough in bakery"
                className="h-[500px] w-full object-cover"
              />
            </div>

            {/* Decorative circle */}
            <div
              className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#f9e2a1] opacity-80"
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-6xl font-bold text-[#5c3a2e]">
              Our Story
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-[#5c3a2ecc]">
              Started as a weekend pop-up in 2019, CrumbCraft has grown
              to become your neighborhood&apos;s favorite bakehouse.
              What began with a passion for traditional sourdough has
              blossomed into a full artisan bakery.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-[#5c3a2eb2]">
              We believe in the magic of simple, quality ingredients
              transformed through time-honored techniques. Every loaf
              tells a story, every pastry carries our commitment to
              excellence.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="w-40 text-center">
                  <div className="text-4xl font-bold text-[#cc5970]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-base text-[#5c3a2eb2]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              className="mt-12 rounded-3xl bg-[#5c3a2e] px-10 py-4 text-lg font-semibold text-white transition hover:opacity-90"
              aria-label="Read our full story"
            >
              Our Full Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
