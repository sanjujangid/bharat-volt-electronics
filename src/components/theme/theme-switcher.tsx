'use client'

import { useState } from 'react'
import { Monitor, Sun, Moon, Palette, Check, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useTheme } from './theme-provider'
import { cn } from '@/lib/utils'

export function ThemeSwitcher() {
  const { theme, palette, setTheme, setPalette, availablePalettes } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme)
    setIsOpen(false)
  }

  const handlePaletteChange = (newPalette: string) => {
    setPalette(newPalette)
    setIsOpen(false)
  }

  const getCurrentThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />
      case 'dark':
        return <Moon className="h-4 w-4" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  const getCurrentThemeLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light'
      case 'dark':
        return 'Dark'
      default:
        return 'System'
    }
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="h-9 px-3 gap-2"
        aria-label="Switch theme"
        aria-expanded={isOpen}
      >
        {getCurrentThemeIcon()}
        <span className="hidden sm:inline">{getCurrentThemeLabel()}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <Card className="absolute top-full right-0 mt-2 w-80 z-50 shadow-luxury">
            <CardContent className="p-0">
              {/* Theme Selection */}
              <div className="p-4 border-b border-[var(--border)]">
                <h3 className="font-semibold mb-3 text-[var(--foreground)]">Theme Mode</h3>
                <div className="space-y-2">
                  {[
                    { value: 'light', label: 'Light', icon: Sun },
                    { value: 'dark', label: 'Dark', icon: Moon },
                    { value: 'system', label: 'System', icon: Monitor },
                  ].map(({ value, label, icon: Icon }) => (
                    <Button
                      key={value}
                      variant={theme === value ? 'default' : 'ghost'}
                      className="w-full justify-start h-10"
                      onClick={() => handleThemeChange(value as 'light' | 'dark' | 'system')}
                    >
                      <Icon className="h-4 w-4 mr-3" />
                      {label}
                      {theme === value && <Check className="h-4 w-4 ml-auto" />}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Color Palette Selection */}
              <div className="p-4">
                <h3 className="font-semibold mb-3 text-[var(--foreground)] flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Color Palette
                </h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {Object.entries(availablePalettes).map(([key, paletteData]) => (
                    <Button
                      key={key}
                      variant={palette === key ? 'default' : 'ghost'}
                      className="w-full justify-start h-12"
                      onClick={() => handlePaletteChange(key)}
                    >
                      <div className="flex items-center gap-3 flex-1">
                        {/* Color Preview */}
                        <div className="flex gap-1">
                          <div
                            className="w-4 h-4 rounded-full border border-[var(--border)]"
                            style={{ backgroundColor: paletteData.colors.primary }}
                          />
                          <div
                            className="w-4 h-4 rounded-full border border-[var(--border)]"
                            style={{ backgroundColor: paletteData.colors.secondary }}
                          />
                          <div
                            className="w-4 h-4 rounded-full border border-[var(--border)]"
                            style={{ backgroundColor: paletteData.colors.accent }}
                          />
                        </div>
                        <div className="text-left flex-1">
                          <div className="font-medium">{paletteData.displayName}</div>
                          <div className="text-xs text-[var(--muted-foreground)]">
                            {key.includes('macos') && 'macOS inspired'}
                            {key === 'tech-savvy' && 'Modern tech'}
                            {key === 'elegant-luxury' && 'Premium luxury'}
                            {key === 'fresh-modern' && 'Clean minimal'}
                          </div>
                        </div>
                        {palette === key && <Check className="h-4 w-4" />}
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getCurrentThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />
      case 'dark':
        return <Moon className="h-4 w-4" />
      default:
        return <Monitor className="h-4 w-4" />
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className="h-10 w-10 rounded-xl"
      aria-label={`Current theme: ${theme}. Click to change theme`}
    >
      {getCurrentThemeIcon()}
    </Button>
  )
}
