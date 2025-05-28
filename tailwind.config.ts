import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
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
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
          950: "#080f0f", // Very dark black
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          50: "#fef2e7",
          100: "#fde0c4",
          200: "#fac89d",
          300: "#f7a96d",
          400: "#f48a3c",
          500: "#f06b0b",
          600: "#e25608",
          700: "#c44900", // Burnt orange
          800: "#9c3a00",
          900: "#7d3000",
          950: "#431600",
        },
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "system-ui", "sans-serif"],
        mono: ["Share Tech Mono", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(239, 214, 172, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(239, 214, 172, 0.6)",
          },
        },
        "scan-line": {
          "0%": { top: "-100%" },
          "100%": { top: "100%" },
        },
        "cyber-shine": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "hologram-move": {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(-5%, 5%) rotate(1deg)" },
          "50%": { transform: "translate(5%, -5%) rotate(0deg)" },
          "75%": { transform: "translate(-5%, -5%) rotate(-1deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
        "hologram-shine": {
          "0%, 100%": { opacity: "0.3", backgroundPosition: "0% 0%" },
          "50%": { opacity: "0.7", backgroundPosition: "100% 100%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s infinite",
        "scan-line": "scan-line 6s linear infinite",
        "cyber-shine": "cyber-shine 3s infinite",
        "hologram-move": "hologram-move 8s linear infinite",
        "hologram-shine": "hologram-shine 4s ease-in-out infinite alternate",
      },
      boxShadow: {
        glow: "0 0 15px rgba(239, 214, 172, 0.3)",
        "glow-accent": "0 0 15px rgba(196, 73, 0, 0.3)",
        "glow-success": "0 0 15px rgba(24, 58, 55, 0.3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
