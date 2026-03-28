import React from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  showText?: boolean
}

export default function Logo({ size = 'md', className = '', showText = true }: LogoProps) {
  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  }

  const subTextSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  }

  const fontWeights = {
    sm: 'font-semibold',
    md: 'font-bold',
    lg: 'font-extrabold',
    xl: 'font-black'
  }

  return (
    <div className={`flex items-center ${className}`}>
      {showText && (
        <div className="flex flex-col">
          {/* Main Logo Text - Bharat Volt */}
          <div className={`font-sans ${fontWeights[size]} ${textSizes[size]} leading-tight tracking-tight`}>
            <span className="text-[var(--foreground)]">
              Bharat
            </span>
            <span className="text-[var(--foreground)] ml-2">
              Volt
            </span>
          </div>
          
          {/* Subtitle - Electronics */}
          <div className={`${subTextSizes[size]} text-[var(--muted-foreground)] font-medium tracking-wide mt-1`}>
            Electronics
          </div>
        </div>
      )}
    </div>
  )
}

// Simplified version for small spaces (like header)
export function LogoIcon({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg' | 'xl', className?: string }) {
  return <Logo size={size} className={className} showText={true} />
}

// Compact version for mobile
export function CompactLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex flex-col">
        <div className="font-sans font-bold text-sm leading-tight tracking-tight">
          <span className="text-[var(--foreground)]">
            Bharat
          </span>
          <span className="text-[var(--foreground)] ml-1">
            Volt
          </span>
        </div>
        <div className="text-xs text-[var(--muted-foreground)] font-medium tracking-wide mt-0.5">
          Electronics
        </div>
      </div>
    </div>
  )
}

// Horizontal version for navigation
export function HorizontalLogo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="font-sans font-bold text-2xl leading-tight tracking-tight">
        <span className="text-[var(--foreground)]">
          Bharat
        </span>
        <span className="text-[var(--foreground)] ml-2">
          Volt
        </span>
        <span className="text-[var(--muted-foreground)] font-medium ml-3 text-sm tracking-wide">
          Electronics
        </span>
      </div>
    </div>
  )
}
