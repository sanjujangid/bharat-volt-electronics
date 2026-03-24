'use client'

import { Shield, Truck, Headphones, Sparkles, Award, Clock, Users, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface Feature {
  icon: any
  title: string
  description: string
  stat?: string
}

export default function WhyChooseUs() {
  const features: Feature[] = [
    { 
      icon: Shield, 
      title: 'Authentic Products', 
      description: '100% genuine products with manufacturer warranty and certification',
      stat: '5+ Years'
    },
    { 
      icon: Truck, 
      title: 'Fast Delivery', 
      description: 'Quick delivery across India within 3-5 business days',
      stat: '50+ Cities'
    },
    { 
      icon: Headphones, 
      title: 'Expert Support', 
      description: 'Technical support and installation services by certified professionals',
      stat: '24/7'
    },
    { 
      icon: Sparkles, 
      title: 'Best Prices', 
      description: 'Competitive pricing with regular discounts and government subsidies',
      stat: '30% Off'
    },
    { 
      icon: Award, 
      title: 'Quality Assured', 
      description: 'Rigorous quality testing and premium materials only',
      stat: 'ISO 9001'
    },
    { 
      icon: Clock, 
      title: 'Quick Installation', 
      description: 'Professional installation team available at your convenience',
      stat: 'Same Day'
    },
    { 
      icon: Users, 
      title: 'Happy Customers', 
      description: 'Trusted by thousands of satisfied customers across India',
      stat: '50K+'
    },
    { 
      icon: Zap, 
      title: 'Energy Efficient', 
      description: 'All products meet energy efficiency standards for maximum savings',
      stat: '5 Star'
    }
  ]

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[var(--foreground)]">
            Why Choose Bharat Volt?
          </h2>
          <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
            We're committed to providing the best shopping experience with premium quality and exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <Card className="bg-[var(--secondary)] border-[var(--border)] hover:bg-[var(--muted)] transition-all duration-300 hover-lift h-full">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-[var(--primary)] rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    {feature.stat && (
                      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                        {feature.stat}
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-[var(--secondary)] rounded-2xl px-8 py-4 border border-[var(--border)]">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[var(--foreground)] font-medium">All Products Tested</span>
            </div>
            <div className="w-px h-6 bg-[var(--border)]" />
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-[var(--primary)]" />
              <span className="text-[var(--foreground)] font-medium">Warranty Protected</span>
            </div>
            <div className="w-px h-6 bg-[var(--border)]" />
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-[var(--primary)]" />
              <span className="text-[var(--foreground)] font-medium">Certified Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
