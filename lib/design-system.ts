// Design System for From The Trenches

// Color Palette
export const colors = {
  // Primary Colors
  primary: {
    50: "#fffceb",
    100: "#efd6ac", // Primary beige/cream
    200: "#e8c88e",
    300: "#e1ba70",
    400: "#daac52",
    500: "#d39e34",
    600: "#c48e2a",
    700: "#a37522",
    800: "#825c1a",
    900: "#624612",
    950: "#422f0c",
  },

  // Secondary Colors
  secondary: {
    50: "#e6e7e7",
    100: "#c1c5c5",
    200: "#979f9f",
    300: "#6d7979",
    400: "#4e5c5c",
    500: "#2f3f3f",
    600: "#273939",
    700: "#1f3131",
    800: "#172929",
    900: "#0f1c1c",
    950: "#080f0f", // Secondary dark color
  },

  // Accent Colors
  accent: {
    50: "#fef2e7",
    100: "#fde0c4",
    200: "#fac89d",
    300: "#f7a96d",
    400: "#f48a3c",
    500: "#f06b0b",
    600: "#e25608",
    700: "#c44900", // Accent burnt orange
    800: "#9c3a00",
    900: "#7d3000",
    950: "#431600",
  },

  // Neutral Colors
  neutral: {
    50: "#f7f8f9",
    100: "#ebeef2",
    200: "#dde2e8",
    300: "#cbd2db",
    400: "#adb6c4", // Light gray with blue undertones
    500: "#8e99aa",
    600: "#717d91",
    700: "#5d6677",
    800: "#4a5261",
    900: "#3d4451",
    950: "#080f0f", // Dark background (same as secondary-950)
  },

  // Semantic Colors
  success: "#183a37", // Dark teal/green
  warning: "#c44900", // Burnt orange
  error: "#c44900", // Burnt orange
  info: "#adb6c4", // Light gray with blue undertones

  // Utility Colors
  background: "#080f0f",
  foreground: "#efd6ac",
  border: "rgba(239, 214, 172, 0.3)",
  muted: "rgba(239, 214, 172, 0.1)",
}

// Typography
export const typography = {
  // Font Families
  fontFamily: {
    heading: "'Share Tech Mono', monospace",
    body: "'Inter', 'Roboto', system-ui, sans-serif",
    mono: "'Share Tech Mono', monospace",
  },

  // Font Sizes (in pixels)
  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "60px",
  },

  // Font Weights
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },

  // Line Heights
  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },

  // Letter Spacing
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
}

// Spacing (in pixels)
export const spacing = {
  0: "0",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  8: "32px",
  10: "40px",
  12: "48px",
  16: "64px",
  20: "80px",
  24: "96px",
  32: "128px",
  40: "160px",
  48: "192px",
  56: "224px",
  64: "256px",
}

// Border Radius
export const borderRadius = {
  none: "0",
  sm: "2px",
  md: "4px",
  lg: "8px",
  xl: "12px",
  "2xl": "16px",
  "3xl": "24px",
  full: "9999px",
}

// Shadows
export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  outline: "0 0 0 3px rgba(252, 240, 193, 0.5)",
  glow: "0 0 15px rgba(252, 240, 193, 0.3)",
  none: "none",
}

// Z-Index
export const zIndex = {
  0: "0",
  10: "10",
  20: "20",
  30: "30",
  40: "40",
  50: "50",
  auto: "auto",
}

// Breakpoints (in pixels)
export const breakpoints = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}

// Grid
export const grid = {
  columns: 12,
  gutter: spacing[6],
  container: {
    padding: {
      sm: spacing[4],
      md: spacing[6],
      lg: spacing[8],
    },
    maxWidth: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
}

// Animation
export const animation = {
  duration: {
    fastest: "100ms",
    faster: "200ms",
    fast: "300ms",
    normal: "400ms",
    slow: "500ms",
    slower: "600ms",
    slowest: "800ms",
  },
  easing: {
    linear: "linear",
    ease: "ease",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
}

// Export the entire design system
const designSystem = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  zIndex,
  breakpoints,
  grid,
  animation,
}

export default designSystem
