'use client'

import Link from 'next/link'
import { ArrowRight, Star, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
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
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < Math.floor(rating) 
                ? "fill-yellow-400 text-yellow-400" 
                : "text-[var(--muted-foreground)]"
            )}
          />
        ))}
        <span className="text-sm text-[var(--muted-foreground)] ml-1">
          {rating}
        </span>
      </div>
    )
  }

  return (
    <section className="py-12 bg-[var(--secondary)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-[var(--foreground)]">
            Featured Products
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto">
            Handpicked premium products with the best features, quality, and value for money
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="card-premium p-4 hover-lift group">
              <div className="relative">
                <div className="aspect-square bg-[var(--muted)] relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-[var(--secondary)] animate-pulse-slow" />
                  
                  {/* Product placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-[var(--muted-foreground)] text-center">
                      <div className="text-4xl mb-2">📦</div>
                      <div className="text-sm">Product Image</div>
                    </div>
                  </div>
                  
                  <div className="absolute top-3 right-3 z-10">
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                      -{product.discount}%
                    </span>
                  </div>
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-[var(--primary)] text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {product.badge}
                    </span>
                  </div>
                  
                  {/* Wishlist button */}
                  <button className="absolute bottom-3 right-3 w-9 h-9 glass-strong rounded-full flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)] transition-all duration-300 opacity-0 group-hover:opacity-100 border border-[var(--glass-border)] shadow-lg">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="mb-2">
                  <span className="text-xs text-[var(--primary)] font-medium">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="font-semibold text-base mb-2 text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-3">
                  {renderStars(product.rating)}
                  <span className="text-sm text-[var(--muted-foreground)] ml-2">
                    ({product.reviews})
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-[var(--foreground)]">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-sm text-[var(--muted-foreground)] line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 btn-nextjs h-9">
                    Add to Cart
                  </button>
                  <button className="btn-glass h-9 w-9 p-0 flex items-center justify-center">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/products">
            <Button variant="outline" className="h-10 px-6 rounded-xl border-2 border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--secondary)]">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
