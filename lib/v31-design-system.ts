// V31 Design System

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

  // Secondary Colors (Dark Black)
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

  // Accent Colors (Burnt Orange)
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

  // Success Colors (Dark Teal)
  success: {
    50: "#ecf8f7",
    100: "#d0eeec",
    200: "#a6deda",
    300: "#73c7c1",
    400: "#48aba3",
    500: "#348f88",
    600: "#2a726d",
    700: "#245b57",
    800: "#1f4a47",
    900: "#183a37", // Dark teal/green
    950: "#0c2220",
  },

  // Info Colors (Light Gray with Blue Undertones)
  info: {
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
    950: "#292e39",
  },

  // Base Colors
  background: "#080f0f", // Same as secondary-950
  foreground: "#efd6ac", // Same as primary-100
  border: "rgba(239, 214, 172, 0.3)", // primary-100 with opacity
  muted: "rgba(239, 214, 172, 0.1)", // primary-100 with opacity
}

// Typography
export const typography = {
  // Font Families
  fontFamily: {
    heading: "'Share Tech Mono', monospace",
    body: "'Inter', 'Roboto', system-ui, sans-serif",
    mono: "'Share Tech Mono', monospace",
  },

  // Font Sizes
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
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

// Effects
export const effects = {
  // Shadows
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    glow: "0 0 15px rgba(239, 214, 172, 0.3)",
    "glow-accent": "0 0 15px rgba(196, 73, 0, 0.3)",
    "glow-success": "0 0 15px rgba(24, 58, 55, 0.3)",
  },

  // Animations
  animations: {
    scanline: "scanline 6s linear infinite",
    "pulse-glow": "pulse-glow 2s infinite",
    "cyber-shine": "cyber-shine 3s infinite",
    "hologram-move": "hologram-move 8s linear infinite",
    "hologram-shine": "hologram-shine 4s ease-in-out infinite alternate",
  },

  // Border Radius
  borderRadius: {
    none: "0",
    sm: "0.125rem", // 2px
    md: "0.25rem", // 4px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    full: "9999px",
  },
}

// V31 Component Styles
export const componentStyles = {
  // Button Styles
  button: {
    base: "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    primary: "bg-accent text-primary-100 hover:bg-accent/90 focus-visible:ring-accent",
    secondary:
      "bg-transparent border border-primary-100 text-primary-100 hover:bg-primary-100/10 focus-visible:ring-primary-100",
    success: "bg-success-900 text-primary-100 hover:bg-success-800 focus-visible:ring-success-900",
    ghost: "hover:bg-primary-100/10 text-primary-100",
    sizes: {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 py-2",
      lg: "h-12 px-6 py-3 text-lg",
    },
  },

  // Card Styles
  card: {
    base: "border border-primary-100/30 bg-black/70 shadow-glow rounded-lg overflow-hidden",
    cyber: "cyber-card",
    hologram: "hologram-bg",
  },

  // Text Styles
  text: {
    heading: "font-mono uppercase text-primary-100 neon-text",
    body: "font-sans text-primary-100/90",
    muted: "text-primary-100/70",
    accent: "text-accent-700",
    success: "text-success-900",
  },
}

// Export the entire V31 design system
const v31DesignSystem = {
  colors,
  typography,
  effects,
  componentStyles,
}

export default v31DesignSystem
