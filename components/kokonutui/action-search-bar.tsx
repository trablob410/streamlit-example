"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Twitter, MessageCircle, FileText, Bot } from "lucide-react"
import useDebounce from "@/hooks/use-debounce"
import Image from "next/image"
import { useRouter } from "next/navigation"
import ComparisonTable from "./comparison-table"
import SignalTypes from "./signal-types"
import Navigation from "./navigation"
import HeroSection from "./hero-section"
import HowItWorks from "./how-it-works"
import FAQSection from "./faq-section"
import TestimonialsSection from "./testimonials"
import KeyboardShortcuts from "./keyboard-shortcuts"
import FTTLogo from "./ftt-logo"
import { V31ThemeToggle } from "@/components/ui/v31-theme-toggle"
import SubscriptionOptions from "./subscription-options"

interface Action {
  id: string
  label: string
  icon: React.ReactNode
  description?: string
  short?: string
  end?: string
  url: string
}

interface SearchResult {
  actions: Action[]
}

const allActions = [
  {
    id: "1",
    label: "X (TWITTER)",
    icon: <Twitter className="h-4 w-4 text-white" />,
    description: "UPDATES",
    short: "",
    end: "SOCIAL",
    url: "https://x.com/fttrenches_",
  },
  {
    id: "2",
    label: "TELEGRAM CHANNEL",
    icon: <MessageCircle className="h-4 w-4 text-white" />,
    description: "COMMUNITY",
    short: "",
    end: "SOCIAL",
    url: "https://t.me/fttrenches_main",
  },
  {
    id: "3",
    label: "NOTION HUB",
    icon: <FileText className="h-4 w-4 text-white" />,
    description: "INFORMATION",
    short: "",
    end: "RESOURCE",
    url: "https://0xtrablo.notion.site/FROM-THE-TRENCHES-ba42ad5238334ec596e5940ea4c1bbca",
  },
  {
    id: "4",
    label: "BOT FOLDER",
    icon: <Bot className="h-4 w-4 text-white" />,
    description: "TOOLS",
    short: "",
    end: "RESOURCE",
    url: "https://t.me/addlist/iVoyH0CX-TYyZmM1",
  },
  {
    id: "5",
    label: "AXIOM TRADING",
    icon: (
      <div className="h-4 w-4 flex items-center justify-center">
        <Image src="/images/axiom-logo.png" alt="AXIOM" width={16} height={16} />
      </div>
    ),
    description: "PARTNER",
    short: "",
    end: "PLATFORM",
    url: "https://axiom.trade/@ftt",
  },
  {
    id: "6",
    label: "0XTRABLO",
    icon: <Twitter className="h-4 w-4 text-white" />,
    description: "TEAM",
    short: "",
    end: "TEAM MEMBER",
    url: "https://x.com/0xTrablo",
  },
  {
    id: "7",
    label: "0XCAESAR1",
    icon: <Twitter className="h-4 w-4 text-white" />,
    description: "TEAM",
    short: "",
    end: "TEAM MEMBER",
    url: "https://x.com/0xCaesar1",
  },
  {
    id: "8",
    label: "BRIANTHELOWKEY",
    icon: <Twitter className="h-4 w-4 text-white" />,
    description: "TEAM",
    short: "",
    end: "TEAM MEMBER",
    url: "https://x.com/brianthelowkey",
  },
  {
    id: "9",
    label: "LIVE SIGNAL #1",
    icon: <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>,
    description: "ACTIVE",
    short: "",
    end: "SIGNAL",
    url: "https://t.me/fttrenches_main",
  },
  {
    id: "10",
    label: "LIVE SIGNAL #2",
    icon: <div className="w-2 h-2 rounded-full bg-warning animate-pulse"></div>,
    description: "PENDING",
    short: "",
    end: "SIGNAL",
    url: "https://t.me/fttrenches_main",
  },
  {
    id: "11",
    label: "LIVE SIGNAL #3",
    icon: <div className="w-2 h-2 rounded-full bg-info animate-pulse"></div>,
    description: "MONITORING",
    short: "",
    end: "SIGNAL",
    url: "https://t.me/fttrenches_main",
  },
]

