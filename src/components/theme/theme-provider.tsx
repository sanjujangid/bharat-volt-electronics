'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { Theme, ColorPalette, colorPalettes, getPaletteForTheme, getSystemTheme, generateCSSVariables } from '@/lib/theme'

interface ThemeContextType {
  theme: Theme
  palette: string
  setTheme: (theme: Theme) => void
  setPalette: (palette: string) => void
  currentPalette: ColorPalette
  availablePalettes: typeof colorPalettes
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system')
  const [palette, setPaletteState] = useState<string>('macos-dark')
  const [mounted, setMounted] = useState(false)

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as Theme
    const savedPalette = localStorage.getItem('palette')
    
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      setThemeState(savedTheme)
    }
    
    if (savedPalette && colorPalettes[savedPalette]) {
      setPaletteState(savedPalette)
    } else {
      const autoPalette = getPaletteForTheme(savedTheme || 'system')
      setPaletteState(autoPalette)
    }
  }, [])

  // Apply CSS variables when palette changes
  useEffect(() => {
    if (!mounted) return
    
    // Add transition class for smooth theme switching
    document.body.classList.add('theme-transitioning')
    
    const currentColors = colorPalettes[palette]
    if (currentColors) {
      const root = document.documentElement
      const cssVars = generateCSSVariables(currentColors)
      
      // Create style element for theme variables
      let styleEl = document.getElementById('theme-variables')
      if (!styleEl) {
        styleEl = document.createElement('style')
        styleEl.id = 'theme-variables'
        document.head.appendChild(styleEl)
      }
      
      styleEl.textContent = `:root {\n${cssVars}\n}`
      
      // Add theme class to body
      document.body.className = document.body.className.replace(/theme-\w+/g, '')
      document.body.classList.add(`theme-${palette}`)
    }
    
    // Remove transition class after animation completes
    const timeout = setTimeout(() => {
      document.body.classList.remove('theme-transitioning')
    }, 400)
    
    return () => clearTimeout(timeout)
  }, [palette, mounted])

  // Listen for system theme changes
  useEffect(() => {
    if (theme !== 'system') return
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const autoPalette = getPaletteForTheme('system')
      setPaletteState(autoPalette)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)
    
    // Auto-switch palette for system/light/dark themes
    if (newTheme === 'system' || newTheme === 'light' || newTheme === 'dark') {
      const autoPalette = getPaletteForTheme(newTheme)
      setPaletteState(autoPalette)
      localStorage.setItem('palette', autoPalette)
    }
  }

  const setPalette = (newPalette: string) => {
    if (colorPalettes[newPalette]) {
      setPaletteState(newPalette)
      localStorage.setItem('palette', newPalette)
      // Switch to manual theme mode when custom palette is selected
      if (!['macos-dark', 'macos-light'].includes(newPalette)) {
        setThemeState('system')
        localStorage.setItem('theme', 'system')
      }
    }
  }

  const currentPalette = colorPalettes[palette] || colorPalettes['macos-dark']

  return (
    <ThemeContext.Provider
      value={{
        theme,
        palette,
        setTheme,
        setPalette,
        currentPalette,
        availablePalettes: colorPalettes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
