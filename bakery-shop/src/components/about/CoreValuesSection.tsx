interface CoreValue {
  id: number;
  image: string;
  title: string;
  description: string[];
}

interface Statistic {
  id: number;
  value: string;
  label: string;
}

export default function CoreValuesSection() {
  const coreValues: CoreValue[] = [
    {
      id: 1,
      image: "/images/about_craft.png",
      title: "Craft",
      description: [
        "Every product is handmade with traditional",
        "techniques passed down through",
        "generations, ensuring unmatched quality and",
        "authentic flavors.",
      ],
    },
    {
      id: 2,
      image: "/images/about_community.png",
      title: "Community",
      description: [
        "We're more than a bakery - we're a gathering",
        "place where neighbors become friends and",
        "every customer feels like family.",
      ],
    },
    {
      id: 3,
      image: "/images/about_sustain.png",
      title: "Sustainability",
      description: [
        "From locally sourced ingredients to eco-",
        "friendly packaging, we're committed to",
        "protecting our planet for future generations.",
      ],
    },
  ];

  const statistics: Statistic[] = [
    { id: 1, value: "14+", label: "Years of Experience" },
    { id: 2, value: "50K+", label: "Happy Customers" },
    { id: 3, value: "2M+", label: "Products Baked" },
    { id: 4, value: "12", label: "Locations Nationwide" },
  ];

  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#5c3a2e] mb-4">
            Our Core Values
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-[#4a5462] leading-relaxed">
            Three pillars that guide everything we do, from the ingredients we
            choose to the relationships we build.
          </p>
        </header>

        {/* Core values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value) => (
            <article
              key={value.id}
              className="
                bg-white/90 backdrop-blur
                rounded-3xl overflow-hidden
                shadow-[0_20px_30px_-10px_rgba(0,0,0,0.15)]
                hover:-translate-y-1 hover:shadow-[0_30px_40px_-12px_rgba(0,0,0,0.2)]
                transition
              "
            >
              {/* Image */}
              <img
                src={value.image}
                alt={value.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-[#5c3a2e] mb-4">
                  {value.title}
                </h3>

                <div className="space-y-1 text-[#4a5462] text-base leading-relaxed mb-6">
                  {value.description.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>

                {/* Divider */}
                <div className="flex justify-center">
                  <span className="w-12 h-1 rounded-full bg-gradient-to-r from-[#cc5970] to-[#f4a6ba]" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statistics.map((stat) => (
            <div key={stat.id}>
              <div className="font-pacifico text-3xl text-[#cc5970] mb-2">
                {stat.value}
              </div>
              <div className="text-base font-medium text-[#4a5462]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
