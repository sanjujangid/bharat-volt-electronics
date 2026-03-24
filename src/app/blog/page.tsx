'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: 'Complete Guide to Choosing the Right Kitchen Chimney',
      slug: 'guide-kitchen-chimney',
      excerpt: 'Learn how to select the perfect kitchen chimney for your home with our comprehensive guide covering suction power, filters, and installation.',
      image: '/api/placeholder/400/250',
      author: 'Rajesh Kumar',
      date: '2024-03-15',
      readTime: '8 min read',
      category: 'Kitchen Appliances',
      tags: ['chimney', 'kitchen', 'guide']
    },
    {
      id: 2,
      title: 'Solar Energy: How to Maximize Government Subsidies in 2024',
      slug: 'solar-subsidies-2024',
      excerpt: 'Everything you need to know about solar equipment subsidies, eligibility criteria, and how to apply for maximum benefits.',
      image: '/api/placeholder/400/250',
      author: 'Priya Sharma',
      date: '2024-03-12',
      readTime: '12 min read',
      category: 'Solar Energy',
      tags: ['solar', 'subsidy', 'government']
    },
    {
      id: 3,
      title: 'Smart Home Gadgets: Top 10 Must-Have Devices for 2024',
      slug: 'smart-home-gadgets-2024',
      excerpt: 'Discover the latest smart home gadgets that can transform your living space into a modern, connected home.',
      image: '/api/placeholder/400/250',
      author: 'Amit Patel',
      date: '2024-03-10',
      readTime: '6 min read',
      category: 'Smart Technology',
      tags: ['smart home', 'gadgets', 'automation']
    },
    {
      id: 4,
      title: 'Water Purifier Maintenance Tips for Long-Lasting Performance',
      slug: 'water-purifier-maintenance',
      excerpt: 'Essential maintenance tips to keep your water purifier running efficiently and ensure clean drinking water for your family.',
      image: '/api/placeholder/400/250',
      author: 'Neha Gupta',
      date: '2024-03-08',
      readTime: '5 min read',
      category: 'Water Purifiers',
      tags: ['water purifier', 'maintenance', 'health']
    },
    {
      id: 5,
      title: 'LED Lighting Solutions: Energy Efficiency Meets Style',
      slug: 'led-lighting-solutions',
      excerpt: 'Explore how modern LED lighting can reduce your electricity bills while enhancing your home\'s aesthetic appeal.',
      image: '/api/placeholder/400/250',
      author: 'Vikram Singh',
      date: '2024-03-05',
      readTime: '7 min read',
      category: 'Lighting',
      tags: ['LED', 'lighting', 'energy efficiency']
    },
    {
      id: 6,
      title: 'The Future of Home Electronics: Trends to Watch in 2024',
      slug: 'future-home-electronics',
      excerpt: 'Discover the emerging trends in home electronics that will shape how we live and interact with our devices.',
      image: '/api/placeholder/400/250',
      author: 'Anita Desai',
      date: '2024-03-01',
      readTime: '10 min read',
      category: 'Technology',
      tags: ['future', 'trends', 'electronics']
    }
  ]

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'kitchen', name: 'Kitchen Appliances' },
    { id: 'solar', name: 'Solar Energy' },
    { id: 'smart', name: 'Smart Technology' },
    { id: 'water', name: 'Water Purifiers' },
    { id: 'lighting', name: 'Lighting' }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || 
                           post.category.toLowerCase().includes(selectedCategory.toLowerCase())
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Blog & Resources</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Expert tips, guides, and insights to help you make informed decisions about home electronics
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-12">
            <Card className="overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="aspect-video bg-gray-200">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                      Featured
                    </span>
                    <span className="text-gray-500 text-sm">
                      {filteredPosts[0].category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    <Link href={`/blog/${filteredPosts[0].slug}`} className="hover:text-blue-600 transition-colors">
                      {filteredPosts[0].title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {filteredPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{filteredPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(filteredPosts[0].date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{filteredPosts[0].readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link href={`/blog/${filteredPosts[0].slug}`}>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gray-200">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm">
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Get the latest articles, tips, and exclusive offers delivered straight to your inbox
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/20 border-white/30 text-white placeholder-white/70"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
