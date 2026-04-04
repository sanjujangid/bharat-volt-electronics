export type Theme = 'light' | 'dark' | 'auto'

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

// Strict Color Theme - Only Dark Blue, Yellow, and White
export const colorPalettes: Record<string, ColorPalette> = {
  'dark-theme': {
    name: 'dark-theme',
    displayName: 'Dark Theme',
    colors: {
      background: '#000000',
      foreground: '#FFFFFF',
      primary: '#FFFFFF',
      'primary-foreground': '#000000',
      secondary: '#FFC107',
      'secondary-foreground': '#000000',
      muted: '#1A1A1A',
      'muted-foreground': '#A0A0A0',
      accent: '#FFC107',
      'accent-foreground': '#000000',
      destructive: '#DC2626',
      'destructive-foreground': '#FFFFFF',
      border: '#2A2A2A',
      input: '#1A1A1A',
      ring: '#FFC107',
      success: '#22c55e',
      warning: '#FFC107',
      info: '#3b82f6',
      card: '#0A0A0A',
      'card-foreground': '#FFFFFF',
      popover: '#0A0A0A',
      'popover-foreground': '#FFFFFF',
      footer: '#000000',
      'footer-foreground': '#A0A0A0',
      header: '#000000',
      'header-foreground': '#FFFFFF',
      sidebar: '#0A0A0A',
      'sidebar-foreground': '#FFFFFF',
      active: '#FFC107',
      hover: '#1A1A1A',
      focus: '#FFC107',
      disabled: '#404040',
      overlay: 'rgba(0, 0, 0, 0.9)',
      shadow: 'rgba(0, 0, 0, 0.5)',
      'text-primary': '#FFFFFF',
      'text-secondary': '#A0A0A0',
      'text-muted': '#606060',
      'text-inverse': '#000000',
      'border-light': '#1A1A1A',
      'border-medium': '#2A2A2A',
      'border-strong': '#404040',
      'fill-primary': '#000000',
      'fill-secondary': '#1A1A1A',
      'fill-accent': '#FFC107',
      'outline': '#FFC107',
      'outline-variant': '#2A2A2A',
      'surface': '#0A0A0A',
      'surface-variant': '#1A1A1A',
      'surface-container': '#000000',
      'surface-container-low': '#0A0A0A',
      'surface-container-high': '#1A1A1A',
      'inverse-surface': '#FFFFFF',
      'inverse-on-surface': '#000000',
      'inverse-primary': '#FFC107',
      'scrim': 'rgba(0, 0, 0, 0.9)',
      'elevation-1': '#1A1A1A',
      'elevation-2': '#2A2A2A',
      'elevation-3': '#404040',
      'outline-error': '#DC2626',
      'surface-bright': '#1A1A1A',
      'surface-dim': '#000000',
      'surface-container-lowest': '#000000',
      'surface-container-highest': '#2A2A2A',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #000000 0%, #1A1A1A 100%)',
      secondary: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)',
      accent: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
      hero: 'linear-gradient(135deg, #000000 0%, #0A0A0A 50%, #1A1A1A 100%)',
      card: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
      button: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
      overlay: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)',
      subtle: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 100%)',
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
  'light-theme': {
    name: 'light-theme',
    displayName: 'Light Theme',
    colors: {
      background: '#FFFFFF',
      foreground: '#0A1F44',
      primary: '#0A1F44',
      'primary-foreground': '#FFFFFF',
      secondary: '#FFC107',
      'secondary-foreground': '#0A1F44',
      muted: '#F5F5F5',
      'muted-foreground': '#6B7280',
      accent: '#FFC107',
      'accent-foreground': '#0A1F44',
      destructive: '#DC2626',
      'destructive-foreground': '#FFFFFF',
      border: '#E5E7EB',
      input: '#FFFFFF',
      ring: '#FFC107',
      success: '#22c55e',
      warning: '#f59e0b',
      info: '#3b82f6',
      card: '#FFFFFF',
      'card-foreground': '#0A1F44',
      popover: '#FFFFFF',
      'popover-foreground': '#0A1F44',
      footer: '#0A1F44',
      'footer-foreground': '#FFFFFF',
      header: '#FFFFFF',
      'header-foreground': '#0A1F44',
      sidebar: '#F5F5F5',
      'sidebar-foreground': '#0A1F44',
      active: '#FFC107',
      hover: '#F5F5F5',
      focus: '#FFC107',
      disabled: '#D4D4D8',
      overlay: 'rgba(0, 0, 0, 0.5)',
      shadow: 'rgba(0, 0, 0, 0.1)',
      'text-primary': '#0A1F44',
      'text-secondary': '#6B7280',
      'text-muted': '#9CA3AF',
      'text-inverse': '#FFFFFF',
      'border-light': '#F5F5F5',
      'border-medium': '#E5E7EB',
      'border-strong': '#D1D5DB',
      'fill-primary': '#0A1F44',
      'fill-secondary': '#F5F5F5',
      'fill-accent': '#FFC107',
      'outline': '#FFC107',
      'outline-variant': '#E5E7EB',
      'surface': '#FFFFFF',
      'surface-variant': '#F5F5F5',
      'surface-container': '#F5F5F5',
      'surface-container-low': '#FFFFFF',
      'surface-container-high': '#F5F5F5',
      'inverse-surface': '#0A1F44',
      'inverse-on-surface': '#FFFFFF',
      'inverse-primary': '#FFC107',
      'scrim': 'rgba(0, 0, 0, 0.5)',
      'elevation-1': '#F5F5F5',
      'elevation-2': '#E5E7EB',
      'elevation-3': '#D1D5DB',
      'outline-error': '#DC2626',
      'surface-bright': '#FFFFFF',
      'surface-dim': '#F5F5F5',
      'surface-container-lowest': '#FFFFFF',
      'surface-container-highest': '#E5E7EB',
    },
    gradients: {
      primary: 'linear-gradient(135deg, #0A1F44 0%, #1A2F54 100%)',
      secondary: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
      accent: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
      hero: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 50%, #FFFFFF 100%)',
      card: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
      button: 'linear-gradient(135deg, #FFC107 0%, #FFD700 100%)',
      overlay: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%)',
      subtle: 'linear-gradient(135deg, #F5F5F5 0%, #E5E7EB 100%)',
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

export const defaultPalette = 'dark-theme'
export const systemPalettes = ['dark-theme', 'light-theme'] as const

export function getSystemTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function getPaletteForTheme(theme: Theme): string {
  if (theme === 'auto') {
    const systemTheme = getSystemTheme()
    return systemTheme === 'dark' ? 'dark-theme' : 'light-theme'
  }
  return theme === 'dark' ? 'dark-theme' : 'light-theme'
}

export function generateCSSVariables(palette: ColorPalette): string {
  const variables: string[] = []

  // Color variables
  Object.entries(palette.colors).forEach(([key, value]) => {
    const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase()
    variables.push(`  --${cssVar}: ${value};`)
  })

  // Additional variables
  variables.push(`  --radius: 0.75rem;`)
  variables.push(`  --glass-backdrop: ${palette.colors.background}cc;`)
  variables.push(`  --glass-border: ${palette.colors.border}33;`)

  return variables.join('\n')
}
