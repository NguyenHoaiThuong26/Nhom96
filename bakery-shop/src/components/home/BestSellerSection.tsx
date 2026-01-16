interface Product {
  id: number
  name: string
  price: string
  image: string
}

export default function BestSellerSection() {
  const products: Product[] = [
    {
      id: 1,
      name: "Bánh kem trái cây",
      price: "180.000đ",
      image: "/images/banhkemtraicay.png",
    },
    {
      id: 2,
      name: "Bánh kem mini",
      price: "100.000đ",
      image: "/images/banhkemmini.png",
    },
    {
      id: 3,
      name: "Bánh kem valentine",
      price: "250.000đ",
      image: "/images/banhkemvalentine.jpg",
    },
    {
      id: 4,
      name: "Bánh kem cung hoàng đạo",
      price: "170.000đ",
      image: "/images/banhkemcunghoangdao.jpg",
    },
  ]

  const handleAddToCart = (product: Product) => {
    console.log("Đã thêm vào giỏ hàng:", product.name)
  }

  return (
    <section className="bg-[#fff6eb] py-24">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Tiêu đề */}
        <header className="mb-16 text-center">
          <h2 className="text-6xl font-bold text-[#5c3a2e]">
            Sản phẩm bán chạy
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xl text-[#5c3a2eb2]">
            Những sản phẩm được yêu thích nhất, được nướng mới mỗi ngày
            với nguyên liệu cao cấp
          </p>
        </header>

        {/* Danh sách sản phẩm */}
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="flex w-80 flex-col rounded-3xl bg-white p-6 shadow-md"
            >
              {/* Hình ảnh */}
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover"
                />
              </div>

              {/* Thông tin */}
              <h3 className="mb-2 text-xl font-bold text-[#5c3a2e]">
                {product.name}
              </h3>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-2xl font-bold text-[#cc5970]">
                  {product.price}
                </span>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="rounded-2xl bg-[#f9e2a1] px-6 py-3 font-semibold text-[#5c3a2e] transition hover:bg-[#f7d98a]"
                >
                  Thêm vào giỏ
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
