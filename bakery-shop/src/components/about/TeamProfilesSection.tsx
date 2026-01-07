import { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  funFact: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Head Baker & Founder",
    image: "/images/about_chef1.png",
    quote: "Every loaf is a love letter to our community.",
    funFact: "Can identify 47 types of flour by touch",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Pastry Chef",
    image: "/images/about_chef2.png",
    quote: "Art you can taste — that's my philosophy.",
    funFact: "3× international pastry awards",
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Operations Manager",
    image: "/images/about_chef3.png",
    quote: "We measure success in smiles per day.",
    funFact: "Remembers every regular’s order",
  },
];

export default function TeamProfilesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      aria-label="Team Profiles"
      className="pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => {
            const isHovered = hoveredId === member.id;

            return (
              <article
                key={member.id}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="
                  group rounded-2xl overflow-hidden
                  bg-gradient-to-b from-amber-50 to-white
                  shadow-lg hover:-translate-y-1 hover:shadow-xl
                  transition
                "
              >
                {/* Image */}
                <div className="relative h-80">
                  <img
                    src={member.image}
                    alt={`${member.name} – ${member.role}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div
                    className={`
                      absolute inset-0 flex items-end
                      bg-gradient-to-t from-black/90 via-black/50 to-transparent
                      transition-opacity duration-300
                      ${isHovered ? "opacity-100" : "opacity-0"}
                    `}
                  >
                    <div className="p-6 space-y-3 text-white">
                      <p className="italic text-sm">
                        “{member.quote}”
                      </p>
                      <p className="text-xs text-gray-200">
                        {member.funFact}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#5c3a2e]">
                    {member.name}
                  </h3>

                  <p className="text-sm font-medium text-[#cc5970] mb-4">
                    {member.role}
                  </p>

                  <span className="text-xs text-gray-500 flex items-center gap-2">
                    Hover to learn more →
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
