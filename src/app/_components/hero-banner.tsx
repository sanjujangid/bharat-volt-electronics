'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, ChevronLeft, ChevronRight, Sparkles, Shield, Zap, Droplets, Sun, Wind } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeroSlide {
  title: string
  subtitle: string
  image: string
  cta: string
  href: string
  features: string[]
  badge: string
}

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const getFeatureIcon = (feature: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      "Auto-Clean Technology": <Sparkles className="h-4 w-4" />,
      "LED Lighting": <Zap className="h-4 w-4" />,
      "Touch Controls": <Wind className="h-4 w-4" />,
      "Low Noise 46dB": <Shield className="h-4 w-4" />,
      "RO+UV+UF+Alkaline": <Droplets className="h-4 w-4" />,
      "Mineral Retention": <Sparkles className="h-4 w-4" />,
      "TDS Control": <Shield className="h-4 w-4" />,
      "Copper Purification": <Droplets className="h-4 w-4" />,
      "30% Govt. Subsidy": <Sun className="h-4 w-4" />,
      "5-Year Warranty": <Shield className="h-4 w-4" />,
      "Net Metering": <Zap className="h-4 w-4" />,
      "Smart Monitoring": <Wind className="h-4 w-4" />
    }
    return iconMap[feature] || <Sparkles className="h-4 w-4" />
  }

  const getFeatureColor = (feature: string) => {
    const colorMap: { [key: string]: string } = {
      "Auto-Clean Technology": "bg-blue-500/20 text-blue-300 border-blue-400/30",
      "LED Lighting": "bg-yellow-500/20 text-yellow-300 border-yellow-400/30",
      "Touch Controls": "bg-purple-500/20 text-purple-300 border-purple-400/30",
      "Low Noise 46dB": "bg-green-500/20 text-green-300 border-green-400/30",
      "RO+UV+UF+Alkaline": "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
      "Mineral Retention": "bg-blue-500/20 text-blue-300 border-blue-400/30",
      "TDS Control": "bg-orange-500/20 text-orange-300 border-orange-400/30",
      "Copper Purification": "bg-amber-500/20 text-amber-300 border-amber-400/30",
      "30% Govt. Subsidy": "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
      "5-Year Warranty": "bg-indigo-500/20 text-indigo-300 border-indigo-400/30",
      "Net Metering": "bg-violet-500/20 text-violet-300 border-violet-400/30",
      "Smart Monitoring": "bg-pink-500/20 text-pink-300 border-pink-400/30"
    }
    return colorMap[feature] || "bg-gray-500/20 text-gray-300 border-gray-400/30"
  };

  const heroSlides: HeroSlide[] = [
    {
      title: "Premium Kitchen Chimneys",
      subtitle: "Transform your cooking experience with advanced auto-clean technology and powerful 1500m³/h suction",
      image: "/images/chimney-hero.jpg",
      cta: "Explore Chimneys",
      href: "/categories/chimneys",
      features: ["Auto-Clean Technology", "LED Lighting", "Touch Controls", "Low Noise 46dB"],
      badge: "Best Seller"
    },
    {
      title: "Advanced Water Purifiers",
      subtitle: "Pure, healthy water with RO+UV+UF+Alkaline technology and essential mineral retention",
      image: "/images/water-purifier-hero.jpg",
      cta: "View Purifiers",
      href: "/categories/ro",
      features: ["RO+UV+UF+Alkaline", "Mineral Retention", "TDS Control", "Copper Purification"],
      badge: "Health Choice"
    },
    {
      title: "Solar Solutions with Govt. Subsidy",
      subtitle: "Go green and save money with government-backed solar equipment featuring 30% subsidy",
      image: "/images/solar-hero.jpg",
      cta: "View Solar Products",
      href: "/categories/solar",
      features: ["30% Govt. Subsidy", "5-Year Warranty", "Net Metering", "Smart Monitoring"],
      badge: "Eco Choice"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        setIsTransitioning(false)
      }, 300)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [heroSlides.length, isAutoPlaying])

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsTransitioning(false)
    }, 300)
  }

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      setIsTransitioning(false)
    }, 300)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <section 
      className="relative h-[700px] overflow-hidden bg-black"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-[var(--primary)]/10 z-10" />
        
        {/* Slide Backgrounds */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <div className="w-full h-full bg-black" />
            <div className="absolute inset-0 bg-black/70" />
            <div className="absolute inset-0 bg-[var(--primary)]/20" />
            {/* Placeholder for actual images */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/20 text-6xl font-bold">Hero Image {index + 1}</div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <div className={`transition-all duration-700 ${isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[var(--primary)] rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">{heroSlides[currentSlide].badge}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight text-white">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">
              {heroSlides[currentSlide].subtitle}
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap gap-3 mb-8">
              {heroSlides[currentSlide].features.map((feature, index) => (
                <div key={index} className={`backdrop-blur-sm rounded-full px-6 py-3 border min-w-fit ${getFeatureColor(feature)}`}>
                  <div className="flex items-center">
                    <span className="text-base mr-2">{getFeatureIcon(feature)}</span>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={heroSlides[currentSlide].href}>
                <Button className="bg-white text-black hover:bg-gray-100 h-14 px-8 rounded-xl font-semibold">
                  {heroSlides[currentSlide].cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 h-14 px-8 rounded-xl backdrop-blur-sm bg-white/5"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className={cn(
          "absolute left-8 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300",
          !isHovering && "opacity-0 pointer-events-none"
        )}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className={cn(
          "absolute right-8 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300",
          !isHovering && "opacity-0 pointer-events-none"
        )}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === currentSlide 
                  ? "w-8 bg-white" 
                  : "w-2 bg-white/50 hover:bg-white/70"
              )}
            />
          ))}
        </div>
      </div>
      
      {/* Auto-play Toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-8 right-8 z-20 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <div className={cn("w-4 h-4 rounded-full border-2 border-white", isAutoPlaying ? "bg-white" : "bg-transparent")} />
      </button>
    </section>
  )
}
