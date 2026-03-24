'use client'

import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Search, Filter, Grid, List, ShoppingCart, Star, Heart, SlidersHorizontal, X, Check, ChevronDown, ArrowRight, Shield, Truck, Headphones, Wind } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { cn, debounce } from '@/lib/utils'

interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  originalPrice?: number
  images: string[]
  inStock: boolean
  featured: boolean
  category: {
    id: string
    name: string
    slug: string
  }
  createdAt: string
}

const categoryInfo = {
  chimneys: {
    name: 'Kitchen Chimneys',
    description: 'Transform your kitchen with our advanced chimney collection featuring auto-clean technology and powerful suction',
    features: ['Auto-Clean Technology', 'LED Lighting', 'Touch Controls', 'Low Noise (< 45dB)', 'Filter-less Design'],
    icon: 'Wind',
    color: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50'
  },
  gadgets: {
    name: 'Smart Gadgets',
    description: 'Latest smart home gadgets with AI integration and voice control for modern living',
    features: ['Voice Control', 'Mobile App Integration', 'Energy Efficient', 'Multi-Device Support', 'AI Assistant'],
    icon: 'Zap',
    color: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50'
  },
  ro: {
    name: 'Water Purifiers',
    description: 'Advanced 8-stage water purification systems with mineral addition for pure, healthy drinking water',
    features: ['RO + UV + UF', 'Mineral Addition', '8-Stage Purification', 'High Storage Capacity', 'Real-time Monitoring'],
    icon: 'Droplets',
    color: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-50 to-blue-50'
  },
  solar: {
    name: 'Solar Equipment',
    description: 'Government subsidized solar solutions with 30% subsidy and 5-year warranty for sustainable energy',
    features: ['30% Govt. Subsidy', '5-Year Warranty', 'Net Metering', 'Quick Installation', 'Weather Resistant'],
    icon: 'Sun',
    color: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50'
  },
  lighting: {
    name: 'Lighting Solutions',
    description: 'Energy-efficient LED lighting solutions with smart controls and multiple color options',
    features: ['80% Energy Saving', 'Long Life (50,000 hrs)', 'Smart Controls', 'Multiple Colors', 'Dimmable'],
    icon: 'Sparkles',
    color: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50'
  }
}

