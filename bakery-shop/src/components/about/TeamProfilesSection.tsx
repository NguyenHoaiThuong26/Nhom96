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
    name: "Nguyễn Hoài Thương",
    role: "Nghệ nhân tạo hình & Người sáng lập",
    image: "/images/about_chef1.png",
    quote: "Mỗi chiếc bánh kem là một tác phẩm nghệ thuật chứa đựng những lời chúc hạnh phúc nhất.",
    funFact: "Có thể vẽ những họa tiết phức tạp trên bánh chỉ trong vòng 5 phút",
  },
  {
    id: 2,
    name: "Nguyễn Hoàng Phúc",
    role: "Bếp trưởng Pastry",
    image: "/images/about_chef2.png",
    quote: "Sự hòa quyện giữa hương vị tinh tế và thẩm mỹ hiện đại là triết lý sáng tạo của tôi.",
    funFact: "Từng tu nghiệp tại Pháp và sở hữu bí quyết cốt bánh mềm mịn độc bản",
  },
  {
    id: 3,
    name: "Nguyễn Đức Phúc",
    role: "Giám đốc trải nghiệm khách hàng",
    image: "/images/about_chef3.png",
    quote: "Chúng tôi không chỉ bán bánh, chúng tôi cùng bạn tạo nên những kỷ niệm vô giá.",
    funFact: "Có khả năng tư vấn đúng mẫu bánh mơ ước chỉ sau 3 câu hỏi",
  },
];

export default function TeamProfilesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      aria-label="Hồ sơ đội ngũ"
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
                {/* Hình ảnh */}
                <div className="relative h-80">
                  <img
                    src={member.image}
                    alt={`${member.name} – ${member.role}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Lớp phủ */}
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

                {/* Thông tin */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#5c3a2e]">
                    {member.name}
                  </h3>

                  <p className="text-sm font-medium text-[#cc5970] mb-4">
                    {member.role}
                  </p>

                  <span className="text-xs text-gray-500 flex items-center gap-2">
                    Di chuột để tìm hiểu thêm →
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
