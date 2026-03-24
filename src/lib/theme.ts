export type Theme = 'light' | 'dark' | 'system'

export interface ColorPalette {
  name: string
  displayName: string
  colors: {
    background: string
    foreground: string
    primary: string
    primaryForeground: string
    secondary: string
    secondaryForeground: string
    muted: string
    mutedForeground: string
    accent: string
    accentForeground: string
    destructive: string
    destructiveForeground: string
    border: string
    input: string
    ring: string
  }
  gradients: {
    primary: string
    secondary: string
    luxury: string
    success: string
    warning: string
    danger: string
  }
  shadows: {
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
    luxury: string
  }
}

// Next.js Inspired Sleek Themes with macOS Glassmorphism
export const colorPalettes: Record<string, ColorPalette> = {
  // Next.js Dark - Sleek dark theme with glassmorphism
  'nextjs-dark': {
    name: 'nextjs-dark',
    displayName: 'Next.js Dark',
    colors: {
      background: '#000000',
      foreground: '#fafafa',
      primary: '#0070f3', // Next.js blue
      primaryForeground: '#ffffff',
      secondary: '#111111',
      secondaryForeground: '#fafafa',
      muted: '#1a1a1a',
      mutedForeground: '#888888',
      accent: '#7928ca', // Next.js purple accent
      accentForeground: '#ffffff',
      destructive: '#ff4757',
      destructiveForeground: '#ffffff',
      border: '#2a2a2a',
      input: '#1a1a1a',
      ring: '#0070f3',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #0070f3 0%, #4c8bf5 100%)',
      secondary: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)',
      luxury: 'linear-gradient(135deg, #000000 0%, #2a2a2a 100%)',
      success: 'linear-gradient(135deg, #00d084 0%, #00a86b 100%)',
      warning: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
      danger: 'linear-gradient(135deg, #ff4757 0%, #ee5a6f 100%)',
    },
    shadows: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
      md: '0 4px 6px rgba(0, 0, 0, 0.4)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.5)',
      xl: '0 20px 25px rgba(0, 0, 0, 0.6)',
      '2xl': '0 25px 50px rgba(0, 0, 0, 0.7)',
      luxury: '0 20px 40px rgba(0, 112, 243, 0.15)',
    },
  },

  // Next.js Light - Clean light theme
  'nextjs-light': {
    name: 'nextjs-light',
    displayName: 'Next.js Light',
    colors: {
      background: '#ffffff',
      foreground: '#000000',
      primary: '#0070f3', // Next.js blue
      primaryForeground: '#ffffff',
      secondary: '#f8f9fa',
      secondaryForeground: '#000000',
      muted: '#f1f3f4',
      mutedForeground: '#5f6368',
      accent: '#7928ca', // Next.js purple accent
      accentForeground: '#ffffff',
      destructive: '#dc3545',
      destructiveForeground: '#ffffff',
      border: '#dadce0',
      input: '#ffffff',
      ring: '#0070f3',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #0070f3 0%, #4c8bf5 100%)',
      secondary: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f4 100%)',
      luxury: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      success: 'linear-gradient(135deg, #00d084 0%, #00a86b 100%)',
      warning: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
      danger: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
    },
    shadows: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px rgba(0, 0, 0, 0.07)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
      xl: '0 20px 25px rgba(0, 0, 0, 0.12)',
      '2xl': '0 25px 50px rgba(0, 0, 0, 0.15)',
      luxury: '0 20px 40px rgba(0, 112, 243, 0.08)',
    },
  },

  // macOS Glass - Pure glassmorphism theme
  'macos-glass': {
    name: 'macos-glass',
    displayName: 'macOS Glass',
    colors: {
      background: '#000000',
      foreground: '#ffffff',
      primary: '#007aff', // macOS blue
      primaryForeground: '#ffffff',
      secondary: '#1e1e1e',
      secondaryForeground: '#ffffff',
      muted: '#2d2d2d',
      mutedForeground: '#999999',
      accent: '#5ac8fa', // Light blue accent
      accentForeground: '#000000',
      destructive: '#ff453a',
      destructiveForeground: '#ffffff',
      border: '#3a3a3a',
      input: '#1e1e1e',
      ring: '#007aff',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #007aff 0%, #5ac8fa 100%)',
      secondary: 'linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)',
      luxury: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      success: 'linear-gradient(135deg, #30d158 0%, #32d74b 100%)',
      warning: 'linear-gradient(135deg, #ff9500 0%, #ffcc02 100%)',
      danger: 'linear-gradient(135deg, #ff453a 0%, #ff3b30 100%)',
    },
    shadows: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
      md: '0 4px 6px rgba(0, 0, 0, 0.4)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.5)',
      xl: '0 20px 25px rgba(0, 0, 0, 0.6)',
      '2xl': '0 25px 50px rgba(0, 0, 0, 0.7)',
      luxury: '0 20px 40px rgba(0, 122, 255, 0.25)',
    },
  },

  // Minimal Glass - Clean glassmorphism
  'minimal-glass': {
    name: 'minimal-glass',
    displayName: 'Minimal Glass',
    colors: {
      background: '#0a0a0a',
      foreground: '#ffffff',
      primary: '#0070f3',
      primaryForeground: '#ffffff',
      secondary: '#151515',
      secondaryForeground: '#ffffff',
      muted: '#252525',
      mutedForeground: '#888888',
      accent: '#0070f3',
      accentForeground: '#ffffff',
      destructive: '#ff4757',
      destructiveForeground: '#ffffff',
      border: '#333333',
      input: '#151515',
      ring: '#0070f3',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #0070f3 0%, #4c8bf5 100%)',
      secondary: 'linear-gradient(135deg, #151515 0%, #252525 100%)',
      luxury: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
      success: 'linear-gradient(135deg, #00d084 0%, #00a86b 100%)',
      warning: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
      danger: 'linear-gradient(135deg, #ff4757 0%, #ee5a6f 100%)',
    },
    shadows: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.4)',
      md: '0 4px 6px rgba(0, 0, 0, 0.5)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.6)',
      xl: '0 20px 25px rgba(0, 0, 0, 0.7)',
      '2xl': '0 25px 50px rgba(0, 0, 0, 0.8)',
      luxury: '0 20px 40px rgba(0, 112, 243, 0.2)',
    },
  },
}

export const defaultPalette = 'nextjs-dark'
export const systemPalettes = ['nextjs-dark', 'nextjs-light'] as const

export function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function getPaletteForTheme(theme: Theme): string {
  if (theme === 'system') {
    const systemTheme = getSystemTheme()
    return systemTheme === 'dark' ? 'nextjs-dark' : 'nextjs-light'
  }
  return theme === 'dark' ? 'nextjs-dark' : 'nextjs-light'
}

export function generateCSSVariables(palette: ColorPalette): string {
  const variables: string[] = []

  // Color variables
  Object.entries(palette.colors).forEach(([key, value]) => {
    const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase()
    variables.push(`  --${cssVar}: ${value};`)
  })

  // Gradient variables
  Object.entries(palette.gradients).forEach(([key, value]) => {
    const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase()
    variables.push(`  --gradient-${cssVar}: ${value};`)
  })

  // Shadow variables
  Object.entries(palette.shadows).forEach(([key, value]) => {
    const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase()
    variables.push(`  --shadow-${cssVar}: ${value};`)
  })

  // Additional variables
  variables.push(`  --glass-backdrop: ${palette.colors.background}cc;`)
  variables.push(`  --glass-border: ${palette.colors.border}33;`)
  variables.push(`  --radius: 0.5rem;`) // Reduced radius for more compact look

  return variables.join('\n')
}
