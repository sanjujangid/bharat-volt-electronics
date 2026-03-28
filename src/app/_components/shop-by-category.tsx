'use client'

import Link from 'next/link'
import { ArrowRight, Wind, Droplets, Sun, Zap, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface Category {
  name: string
  icon: any
  slug: string
  description: string
  products: string
  featured: boolean
}

export default function ShopByCategory() {
  const categories: Category[] = [
    { 
      name: 'Kitchen Chimneys', 
      icon: Wind, 
      slug: 'chimneys', 
      description: 'Auto-clean technology with powerful suction',
      products: '50+ Products',
      featured: true
    },
    { 
      name: 'Water Purifiers', 
      icon: Droplets, 
      slug: 'ro', 
      description: 'RO+UV+UF+Alkaline purification system',
      products: '30+ Products',
      featured: true
    },
    { 
      name: 'Solar Equipment', 
      icon: Sun, 
      slug: 'solar', 
      description: 'Government subsidy available',
      products: '25+ Products',
      featured: false
    },
    { 
      name: 'Smart Gadgets', 
      icon: Zap, 
      slug: 'gadgets', 
      description: 'AI-powered home automation',
      products: '40+ Products',
      featured: false
    },
    { 
      name: 'Lighting Solutions', 
      icon: Sparkles, 
      slug: 'lighting', 
      description: 'Energy-efficient LED lighting',
      products: '35+ Products',
      featured: false
    },
  ]

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[var(--foreground)]">
            Shop by Category
          </h2>
          <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
            Explore our curated collection of premium electronics and home appliances, 
            designed with cutting-edge technology and elegant aesthetics
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Link key={category.slug} href={`/categories/${category.slug}`}>
              <Card className="group bg-[var(--secondary)] border-[var(--border)] overflow-hidden hover:bg-[var(--muted)] transition-all duration-300 hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-[var(--primary)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <category.icon className="h-10 w-10 text-white" />
                    </div>
                    {category.featured && (
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        Popular
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] mb-3">
                    {category.description}
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)] font-medium">
                    {category.products}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/categories">
            <Button variant="outline" className="h-12 px-8 rounded-xl border-2 border-[var(--border)] text-[var(--primary)] hover:bg-[var(--secondary)] hover:text-white">
              View All Categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
