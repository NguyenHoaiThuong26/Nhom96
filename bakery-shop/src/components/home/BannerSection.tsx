export default function BannerSection() {

  const HEADING = ["Gói trọn ngọt ngào,", "trong từng lớp bánh."]
  const DESCRIPTION = [
    "Từ những chiếc bánh kem bento xinh xắn đến",
    "những tuyệt tác bánh kem đa tầng lộng lẫy, mỗi sản phẩm",
    "đều là tâm huyết giúp bạn lưu giữ mọi khoảnh khắc đáng nhớ."
  ]

  const handleOrderClick = () => {
    console.log("Đã nhấn Đặt hàng ngay")
  }

  const handleMenuClick = () => {
    console.log("Đã nhấn Xem thực đơn")
  }

  return (
    <section className="relative flex h-[1024px] w-full items-center justify-center">
      {/* Hình nền */}
      <img
        src="/images/home-background1.jfif"
        alt="Hình nền tiệm bánh"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Lớp phủ */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Nội dung */}
      <div className="relative z-10 flex w-full max-w-[1440px] flex-col items-center px-8">
        {/* Tiêu đề */}
        <header className="mb-6 flex flex-wrap justify-center">
          {HEADING.map((text) => (
            <h1
              key={text}
              className="text-center text-8xl font-bold leading-[96px] text-white"
            >
              {text}
            </h1>
          ))}
        </header>

        {/* Mô tả */}
        <div className="mb-12 max-w-2xl text-center">
          {DESCRIPTION.map((line, index) => (
            <p
              key={index}
              className="text-2xl font-light leading-8 text-white"
            >
              {line}
            </p>
          ))}
        </div>

        {/* Hành động */}
        <div className="flex items-center gap-6">
          <PrimaryButton onClick={handleOrderClick}>
            Đặt hàng ngay
          </PrimaryButton>

          <OutlineButton onClick={handleMenuClick}>
            Xem thực đơn
          </OutlineButton>
        </div>
      </div>
    </section>
  )
}

/* ================= Các nút ================= */

function PrimaryButton({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="
        h-[60px] rounded-3xl bg-[#f9e2a1] px-12 py-4
        font-semibold text-[#5c3a2e]
        transition hover:opacity-90
      "
    >
      {children}
    </button>
  )
}

function OutlineButton({
  children,
  onClick,
}: {
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="
        h-16 rounded-3xl border-2 border-[#fff6eb]
        px-[50px] py-[18px]
        font-semibold text-[#fff6eb]
        transition hover:bg-white/10
      "
    >
      {children}
    </button>
  )
}
