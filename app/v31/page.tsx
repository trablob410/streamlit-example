"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/v31-card"
import { V31Button } from "@/components/ui/v31-button"
import { V31ThemeToggle } from "@/components/ui/v31-theme-toggle"
import { Copy, Check, ChevronRight } from "lucide-react"
import FTTLogo from "@/components/kokonutui/ftt-logo"

export default function V31Documentation() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color)
    setCopiedColor(color)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  const colorGroups = [
    {
      title: "Primary Colors (Gold/Cream)",
      colors: [
        { name: "primary-50", value: "#fffceb", textColor: "text-black" },
        { name: "primary-100", value: "#efd6ac", textColor: "text-black" },
        { name: "primary-200", value: "#e8c88e", textColor: "text-black" },
        { name: "primary-300", value: "#e1ba70", textColor: "text-black" },
        { name: "primary-400", value: "#daac52", textColor: "text-black" },
        { name: "primary-500", value: "#d39e34", textColor: "text-black" },
        { name: "primary-600", value: "#c48e2a", textColor: "text-black" },
        { name: "primary-700", value: "#a37522", textColor: "text-white" },
        { name: "primary-800", value: "#825c1a", textColor: "text-white" },
        { name: "primary-900", value: "#624612", textColor: "text-white" },
        { name: "primary-950", value: "#422f0c", textColor: "text-white" },
      ],
    },
    {
      title: "Secondary Colors (Dark Black)",
      colors: [
        { name: "secondary-50", value: "#e6e7e7", textColor: "text-black" },
        { name: "secondary-100", value: "#c1c5c5", textColor: "text-black" },
        { name: "secondary-200", value: "#979f9f", textColor: "text-black" },
        { name: "secondary-300", value: "#6d7979", textColor: "text-black" },
        { name: "secondary-400", value: "#4e5c5c", textColor: "text-white" },
        { name: "secondary-500", value: "#2f3f3f", textColor: "text-white" },
        { name: "secondary-600", value: "#273939", textColor: "text-white" },
        { name: "secondary-700", value: "#1f3131", textColor: "text-white" },
        { name: "secondary-800", value: "#172929", textColor: "text-white" },
        { name: "secondary-900", value: "#0f1c1c", textColor: "text-white" },
        { name: "secondary-950", value: "#080f0f", textColor: "text-white" },
      ],
    },
    {
      title: "Accent Colors (Burnt Orange)",
      colors: [
        { name: "accent-50", value: "#fef2e7", textColor: "text-black" },
        { name: "accent-100", value: "#fde0c4", textColor: "text-black" },
        { name: "accent-200", value: "#fac89d", textColor: "text-black" },
        { name: "accent-300", value: "#f7a96d", textColor: "text-black" },
        { name: "accent-400", value: "#f48a3c", textColor: "text-black" },
        { name: "accent-500", value: "#f06b0b", textColor: "text-white" },
        { name: "accent-600", value: "#e25608", textColor: "text-white" },
        { name: "accent-700", value: "#c44900", textColor: "text-white" },
        { name: "accent-800", value: "#9c3a00", textColor: "text-white" },
        { name: "accent-900", value: "#7d3000", textColor: "text-white" },
        { name: "accent-950", value: "#431600", textColor: "text-white" },
      ],
    },
    {
      title: "Success Colors (Dark Teal)",
      colors: [
        { name: "success-50", value: "#ecf8f7", textColor: "text-black" },
        { name: "success-100", value: "#d0eeec", textColor: "text-black" },
        { name: "success-200", value: "#a6deda", textColor: "text-black" },
        { name: "success-300", value: "#73c7c1", textColor: "text-black" },
        { name: "success-400", value: "#48aba3", textColor: "text-white" },
        { name: "success-500", value: "#348f88", textColor: "text-white" },
        { name: "success-600", value: "#2a726d", textColor: "text-white" },
        { name: "success-700", value: "#245b57", textColor: "text-white" },
        { name: "success-800", value: "#1f4a47", textColor: "text-white" },
        { name: "success-900", value: "#183a37", textColor: "text-white" },
        { name: "success-950", value: "#0c2220", textColor: "text-white" },
      ],
    },
    {
      title: "Info Colors (Light Gray)",
      colors: [
        { name: "info-50", value: "#f7f8f9", textColor: "text-black" },
        { name: "info-100", value: "#ebeef2", textColor: "text-black" },
        { name: "info-200", value: "#dde2e8", textColor: "text-black" },
        { name: "info-300", value: "#cbd2db", textColor: "text-black" },
        { name: "info-400", value: "#adb6c4", textColor: "text-black" },
        { name: "info-500", value: "#8e99aa", textColor: "text-white" },
        { name: "info-600", value: "#717d91", textColor: "text-white" },
        { name: "info-700", value: "#5d6677", textColor: "text-white" },
        { name: "info-800", value: "#4a5261", textColor: "text-white" },
        { name: "info-900", value: "#3d4451", textColor: "text-white" },
        { name: "info-950", value: "#292e39", textColor: "text-white" },
      ],
    },
  ]

  const buttonVariants = [
    { name: "Primary", variant: "primary", description: "Main call-to-action buttons" },
    { name: "Secondary", variant: "secondary", description: "Alternative actions" },
    { name: "Success", variant: "success", description: "Confirmation actions" },
    { name: "Ghost", variant: "ghost", description: "Subtle actions" },
    { name: "Link", variant: "link", description: "Text-only actions" },
    { name: "Outline", variant: "outline", description: "Bordered actions" },
  ]

  const buttonSizes = [
    { name: "Small", size: "sm" },
    { name: "Medium", size: "md" },
    { name: "Large", size: "lg" },
  ]

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "colors", label: "Colors" },
    { id: "typography", label: "Typography" },
    { id: "buttons", label: "Buttons" },
    { id: "effects", label: "Effects" },
  ]

  return (
    <div className="min-h-screen bg-secondary-950 text-primary-100 p-6">
      <header className="max-w-6xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <FTTLogo size="md" variant="icon" />
            <h1 className="text-3xl font-bold neon-text">V31 Design System</h1>
          </div>
          <V31ThemeToggle />
        </div>
        <p className="mt-2 text-primary-100/70 max-w-2xl">
          The V31 design system provides a consistent visual language for the From The Trenches platform, with a focus
          on the cyber/tech aesthetic with dark backgrounds and carefully selected accent colors.
        </p>
      </header>

      <nav className="max-w-6xl mx-auto mb-8 border-b border-primary-100/20 pb-2">
        <div className="flex overflow-x-auto gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-primary-100 border-b-2 border-accent-700"
                  : "text-primary-100/60 hover:text-primary-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto">
        {activeTab === "overview" && (
          <div className="space-y-8">
            <Card variant="cyber">
              <CardHeader>
                <CardTitle>V31 Design System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The V31 design system is built for the From The Trenches platform, featuring a dark cyber/tech
                  aesthetic with carefully selected colors and visual effects.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">Key Features</h3>
                    <ul className="space-y-1 list-disc pl-5">
                      <li>Dark background with cream/beige text for readability</li>
                      <li>Burnt orange accent color for CTAs and highlights</li>
                      <li>Dark teal for success indicators</li>
                      <li>Cyber-inspired visual effects (glow, scanlines, etc.)</li>
                      <li>Monospace headings with sans-serif body text</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">Design Principles</h3>
                    <ul className="space-y-1 list-disc pl-5">
                      <li>High contrast for readability</li>
                      <li>Consistent visual hierarchy</li>
                      <li>Interactive elements with clear feedback</li>
                      <li>Responsive design for all screen sizes</li>
                      <li>Accessible color combinations</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Colors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The V31 color palette features dark backgrounds with cream/beige text, burnt orange accents, and
                    dark teal for success indicators.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <div className="w-8 h-8 rounded-md bg-primary-100" title="Primary (Cream)"></div>
                    <div className="w-8 h-8 rounded-md bg-secondary-950" title="Secondary (Black)"></div>
                    <div className="w-8 h-8 rounded-md bg-accent-700" title="Accent (Burnt Orange)"></div>
                    <div className="w-8 h-8 rounded-md bg-success-900" title="Success (Dark Teal)"></div>
                    <div className="w-8 h-8 rounded-md bg-info-400" title="Info (Light Gray)"></div>
                  </div>
                  <V31Button variant="ghost" size="sm" className="mt-4" onClick={() => setActiveTab("colors")}>
                    View Color System
                    <ChevronRight className="h-4 w-4" />
                  </V31Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Typography</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    V31 uses Share Tech Mono for headings and Inter for body text, creating a balance between the
                    cyberpunk aesthetic and readability.
                  </p>
                  <div className="space-y-2 mt-4">
                    <div className="font-mono text-xl">HEADING TEXT</div>
                    <div className="font-sans text-base">Body text with good readability</div>
                  </div>
                  <V31Button variant="ghost" size="sm" className="mt-4" onClick={() => setActiveTab("typography")}>
                    View Typography System
                    <ChevronRight className="h-4 w-4" />
                  </V31Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Effects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    V31 includes cyber-inspired visual effects like glows, scanlines, and holographic elements to
                    enhance the tech aesthetic.
                  </p>
                  <div className="space-y-4 mt-4">
                    <div className="p-2 glow-effect inline-block">Glow Effect</div>
                    <div className="p-2 neon-text inline-block">Neon Text</div>
                  </div>
                  <V31Button variant="ghost" size="sm" className="mt-4" onClick={() => setActiveTab("effects")}>
                    View Effects System
                    <ChevronRight className="h-4 w-4" />
                  </V31Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "colors" && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Color System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  The V31 color system is designed to provide a consistent visual language across the From The Trenches
                  platform. The colors are optimized for accessibility, with sufficient contrast for readability.
                </p>

                {colorGroups.map((group) => (
                  <div key={group.title} className="mb-8">
                    <h3 className="text-xl font-bold mb-4">{group.title}</h3>
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

                <div className="mt-8 p-6 border border-primary/20 rounded-md bg-black/40">
                  <h3 className="text-xl font-bold mb-4">Usage Guidelines</h3>
                  <ul className="space-y-3 font-sans text-primary/80">
                    <li>
                      <strong className="text-primary">Primary Colors:</strong> Use for main text, borders, and
                      highlights. The primary-100 (#efd6ac) is our main brand color.
                    </li>
                    <li>
                      <strong className="text-primary">Secondary Colors:</strong> Use for backgrounds and containers.
                      The secondary-950 (#080f0f) is our main background color.
                    </li>
                    <li>
                      <strong className="text-primary">Accent Colors:</strong> Use for CTAs, important actions, and
                      alerts. The accent-700 (#c44900) is our main action color.
                    </li>
                    <li>
                      <strong className="text-primary">Success Colors:</strong> Use for positive outcomes and
                      confirmations. The success-900 (#183a37) is our main success color.
                    </li>
                    <li>
                      <strong className="text-primary">Info Colors:</strong> Use for neutral information and subtle UI
                      elements. The info-400 (#adb6c4) is our main info color.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "typography" && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Typography System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  The V31 typography system uses a combination of fonts to balance the cyberpunk aesthetic with
                  readability and accessibility.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="p-6 border border-primary/20 rounded-md bg-black/40">
                    <h3 className="text-lg font-bold mb-2">Heading Font: Share Tech Mono</h3>
                    <p className="text-primary/80 mb-4 font-sans">
                      Used for headings, titles, and UI elements that need to stand out. This monospace font reinforces
                      our tech/cyberpunk aesthetic.
                    </p>
                    <div className="space-y-4">
                      <div className="font-mono text-4xl">HEADING 1</div>
                      <div className="font-mono text-3xl">HEADING 2</div>
                      <div className="font-mono text-2xl">HEADING 3</div>
                      <div className="font-mono text-xl">HEADING 4</div>
                      <div className="font-mono text-lg">HEADING 5</div>
                      <div className="font-mono text-base">HEADING 6</div>
                    </div>
                  </div>

                  <div className="p-6 border border-primary/20 rounded-md bg-black/40">
                    <h3 className="text-lg font-bold mb-2">Body Font: Inter</h3>
                    <p className="text-primary/80 mb-4 font-sans">
                      Used for body text, paragraphs, and UI elements that require better readability. This sans-serif
                      font provides excellent legibility.
                    </p>
                    <div className="space-y-4">
                      <p className="font-sans text-lg">Large paragraph text for important information.</p>
                      <p className="font-sans text-base">Standard paragraph text for most content on the site.</p>
                      <p className="font-sans text-sm">Smaller text for secondary information and UI elements.</p>
                      <p className="font-sans text-xs">Very small text for legal information and footnotes.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 border border-primary/20 rounded-md bg-black/40">
                  <h3 className="text-xl font-bold mb-4">Typography Guidelines</h3>
                  <ul className="space-y-3 font-sans text-primary/80">
                    <li>
                      <strong className="text-primary">Headings:</strong> Use Share Tech Mono for all headings. Keep
                      headings in uppercase for the cyberpunk aesthetic.
                    </li>
                    <li>
                      <strong className="text-primary">Body Text:</strong> Use Inter for all body text to ensure
                      readability. Avoid uppercase for paragraphs.
                    </li>
                    <li>
                      <strong className="text-primary">Line Height:</strong> Use 1.5 for body text and 1.2 for headings
                      to ensure proper readability.
                    </li>
                    <li>
                      <strong className="text-primary">Letter Spacing:</strong> Headings may benefit from slightly
                      increased letter spacing (0.025em) for better readability.
                    </li>
                    <li>
                      <strong className="text-primary">Responsive Typography:</strong> Font sizes should scale down on
                      mobile devices. Use the provided responsive classes.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "buttons" && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Button System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  The V31 button system provides a variety of button styles for different use cases, with consistent
                  visual feedback and accessibility.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Button Variants</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {buttonVariants.map((variant) => (
                      <div key={variant.name} className="p-4 border border-primary/20 rounded-md bg-black/40">
                        <h4 className="text-lg font-bold mb-2">{variant.name}</h4>
                        <p className="text-primary/80 text-sm mb-4">{variant.description}</p>
                        <V31Button variant={variant.variant as any} className="w-full">
                          {variant.name} Button
                        </V31Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Button Sizes</h3>
                  <div className="flex flex-wrap gap-4">
                    {buttonSizes.map((size) => (
                      <V31Button key={size.name} variant="primary" size={size.size as any}>
                        {size.name} Button
                      </V31Button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Button States</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <V31Button variant="primary">Default</V31Button>
                    <V31Button variant="primary" disabled>
                      Disabled
                    </V31Button>
                    <V31Button variant="primary" glow="subtle">
                      With Glow
                    </V31Button>
                    <V31Button variant="primary" glow="strong">
                      Strong Glow
                    </V31Button>
                  </div>
                </div>

                <div className="mt-8 p-6 border border-primary/20 rounded-md bg-black/40">
                  <h3 className="text-xl font-bold mb-4">Button Usage Guidelines</h3>
                  <ul className="space-y-3 font-sans text-primary/80">
                    <li>
                      <strong className="text-primary">Primary Buttons:</strong> Use for main call-to-action buttons and
                      primary actions.
                    </li>
                    <li>
                      <strong className="text-primary">Secondary Buttons:</strong> Use for alternative actions or
                      secondary importance.
                    </li>
                    <li>
                      <strong className="text-primary">Success Buttons:</strong> Use for confirmation actions or
                      positive outcomes.
                    </li>
                    <li>
                      <strong className="text-primary">Ghost Buttons:</strong> Use for subtle actions or in areas with
                      many buttons.
                    </li>
                    <li>
                      <strong className="text-primary">Button Sizes:</strong> Use appropriate sizes based on context and
                      importance.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "effects" && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Visual Effects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6">
                  The V31 design system includes various visual effects to enhance the cyber/tech aesthetic of the
                  platform.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="p-6 border border-primary/20 rounded-md bg-black/40">
                    <h3 className="text-lg font-bold mb-4">Glow Effects</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Standard Glow</h4>
                        <div className="p-4 border border-primary/30 rounded-md glow-effect inline-block">
                          Glow Effect
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Accent Glow</h4>
                        <div className="p-4 border border-accent/30 rounded-md glow-accent inline-block">
                          Accent Glow
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Success Glow</h4>
                        <div className="p-4 border border-success/30 rounded-md glow-success inline-block">
                          Success Glow
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border border-primary/20 rounded-md bg-black/40">
                    <h3 className="text-lg font-bold mb-4">Text Effects</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Neon Text</h4>
                        <div className="text-xl neon-text">NEON TEXT EFFECT</div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Neon Accent</h4>
                        <div className="text-xl neon-text-accent text-accent-700">NEON ACCENT EFFECT</div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Glitch Text</h4>
                        <div className="text-xl glitch-text" data-text="GLITCH EFFECT">
                          GLITCH EFFECT
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="p-6 border border-primary/20 rounded-md bg-black/40">
                    <h3 className="text-lg font-bold mb-4">Card Effects</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Cyber Card</h4>
                        <div className="cyber-card p-4">
                          <p>Cyber card with grid pattern and shine effect</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Hologram Card</h4>
                        <div className="hologram-bg p-4">
                          <p>Holographic effect with scan lines</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border border-primary/20 rounded-md bg-black/40 relative overflow-hidden">
                    <h3 className="text-lg font-bold mb-4">Animation Effects</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Pulse Glow</h4>
                        <div className="p-4 border border-primary/30 rounded-md animate-pulse-glow inline-block">
                          Pulsing Glow
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Scan Line</h4>
                        <div className="p-4 border border-primary/30 rounded-md relative h-20">
                          <div className="scanline"></div>
                          <p>Scan Line Effect</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 border border-primary/20 rounded-md bg-black/40">
                  <h3 className="text-xl font-bold mb-4">Effects Usage Guidelines</h3>
                  <ul className="space-y-3 font-sans text-primary/80">
                    <li>
                      <strong className="text-primary">Glow Effects:</strong> Use sparingly to highlight important
                      elements or interactive components.
                    </li>
                    <li>
                      <strong className="text-primary">Text Effects:</strong> Use neon text for headings and important
                      titles. Avoid overuse of glitch effects.
                    </li>
                    <li>
                      <strong className="text-primary">Card Effects:</strong> Use cyber cards for content containers and
                      hologram effects for special content.
                    </li>
                    <li>
                      <strong className="text-primary">Animation Effects:</strong> Use animations thoughtfully to avoid
                      distracting users or causing accessibility issues.
                    </li>
                    <li>
                      <strong className="text-primary">Performance:</strong> Be mindful of performance impact when using
                      multiple effects, especially on mobile devices.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="max-w-6xl mx-auto mt-12 pt-6 border-t border-primary/20 text-center text-primary/60 text-sm">
        <p>V31 Design System • From The Trenches • {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
