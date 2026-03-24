'use client'

import { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

export default function StayUpdated() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false)
      }, 3000)
    }, 1000)
  }

  const benefits = [
    "Exclusive offers and discounts",
    "New product launches",
    "Expert tips and guides",
    "Government subsidy updates",
    "Priority customer support"
  ]

  return (
    <section className="py-20 bg-[var(--primary)] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, new product launches, and premium content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Newsletter Form */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Get Exclusive Deals</h3>
                <p className="text-white/80 mb-6">
                  Join 50,000+ happy customers and never miss an offer
                </p>

                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder-white/60 focus:bg-white/30 h-12 rounded-xl"
                      required
                    />
                    <Button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-white text-[var(--primary)] hover:bg-gray-100 h-12 rounded-xl font-semibold"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="w-4 h-4 border-2 border-[var(--primary)] border-t-transparent rounded-full animate-spin mr-2" />
                          Subscribing...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          Subscribe
                          <Send className="ml-2 h-4 w-4" />
                        </div>
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Successfully Subscribed!</h4>
                    <p className="text-white/80">
                      Check your email for confirmation
                    </p>
                  </div>
                )}

                <p className="text-xs text-white/60 mt-4 text-center">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">What You'll Get</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="text-white/90">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="mt-8 p-4 bg-white/10 rounded-xl border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">50,000+</div>
                    <div className="text-sm text-white/80">Happy Subscribers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">4.8★</div>
                    <div className="text-sm text-white/80">Customer Rating</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm text-white/80">Open Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
              <div className="w-4 h-4 bg-green-400 rounded-full" />
              <span className="text-sm">No Spam</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
              <div className="w-4 h-4 bg-blue-400 rounded-full" />
              <span className="text-sm">Weekly Updates</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
              <div className="w-4 h-4 bg-purple-400 rounded-full" />
              <span className="text-sm">Exclusive Content</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
