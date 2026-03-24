'use client'

import { useState } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      product: 'Premium Kitchen Chimney',
      image: '/api/placeholder/100/100',
      date: '2 weeks ago',
      verified: true,
      content: 'Excellent product! The chimney works perfectly and the installation team was very professional. Bharat Volt provided great after-sales support. Highly recommend!',
      category: 'chimney'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      product: 'Smart Water Purifier',
      image: '/api/placeholder/100/100',
      date: '1 month ago',
      verified: true,
      content: 'The water purifier has made a huge difference in our family\'s health. The installation was quick and the customer service team answered all our questions patiently.',
      category: 'ro'
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Bangalore',
      rating: 4,
      product: 'Solar Panel System',
      image: '/api/placeholder/100/100',
      date: '3 months ago',
      verified: true,
      content: 'Great investment! The solar panels have significantly reduced our electricity bills. The team helped us with government subsidy paperwork. Very satisfied with the purchase.',
      category: 'solar'
    },
    {
      id: 4,
      name: 'Neha Gupta',
      location: 'Pune',
      rating: 5,
      product: 'Smart Home Gadgets',
      image: '/api/placeholder/100/100',
      date: '2 months ago',
      verified: true,
      content: 'Love the smart gadgets! They\'ve made our home so much more convenient. The app integration is seamless and the build quality is excellent.',
      category: 'gadgets'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      location: 'Hyderabad',
      rating: 5,
      product: 'LED Lighting Solutions',
      image: '/api/placeholder/100/100',
      date: '1 week ago',
      verified: true,
      content: 'The LED lights have transformed our home. The brightness is perfect and we\'ve already seen a reduction in our electricity bill. Great quality products!',
      category: 'lighting'
    },
    {
      id: 6,
      name: 'Anita Desai',
      location: 'Chennai',
      rating: 4,
      product: 'Kitchen Chimney',
      image: '/api/placeholder/100/100',
      date: '1 month ago',
      verified: true,
      content: 'Good product overall. The suction power is excellent and it\'s very easy to clean. Only minor issue was with the delivery timing, but customer service resolved it.',
      category: 'chimney'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Reviews' },
    { id: 'chimney', name: 'Kitchen Chimneys' },
    { id: 'ro', name: 'Water Purifiers' },
    { id: 'solar', name: 'Solar Equipment' },
    { id: 'gadgets', name: 'Smart Gadgets' },
    { id: 'lighting', name: 'Lighting Solutions' }
  ]

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    )
  }

  const stats = [
    { number: '4.8', label: 'Average Rating' },
    { number: '10,000+', label: 'Happy Customers' },
    { number: '95%', label: 'Satisfaction Rate' },
    { number: '24/7', label: 'Customer Support' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Customer Testimonials</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Hear what our customers have to say about their experience with Bharat Volt Electronics
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-display font-bold text-blue-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => {
                setSelectedCategory(category.id)
                setCurrentTestimonial(0)
              }}
              className="mb-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Featured Testimonial */}
        {filteredTestimonials.length > 0 && (
          <div className="mb-16">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                  <div className="flex justify-center mb-6">
                    <Quote className="h-12 w-12 text-blue-600" />
                  </div>
                  
                  <div className="text-center mb-8">
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-6">
                      "{filteredTestimonials[currentTestimonial].content}"
                    </p>
                    
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      {renderStars(filteredTestimonials[currentTestimonial].rating)}
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">
                        {filteredTestimonials[currentTestimonial].name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {filteredTestimonials[currentTestimonial].location}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {filteredTestimonials[currentTestimonial].date}
                      </div>
                      {filteredTestimonials[currentTestimonial].verified && (
                        <div className="text-xs text-green-600 font-medium mt-1">
                          ✓ Verified Purchase
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-4 mt-8">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevTestimonial}
                      disabled={filteredTestimonials.length <= 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="flex space-x-2">
                      {filteredTestimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextTestimonial}
                      disabled={filteredTestimonials.length <= 1}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* All Testimonials Grid */}
        <div>
          <h2 className="text-2xl font-display font-bold mb-8 text-center">All Reviews</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.location}
                        </div>
                        {testimonial.verified && (
                          <div className="text-xs text-green-600 font-medium">
                            ✓ Verified Purchase
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.date}
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    {renderStars(testimonial.rating)}
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-4">
                    {testimonial.content}
                  </p>

                  <div className="text-sm text-blue-600 font-medium">
                    {testimonial.product}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Write a Review CTA */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-display font-bold mb-4">
                Share Your Experience
              </h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Have you purchased from Bharat Volt? We'd love to hear about your experience!
              </p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Write a Review
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
