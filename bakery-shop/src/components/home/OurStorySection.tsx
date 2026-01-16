export default function OurStorySection() {
  const stats = [
    { value: "500+", label: "Khách hàng hài lòng" },
    { value: "50+", label: "Sản phẩm mỗi ngày" },
  ]

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          {/* Hình ảnh */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src="/images/home-make2.jpg"
                alt="Thợ làm bánh thủ công đang nhào bột trong tiệm bánh"
                className="h-[500px] w-full object-cover"
              />
            </div>

            {/* Hình tròn trang trí */}
            <div
              className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#f9e2a1] opacity-80"
              aria-hidden="true"
            />
          </div>

          {/* Nội dung */}
          <div>
            <h2 className="text-6xl font-bold text-[#5c3a2e]">
              Hành trình ngọt ngào
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-[#5c3a2ecc]">
              Bắt đầu từ niềm đam mê nhỏ với những chiếc bánh kem thủ công vào năm 2021, 
              96 Bakery đã lớn dần từ tình yêu của khách hàng trong từng khu phố. 
              Từ việc tìm kiếm hương vị cốt bánh hoàn hảo, chúng tôi đã xây dựng nên 
              một không gian nghệ thuật bánh ngọt trọn vẹn.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-[#5c3a2eb2]">
              Chúng tôi tin rằng mỗi chiếc bánh kem không chỉ là một món tráng miệng, 
              mà là một tác phẩm nghệ thuật đánh dấu những kỷ niệm vô giá. Với nguyên liệu 
              tự nhiên và sự tỉ mỉ trong từng nét vẽ, mỗi sản phẩm ra lò là một lời 
              cam kết về chất lượng và sự tận tâm của chúng tôi.
            </p>

            {/* Thống kê */}
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

            {/* Kêu gọi hành động */}
            <button
              className="mt-12 rounded-3xl bg-[#5c3a2e] px-10 py-4 text-lg font-semibold text-white transition hover:opacity-90"
              aria-label="Đọc toàn bộ câu chuyện của chúng tôi"
            >
              Câu chuyện đầy đủ
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
