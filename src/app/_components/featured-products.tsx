'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Heart, ShoppingCart, Zap, TrendingUp, Eye, CheckCircle2, X, Plus, Minus } from 'lucide-react'
import { Button, Card } from '@heroui/react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  originalPrice: number
  rating: number
  reviews: number
  category: string
  inStock: boolean
  discount: number
  badge: string
  image?: string
}

export default function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [wishlist, setWishlist] = useState<Set<number>>(new Set())

  const openQuickView = (product: Product) => {
    setSelectedProduct(product)
    setQuantity(1)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  const toggleWishlist = (productId: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setWishlist(prev => {
      const newSet = new Set(prev)
      if (newSet.has(productId)) {
        newSet.delete(productId)
      } else {
        newSet.add(productId)
      }
      return newSet
    })
  }

  const isInWishlist = (productId: number) => wishlist.has(productId)

  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "KENT Supreme Alkaline RO Water Purifier",
      price: 18999,
      originalPrice: 24999,
      rating: 4.5,
      reviews: 2341,
      category: "Water Purifier",
      inStock: true,
      discount: 24,
      badge: "Best Seller",
      image: "/images/products/water-purifier.jpg"
    },
    {
      id: 2,
      name: "Faber 60cm Auto Clean Chimney Hood",
      price: 15999,
      originalPrice: 19999,
      rating: 4.7,
      reviews: 1856,
      category: "Kitchen Chimney",
      inStock: true,
      discount: 20,
      badge: "Popular",
      image: "/images/products/chimney.jpg"
    },
    {
      id: 3,
      name: "ILIV RO+UV+UF Alkaline Purifier",
      price: 12999,
      originalPrice: 16999,
      rating: 4.6,
      reviews: 987,
      category: "Water Purifier",
      inStock: true,
      discount: 24,
      badge: "Health Choice",
      image: "/images/products/water-purifier.jpg"
    },
    {
      id: 4,
      name: "Crompton QuietPro Chimney System",
      price: 21999,
      originalPrice: 27999,
      rating: 4.8,
      reviews: 654,
      category: "Kitchen Chimney",
      inStock: true,
      discount: 21,
      badge: "Premium",
      image: "/images/products/chimney.jpg"
    },
    {
      id: 5,
      name: "Whirlpool Triple Baffle Chimney",
      price: 17999,
      originalPrice: 22999,
      rating: 4.4,
      reviews: 432,
      category: "Kitchen Chimney",
      inStock: true,
      discount: 22,
      badge: "Value Pick",
      image: "/images/products/chimney.jpg"
    },
    {
      id: 6,
      name: "KENT RO+UV+UF Water Purifier Lite",
      price: 9999,
      originalPrice: 13999,
      rating: 4.3,
      reviews: 3210,
      category: "Water Purifier",
      inStock: true,
      discount: 29,
      badge: "Budget Pick",
      image: "/images/products/water-purifier.jpg"
    },
    {
      id: 7,
      name: "Solar Panel System 1kW Complete Kit",
      price: 45000,
      originalPrice: 65000,
      rating: 4.9,
      reviews: 189,
      category: "Solar Equipment",
      inStock: true,
      discount: 31,
      badge: "Eco Choice",
      image: "/images/products/solar-panel.jpg"
    },
    {
      id: 8,
      name: "Smart Home Automation Kit Pro",
      price: 8999,
      originalPrice: 11999,
      rating: 4.2,
      reviews: 567,
      category: "Smart Gadgets",
      inStock: false,
      discount: 25,
      badge: "New Launch",
      image: "/images/products/smart-gadget.jpg"
    }
  ]

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-3.5 w-3.5",
              i < Math.floor(rating) 
                ? "fill-[var(--accent)] text-[var(--accent)]" 
                : "text-[var(--muted)]"
            )}
          />
        ))}
        <span className="text-xs font-semibold text-[var(--foreground)] ml-1.5">
          {rating}
        </span>
      </div>
    )
  }

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Best Seller':
        return 'bg-[var(--primary)] text-[var(--primary-foreground)]'
      case 'Popular':
        return 'bg-[var(--accent)] text-[var(--accent-foreground)]'
      case 'New Launch':
        return 'bg-green-600 text-white'
      case 'Premium':
        return 'bg-[var(--muted)] text-[var(--accent)] border border-[var(--accent)]'
      case 'Eco Choice':
        return 'bg-[var(--secondary)] text-[var(--secondary-foreground)]'
      default:
        return 'bg-[var(--secondary)] text-[var(--secondary-foreground)]'
    }
  }

  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Modern Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-10 bg-[var(--accent)] rounded-full"></div>
              <div>
                <span className="text-xs font-semibold text-[var(--accent)] tracking-wider uppercase">
                  Top Rated Products
                </span>
                <h2 className="text-3xl lg:text-4xl font-display text-[var(--foreground)] tracking-tight">
                  Featured Products
                </h2>
              </div>
            </div>
            <p className="text-[var(--muted-foreground)] max-w-xl text-sm lg:text-base leading-relaxed ml-5">
              Discover our premium selection of home appliances with exceptional quality, 
              unbeatable prices, and exclusive deals
            </p>
          </div>
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {['All Products', 'Water Purifier', 'Kitchen', 'Solar'].map((cat, idx) => (
              <button
                key={cat}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  idx === 0 
                    ? "bg-[var(--primary)] text-[var(--primary-foreground)]" 
                    : "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid - Premium Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group relative bg-[var(--card)] border border-[var(--border)] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Product Image Container */}
              <div 
                className="relative aspect-square bg-[var(--muted)] overflow-hidden cursor-pointer"
                onClick={() => openQuickView(product)}
              >
                {/* Wishlist Heart - Top Right */}
                <button
                  onClick={(e) => toggleWishlist(product.id, e)}
                  className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[var(--background)]/80 backdrop-blur-sm transition-all duration-200 hover:bg-[var(--background)]"
                >
                  <Heart 
                    className={cn(
                      "w-4 h-4 transition-all duration-200",
                      isInWishlist(product.id) 
                        ? "fill-red-500 text-red-500" 
                        : "text-[var(--foreground)]/60 hover:text-[var(--foreground)]"
                    )} 
                  />
                </button>

                {/* Product Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={product.image || "/images/products/water-purifier.jpg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                
                {/* Badges Container - Top Left */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={cn(
                    "px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wide",
                    getBadgeColor(product.badge)
                  )}>
                    {product.badge}
                  </span>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                {/* Category Tag */}
                <span className="text-[11px] font-medium text-[var(--accent)] tracking-wider uppercase">
                  {product.category}
                </span>
                
                {/* Product Name */}
                <h3 className="font-semibold text-sm text-[var(--foreground)] mt-1 mb-2 line-clamp-2 leading-snug group-hover:text-[var(--accent)] transition-colors min-h-[2.5rem]">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(product.rating)}
                  <span className="text-xs text-[var(--muted-foreground)]">
                    ({product.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Price Section */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-lg font-bold text-[var(--foreground)]">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-[var(--muted-foreground)] line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                
                {/* Savings & Discount */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-medium text-green-500">
                    Save ₹{(product.originalPrice - product.price).toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] font-medium text-[var(--accent)]">
                    ({product.discount}% off)
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="h-1 bg-[var(--muted)] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[var(--accent)] rounded-full"
                      style={{ width: `${Math.min(product.discount * 3, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button 
                  size="sm" 
                  isDisabled={!product.inStock}
                  className={cn(
                    "w-full h-10 text-xs font-semibold rounded-lg transition-all duration-300 border-0 flex items-center justify-center",
                    product.inStock 
                      ? "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90"
                      : "bg-[var(--muted)] text-red-500 cursor-not-allowed"
                  )}
                >
                  <ShoppingCart className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick View Modal */}
        {isModalOpen && selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <div className="relative w-full max-w-4xl bg-[var(--card)] rounded-2xl shadow-2xl overflow-hidden">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-[var(--muted)] rounded-full flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Product Image */}
                <div className="aspect-square bg-[var(--muted)] flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-4 bg-[var(--muted)] rounded-3xl flex items-center justify-center">
                      <Zap className="w-20 h-20 text-[var(--accent)]" />
                    </div>
                    <span className="text-sm text-[var(--muted-foreground)] font-medium">
                      {selectedProduct.category}
                    </span>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6 md:p-8 flex flex-col">
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-bold uppercase",
                      getBadgeColor(selectedProduct.badge)
                    )}>
                      {selectedProduct.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--accent)] text-[var(--accent-foreground)]">
                      -{selectedProduct.discount}% OFF
                    </span>
                  </div>

                  {/* Category */}
                  <span className="text-sm font-semibold text-[var(--accent)] tracking-wider uppercase mb-2">
                    {selectedProduct.category}
                  </span>

                  {/* Product Name */}
                  <h2 className="text-2xl md:text-3xl font-display text-[var(--foreground)] mb-4">
                    {selectedProduct.name}
                  </h2>

                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-4">
                    {renderStars(selectedProduct.rating)}
                    <span className="text-sm text-[var(--muted-foreground)]">
                      ({selectedProduct.reviews.toLocaleString()} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-3xl font-bold text-[var(--foreground)]">
                      ₹{selectedProduct.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-lg text-[var(--muted-foreground)] line-through">
                      ₹{selectedProduct.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-sm font-medium text-[var(--accent)]">
                      Save ₹{(selectedProduct.originalPrice - selectedProduct.price).toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      selectedProduct.inStock ? "bg-green-500" : "bg-red-500"
                    )} />
                    <span className={cn(
                      "text-sm font-medium",
                      selectedProduct.inStock ? "text-[var(--accent)]" : "text-red-500"
                    )}>
                      {selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>

                  {/* Quantity Selector */}
                  {selectedProduct.inStock && (
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-sm font-medium text-[var(--foreground)]">Quantity:</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-semibold text-[var(--foreground)]">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      size="lg"
                      isDisabled={!selectedProduct.inStock}
                      className={cn(
                        "flex-1 h-12 font-semibold rounded-lg",
                        selectedProduct.inStock
                          ? "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
                          : "bg-[var(--muted)] text-red-500 cursor-not-allowed"
                      )}
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      {selectedProduct.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-12 h-12 p-0 border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)] hover:border-[var(--accent)] rounded-lg"
                    >
                      <Heart className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View All Section */}
        <div className="mt-12 flex flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
            <TrendingUp className="w-4 h-4 text-[var(--accent)]" />
            <span>Showing {featuredProducts.length} of 100+ products</span>
          </div>
          
          <Link href="/products">
            <Button 
              size="lg"
              className="h-12 px-8 bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>View All Products</span>
              <ArrowRight className="h-4 w-4 flex-shrink-0" />
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-[var(--border)]">
          {[
            { icon: CheckCircle2, label: '100% Genuine', sublabel: 'Authentic Products' },
            { icon: TrendingUp, label: 'Best Prices', sublabel: 'Price Match Guarantee' },
            { icon: Zap, label: 'Fast Delivery', sublabel: 'Free Shipping' },
            { icon: Star, label: '4.5+ Rated', sublabel: 'Customer Verified' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--muted)]/50">
              <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--foreground)]">{item.label}</div>
                <div className="text-[10px] text-[var(--muted-foreground)]">{item.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
