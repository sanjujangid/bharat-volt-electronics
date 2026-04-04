import React from 'react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  showText?: boolean
  variant?: 'default' | 'light' | 'dark'
}

// Circular Lightning Bolt Icon Component
function LogoIcon({ size = 'md', boltColor = 'var(--accent)' }: { size?: 'sm' | 'md' | 'lg' | 'xl', boltColor?: string }) {
  const sizes = {
    sm: { container: 32, bolt: 16 },
    md: { container: 40, bolt: 20 },
    lg: { container: 48, bolt: 24 },
    xl: { container: 56, bolt: 28 }
  }

  const { container, bolt } = sizes[size]

  return (
    <svg
      width={container}
      height={container}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring - uses currentColor from parent */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="currentColor"
        strokeWidth="6"
        fill="none"
      />
      {/* Lightning bolt - uses CSS variable for accent color */}
      <path
        d="M58 20L38 48H52L42 80L62 52H48L58 20Z"
        fill={boltColor}
        stroke={boltColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Logo({ 
  size = 'md', 
  className = '', 
  showText = true,
  variant = 'default'
}: LogoProps) {
  const containerSizes = {
    sm: 'gap-2',
    md: 'gap-3',
    lg: 'gap-3',
    xl: 'gap-4'
  }

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  }

  const subTextSizes = {
    sm: 'text-[10px]',
    md: 'text-xs',
    lg: 'text-sm',
    xl: 'text-base'
  }

  const iconSizes = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl'
  } as const

  // Color variants using CSS variables for theme adaptation
  const colors = {
    default: {
      bharat: 'text-[var(--foreground)]',
      volt: 'text-[var(--accent)]',
      electronics: 'text-[var(--muted-foreground)]',
      icon: 'text-[var(--foreground)]',
      boltFill: 'var(--accent)'
    },
    light: {
      bharat: 'text-[var(--foreground)]',
      volt: 'text-[var(--accent)]',
      electronics: 'text-[var(--muted-foreground)]',
      icon: 'text-[var(--foreground)]',
      boltFill: 'var(--accent)'
    },
    dark: {
      bharat: 'text-[var(--foreground)]',
      volt: 'text-[var(--accent)]',
      electronics: 'text-[var(--muted-foreground)]',
      icon: 'text-[var(--foreground)]',
      boltFill: 'var(--accent)'
    }
  }

  const theme = colors[variant]

  return (
    <div className={`flex items-center ${containerSizes[size]} ${className}`}>
      {/* Logo Icon */}
      <div className={`${theme.icon} flex-shrink-0`}>
        <LogoIcon size={iconSizes[size]} boltColor={theme.boltFill} />
      </div>

      {showText && (
        <div className="flex flex-col">
          {/* Main Logo Text - Bharat Volt */}
          <div className={`font-bold ${textSizes[size]} leading-none tracking-tight flex items-center`}>
            <span className={theme.bharat}>
              BHARAT
            </span>
            <span className={`${theme.volt} ml-2`}>
              VOLT
            </span>
          </div>
          
          {/* Subtitle - Electronics with lines */}
          <div className={`${subTextSizes[size]} ${theme.electronics} font-medium tracking-[0.15em] mt-0.5 flex items-center gap-2`}>
            <span className="h-px w-3 bg-current opacity-60" />
            ELECTRONICS
            <span className="h-px w-3 bg-current opacity-60" />
          </div>
        </div>
      )}
    </div>
  )
}

// Simplified version for small spaces
export function LogoIconOnly({ size = 'md', className = '', variant = 'default' }: { 
  size?: 'sm' | 'md' | 'lg' | 'xl', 
  className?: string,
  variant?: 'default' | 'light' | 'dark'
}) {
  const colors = {
    default: {
      icon: 'text-[var(--foreground)]',
      boltFill: 'var(--accent)'
    },
    light: {
      icon: 'text-[var(--foreground)]',
      boltFill: 'var(--accent)'
    },
    dark: {
      icon: 'text-[var(--foreground)]',
      boltFill: 'var(--accent)'
    }
  }

  const theme = colors[variant]

  return (
    <div className={`${theme.icon} ${className}`}>
      <LogoIcon size={size} boltColor={theme.boltFill} />
    </div>
  )
}

// Compact version for mobile
export function CompactLogo({ className = '', variant = 'default' }: { 
  className?: string,
  variant?: 'default' | 'light' | 'dark'
}) {
  const colors = {
    default: {
      bharat: 'text-[var(--foreground)]',
      volt: 'text-[var(--accent)]',
      electronics: 'text-[var(--muted-foreground)]',
      icon: 'text-[var(--foreground)]',
      boltFill: 'var(--accent)'
    },
    light: {
      bharat: 'text-[var(--foreground)]',
      volt: 'text-[var(--accent)]',
      electronics: 'text-[var(--muted-foreground)]',
      icon: 'text-[var(--foreground)]',
      boltFill: 'var(--accent)'
    },
    dark: {
      bharat: 'text-[var(--foreground)]',
      volt: 'text-[var(--accent)]',
      electronics: 'text-[var(--muted-foreground)]',
      icon: 'text-[var(--foreground)]',
      boltFill: 'var(--accent)'
    }
  }

  const theme = colors[variant]

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${theme.icon} flex-shrink-0`}>
        <LogoIcon size="sm" boltColor={theme.boltFill} />
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-base leading-none tracking-tight flex items-center">
          <span className={theme.bharat}>BHARAT</span>
          <span className={`${theme.volt} ml-1.5`}>VOLT</span>
        </div>
        <div className={`text-[10px] ${theme.electronics} font-medium tracking-[0.15em] mt-0.5 flex items-center gap-1.5`}>
          <span className="h-px w-2 bg-current opacity-60" />
          ELECTRONICS
          <span className="h-px w-2 bg-current opacity-60" />
        </div>
      </div>
    </div>
  )
}

// Horizontal version for navigation
export function HorizontalLogo({ className = '', variant = 'default' }: { 
  className?: string,
  variant?: 'default' | 'light' | 'dark'
}) {
  const colors = {
    default: {
      bharat: 'text-[var(--foreground)]',
      volt: 'text-[var(--accent)]',
      electronics: 'text-[var(--muted-foreground)]',
      icon: 'text-[var(--foreground)]',
      boltFill: 'var(--accent)'
    },
    light: {
      bharat: 'text-[var(--foreground)]',
      volt: 'text-[var(--accent)]',
      electronics: 'text-[var(--muted-foreground)]',
      icon: 'text-[var(--foreground)]',
      boltFill: 'var(--accent)'
    },
    dark: {
      bharat: 'text-[var(--foreground)]',
      volt: 'text-[var(--accent)]',
      electronics: 'text-[var(--muted-foreground)]',
      icon: 'text-[var(--foreground)]',
      boltFill: 'var(--accent)'
    }
  }

  const theme = colors[variant]

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${theme.icon} flex-shrink-0`}>
        <LogoIcon size="md" boltColor={theme.boltFill} />
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-xl leading-none tracking-tight flex items-center">
          <span className={theme.bharat}>BHARAT</span>
          <span className={`${theme.volt} ml-2`}>VOLT</span>
        </div>
        <div className={`text-xs ${theme.electronics} font-medium tracking-[0.15em] mt-0.5 flex items-center gap-2`}>
          <span className="h-px w-3 bg-current opacity-60" />
          ELECTRONICS
          <span className="h-px w-3 bg-current opacity-60" />
        </div>
      </div>
    </div>
  )
}
