'use client'

import { useState } from 'react'
import { 
  Award, 
  Users, 
  Globe, 
  Zap, 
  Shield, 
  Truck,
  Headphones,
  Target,
  Heart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  const [selectedTimeline, setSelectedTimeline] = useState(0)

  const milestones = [
    { year: '2018', title: 'Foundation', description: 'Started with a small showroom in Delhi' },
    { year: '2020', title: 'Expansion', description: 'Launched online store across India' },
    { year: '2022', title: 'Growth', description: 'Reached 100,000+ happy customers' },
    { year: '2024', title: 'Innovation', description: 'Introduced solar solutions with government subsidies' },
  ]

  const values = [
    {
      icon: Shield,
      title: 'Quality First',
      description: 'We never compromise on quality and only offer genuine products'
    },
    {
      icon: Heart,
      title: 'Customer Centric',
      description: 'Our customers are at the heart of everything we do'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Promoting eco-friendly solutions for a better tomorrow'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Bringing the latest technology to Indian homes'
    },
  ]

  const stats = [
    { number: '500K+', label: 'Happy Customers' },
    { number: '1000+', label: 'Products' },
    { number: '50+', label: 'Cities Served' },
    { number: '24/7', label: 'Customer Support' },
  ]

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-gradient animate-slide-up">
              About Bharat Volt
            </h1>
            <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto mb-12 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              We are on a mission to transform Indian homes with premium electronics that combine 
              cutting-edge technology, elegant design, and exceptional reliability.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[var(--muted-foreground)] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-display font-bold mb-6 text-[var(--foreground)]">
                  Our Story
                </h2>
                <div className="space-y-4 text-[var(--muted-foreground)] leading-relaxed">
                  <p>
                    Founded in 2018, Bharat Volt began as a small electronics showroom in Delhi 
                    with a simple vision: to provide authentic, high-quality electronics at 
                    competitive prices to Indian consumers.
                  </p>
                  <p>
                    Over the years, we've grown from a single store to a nationwide e-commerce platform, 
                    serving over 500,000 customers across 50+ cities. Our commitment to quality, innovation, 
                    and customer satisfaction has made us a trusted name in the electronics retail space.
                  </p>
                  <p>
                    Today, we specialize in kitchen chimneys, smart home gadgets, water purifiers, 
                    solar equipment, and lighting solutions, with many more exciting categories coming soon.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[var(--secondary)] to-[var(--muted)] rounded-3xl animate-float" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Award className="h-20 w-20 text-[var(--primary)] mx-auto mb-4" />
                    <div className="text-2xl font-bold text-[var(--foreground)]">6+ Years</div>
                    <div className="text-[var(--muted-foreground)]">of Excellence</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-[var(--secondary)] to-[var(--muted)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-6 text-[var(--foreground)]">
                Our Journey
              </h2>
              <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
                Key milestones that shaped our growth and success
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[var(--primary)] to-[var(--muted)]" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className="relative animate-slide-in" 
                    style={{ animationDelay: `${index * 0.2}s` }}
                    onMouseEnter={() => setSelectedTimeline(index)}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-4 h-4 bg-[var(--primary)] rounded-full border-4 border-[var(--background)] shadow-lg" />
                    
                    <Card className={`card-premium transition-all duration-300 ${selectedTimeline === index ? 'ring-2 ring-[var(--primary)] shadow-luxury' : ''}`}>
                      <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold text-[var(--primary)] mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">
                          {milestone.title}
                        </h3>
                        <p className="text-[var(--muted-foreground)] text-sm">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-6 text-[var(--foreground)]">
                Our Core Values
              </h2>
              <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
                The principles that guide everything we do, from product design to customer service
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="card-premium text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-[var(--foreground)]">
                      {value.title}
                    </h3>
                    <p className="text-[var(--muted-foreground)] leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-luxury text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Be part of India's premium electronics revolution. Whether you're a customer, 
              partner, or team member, there's a place for you at Bharat Volt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[var(--foreground)] hover:bg-gray-100 h-12 px-8">
                Shop Products
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--foreground)] h-12 px-8">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
