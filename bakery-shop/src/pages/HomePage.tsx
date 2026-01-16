import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

import BannerSection from "../components/home/BannerSection"
import BestSellerSection from "../components/home/BestSellerSection"
import OurStorySection from "../components/home/OurStorySection"

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="flex flex-col">
        <BannerSection />
        <BestSellerSection />
        <OurStorySection />
      </main>

      <Footer />
    </>
  )
}
