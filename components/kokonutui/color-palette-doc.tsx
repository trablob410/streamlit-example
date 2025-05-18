"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

interface ColorSwatch {
  name: string
  value: string
  textColor: string
}

export default function ColorPaletteDoc() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const colorGroups = [
    {
      title: "Primary Colors (Gold/Cream)",
      colors: [
        { name: "primary-50", value: "#fffceb", textColor: "text-black" },
        { name: "primary-100", value: "#fcf0c1", textColor: "text-black" },
        { name: "primary-200", value: "#f8e3a3", textColor: "text-black" },
        { name: "primary-300", value: "#f5d580", textColor: "text-black" },
        { name: "primary-400", value: "#f2c94c", textColor: "text-black" },
        { name: "primary-500", value: "#efbc1f", textColor: "text-black" },
        { name: "primary-600", value: "#e6a619", textColor: "text-black" },
        { name: "primary-700", value: "#c48016", textColor: "text-white" },
        { name: "primary-800", value: "#9c6518", textColor: "text-white" },
        { name: "primary-900", value: "#7c5318", textColor: "text-white" },
        { name: "primary-950", value: "#432c0b", textColor: "text-white" },
      ],
    },
    {
      title: "Secondary Colors (Red)",
      colors: [
        { name: "secondary-50", value: "#fef2f2", textColor: "text-black" },
        { name: "secondary-100", value: "#fee2e2", textColor: "text-black" },
        { name: "secondary-200", value: "#fecaca", textColor: "text-black" },
        { name: "secondary-300", value: "#fca5a5", textColor: "text-black" },
        { name: "secondary-400", value: "#f87171", textColor: "text-black" },
        { name: "secondary-500", value: "#ef4444", textColor: "text-white" },
        { name: "secondary-600", value: "#dc2626", textColor: "text-white" },
        { name: "secondary-700", value: "#b91c1c", textColor: "text-white" },
        { name: "secondary-800", value: "#991b1b", textColor: "text-white" },
        { name: "secondary-900", value: "#7f1d1d", textColor: "text-white" },
        { name: "secondary-950", value: "#450a0a", textColor: "text-white" },
      ],
    },
    {
      title: "Accent Colors (Cyan)",
      colors: [
        { name: "accent-50", value: "#f0f9ff", textColor: "text-black" },
        { name: "accent-100", value: "#e0f2fe", textColor: "text-black" },
        { name: "accent-200", value: "#bae6fd", textColor: "text-black" },
        { name: "accent-300", value: "#7dd3fc", textColor: "text-black" },
        { name: "accent-400", value: "#38bdf8", textColor: "text-black" },
        { name: "accent-500", value: "#0ea5e9", textColor: "text-white" },
        { name: "accent-600", value: "#0284c7", textColor: "text-white" },
        { name: "accent-700", value: "#0369a1", textColor: "text-white" },
        { name: "accent-800", value: "#075985", textColor: "text-white" },
        { name: "accent-900", value: "#0c4a6e", textColor: "text-white" },
        { name: "accent-950", value: "#082f49", textColor: "text-white" },
      ],
    },
    {
      title: "Neutral Colors",
      colors: [
        { name: "neutral-50", value: "#fafafa", textColor: "text-black" },
        { name: "neutral-100", value: "#f5f5f5", textColor: "text-black" },
        { name: "neutral-200", value: "#e5e5e5", textColor: "text-black" },
        { name: "neutral-300", value: "#d4d4d4", textColor: "text-black" },
        { name: "neutral-400", value: "#a3a3a3", textColor: "text-black" },
        { name: "neutral-500", value: "#737373", textColor: "text-white" },
        { name: "neutral-600", value: "#525252", textColor: "text-white" },
        { name: "neutral-700", value: "#404040", textColor: "text-white" },
        { name: "neutral-800", value: "#262626", textColor: "text-white" },
        { name: "neutral-900", value: "#171717", textColor: "text-white" },
        { name: "neutral-950", value: "#0f0f0f", textColor: "text-white" },
      ],
    },
    {
      title: "Semantic Colors",
      colors: [
        { name: "success", value: "#22c55e", textColor: "text-white" },
        { name: "warning", value: "#f59e0b", textColor: "text-black" },
        { name: "error", value: "#ef4444", textColor: "text-white" },
        { name: "info", value: "#0ea5e9", textColor: "text-white" },
      ],
    },
  ]

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color)
    setCopiedColor(color)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  return (
    <div className="p-8 bg-neutral-950 text-primary">
      <h1 className="text-3xl font-bold mb-8">From The Trenches Color Palette</h1>

      <p className="mb-8 text-primary/80 font-sans">
        This color palette is designed to provide a consistent visual language across the From The Trenches platform.
        The colors are optimized for accessibility, with sufficient contrast for readability.
      </p>

      {colorGroups.map((group) => (
        <div key={group.title} className="mb-12">
          <h2 className="text-xl font-bold mb-4">{group.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {group.colors.map((color) => (
              <div
                key={color.name}
                className="rounded-md overflow-hidden border border-primary/20 hover:border-primary/40 transition-colors"
              >
                <div
                  className="h-20 flex items-center justify-center cursor-pointer"
                  style={{ backgroundColor: color.value }}
                  onClick={() => copyToClipboard(color.value)}
                >
                  <span className={`${color.textColor} font-mono text-sm`}>
                    {copiedColor === color.value ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <Copy className="h-5 w-5 opacity-70" />
                    )}
                  </span>
                </div>
                <div className="p-3 bg-black/40">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">{color.name}</span>
                    <span className="font-mono text-xs text-primary/70">{color.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-12 p-6 border border-primary/20 rounded-md bg-black/40">
        <h2 className="text-xl font-bold mb-4">Usage Guidelines</h2>
        <ul className="space-y-3 font-sans text-primary/80">
          <li>
            <strong className="text-primary">Primary Colors:</strong> Use for main text, borders, and highlights. The
            primary-100 (#fcf0c1) is our main brand color.
          </li>
          <li>
            <strong className="text-primary">Secondary Colors:</strong> Use for CTAs, important actions, and alerts. The
            secondary-500 (#ef4444) is our main action color.
          </li>
          <li>
            <strong className="text-primary">Accent Colors:</strong> Use for secondary highlights, links, and
            interactive elements. The accent-500 (#0ea5e9) provides a nice contrast to our primary palette.
          </li>
          <li>
            <strong className="text-primary">Neutral Colors:</strong> Use for backgrounds, containers, and subtle UI
            elements. The neutral-950 (#0f0f0f) is our main background color.
          </li>
          <li>
            <strong className="text-primary">Semantic Colors:</strong> Use consistently for their intended purposes:
            success for positive outcomes, warning for caution, error for problems, and info for neutral information.
          </li>
        </ul>
      </div>
    </div>
  )
}
