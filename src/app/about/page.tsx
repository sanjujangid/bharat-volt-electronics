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

  const team = [
    { name: 'Rajesh Kumar', role: 'Founder & CEO', image: '/api/placeholder/200/200' },
    { name: 'Priya Sharma', role: 'CTO', image: '/api/placeholder/200/200' },
    { name: 'Amit Patel', role: 'Head of Operations', image: '/api/placeholder/200/200' },
    { name: 'Neha Gupta', role: 'Customer Success', image: '/api/placeholder/200/200' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-display font-bold mb-6 text-gray-900">
              About Bharat Volt Electronics
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We are on a mission to make premium electronics and home appliances 
              accessible to every Indian home, combining cutting-edge technology with 
              affordable pricing and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Our Story
              </Button>
              <Button size="xl" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-display font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Our Journey</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded in 2018, Bharat Volt Electronics began as a small electronics showroom 
                  in Delhi with a simple vision: to provide authentic, high-quality electronics at 
                  competitive prices to Indian consumers.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Over the years, we've grown from a single store to a nationwide e-commerce platform, 
                  serving over 500,000 customers across 50+ cities. Our commitment to quality, innovation, 
                  and customer satisfaction has made us a trusted name in the electronics retail space.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we specialize in kitchen chimneys, smart home gadgets, water purifiers, 
                  solar equipment, and lighting solutions, with many more exciting categories coming soon.
                </p>
              </div>
              
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                      selectedTimeline === index 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedTimeline(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {milestone.year}
                        </div>
                        <div className="font-semibold text-gray-900">
                          {milestone.title}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          {milestone.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Why Choose Bharat Volt?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              We're different from other electronics retailers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Authentic Products</h3>
              <p className="text-blue-100">
                100% genuine products with manufacturer warranty and after-sales support
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Best Prices</h3>
              <p className="text-blue-100">
                Competitive pricing with regular discounts and special offers
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-2">Expert Support</h3>
              <p className="text-blue-100">
                Technical assistance, installation services, and 24/7 customer care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind Bharat Volt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-display font-bold mb-4">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of happy customers who have chosen Bharat Volt for their electronics needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="bg-white text-blue-600 hover:bg-gray-100">
                Shop Now
              </Button>
              <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
