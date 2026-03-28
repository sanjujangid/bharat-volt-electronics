'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ShoppingCart, Search, User, Menu, X, Phone, ChevronDown, Heart, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { HorizontalLogo } from './logo'
import CartButton from '@/components/cart/cart-button'
import { ThemeSwitcher } from '@/components/theme/theme-switcher'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { 
      name: 'Categories', 
      href: '/categories',
      dropdown: [
        { name: 'Kitchen Chimneys', href: '/categories/chimneys' },
        { name: 'Smart Gadgets', href: '/categories/gadgets' },
        { name: 'Water Purifiers', href: '/categories/ro' },
        { name: 'Solar Equipment', href: '/categories/solar' },
        { name: 'Lighting Solutions', href: '/categories/lighting' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border)]'
            : 'bg-[var(--background)]/60 backdrop-blur-lg border-b border-transparent'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="group">
              <HorizontalLogo className="transition-transform duration-300 group-hover:scale-105" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        className="flex items-center space-x-1 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-200 font-medium py-2"
                        onMouseEnter={() => setIsCategoriesOpen(true)}
                        onMouseLeave={() => setIsCategoriesOpen(false)}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div
                        className={cn(
                          'absolute top-full left-0 mt-1 w-48 bg-[var(--popover)] border border-[var(--border)] rounded-xl shadow-lg transition-all duration-200',
                          isCategoriesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                        )}
                        onMouseEnter={() => setIsCategoriesOpen(true)}
                        onMouseLeave={() => setIsCategoriesOpen(false)}
                      >
                        <div className="p-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-3 rounded-xl hover:bg-[var(--secondary)] transition-colors duration-200 text-[var(--foreground)] hover:text-[var(--accent)]"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-200 font-medium py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Theme Switcher */}
              <ThemeSwitcher />
              
              {/* Search */}
              <div className="hidden lg:block">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                  className="h-10 w-10 rounded-lg hover:bg-[var(--secondary)] transition-colors text-[var(--foreground)] hover:text-[var(--accent)]"
                  aria-label="Open search"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Wishlist */}
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-lg hover:bg-[var(--secondary)] transition-colors text-[var(--foreground)] hover:text-[var(--accent)]"
                aria-label="Wishlist"
              >
                <Heart className="h-5 w-5" />
              </Button>
              
              {/* User Account */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden md:flex h-10 w-10 rounded-lg hover:bg-[var(--secondary)] transition-colors text-[var(--foreground)] hover:text-[var(--accent)]"
                aria-label="User account"
              >
                <User className="h-5 w-5" />
              </Button>
              
              {/* Cart */}
              <CartButton />
              
              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden h-10 w-10 rounded-lg hover:bg-[var(--secondary)] transition-colors text-[var(--foreground)]"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" onClick={() => setIsSearchOpen(false)}>
          <div className="bg-[var(--background)]/95 backdrop-blur-xl border-b border-[var(--border)]" onClick={(e) => e.stopPropagation()}>
            <div className="container mx-auto px-4 py-6">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center space-x-4">
                  <Search className="h-6 w-6 text-[var(--muted-foreground)]" />
                  <Input
                    type="search"
                    placeholder="Search for products, categories..."
                    className="flex-1 h-12 text-lg bg-[var(--secondary)]/50 border-[var(--border)] focus:bg-[var(--secondary)] transition-colors rounded-xl text-[var(--foreground)] placeholder-[var(--muted-foreground)]"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchOpen(false)}
                    className="h-10 w-10 rounded-xl"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-80 bg-[var(--background)] shadow-2xl overflow-hidden border-l border-[var(--border)]">
            <div className="p-6 border-b border-[var(--border)]">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Menu</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--muted-foreground)] h-5 w-5" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 h-12 bg-[var(--secondary)] border-[var(--border)] rounded-xl"
                />
              </div>
              
              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button className="w-full text-left px-4 py-3 rounded-xl hover:bg-[var(--secondary)] transition-colors font-medium text-[var(--foreground)] flex items-center justify-between">
                          {item.name}
                          <ChevronDown className="h-4 w-4" />
                        </button>
                        <div className="pl-4 mt-2 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 rounded-lg hover:bg-[var(--secondary)] transition-colors text-[var(--muted-foreground)]"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 rounded-xl hover:bg-[var(--secondary)] transition-colors font-medium text-[var(--foreground)]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              
              {/* Mobile Account */}
              <div className="pt-6 border-t border-[var(--border)] space-y-3">
                <Button variant="outline" className="w-full justify-start h-12 rounded-xl">
                  <User className="h-4 w-4 mr-2" />
                  My Account
                </Button>
                <Button variant="outline" className="w-full justify-start h-12 rounded-xl">
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
