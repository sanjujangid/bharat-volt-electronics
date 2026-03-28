export type Theme = 'light' | 'dark' | 'system'

export interface ColorPalette {
  name: string
  displayName: string
  colors: {
    background: string
    foreground: string
    primary: string
    'primary-foreground': string
    secondary: string
    'secondary-foreground': string
    muted: string
    'muted-foreground': string
    accent: string
    'accent-foreground': string
    destructive: string
    'destructive-foreground': string
    border: string
    input: string
    ring: string
    success: string
    warning: string
    info: string
    card: string
    'card-foreground': string
    popover: string
    'popover-foreground': string
    footer: string
    'footer-foreground': string
    header: string
    'header-foreground': string
    sidebar: string
    'sidebar-foreground': string
    active: string
    hover: string
    focus: string
    disabled: string
    overlay: string
    shadow: string
    'text-primary': string
    'text-secondary': string
    'text-muted': string
    'text-inverse': string
    'border-light': string
    'border-medium': string
    'border-strong': string
    'fill-primary': string
    'fill-secondary': string
    'fill-accent': string
    outline: string
    'outline-variant': string
    surface: string
    'surface-variant': string
    'surface-container': string
    'surface-container-low': string
    'surface-container-high': string
    'inverse-surface': string
    'inverse-on-surface': string
    'inverse-primary': string
    scrim: string
    'elevation-1': string
    'elevation-2': string
    'elevation-3': string
    'outline-error': string
    'surface-bright': string
    'surface-dim': string
    'surface-container-lowest': string
    'surface-container-highest': string
  }
  gradients: {
    primary: string
    secondary: string
    accent: string
    hero: string
    card: string
    button: string
    overlay: string
    subtle: string
  }
  shadows: {
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
    card: string
    button: string
    modal: string
    tooltip: string
    dropdown: string
    navigation: string
    elevation: string
  }
}

