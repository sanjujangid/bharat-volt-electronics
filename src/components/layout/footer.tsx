'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Products', href: '/products' },
      { name: 'Categories', href: '/categories' },
      { name: 'Deals & Offers', href: '/deals' },
      { name: 'Blog', href: '/blog' },
    ]
  },
  {
    title: 'Customer Service',
    links: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Shipping & Delivery', href: '/shipping' },
      { name: 'Returns & Exchanges', href: '/returns' },
      { name: 'Warranty', href: '/warranty' },
      { name: 'FAQs', href: '/faq' },
    ]
  },
  {
    title: 'Policies',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Refund Policy', href: '/refund' },
      { name: 'Security', href: '/security' },
    ]
  },
  {
    title: 'Categories',
    links: [
      { name: 'Kitchen Chimneys', href: '/categories/chimneys' },
      { name: 'Smart Gadgets', href: '/categories/gadgets' },
      { name: 'Water Purifiers', href: '/categories/ro' },
      { name: 'Solar Equipment', href: '/categories/solar' },
      { name: 'Lighting Solutions', href: '/categories/lighting' },
    ]
  }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BV</span>
              </div>
              <span className="font-display text-xl font-bold">Bharat Volt</span>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted partner for premium electronics and home appliances. 
              Quality products, competitive prices, and exceptional service.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold">Phone Support</h4>
                <p className="text-gray-300">1800-XXX-XXXX</p>
                <p className="text-gray-400 text-sm">Mon-Sat: 9AM-8PM</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold">Email Support</h4>
                <p className="text-gray-300">support@bharatvolt.com</p>
                <p className="text-gray-400 text-sm">24/7 Available</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold">Corporate Office</h4>
                <p className="text-gray-300">Delhi, India</p>
                <p className="text-gray-400 text-sm">Visit our showroom</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h4 className="font-semibold mb-2">We Accept</h4>
              <div className="flex items-center space-x-2">
                <div className="px-3 py-1 bg-gray-800 rounded text-sm">UPI</div>
                <div className="px-3 py-1 bg-gray-800 rounded text-sm">Razorpay</div>
                <div className="px-3 py-1 bg-gray-800 rounded text-sm">PayU</div>
                <div className="px-3 py-1 bg-gray-800 rounded text-sm">Cards</div>
                <div className="px-3 py-1 bg-gray-800 rounded text-sm">COD</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-gray-400 text-sm">
                © 2024 Bharat Volt Electronics. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              Empowering Indian homes with cutting-edge technology
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
              <span>•</span>
              <Link href="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
              <span>•</span>
              <Link href="/careers" className="hover:text-white transition-colors">
                Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
