'use client'

import Link from 'next/link'
import { ArrowRight, Wind, Droplets, Sun, Zap, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Category {
  name: string
  icon: React.ElementType
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
      description: 'Auto-clean technology',
      products: '50+ Products',
      featured: true
    },
    { 
      name: 'Water Purifiers', 
      icon: Droplets, 
      slug: 'ro', 
      description: 'RO+UV+UF+Alkaline',
      products: '30+ Products',
      featured: true
    },
    { 
      name: 'Solar Equipment', 
      icon: Sun, 
      slug: 'solar', 
      description: 'Govt. subsidy available',
      products: '25+ Products',
      featured: false
    },
    { 
      name: 'Smart Gadgets', 
      icon: Zap, 
      slug: 'gadgets', 
      description: 'AI-powered automation',
      products: '40+ Products',
      featured: false
    },
    { 
      name: 'LED Lighting', 
      icon: Sparkles, 
      slug: 'lighting', 
      description: 'Energy-efficient',
      products: '35+ Products',
      featured: false
    },
  ]

  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        {/* Section Header - Featured Products Style */}
        <div className="mb-10">
          <div className="flex items-start gap-4">
            {/* Accent Bar */}
            <div className="w-1 h-12 bg-[var(--accent)] rounded-full mt-1" />
            <div className="flex-1">
              <span className="text-sm font-semibold text-[var(--accent)] tracking-wider uppercase block mb-2">
                Browse Collection
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--foreground)] mb-4">
                Shop by Category
              </h2>
              <p className="text-base text-[var(--muted-foreground)] max-w-xl leading-relaxed">
                Explore our curated collection of premium electronics and home appliances, designed with cutting-edge technology and elegant aesthetics
              </p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((category, index) => (
            <Link key={category.slug} href={`/categories/${category.slug}`}>
              <div className={cn(
                "group relative p-5 rounded-xl border transition-all duration-300",
                "bg-[var(--card)] border-[var(--border)] hover:border-[var(--accent)]/50",
                "hover:shadow-sm"
              )}>
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--muted)] flex items-center justify-center group-hover:bg-[var(--accent)]/10 transition-colors">
                    <category.icon className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.5} />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-semibold text-base text-[var(--foreground)] mb-1.5 group-hover:text-[var(--accent)] transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-2 leading-relaxed">
                  {category.description}
                </p>
                <p className="text-xs text-[var(--accent)] font-medium">
                  {category.products}
                </p>

                {/* Subtle arrow on hover */}
                <ArrowRight className="absolute bottom-5 right-5 h-4 w-4 text-[var(--muted-foreground)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all duration-300 transform translate-x-1 group-hover:translate-x-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
