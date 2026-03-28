'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { generateAccessibilityReport, testPaletteAccessibility } from '@/lib/accessibility'
import { colorPalettes } from '@/lib/theme'
import { Check, X, AlertTriangle, Eye, EyeOff } from 'lucide-react'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default function ThemeShowcase() {
  const [showAccessibility, setShowAccessibility] = useState(false)

  // Use hardcoded palette for now to avoid theme provider issues
  const currentPalette = colorPalettes['vercel-dark'] || colorPalettes[Object.keys(colorPalettes)[0]]
  const accessibilityReport = generateAccessibilityReport(colorPalettes)
  const currentAccessibility = testPaletteAccessibility(currentPalette)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <Check className="h-4 w-4 text-green-500" />
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case 'fail':
        return <X className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass':
        return 'text-green-500'
      case 'warning':
        return 'text-yellow-500'
      case 'fail':
        return 'text-red-500'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold mb-4 text-gradient">
            Theme Showcase & Accessibility
          </h1>
          <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
            Explore our premium color palettes designed for electronics e-commerce with macOS-inspired aesthetics
          </p>
        </div>

        {/* Current Theme Display */}
        <Card className="card-premium mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Current Theme: {currentPalette.displayName}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAccessibility(!showAccessibility)}
                className="gap-2"
              >
                {showAccessibility ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showAccessibility ? 'Hide' : 'Show'} Accessibility
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {/* Color Swatches */}
              {Object.entries(currentPalette.colors).slice(0, 8).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div
                    className="w-full h-20 rounded-lg mb-2 border border-[var(--border)]"
                    style={{ backgroundColor: value }}
                  />
                  <div className="text-sm font-medium">{key}</div>
                  <div className="text-xs text-[var(--muted-foreground)] font-mono">{value}</div>
                </div>
              ))}
            </div>

            {/* Accessibility Info */}
            {showAccessibility && (
              <div className="border-t border-[var(--border)] pt-6">
                <h3 className="font-semibold mb-4">Accessibility Test Results</h3>
                <div className="space-y-3">
                  {currentAccessibility.tests.map((test, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[var(--secondary)] rounded-lg">
                      <div>
                        <div className="font-medium">{test.name}</div>
                        <div className="text-sm text-[var(--muted-foreground)]">
                          Contrast Ratio: {test.ratio.ratio}:1
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(test.status)}
                        <span className={`text-sm ${getStatusColor(test.status)}`}>
                          {test.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-[var(--muted)] rounded-lg">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(currentAccessibility.overall)}
                    <span className="font-medium">
                      Overall Status: {currentAccessibility.overall.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* All Themes Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">All Available Themes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(colorPalettes).map(([key, paletteData]) => (
              <Card
                key={key}
                className={`card-premium cursor-pointer hover-lift ${
                  'vercel-dark' === key ? 'ring-2 ring-[var(--primary)]' : ''
                }`}
                onClick={() => {
                  // setPalette(key) - disabled for now
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{paletteData.displayName}</span>
                    {getStatusIcon(
                      accessibilityReport.palettes[key]?.overall || 'unknown'
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Color Preview */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    <div
                      className="w-full h-12 rounded border border-[var(--border)]"
                      style={{ backgroundColor: paletteData.colors.primary }}
                      title="Primary"
                    />
                    <div
                      className="w-full h-12 rounded border border-[var(--border)]"
                      style={{ backgroundColor: paletteData.colors.secondary }}
                      title="Secondary"
                    />
                    <div
                      className="w-full h-12 rounded border border-[var(--border)]"
                      style={{ backgroundColor: paletteData.colors.accent }}
                      title="Accent"
                    />
                    <div
                      className="w-full h-12 rounded border border-[var(--border)]"
                      style={{ backgroundColor: paletteData.colors.background }}
                      title="Background"
                    />
                  </div>

                  {/* Demo Content */}
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="btn-premium"
                        style={{ background: paletteData.gradients.primary }}
                      >
                        Primary Button
                      </Button>
                      <Button variant="outline" size="sm">
                        Secondary
                      </Button>
                    </div>
                    <div className="p-3 rounded-lg border" style={{ backgroundColor: paletteData.colors.muted }}>
                      <div className="text-sm" style={{ color: paletteData.colors['muted-foreground'] }}>
                        Muted text example
                      </div>
                    </div>
                  </div>

                  {/* Accessibility Status */}
                  <div className="mt-4 pt-4 border-t border-[var(--border)]">
                    <div className="flex items-center justify-between text-sm">
                      <span>Accessibility</span>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(
                          accessibilityReport.palettes[key]?.overall || 'unknown'
                        )}
                        <span className={getStatusColor(
                          accessibilityReport.palettes[key]?.overall || 'unknown'
                        )}>
                          {accessibilityReport.palettes[key]?.overall?.toUpperCase() || 'UNKNOWN'}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Overall Summary */}
        <Card className="card-premium">
          <CardHeader>
            <CardTitle>Accessibility Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--foreground)]">
                  {accessibilityReport.summary.total}
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">Total Themes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">
                  {accessibilityReport.summary.pass}
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">Pass WCAG AAA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">
                  {accessibilityReport.summary.warning}
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">Pass WCAG AA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">
                  {accessibilityReport.summary.fail}
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">Needs Improvement</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
