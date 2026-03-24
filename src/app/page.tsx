'use client'

import HeroBanner from './_components/hero-banner'
import FeaturesBar from './_components/features-bar'
import ShopByCategory from './_components/shop-by-category'
import FeaturedProducts from './_components/featured-products'
import WhyChooseUs from './_components/why-choose-us'
import StayUpdated from './_components/stay-updated'

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Features Bar */}
      <FeaturesBar />

      {/* Shop by Category */}
      <ShopByCategory />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Stay Updated */}
      <StayUpdated />
    </div>
  )
}
