"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Send, Twitter, MessageCircle, FileText, Bot } from "lucide-react"
import useDebounce from "@/hooks/use-debounce"
import Image from "next/image"
import { useRouter } from "next/navigation"
import ComparisonTable from "./comparison-table"
import SignalTypes from "./signal-types"
import Navigation from "./navigation"

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
    window.open(action.url, "_blank")
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

  return (
    <div className="w-full min-h-screen flex flex-col relative overflow-hidden bg-black">
      {/* Navigation */}
      <Navigation />

      {/* Animated GIF background with reduced blur */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            {/* GIF Background */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/videos/controller-animation.gif"
                alt="CONTROLLER ANIMATION"
                fill
                className="object-cover"
                style={{
                  filter: "blur(2.5px) brightness(0.45)", // Reduced blur from 4px to 2.5px
                  transform: "scale(1.05)", // Slightly scale up to avoid blur edges
                }}
                priority
              />
            </div>

            {/* Additional overlay for better content visibility */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Subtle vignette effect */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.6) 100%)",
                mixBlendMode: "multiply",
              }}
            />

            {/* Gold accent overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 70% 70%, rgba(252, 211, 77, 0.05) 0%, rgba(0, 0, 0, 0) 60%)",
                mixBlendMode: "screen",
              }}
            />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div id="home" className="flex items-center justify-center min-h-screen w-full pt-16">
        <div className="w-full max-w-2xl mx-auto z-10 px-4 relative mt-12 sm:mt-8 md:mt-0">
          <div className="relative flex flex-col justify-start items-center min-h-[300px]">
            <div className="w-full max-w-md sticky top-0 bg-transparent z-10 pt-4 pb-1">
              <label className="text-sm font-medium text-[#fcf0c1] mb-2 block" htmlFor="search">
                SEARCH COMMANDS
              </label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="SEARCH EVERYTHING YOU NEED HERE..."
                  value={query}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                  className="pl-4 pr-10 py-2.5 h-12 text-base rounded-lg focus-visible:ring-offset-0 bg-black/70 border-yellow-900/50 text-[#fcf0c1] placeholder:text-[#fcf0c1]/50"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5">
                  <AnimatePresence mode="popLayout">
                    {query.length > 0 ? (
                      <motion.div
                        key="send"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Send className="w-5 h-5 text-[#fcf0c1]" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="search"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Search className="w-5 h-5 text-[#fcf0c1]" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="w-full max-w-md relative">
              <AnimatePresence>
                {isFocused && result && !selectedAction && (
                  <motion.div
                    className="w-full border rounded-md shadow-lg overflow-hidden border-[#fcf0c1]/30 bg-black/80 backdrop-blur-sm mt-1"
                    variants={container}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <motion.ul>
                      {result.actions.map((action) => (
                        <motion.li
                          key={action.id}
                          className="px-3 py-2 flex items-center justify-between hover:bg-[#fcf0c1]/10 cursor-pointer rounded-md"
                          variants={item}
                          layout
                          onClick={() => handleActionClick(action)}
                        >
                          <div className="flex items-center gap-2 justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-[#fcf0c1] bg-black/50 p-1 rounded-full">{action.icon}</span>
                              <span className="text-sm font-medium text-[#fcf0c1]">{action.label}</span>
                              <span className="text-xs text-[#fcf0c1]/70">{action.description}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-[#fcf0c1]/50">{action.short}</span>
                            <span className="text-xs text-[#fcf0c1]/50 text-right">{action.end}</span>
                          </div>
                        </motion.li>
                      ))}
                    </motion.ul>
                    <div className="mt-2 px-3 py-2 border-t border-[#fcf0c1]/20">
                      <div className="text-xs text-[#fcf0c1]/70 mb-2">FOLLOW FOR MORE:</div>
                      <div className="flex flex-col gap-1.5 mb-3">
                        {teamMembers.map((member, index) => (
                          <a
                            key={index}
                            href={member.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-[#fcf0c1]/70 hover:text-[#fcf0c1] transition-colors"
                          >
                            <Twitter className="h-3 w-3" />
                            <span>{member.name}</span>
                          </a>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs text-[#fcf0c1]/50 pt-2 border-t border-[#fcf0c1]/20">
                        <span>PRESS ⌘K TO OPEN COMMANDS</span>
                        <span>ESC TO CANCEL</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-8 text-center text-[#fcf0c1] text-sm font-mono z-20 relative neon-text">
              BUILT BY DEGENS, BUILT FOR DEGENS
            </div>
          </div>
        </div>
      </div>

      {/* Signal Types section - Added before Comparison Table */}
      <SignalTypes />

      {/* Comparison table section */}
      <div id="pricing">
        <ComparisonTable />
      </div>

      {/* Footer section */}
      <footer className="w-full py-8 bg-black/80 backdrop-blur-md border-t border-[#fcf0c1]/20 mt-12 z-10 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <Image
                src="/images/ftt-logo.png"
                alt="FROM THE TRENCHES"
                width={100}
                height={40}
                className="h-8 w-auto"
              />
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://t.me/fttrenches_main"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#fcf0c1]/80 hover:text-[#fcf0c1] transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm">TELEGRAM</span>
              </a>

              <a
                href="https://x.com/fttrenches_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#fcf0c1]/80 hover:text-[#fcf0c1] transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="text-sm">X (TWITTER)</span>
              </a>
            </div>

            <div className="text-[#fcf0c1]/60 text-sm">© {new Date().getFullYear()} FROM THE TRENCHES</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ActionSearchBar
