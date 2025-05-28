"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Keyboard } from "lucide-react"

interface ShortcutProps {
  keys: string[]
  description: string
}

const Shortcut = ({ keys, description }: ShortcutProps) => (
  <div className="flex items-center justify-between py-2 border-b border-primary/10 last:border-b-0">
    <span className="text-primary/80 text-sm">{description}</span>
    <div className="flex items-center gap-2">
      {keys.map((key, index) => (
        <div key={index} className="flex items-center">
          <kbd className="px-2 py-1 bg-black/60 border border-primary/30 rounded text-xs text-primary min-w-[24px] text-center">
            {key}
          </kbd>
          {index < keys.length - 1 && <span className="mx-1 text-primary/50">+</span>}
        </div>
      ))}
    </div>
  </div>
)

export default function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle shortcuts panel with ? key
      if (e.key === "?" && !e.ctrlKey && !e.altKey && !e.metaKey) {
        setIsOpen((prev) => !prev)
      }

      // Close with Escape key
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }

      // Navigation shortcuts
      if (e.ctrlKey && e.key === "h") {
        e.preventDefault()
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
      }

      if (e.ctrlKey && e.key === "s") {
        e.preventDefault()
        document.getElementById("signal-types")?.scrollIntoView({ behavior: "smooth" })
      }

      if (e.ctrlKey && e.key === "p") {
        e.preventDefault()
        document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
      }

      if (e.ctrlKey && e.key === "a") {
        e.preventDefault()
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
      }

      if (e.ctrlKey && e.key === "f") {
        e.preventDefault()
        document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })
      }

      // Open search with / key
      if (e.key === "/" && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault()
        const searchInput = document.getElementById("search-input")
        if (searchInput) {
          searchInput.focus()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  const shortcuts: ShortcutProps[] = [
    { keys: ["?"], description: "Show/hide keyboard shortcuts" },
    { keys: ["Esc"], description: "Close dialogs or panels" },
    { keys: ["/"], description: "Focus search" },
    { keys: ["Ctrl", "h"], description: "Go to Home section" },
    { keys: ["Ctrl", "s"], description: "Go to Signal Types section" },
    { keys: ["Ctrl", "p"], description: "Go to Pricing section" },
    { keys: ["Ctrl", "a"], description: "Go to About section" },
    { keys: ["Ctrl", "f"], description: "Go to FAQ section" },
    { keys: ["Tab"], description: "Navigate through interactive elements" },
    { keys: ["Shift", "Tab"], description: "Navigate backwards" },
    { keys: ["Enter"], description: "Activate focused element" },
  ]

  return (
    <>
      {/* Keyboard shortcut button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-black/80 border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
        aria-label="Show keyboard shortcuts"
      >
        <Keyboard className="w-5 h-5" />
      </button>

      {/* Shortcuts modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
            >
              <div className="cyber-card rounded-lg overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-primary/20">
                  <h3 className="text-lg font-bold text-primary">KEYBOARD SHORTCUTS</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-full hover:bg-primary/10 transition-colors"
                    aria-label="Close shortcuts panel"
                  >
                    <X className="w-5 h-5 text-primary" />
                  </button>
                </div>
                <div className="p-4 max-h-[60vh] overflow-y-auto">
                  <div className="space-y-1">
                    {shortcuts.map((shortcut, index) => (
                      <Shortcut key={index} {...shortcut} />
                    ))}
                  </div>
                </div>
                <div className="p-4 border-t border-primary/20 bg-primary/5">
                  <p className="text-xs text-primary/70 text-center">
                    PRESS <kbd className="px-1 bg-secondary/40 border border-primary/30 rounded">?</kbd> ANYTIME TO SHOW
                    THIS PANEL
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
