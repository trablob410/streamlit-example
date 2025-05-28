"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type V31Theme = "dark" | "light"

interface V31ThemeProviderProps {
  children: ReactNode
  defaultTheme?: V31Theme
  storageKey?: string
}

interface V31ThemeProviderState {
  theme: V31Theme
  setTheme: (theme: V31Theme) => void
}

const initialState: V31ThemeProviderState = {
  theme: "dark",
  setTheme: () => null,
}

const V31ThemeProviderContext = createContext<V31ThemeProviderState>(initialState)

export function V31ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "v31-ui-theme",
  ...props
}: V31ThemeProviderProps) {
  const [theme, setTheme] = useState<V31Theme>(defaultTheme)

  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey) as V31Theme | null

    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme(defaultTheme)
    }
  }, [defaultTheme, storageKey])

  useEffect(() => {
    const root = window.document.documentElement

    // Remove both classes first
    root.classList.remove("v31-light", "v31-dark")

    // Add the current theme class
    root.classList.add(`v31-${theme}`)

    // Save the theme preference
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  const value = {
    theme,
    setTheme: (theme: V31Theme) => {
      setTheme(theme)
    },
  }

  return (
    <V31ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </V31ThemeProviderContext.Provider>
  )
}

export const useV31Theme = () => {
  const context = useContext(V31ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useV31Theme must be used within a V31ThemeProvider")
  }

  return context
}
