interface Product {
  id: number
  name: string
  price: string
  image: string
  badge?: string
}

export default function BestSellerSection() {
  const products: Product[] = [
    {
      id: 1,
      name: "Sourdough Artisan Loaf",
      price: "$8.50",
      image: "/images/home-cake.png",
      badge: "Bakes today",
    },
    {
      id: 2,
      name: "Mixed Berry Tart",
      price: "$12.99",
      image: "/images/home-cake.png",
      badge: "Bakes today",
    },
    {
      id: 3,
      name: "Chocolate Croissant",
      price: "$4.25",
      image: "/images/home-cake.png",
      badge: "Bakes today",
    },
    {
      id: 4,
      name: "Cinnamon Sugar Donuts",
      price: "$2.95",
      image: "/images/home-cake.png",
      badge: "Bakes today",
    },
  ]

  const handleAddToCart = (product: Product) => {
    console.log("Added to cart:", product.name)
  }

  return (
    <section className="bg-[#fff6eb] py-24">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Header */}
        <header className="mb-16 text-center">
          <h2 className="text-6xl font-bold text-[#5c3a2e]">
            Best Sellers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-xl text-[#5c3a2eb2]">
            Our most loved creations, baked fresh daily with premium
            ingredients
          </p>
        </header>

        {/* Products */}
        <div className="flex flex-wrap justify-center gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              className="flex w-80 flex-col rounded-3xl bg-white p-6 shadow-md"
            >
              {/* Image */}
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover"
                />

                {product.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-[#cc5970] px-3 py-1 text-sm font-medium text-white">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Info */}
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
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
