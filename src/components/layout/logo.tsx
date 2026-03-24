import React from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  showText?: boolean
}

export default function Logo({ size = 'md', className = '', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-20 w-20'
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-[#0070f3] to-[#4c8bf5] rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden group`}>
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20" />
        
        {/* "BV" Monogram */}
        <div className="relative text-white font-bold">
          <span className="text-xs leading-none">BV</span>
        </div>
        
        {/* Hover effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4c8bf5] to-[#0070f3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <div className={`font-display font-bold ${textSizes[size]} text-[var(--foreground)] leading-tight`}>
            <span className="text-[#0070f3]">Bharat</span>{' '}
            <span className="text-[#4c8bf5]">Volt</span>
          </div>
          <div className={`text-[var(--muted-foreground)] font-medium ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'}`}>
            Electronics
          </div>
        </div>
      )}
    </div>
  )
}

// Simplified version for small spaces (like header)
export function LogoIcon({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg' | 'xl', className?: string }) {
  return <Logo size={size} className={className} showText={false} />
}

// Compact version for mobile
export function CompactLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="h-10 w-10 bg-gradient-to-br from-[#0070f3] to-[#4c8bf5] rounded-lg flex items-center justify-center shadow-md">
        <span className="text-white font-bold text-xs">BV</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[#0070f3] font-bold text-sm leading-none">Bharat</span>
        <span className="text-[#4c8bf5] font-bold text-sm leading-none">Volt</span>
        <span className="text-[var(--muted-foreground)] text-xs font-medium">Electronics</span>
      </div>
    </div>
  )
}
