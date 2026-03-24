/**
 * Accessibility utilities for theme testing and validation
 */

export interface ContrastRatio {
  ratio: number
  passes: {
    aa: boolean
    aaa: boolean
    aaLarge: boolean
    aaaLarge: boolean
  }
}

/**
 * Calculate relative luminance of a color
 * @param hex Hex color code
 * @returns Relative luminance value (0-1)
 */
export function getLuminance(hex: string): number {
  const rgb = hexToRgb(hex)
  if (!rgb) return 0

  const [r, g, b] = rgb.map(val => {
    val = val / 255
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
  })

  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/**
 * Convert hex color to RGB
 * @param hex Hex color code
 * @returns RGB array or null
 */
export function hexToRgb(hex: string): [number, number, number] | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null
}

/**
 * Calculate contrast ratio between two colors
 * @param color1 First color (hex)
 * @param color2 Second color (hex)
 * @returns Contrast ratio object
 */
export function getContrastRatio(color1: string, color2: string): ContrastRatio {
  const lum1 = getLuminance(color1)
  const lum2 = getLuminance(color2)
  
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  
  const ratio = (brightest + 0.05) / (darkest + 0.05)
  
  return {
    ratio: Math.round(ratio * 100) / 100,
    passes: {
      aa: ratio >= 4.5,
      aaa: ratio >= 7,
      aaLarge: ratio >= 3,
      aaaLarge: ratio >= 4.5
    }
  }
}

/**
 * Test color palette for accessibility compliance
 * @param palette Color palette object
 * @returns Accessibility test results
 */
export function testPaletteAccessibility(palette: any): {
  tests: Array<{
    name: string
    foreground: string
    background: string
    ratio: ContrastRatio
    status: 'pass' | 'fail' | 'warning'
  }>
  overall: 'pass' | 'fail' | 'warning'
} {
  const tests = [
    {
      name: 'Primary Text',
      foreground: palette.colors.foreground,
      background: palette.colors.background,
      ratio: getContrastRatio(palette.colors.foreground, palette.colors.background),
      status: 'unknown' as any
    },
    {
      name: 'Primary Button Text',
      foreground: palette.colors.primaryForeground,
      background: palette.colors.primary,
      ratio: getContrastRatio(palette.colors.primaryForeground, palette.colors.primary),
      status: 'unknown' as any
    },
    {
      name: 'Muted Text',
      foreground: palette.colors.mutedForeground,
      background: palette.colors.background,
      ratio: getContrastRatio(palette.colors.mutedForeground, palette.colors.background),
      status: 'unknown' as any
    },
    {
      name: 'Secondary Text',
      foreground: palette.colors.secondaryForeground,
      background: palette.colors.secondary,
      ratio: getContrastRatio(palette.colors.secondaryForeground, palette.colors.secondary),
      status: 'unknown' as any
    },
    {
      name: 'Destructive Button Text',
      foreground: palette.colors.destructiveForeground,
      background: palette.colors.destructive,
      ratio: getContrastRatio(palette.colors.destructiveForeground, palette.colors.destructive),
      status: 'unknown' as any
    }
  ]

  // Determine status for each test
  tests.forEach(test => {
    if (test.ratio.passes.aaa) {
      test.status = 'pass'
    } else if (test.ratio.passes.aa) {
      test.status = 'warning'
    } else {
      test.status = 'fail'
    }
  })

  const overall = tests.some(test => test.status === 'fail') 
    ? 'fail' 
    : tests.some(test => test.status === 'warning')
      ? 'warning'
      : 'pass'

  return { tests, overall }
}

/**
 * Generate accessibility report for all color palettes
 * @param palettes Object containing all color palettes
 * @returns Comprehensive accessibility report
 */
export function generateAccessibilityReport(palettes: Record<string, any>): {
  summary: {
    total: number
    pass: number
    warning: number
    fail: number
  }
  palettes: Record<string, {
    overall: 'pass' | 'fail' | 'warning'
    tests: any[]
  }>
} {
  const summary = { total: 0, pass: 0, warning: 0, fail: 0 }
  const results: Record<string, any> = {}

  Object.entries(palettes).forEach(([name, palette]) => {
    const test = testPaletteAccessibility(palette)
    results[name] = test
    summary.total++
    summary[test.overall]++
  })

  return { summary, palettes: results }
}
