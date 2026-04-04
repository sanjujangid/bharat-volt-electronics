'use client'

import { Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from './theme-provider'
import { cn } from '@/lib/utils'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const isDark = theme === 'dark'

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className={cn(
        "h-9 px-3 gap-2 rounded-lg transition-all duration-200",
        "hover:bg-[var(--muted)]"
      )}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? (
        <>
          <Moon className="h-4 w-4 text-[var(--accent)]" />
          <span className="hidden sm:inline text-sm font-medium text-[var(--foreground)]">
            Dark
          </span>
        </>
      ) : (
        <>
          <Sun className="h-4 w-4 text-[var(--accent)]" />
          <span className="hidden sm:inline text-sm font-medium text-[var(--foreground)]">
            Light
          </span>
        </>
      )}
    </Button>
  )
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const isDark = theme === 'dark'

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="h-10 w-10 rounded-xl hover:bg-[var(--muted)]"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? (
        <Moon className="h-5 w-5 text-[var(--accent)]" />
      ) : (
        <Sun className="h-5 w-5 text-[var(--accent)]" />
      )}
    </Button>
  )
}
