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
      title: "Nghệ Thuật Tạo Hình",
      description: [
        "Mỗi chiếc bánh là một tác phẩm độc bản,",
        "được tạo hình tỉ mỉ bởi đôi bàn tay khéo léo,",
        "đảm bảo sự giao thoa hoàn hảo giữa",
        "thẩm mỹ tinh tế và hương vị thượng hạng.",
      ],
    },
    {
      id: 2,
      image: "/images/about_community.png",
      title: "Gắn Kết Yêu Thương",
      description: [
        "Chúng tôi vinh dự được là nhịp cầu kết nối,",
        "cùng bạn sẻ chia những giây phút hạnh phúc",
        "và biến mọi dịp kỷ niệm của khách hàng",
        "trở nên trọn vẹn và đáng nhớ nhất.",
      ],
    },
    {
      id: 3,
      image: "/images/about_sustain.png",
      title: "Trân Quý Thiên Nhiên",
      description: [
        "Ưu tiên sử dụng nguyên liệu tươi sạch,",
        "ít ngọt và bao bì thân thiện môi trường,",
        "chúng tôi cam kết mang đến những giá trị",
        "tốt lành nhất cho sức khỏe và cộng đồng.",
      ],
    },
  ];

  const statistics: Statistic[] = [
    { id: 1, value: "10+", label: "Năm kinh nghiệm" },
    { id: 2, value: "50K+", label: "Khách hàng hài lòng" },
    { id: 3, value: "2M+", label: "Sản phẩm đã làm ra" },
    { id: 4, value: "12", label: "Chi nhánh toàn quốc" },
  ];

  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Tiêu đề */}
        <header className="text-center mb-16">
          {/* Tiêu đề */}
          <h2 className="text-4xl font-bold text-[#5c3a2e] mb-4">
            Triết lý trong từng lớp bánh
          </h2>

          {/* Mô tả */}
          <p className="max-w-2xl mx-auto text-lg text-[#4a5462] leading-relaxed">
            Tại 96 Bakery, ba giá trị cốt lõi luôn là kim chỉ nam định hướng cho mọi sáng tạo, 
            từ việc chọn lọc nguyên liệu tự nhiên tinh túy đến cách chúng tôi cùng bạn 
            viết nên những câu chuyện hạnh phúc.
          </p>
        </header>

        {/* Giá trị cốt lõi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value) => (
            <article key={value.id}>
              {/* Nội dung giữ nguyên cấu trúc UI */}
            </article>
          ))}
        </div>

        {/* Thống kê */}
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
