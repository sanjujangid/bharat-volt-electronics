'use client'

import Link from 'next/link'
import { CheckCircle, Package, Truck, ArrowRight, Home } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function OrderSuccessPage() {
  const orderNumber = `BV${Math.floor(Math.random() * 1000000)}`
  const estimatedDelivery = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-display font-bold mb-2">Order Confirmed!</h1>
            <p className="text-lg text-gray-600">
              Thank you for your order. We've received your request and will process it shortly.
            </p>
          </div>

          {/* Order Details */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">Order Number</h2>
                <div className="text-2xl font-bold text-blue-600">{orderNumber}</div>
                <p className="text-sm text-gray-500 mt-1">
                  We've sent a confirmation email with all the details.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Package className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Processing</h3>
                  <p className="text-sm text-gray-600">
                    Your order is being prepared for shipment
                  </p>
                </div>
                
                <div className="text-center">
                  <Truck className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">Estimated Delivery</h3>
                  <p className="text-sm text-gray-600">
                    {estimatedDelivery}
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-600 font-bold text-sm">24/7</span>
                  </div>
                  <h3 className="font-semibold mb-1">Customer Support</h3>
                  <p className="text-sm text-gray-600">
                    We're here to help with any questions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Timeline */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Order Confirmed</h3>
                    <p className="text-sm text-gray-600">Your order has been received and confirmed</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Processing</h3>
                    <p className="text-sm text-gray-600">We're preparing your items for shipment</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Shipped</h3>
                    <p className="text-sm text-gray-600">Your order is on its way to you</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Delivered</h3>
                    <p className="text-sm text-gray-600">Your order has been delivered</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/products">
                <Button variant="outline" className="w-full">
                  Continue Shopping
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              
              <Link href="/contact">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Contact Support
                </Button>
              </Link>
            </div>
            
            <Link href="/" className="block text-center">
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Important Information */}
          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-blue-800 mb-2">Important Information</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• You'll receive tracking details via email once your order ships</li>
                <li>• For any changes to your order, please contact us within 2 hours</li>
                <li>• Delivery time may vary based on your location</li>
                <li>• Please inspect your package upon delivery</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
