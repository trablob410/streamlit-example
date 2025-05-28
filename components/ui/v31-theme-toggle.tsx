"use client"

import { Moon, Sun } from "lucide-react"
import { useV31Theme } from "@/components/v31-theme-provider"
import { motion } from "framer-motion"

interface V31ThemeToggleProps {
  className?: string
}

export function V31ThemeToggle({ className }: V31ThemeToggleProps) {
  const { theme, setTheme } = useV31Theme()

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`p-2 rounded-md bg-secondary-950/80 border border-primary-100/30 text-primary-100 hover:bg-primary-100/10 transition-colors ${className}`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </motion.button>
  )
}