const teamMembers = [
  {
    name: "0XTRABLO",
    url: "https://x.com/0xTrablo",
  },
  {
    name: "0XCAESAR1",
    url: "https://x.com/0xCaesar1",
  },
  {
    name: "BRIANTHELOWKEY",
    url: "https://x.com/brianthelowkey",
  },
]

function ActionSearchBar({ actions = allActions }: { actions?: Action[] }) {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [result, setResult] = useState<SearchResult | null>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [selectedAction, setSelectedAction] = useState<Action | null>(null)
  const debouncedQuery = useDebounce(query, 200)

  useEffect(() => {
    if (!isFocused) {
      setResult(null)
      return
    }

    if (!debouncedQuery) {
      setResult({ actions: allActions })
      return
    }

    const normalizedQuery = debouncedQuery.toLowerCase().trim()
    const filteredActions = allActions.filter((action) => {
      const searchableText = action.label.toLowerCase()
      return searchableText.includes(normalizedQuery)
    })

    setResult({ actions: filteredActions })
  }, [debouncedQuery, isFocused])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setIsTyping(true)
  }

  const handleActionClick = (action: Action) => {
    setSelectedAction(action)
    window.open(action.url, "_blank", "noopener,noreferrer")
  }

  const handleLogoClick = () => {
    // Reload the page or redirect to homepage
    router.push("/")
  }

  const container = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          duration: 0.4,
        },
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  }

  // Reset selectedAction when focusing the input
  const handleFocus = () => {
    setSelectedAction(null)
    setIsFocused(true)
  }

  // Skip to main content link for accessibility
  const skipToContent = () => {
    document.getElementById("main-content")?.focus()
    document.getElementById("main-content")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="w-full min-h-screen flex flex-col relative overflow-hidden bg-background">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" onClick={skipToContent} className="skip-to-content">
        Skip to main content
      </a>

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <HeroSection />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Signal Types section */}
        <SignalTypes />

        {/* Testimonials section */}
        <TestimonialsSection />

        {/* Comparison table section */}
        <ComparisonTable />

        {/* Subscription options section */}
        <SubscriptionOptions />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer section */}
      <footer className="w-full py-8 bg-black/80 backdrop-blur-md border-t border-primary-100/20 mt-12 z-10 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <FTTLogo size="md" variant="full" />
              </div>
              <p className="text-primary-100/70 text-sm leading-relaxed mb-4 font-sans">
                AI-POWERED CRYPTO INTELLIGENCE PLATFORM THAT TRACKS SMART MONEY MOVEMENTS AND DELIVERS ACTIONABLE
                TRADING SIGNALS.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://t.me/fttrenches_main"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-100/70 hover:text-primary-100 transition-colors"
                  aria-label="Join our Telegram channel"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/fttrenches_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-100/70 hover:text-primary-100 transition-colors"
                  aria-label="Follow us on X (Twitter)"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <V31ThemeToggle className="ml-2" />
              </div>
            </div>

            <div>
              <h3 className="text-primary font-bold mb-4 text-lg">QUICK LINKS</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-primary/70 hover:text-primary text-sm"
                  >
                    HOME
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("signal-types")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-primary/70 hover:text-primary text-sm"
                  >
                    SIGNAL TYPES
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-primary/70 hover:text-primary text-sm"
                  >
                    TESTIMONIALS
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-primary/70 hover:text-primary text-sm"
                  >
                    PRICING
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-primary/70 hover:text-primary text-sm"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary/20 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary/60 text-sm mb-4 md:mb-0 font-sans">
              © {new Date().getFullYear()} FROM THE TRENCHES. ALL RIGHTS RESERVED.
            </div>
            <div className="text-primary/60 text-xs">BUILT BY DEGENS, BUILT FOR DEGENS</div>
          </div>
        </div>
      </footer>

      {/* Keyboard shortcuts component */}
      <KeyboardShortcuts />
    </div>
  )
}

export default ActionSearchBar
