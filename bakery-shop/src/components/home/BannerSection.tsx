

export default function BannerSection() {

  const HEADING = ["Freshly baked,", "daily."]
  const DESCRIPTION = [
    "From our signature sourdough loaves to seasonal berry",
    "tarts, every creation is handcrafted with love and the",
    "finest ingredients.",
  ]

  const handleOrderClick = () => {
    console.log("Order Now clicked")
  }

  const handleMenuClick = () => {
    console.log("View Menu clicked")
  }

  return (
    <section className="relative flex h-[1024px] w-full items-center justify-center">
      {/* Background */}
      <img
        src="/images/home-background.png"
        alt="Bakery background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-[1440px] flex-col items-center px-8">
        {/* Heading */}
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

        {/* Description */}
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

        {/* Actions */}
        <div className="flex items-center gap-6">
          <PrimaryButton onClick={handleOrderClick}>
            Order Now
          </PrimaryButton>

          <OutlineButton onClick={handleMenuClick}>
            View Menu
          </OutlineButton>
        </div>
      </div>
    </section>
  )
}

/* ================= Buttons ================= */

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
