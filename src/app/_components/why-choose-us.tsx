'use client'

import { Shield, Truck, Headphones, Sparkles, Award, Clock, Users, Zap, CheckCircle } from 'lucide-react'
import { Card, Chip, Button } from '@heroui/react'

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
    <section className="py-20 bg-gradient-to-br from-[var(--background)] to-[var(--secondary)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold mb-6 text-[var(--foreground)] tracking-tight">
            Why Choose Bharat Volt?
          </h2>
          <p className="text-xl text-[var(--muted-foreground)] max-w-4xl mx-auto leading-relaxed">
            We're committed to providing the best shopping experience with premium quality and exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border-0 bg-white/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              {/* Icon Section */}
              <div className="relative p-6 pb-0">
                <div className="relative mb-4">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/80 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  {feature.stat && (
                    <Chip 
                      size="sm" 
                      variant="secondary"
                      className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold shadow-lg border-0"
                    >
                      {feature.stat}
                    </Chip>
                  )}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 pt-0">
                <h3 className="font-bold text-lg mb-3 text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors text-center">
                  {feature.title}
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed text-center text-sm">
                  {feature.description}
                </p>
              </div>

              {/* Footer Section */}
              <div className="p-6 pt-0">
                <Button 
                  size="sm" 
                  variant="ghost"
                  className="w-full text-[var(--primary)] hover:bg-[var(--primary)]/10 font-medium"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <div className="p-8">
                <div className="flex flex-wrap items-center justify-center gap-8">
                  <div className="flex items-center space-x-3 group">
                    <div className="relative">
                      <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
                    </div>
                    <span className="text-[var(--foreground)] font-semibold group-hover:text-[var(--primary)] transition-colors">
                      All Products Tested
                    </span>
                  </div>
                  
                  <div className="hidden sm:block w-px h-8 bg-[var(--border)]" />
                  
                  <div className="flex items-center space-x-3 group">
                    <Shield className="h-6 w-6 text-[var(--primary)] group-hover:scale-110 transition-transform" />
                    <span className="text-[var(--foreground)] font-semibold group-hover:text-[var(--primary)] transition-colors">
                      Warranty Protected
                    </span>
                  </div>
                  
                  <div className="hidden sm:block w-px h-8 bg-[var(--border)]" />
                  
                  <div className="flex items-center space-x-3 group">
                    <Award className="h-6 w-6 text-[var(--primary)] group-hover:scale-110 transition-transform" />
                    <span className="text-[var(--foreground)] font-semibold group-hover:text-[var(--primary)] transition-colors">
                      Certified Quality
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/80 border-0 shadow-2xl">
            <div className="p-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Experience Excellence?
              </h3>
              <p className="text-white/90 mb-8 text-lg">
                Join thousands of satisfied customers who trust Bharat Volt for their electronic needs
              </p>
              <div className="flex gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-[var(--primary)] hover:bg-gray-100 font-bold px-8 shadow-lg"
                >
                  Shop Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[var(--primary)] font-bold px-8"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
