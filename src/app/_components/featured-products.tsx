'use client'

import Link from 'next/link'
import { ArrowRight, Star, Heart, ShoppingCart } from 'lucide-react'
import { Button, Card, Chip } from '@heroui/react'
import { cn } from '@/lib/utils'

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
}

export default function FeaturedProducts() {
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: "KENT Supreme Alkaline RO",
      price: 18999,
      originalPrice: 24999,
      rating: 4.5,
      reviews: 2341,
      category: "Water Purifier",
      inStock: true,
      discount: 24,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Faber 60cm Auto Clean Chimney",
      price: 15999,
      originalPrice: 19999,
      rating: 4.7,
      reviews: 1856,
      category: "Kitchen Chimney",
      inStock: true,
      discount: 20,
      badge: "Popular"
    },
    {
      id: 3,
      name: "ILIV RO+UV+UF Alkaline",
      price: 12999,
      originalPrice: 16999,
      rating: 4.6,
      reviews: 987,
      category: "Water Purifier",
      inStock: true,
      discount: 24,
      badge: "Health Choice"
    },
    {
      id: 4,
      name: "Crompton QuietPro Chimney",
      price: 21999,
      originalPrice: 27999,
      rating: 4.8,
      reviews: 654,
      category: "Kitchen Chimney",
      inStock: true,
      discount: 21,
      badge: "Premium"
    },
    {
      id: 5,
      name: "Whirlpool Triple Baffle Filter",
      price: 17999,
      originalPrice: 22999,
      rating: 4.4,
      reviews: 432,
      category: "Kitchen Chimney",
      inStock: true,
      discount: 22,
      badge: "Value"
    },
    {
      id: 6,
      name: "KENT RO+UV+UF Water Purifier",
      price: 9999,
      originalPrice: 13999,
      rating: 4.3,
      reviews: 3210,
      category: "Water Purifier",
      inStock: true,
      discount: 29,
      badge: "Budget Pick"
    },
    {
      id: 7,
      name: "Solar Panel System 1kW",
      price: 45000,
      originalPrice: 65000,
      rating: 4.9,
      reviews: 189,
      category: "Solar Equipment",
      inStock: true,
      discount: 31,
      badge: "Eco Choice"
    },
    {
      id: 8,
      name: "Smart Home Automation Kit",
      price: 8999,
      originalPrice: 11999,
      rating: 4.2,
      reviews: 567,
      category: "Smart Gadgets",
      inStock: true,
      discount: 25,
      badge: "New"
    }
  ]

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-3 w-3",
              i < Math.floor(rating) 
                ? "fill-yellow-400 text-yellow-400" 
                : "text-[var(--muted-foreground)]"
            )}
          />
        ))}
        <span className="text-xs text-[var(--muted-foreground)] ml-1">
          {rating}
        </span>
      </div>
    )
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold mb-6 text-white tracking-tight">
            Featured Products
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium products with exceptional quality and unbeatable value
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group border border-gray-800 bg-gray-900 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden hover:-translate-y-3"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-800 to-gray-700">
                {/* Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="text-6xl mb-3 opacity-40">📦</div>
                    <div className="text-sm opacity-60 font-medium">Product</div>
                  </div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 m-2">
                  <Chip 
                    size="sm" 
                    variant="secondary" 
                    className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-semibold shadow-lg border-0 px-3 py-1"
                  >
                    {product.badge}
                  </Chip>
                </div>
                
                <div className="absolute top-4 right-4 z-10 m-2">
                  <Chip 
                    size="sm" 
                    variant="secondary"
                    className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold shadow-lg border-0 px-3 py-1"
                  >
                    -{product.discount}%
                  </Chip>
                </div>
                
                {/* Wishlist Button */}
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-gray-800/95 backdrop-blur-md rounded-full flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-xl border border-gray-700">
                  <Heart className="h-4 w-4" />
                </button>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                  <span className="text-xs text-blue-400 font-bold tracking-wider uppercase">
                    {product.category}
                  </span>
                </div>
                
                {/* Product Name */}
                <h3 className="font-bold text-base mb-4 text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(product.rating)}
                  <span className="text-xs text-gray-400 ml-2 font-medium">
                    ({product.reviews.toLocaleString()})
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl font-bold text-white">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-gray-500 line-through font-medium">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 text-sm font-semibold h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:scale-105 items-center justify-center"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="w-12 h-12 p-0 border-2 border-gray-600 text-gray-400 hover:border-red-500 hover:text-red-500 hover:bg-red-500/10 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg rounded-full"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link href="/products">
            <Button 
              size="lg"
              className="h-14 px-12 bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-800 hover:to-gray-700 font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-full"
            >
              View All Products
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
