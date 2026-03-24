'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Filter, Grid, List, Star, Shield, Truck, Headphones, ArrowRight, Wind, Zap, Droplets, Sun, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const categories = [
  {
    name: 'Kitchen Chimneys',
    slug: 'chimneys',
    icon: Wind,
    description: 'Advanced kitchen chimneys with powerful suction and modern designs',
    features: ['Auto-Clean Technology', 'LED Lighting', 'Touch Controls', 'Low Noise'],
    color: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    productCount: 24,
    avgRating: 4.8,
    priceRange: '₹8,999 - ₹45,999'
  },
  {
    name: 'Smart Gadgets',
    slug: 'gadgets',
    icon: Zap,
    description: 'Latest smart home gadgets to make your life easier',
    features: ['Voice Control', 'Mobile App Integration', 'Energy Efficient', 'Multi-Device Support'],
    color: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    productCount: 18,
    avgRating: 4.6,
    priceRange: '₹2,999 - ₹25,999'
  },
  {
    name: 'Water Purifiers',
    slug: 'ro',
    icon: Droplets,
    description: 'Advanced water purification systems for clean drinking water',
    features: ['RO + UV + UF', 'Mineral Addition', '8-Stage Purification', 'High Storage Capacity'],
    color: 'from-cyan-500 to-blue-500',
    bgGradient: 'from-cyan-50 to-blue-50',
    productCount: 15,
    avgRating: 4.7,
    priceRange: '₹6,999 - ₹18,999'
  },
  {
    name: 'Solar Equipment',
    slug: 'solar',
    icon: Sun,
    description: 'Government subsidized solar solutions for sustainable energy',
    features: ['30% Govt. Subsidy', '5-Year Warranty', 'Net Metering', 'Quick Installation'],
    color: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50',
    productCount: 12,
    avgRating: 4.5,
    priceRange: '₹15,999 - ₹89,999'
  },
  {
    name: 'Lighting Solutions',
    slug: 'lighting',
    icon: Sparkles,
    description: 'Energy-efficient LED lighting for homes and offices',
    features: ['80% Energy Saving', 'Long Life', 'Smart Controls', 'Multiple Colors'],
    color: 'from-pink-500 to-rose-500',
    bgGradient: 'from-pink-50 to-rose-50',
    productCount: 32,
    avgRating: 4.9,
    priceRange: '₹999 - ₹12,999'
  }
]

const features = [
  { icon: Shield, title: 'Premium Quality', description: 'All products are 100% genuine and certified' },
  { icon: Truck, title: 'Free Delivery', description: 'Free shipping on orders above ₹999' },
  { icon: Headphones, title: '24/7 Support', description: 'Expert assistance whenever you need it' },
]

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filteredCategories, setFilteredCategories] = useState(categories)

  useEffect(() => {
    const filtered = categories.filter(category =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredCategories(filtered)
  }, [searchTerm])

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--primary)]/5" />
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient">
              Explore Categories
            </h1>
            <p className="text-xl text-[var(--muted-foreground)] mb-8 max-w-2xl mx-auto">
              Discover our premium range of electronics and home appliances, carefully curated for the modern Indian home
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--muted-foreground)] h-5 w-5" />
              <Input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg glass border-0 shadow-luxury"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-8 bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/80 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-white/80">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-2">All Categories</h2>
              <p className="text-[var(--muted-foreground)]">
                {filteredCategories.length} {filteredCategories.length === 1 ? 'category' : 'categories'} available
              </p>
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-xl"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-xl"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Categories */}
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-[var(--muted-foreground)] mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">No categories found</h3>
              <p className="text-[var(--muted-foreground)]">Try adjusting your search terms</p>
            </div>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredCategories.map((category, index) => (
                <Link key={category.slug} href={`/categories/${category.slug}`}>
                  <Card className="group card-premium overflow-hidden hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    {/* Header */}
                    <div className={`relative h-48 bg-gradient-to-br ${category.bgGradient} p-6 overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                      
                      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <category.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="absolute top-6 right-6">
                        <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="text-xs font-medium">{category.avgRating}</span>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-[var(--primary)] transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-[var(--muted-foreground)] text-sm mb-3">
                          {category.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-[var(--muted-foreground)]">
                          <span>{category.productCount} products</span>
                          <span>{category.priceRange}</span>
                        </div>
                      </div>
                      
                      {/* Features */}
                      <div className="space-y-2 mb-4">
                        {category.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full" />
                            <span className="text-sm text-[var(--muted-foreground)]">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <Button className="btn-premium group-hover:shadow-lg transition-shadow">
                          Explore
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--secondary)] to-[var(--muted)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Why Shop with Us?</h2>
            <p className="text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
              Experience premium shopping with unmatched quality and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Authentic Products',
                description: '100% genuine products with manufacturer warranty and authentic certification',
                icon: Shield
              },
              {
                title: 'Expert Support',
                description: 'Technical support, installation services, and maintenance assistance',
                icon: Headphones
              },
              {
                title: 'Best Prices',
                description: 'Competitive pricing with regular discounts and government subsidies',
                icon: Sparkles
              }
            ].map((item, index) => (
              <div key={index} className="text-center animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-[var(--muted-foreground)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