export default function CategoryPage() {
  const params = useParams()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('featured')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 })
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [wishlist, setWishlist] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const categorySlug = params.slug as string
  const category = categoryInfo[categorySlug as keyof typeof categoryInfo]

  // Debounced search handler
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      setSearchQuery(query)
    }, 300),
    []
  )

  const fetchCategoryProducts = async () => {
    try {
      setLoading(true)
      
      // Validate inputs before making API call
      if (!categorySlug) {
        throw new Error('Category slug is required')
      }
      
      // Build API URL with search query
      let apiUrl = `/api/products?category=${categorySlug}&limit=20`
      if (searchQuery) {
        apiUrl += `&search=${encodeURIComponent(searchQuery)}`
      }
      
      const response = await fetch(apiUrl)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (!data || !Array.isArray(data.products)) {
        throw new Error('Invalid API response format')
      }
      
      let filteredProducts = data.products

      // Apply price filter
      filteredProducts = filteredProducts.filter((product: Product) => 
        product.price >= priceRange.min && product.price <= priceRange.max
      )

      // Apply feature filter (mock implementation)
      if (selectedFeatures.length > 0) {
        filteredProducts = filteredProducts.filter((product: Product) => 
          selectedFeatures.some(feature => 
            product.name.toLowerCase().includes(feature.toLowerCase()) ||
            product.description.toLowerCase().includes(feature.toLowerCase())
          )
        )
      }

      // Apply sorting
      filteredProducts.sort((a: Product, b: Product) => {
        switch (sortBy) {
          case 'price-low':
            return a.price - b.price
          case 'price-high':
            return b.price - a.price
          case 'name':
            return a.name.localeCompare(b.name)
          case 'newest':
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          case 'featured':
          default:
            return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
        }
      })

      setProducts(filteredProducts)
    } catch (error) {
      console.error('Error fetching category products:', error)
      // Set empty products array on error to prevent undefined state
      setProducts([])
      // You could also set an error state here to show to users
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (categorySlug) {
      fetchCategoryProducts()
    }
  }, [categorySlug, priceRange, selectedFeatures, sortBy, searchQuery])

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    )
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-8">The category you're looking for doesn't exist.</p>
            <Link href="/products">
              <Button>Browse All Products</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const ProductCard = ({ product }: { product: Product }) => (
    <Card className="group card-premium overflow-hidden animate-scale-in">
      <div className="relative">
        <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse-slow" />
          
          {/* Discount Badge */}
          {product.originalPrice && product.originalPrice > product.price && (
            <div className="absolute top-4 right-4 z-10 animate-slide-in">
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
              </span>
            </div>
          )}
          
          {/* Out of Stock Overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10">
              <span className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Out of Stock
              </span>
            </div>
          )}
          
          {/* Featured Badge */}
          {product.featured && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                Featured
              </span>
            </div>
          )}
        </div>
        
        {/* Quick Actions */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <div className="flex flex-col space-y-2">
            <Button 
              size="icon" 
              variant="secondary" 
              className="glass bg-white/90 hover:bg-white shadow-lg"
              onClick={() => toggleWishlist(product.id)}
              aria-label={wishlist.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}
              aria-pressed={wishlist.includes(product.id)}
            >
              <Heart className={cn("h-4 w-4", wishlist.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-600")} />
            </Button>
          </div>
        </div>
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
            <Link href={`/products/${product.slug}`} className="hover:text-[var(--primary)]">
              {product.name}
            </Link>
          </h3>
          
          <p className="text-sm text-[var(--muted-foreground)] mb-3 line-clamp-2">
            {product.description}
          </p>
          
          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={cn("h-4 w-4", i < 4 ? "fill-current" : "text-gray-300")} />
              ))}
            </div>
            <span className="text-sm text-[var(--muted-foreground)] ml-2">(42)</span>
          </div>
        </div>
        
        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-[var(--foreground)]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[var(--muted-foreground)] line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
          </div>
          
          <Button 
            size="sm" 
            className="btn-premium group-hover:shadow-lg transition-shadow"
            disabled={!product.inStock}
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Premium Category Header */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${category.bgGradient}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/5" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className={`inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6`}>
              <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                <Wind className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90">{category.name}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-[var(--foreground)]">
              {category.name}
            </h1>
            <p className="text-xl text-[var(--muted-foreground)] mb-12 max-w-3xl mx-auto">
              {category.description}
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
              {category.features.map((feature, index) => (
                <div key={index} className="glass bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="font-semibold text-[var(--foreground)] text-sm">{feature}</div>
                </div>
              ))}
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { icon: Shield, text: '5 Year Warranty' },
                { icon: Truck, text: 'Free Installation' },
                { icon: Headphones, text: '24/7 Support' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-[var(--muted-foreground)] animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Premium Filters and Controls */}
        <div className="glass bg-white/80 backdrop-blur-sm rounded-2xl shadow-luxury p-6 mb-8 animate-slide-in">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            {/* Search and Basic Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-foreground)] h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  onChange={(e) => debouncedSearch(e.target.value)}
                  className="pl-10 h-11 bg-white/50 border-white/20 focus:bg-white transition-colors"
                  aria-label="Search products in this category"
                />
              </div>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 h-11 bg-white/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-colors"
              >
                <option value="featured">Featured</option>
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            {/* Advanced Filters Toggle */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="h-11 px-4 bg-white/50 border-white/20 hover:bg-white transition-colors rounded-xl"
                aria-label="Toggle advanced filters"
                aria-expanded={showFilters}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
                {selectedFeatures.length > 0 && (
                  <span className="ml-2 bg-[var(--primary)] text-white text-xs px-2 py-0.5 rounded-full">
                    {selectedFeatures.length}
                  </span>
                )}
              </Button>
              
              {/* View Mode Toggle */}
              <div className="flex items-center bg-white/50 border border-white/20 rounded-xl p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="h-9 w-9 p-0 rounded-lg"
                  aria-label="Grid view"
                  aria-pressed={viewMode === 'grid'}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="h-9 w-9 p-0 rounded-lg"
                  aria-label="List view"
                  aria-pressed={viewMode === 'list'}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Advanced Filters Panel */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-white/20 animate-slide-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Price Range */}
                <div>
                  <h4 className="font-semibold mb-3 text-[var(--foreground)]">Price Range</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Input
                        type="number"
                        placeholder="Min"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                        className="bg-white/50 border-white/20"
                      />
                      <span className="text-[var(--muted-foreground)]">-</span>
                      <Input
                        type="number"
                        placeholder="Max"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                        className="bg-white/50 border-white/20"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Features Filter */}
                <div>
                  <h4 className="font-semibold mb-3 text-[var(--foreground)]">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature) => (
                      <Button
                        key={feature}
                        variant={selectedFeatures.includes(feature) ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => toggleFeature(feature)}
                        className="text-xs h-8 px-3 rounded-full bg-white/50 border-white/20 hover:bg-white transition-colors"
                      >
                        {selectedFeatures.includes(feature) && <Check className="h-3 w-3 mr-1" />}
                        {feature}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Clear Filters */}
              {(selectedFeatures.length > 0 || priceRange.min > 0 || priceRange.max < 100000) && (
                <div className="mt-4 pt-4 border-t border-white/20">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setSelectedFeatures([])
                      setPriceRange({ min: 0, max: 100000 })
                    }}
                    className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl mb-4" />
                <div className="h-4 bg-gray-200 rounded-lg mb-2" />
                <div className="h-4 bg-gray-200 rounded-lg w-3/4 mb-2" />
                <div className="h-6 bg-gray-200 rounded-lg w-1/2" />
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-[var(--foreground)]">No products found</h3>
            <p className="text-[var(--muted-foreground)] mb-8">Try adjusting your search or filters</p>
            <Button 
              onClick={() => {
                setSelectedFeatures([])
                setPriceRange({ min: 0, max: 100000 })
              }}
              className="btn-premium"
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <>
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" className="h-12 px-8 rounded-xl">
                Load More Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </>
        )}

        {/* Premium Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-[var(--muted-foreground)] mt-12 pt-8 border-t border-[var(--border)]">
          <Link href="/" className="hover:text-[var(--foreground)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/categories" className="hover:text-[var(--foreground)] transition-colors">Categories</Link>
          <span>/</span>
          <span className="text-[var(--foreground)] font-medium">{category.name}</span>
        </nav>
      </div>
    </div>
  )
}
