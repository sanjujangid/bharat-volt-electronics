'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft, Share2, Heart, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string

  // Sample blog post data - in real app, this would be fetched from API
  const blogPost = {
    id: 1,
    title: 'Complete Guide to Choosing the Right Kitchen Chimney',
    slug: 'guide-kitchen-chimney',
    excerpt: 'Learn how to select the perfect kitchen chimney for your home with our comprehensive guide covering suction power, filters, and installation.',
    content: `
# Complete Guide to Choosing the Right Kitchen Chimney

When it comes to maintaining a clean and odor-free kitchen, a good chimney is essential. But with so many options available, how do you choose the right one? This comprehensive guide will help you make an informed decision.

## Understanding Kitchen Chimneys

A kitchen chimney, also known as a range hood, is an appliance that removes smoke, grease, and odors from your kitchen. It works by drawing air through filters and expelling it outside or recirculating it back into the kitchen after purification.

## Key Factors to Consider

### 1. Suction Power

The suction power of a chimney is measured in cubic meters per hour (m³/hr). Here's what you need:

- **Small Kitchen (up to 200 sq ft)**: 500-700 m³/hr
- **Medium Kitchen (200-300 sq ft)**: 700-1000 m³/hr
- **Large Kitchen (300+ sq ft)**: 1000+ m³/hr

### 2. Filter Types

Different filter types offer varying levels of efficiency:

#### Baffle Filters
- Best for Indian cooking
- Low maintenance
- Durable and long-lasting
- Separate oil particles effectively

#### Cassette Filters
- Basic aluminum mesh filters
- Require frequent cleaning
- Less expensive
- Suitable for light cooking

#### Charcoal Filters
- Remove odors effectively
- Require regular replacement
- Ideal for recirculation mode
- Not suitable for heavy oil cooking

### 3. Mounting Options

#### Wall-Mounted Chimneys
- Most common type
- Installed against the wall
- Available in various sizes
- Suitable for most kitchens

#### Island Chimneys
- Designed for kitchen islands
- More expensive
- Require more installation space
- Great for modern kitchens

#### Built-in Chimneys
- Installed within cabinets
- Space-saving design
- Integrated look
- Higher installation cost

### 4. Size Considerations

The chimney should be slightly wider than your cooktop:

- **Standard**: 60cm chimney for 60cm cooktop
- **Larger**: 90cm chimney for 60cm cooktop (better coverage)
- **Professional**: 90cm+ chimney for multiple burners

## Installation Tips

1. **Height**: Install 24-30 inches above the cooktop
2. **Ventilation**: Ensure proper external venting
3. **Electrical**: Dedicated power point with proper earthing
4. **Professional Help**: Always use certified installers

## Maintenance Guidelines

### Regular Cleaning
- Clean external surfaces weekly
- Wash filters monthly (for baffle/cassette)
- Replace charcoal filters every 6-8 months

### Professional Service
- Annual servicing recommended
- Check motor and fan performance
- Inspect ducting for leaks
- Clean internal components

## Top Brands to Consider

1. **Bharat Volt** - Premium quality with excellent service
2. **Elica** - Italian design and technology
3. **Faber** - Innovative features and reliability
4. **Kaff** - Budget-friendly options
5. **Hafele** - German engineering and precision

## Cost Breakdown

- **Basic Models**: ₹8,000 - ₹15,000
- **Mid-Range**: ₹15,000 - ₹30,000
- **Premium**: ₹30,000 - ₹60,000
- **Installation**: ₹2,000 - ₹5,000
- **Ducting**: ₹1,000 - ₹3,000

## Final Tips

1. Consider your cooking style and frequency
2. Check noise levels (under 60 dB is good)
3. Look for auto-clean features
4. Verify warranty and service terms
5. Read customer reviews and ratings

## Conclusion

Investing in a good kitchen chimney is crucial for maintaining a healthy cooking environment. Consider your specific needs, kitchen layout, and budget before making a decision. Remember that a slightly higher initial investment can save you money in the long run through better performance and lower maintenance costs.

For personalized recommendations and expert installation, contact our team at Bharat Volt Electronics. We offer a wide range of kitchen chimneys to suit every need and budget.
    `,
    image: '/api/placeholder/800/400',
    author: 'Rajesh Kumar',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'Kitchen Appliances',
    tags: ['chimney', 'kitchen', 'guide', 'appliances'],
    likes: 245,
    comments: 32
  }

  const relatedPosts = [
    {
      id: 2,
      title: '5 Common Kitchen Chimney Problems and Solutions',
      slug: 'chimney-problems-solutions',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'How to Clean and Maintain Your Kitchen Chimney',
      slug: 'clean-maintain-chimney',
      readTime: '5 min read'
    },
    {
      id: 4,
      title: 'Best Kitchen Chimneys Under ₹20,000',
      slug: 'budget-chimneys',
      readTime: '7 min read'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{blogPost.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-display font-bold mb-4 text-gray-900">
              {blogPost.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{blogPost.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(blogPost.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                {blogPost.category}
              </span>
              {blogPost.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="aspect-video bg-gray-200 rounded-lg mb-8">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg" />
            </div>
          </div>

          {/* Social Actions */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Button variant="outline" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              {blogPost.likes} Likes
            </Button>
            <Button variant="outline" size="sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              {blogPost.comments} Comments
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: blogPost.content.replace(/\n/g, '<br>') }} />
          </div>

          {/* Author Bio */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {blogPost.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{blogPost.author}</h3>
                  <p className="text-gray-600">
                    Expert in home appliances and kitchen solutions with over 10 years of experience. 
                    Passionate about helping customers make informed decisions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-gray-200 rounded-lg mb-4">
                      <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg" />
                    </div>
                    <h3 className="font-semibold mb-2 line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Comments ({blogPost.comments})</h2>
            
            {/* Comment Form */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Leave a Comment</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder="Your Comment"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Post Comment
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sample Comments */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">John Doe</h4>
                        <span className="text-sm text-gray-500">2 days ago</span>
                      </div>
                      <p className="text-gray-700">
                        Great article! This really helped me choose the right chimney for my kitchen. 
                        The explanation about suction power was particularly helpful.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