// Vercel Inspired Sleek Themes with macOS Glassmorphism
export const colorPalettes: Record<string, ColorPalette> = {
  'vercel-dark': {
    name: 'vercel-dark',
    displayName: 'Vercel Dark',
    colors: {
      primary: '#000000',
      'primary-foreground': '#ffffff',
      secondary: '#171717',
      'secondary-foreground': '#fafafa',
      accent: '#0070f3',
      'accent-foreground': '#ffffff',
      muted: '#262626',
      'muted-foreground': '#a3a3a3',
      background: '#000000',
      foreground: '#fafafa',
      border: '#262626',
      input: '#171717',
      ring: '#0070f3',
      destructive: '#dc2626',
      'destructive-foreground': '#ffffff',
      success: '#22c55e',
      warning: '#f59e0b',
      info: '#3b82f6',
      card: '#171717',
      'card-foreground': '#fafafa',
      popover: '#171717',
      'popover-foreground': '#fafafa',
      footer: '#0a0a0a',
      'footer-foreground': '#a3a3a3',
      header: '#000000',
      'header-foreground': '#fafafa',
      sidebar: '#171717',
      'sidebar-foreground': '#fafafa',
      active: '#0070f3',
      hover: '#262626',
      focus: '#0070f3',
      disabled: '#525252',
      overlay: 'rgba(0, 0, 0, 0.8)',
      shadow: 'rgba(0, 0, 0, 0.3)',
      'text-primary': '#fafafa',
      'text-secondary': '#a3a3a3',
      'text-muted': '#737373',
      'text-inverse': '#000000',
      'border-light': '#404040',
      'border-medium': '#262626',
      'border-strong': '#171717',
      'fill-primary': '#000000',
      'fill-secondary': '#171717',
      'fill-accent': '#0070f3',
      'outline': '#0070f3',
      'outline-variant': '#404040',
      'surface': '#171717',
      'surface-variant': '#262626',
      'surface-container': '#0a0a0a',
      'surface-container-low': '#171717',
      'surface-container-high': '#262626',
      'inverse-surface': '#fafafa',
      'inverse-on-surface': '#000000',
      'inverse-primary': '#0070f3',
      'scrim': 'rgba(0, 0, 0, 0.8)',
      'elevation-1': '#262626',
      'elevation-2': '#404040',
      'elevation-3': '#525252',
      'outline-error': '#dc2626',
      'surface-bright': '#262626',
      'surface-dim': '#171717',
      'surface-container-lowest': '#000000',
      'surface-container-highest': '#404040',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #000000 0%, #171717 100%)',
      secondary: 'linear-gradient(135deg, #171717 0%, #262626 100%)',
      accent: 'linear-gradient(135deg, #0070f3 0%, #4c8bf5 100%)',
      hero: 'linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #171717 100%)',
      card: 'linear-gradient(135deg, #171717 0%, #262626 100%)',
      button: 'linear-gradient(135deg, #0070f3 0%, #4c8bf5 100%)',
      overlay: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%)',
      subtle: 'linear-gradient(135deg, #262626 0%, #404040 100%)',
    },
    shadows: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.5)',
      md: '0 4px 6px rgba(0, 0, 0, 0.6)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.7)',
      xl: '0 20px 25px rgba(0, 0, 0, 0.8)',
      '2xl': '0 25px 50px rgba(0, 0, 0, 0.9)',
      card: '0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3)',
      button: '0 2px 4px rgba(0, 0, 0, 0.5)',
      modal: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
      tooltip: '0 4px 6px rgba(0, 0, 0, 0.6)',
      dropdown: '0 10px 25px rgba(0, 0, 0, 0.7)',
      navigation: '0 2px 8px rgba(0, 0, 0, 0.5)',
      elevation: '0 8px 16px rgba(0, 0, 0, 0.6)',
    },
  },
  'vercel-light': {
    name: 'vercel-light',
    displayName: 'Vercel Light',
    colors: {
      primary: '#000000',
      'primary-foreground': '#ffffff',
      secondary: '#f4f4f5',
      'secondary-foreground': '#18181b',
      accent: '#0070f3',
      'accent-foreground': '#ffffff',
      muted: '#f4f4f5',
      'muted-foreground': '#71717a',
      background: '#ffffff',
      foreground: '#18181b',
      border: '#e4e4e7',
      input: '#f4f4f5',
      ring: '#0070f3',
      destructive: '#dc2626',
      'destructive-foreground': '#ffffff',
      success: '#22c55e',
      warning: '#f59e0b',
      info: '#3b82f6',
      card: '#ffffff',
      'card-foreground': '#18181b',
      popover: '#ffffff',
      'popover-foreground': '#18181b',
      footer: '#fafafa',
      'footer-foreground': '#71717a',
      header: '#ffffff',
      'header-foreground': '#18181b',
      sidebar: '#f4f4f5',
      'sidebar-foreground': '#18181b',
      active: '#0070f3',
      hover: '#f4f4f5',
      focus: '#0070f3',
      disabled: '#d4d4d8',
      overlay: 'rgba(0, 0, 0, 0.5)',
      shadow: 'rgba(0, 0, 0, 0.1)',
      'text-primary': '#18181b',
      'text-secondary': '#71717a',
      'text-muted': '#a1a1aa',
      'text-inverse': '#ffffff',
      'border-light': '#f4f4f5',
      'border-medium': '#e4e4e7',
      'border-strong': '#d4d4d8',
      'fill-primary': '#ffffff',
      'fill-secondary': '#f4f4f5',
      'fill-accent': '#0070f3',
      'outline': '#0070f3',
      'outline-variant': '#d4d4d8',
      'surface': '#ffffff',
      'surface-variant': '#f4f4f5',
      'surface-container': '#fafafa',
      'surface-container-low': '#ffffff',
      'surface-container-high': '#f4f4f5',
      'inverse-surface': '#18181b',
      'inverse-on-surface': '#ffffff',
      'inverse-primary': '#0070f3',
      'scrim': 'rgba(0, 0, 0, 0.5)',
      'elevation-1': '#f4f4f5',
      'elevation-2': '#e4e4e7',
      'elevation-3': '#d4d4d8',
      'outline-error': '#dc2626',
      'surface-bright': '#ffffff',
      'surface-dim': '#f4f4f5',
      'surface-container-lowest': '#ffffff',
      'surface-container-highest': '#e4e4e7',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #ffffff 0%, #f4f4f5 100%)',
      secondary: 'linear-gradient(135deg, #f4f4f5 0%, #e4e4e7 100%)',
      accent: 'linear-gradient(135deg, #0070f3 0%, #4c8bf5 100%)',
      hero: 'linear-gradient(135deg, #ffffff 0%, #fafafa 50%, #f4f4f5 100%)',
      card: 'linear-gradient(135deg, #ffffff 0%, #f4f4f5 100%)',
      button: 'linear-gradient(135deg, #0070f3 0%, #4c8bf5 100%)',
      overlay: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 100%)',
      subtle: 'linear-gradient(135deg, #f4f4f5 0%, #e4e4e7 100%)',
    },
    shadows: {
      sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px rgba(0, 0, 0, 0.07)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
      xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
      '2xl': '0 25px 50px rgba(0, 0, 0, 0.15)',
      card: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
      button: '0 2px 4px rgba(0, 0, 0, 0.1)',
      modal: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      tooltip: '0 4px 6px rgba(0, 0, 0, 0.1)',
      dropdown: '0 10px 25px rgba(0, 0, 0, 0.15)',
      navigation: '0 2px 8px rgba(0, 0, 0, 0.1)',
      elevation: '0 8px 16px rgba(0, 0, 0, 0.1)',
    },
  },
}

export const defaultPalette = 'vercel-dark'
export const systemPalettes = ['vercel-dark', 'vercel-light'] as const

export function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function getPaletteForTheme(theme: Theme): string {
  if (theme === 'system') {
    const systemTheme = getSystemTheme()
    return systemTheme === 'dark' ? 'vercel-dark' : 'vercel-light'
  }
  return theme === 'dark' ? 'vercel-dark' : 'vercel-light'
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
