'use client'

import { Shield, Truck, Headphones, Award, Clock, Users } from 'lucide-react'

interface Feature {
  icon: any
  title: string
  description: string
}

export default function FeaturesBar() {
  const features: Feature[] = [
    { 
      icon: Shield, 
      title: 'Warranty Protection', 
      description: 'Up to 5 years warranty on all products' 
    },
    { 
      icon: Truck, 
      title: 'Free Shipping', 
      description: 'Free delivery on orders above ₹999' 
    },
    { 
      icon: Headphones, 
      title: '24/7 Support', 
      description: 'Round the clock customer assistance' 
    },
    { 
      icon: Award, 
      title: 'Certified Products', 
      description: 'All products are certified and tested' 
    },
    { 
      icon: Clock, 
      title: 'Quick Delivery', 
      description: 'Fast delivery across India' 
    },
    { 
      icon: Users, 
      title: 'Expert Team', 
      description: 'Professional installation service' 
    }
  ]

  return (
    <section className="py-8 bg-[var(--secondary)] border-y border-[var(--border)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 text-center sm:text-left">
              <div className="w-12 h-12 bg-[var(--primary)] rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-[var(--foreground)] text-sm">{feature.title}</h3>
                <p className="text-[var(--muted-foreground)] text-xs mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
