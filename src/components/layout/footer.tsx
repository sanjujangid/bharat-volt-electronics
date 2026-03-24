'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from '@/components/layout/logo'

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
    <footer className="bg-[var(--background)] border-t border-[var(--border)]">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo size="lg" />
            </div>
            <p className="text-[var(--muted-foreground)] mb-6 leading-relaxed">
              Your trusted partner for premium electronics and home appliances. 
              Bharat Volt Electronics - Quality products, competitive prices, and exceptional service.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:bg-[var(--secondary)] h-10 w-10 rounded-xl">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:bg-[var(--secondary)] h-10 w-10 rounded-xl">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:bg-[var(--secondary)] h-10 w-10 rounded-xl">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-[var(--muted-foreground)] hover:text-[var(--primary)] hover:bg-[var(--secondary)] h-10 w-10 rounded-xl">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-lg mb-4 text-[var(--foreground)]">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-200"
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
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--foreground)]">Phone Support</h4>
                <p className="text-[var(--muted-foreground)]">1800-XXX-XXXX</p>
                <p className="text-[var(--muted-foreground)]/80 text-sm">Mon-Sat: 9AM-8PM</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--foreground)]">Email Support</h4>
                <p className="text-[var(--muted-foreground)]">support@bharatvolt.com</p>
                <p className="text-[var(--muted-foreground)]/80 text-sm">24/7 Available</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--foreground)]">Corporate Office</h4>
                <p className="text-[var(--muted-foreground)]">Jaipur, Rajasthan</p>
                <p className="text-[var(--muted-foreground)]/80 text-sm">Visit our showroom</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <h4 className="font-semibold mb-2 text-[var(--foreground)]">We Accept</h4>
              <div className="flex items-center space-x-2">
                <div className="px-3 py-1 bg-[var(--secondary)] rounded-lg text-sm text-[var(--muted-foreground)]">UPI</div>
                <div className="px-3 py-1 bg-[var(--secondary)] rounded-lg text-sm text-[var(--muted-foreground)]">Razorpay</div>
                <div className="px-3 py-1 bg-[var(--secondary)] rounded-lg text-sm text-[var(--muted-foreground)]">PayU</div>
                <div className="px-3 py-1 bg-[var(--secondary)] rounded-lg text-sm text-[var(--muted-foreground)]">Cards</div>
                <div className="px-3 py-1 bg-[var(--secondary)] rounded-lg text-sm text-[var(--muted-foreground)]">COD</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Clock className="h-4 w-4 text-[var(--muted-foreground)]" />
              <span className="text-[var(--muted-foreground)] text-sm">
                © 2024 Bharat Volt Electronics. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[var(--secondary)] py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-[var(--muted-foreground)] text-sm mb-2 md:mb-0">
              Empowering Indian homes with cutting-edge technology
            </p>
            <div className="flex items-center space-x-4 text-sm text-[var(--muted-foreground)]">
              <Link href="/sitemap" className="hover:text-[var(--primary)] transition-colors">
                Sitemap
              </Link>
              <span>•</span>
              <Link href="/accessibility" className="hover:text-[var(--primary)] transition-colors">
                Accessibility
              </Link>
              <span>•</span>
              <Link href="/careers" className="hover:text-[var(--primary)] transition-colors">
                Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
