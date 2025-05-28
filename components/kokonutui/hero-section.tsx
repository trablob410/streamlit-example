"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, AlertTriangle, TrendingUp, Shield, Search, MessageCircle, FileText, Bot } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import FTTLogo from "./ftt-logo"
import { V31Button } from "../ui/v31-button"
import { Input } from "@/components/ui/input"
import useDebounce from "@/hooks/use-debounce"
import { Twitter } from "lucide-react"

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)
  const [query, setQuery] = useState("")
  const [result, setResult] = useState<any>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [selectedAction, setSelectedAction] = useState<any>(null)
  const debouncedQuery = useDebounce(query, 200)

  const mascotImages = [
    "/images/ftt-mascot-1.png",
    "/images/ftt-mascot-2.png",
    "/images/ftt-mascot-3.png",
    "/images/ftt-mascot-4.png",
    "/images/ftt-mascot-5.png",
    "/images/ftt-mascot-6.png",
  ]

  const allActions = [
    {
      id: "1",
      label: "X (Twitter)",
      icon: <Twitter className="h-4 w-4 text-white" />,
      description: "Updates",
      category: "main",
      end: "Social",
      url: "https://x.com/fttrenches_",
    },
    {
      id: "2",
      label: "Telegram Channel",
      icon: <MessageCircle className="h-4 w-4 text-white" />,
      description: "Community",
      category: "main",
      end: "Social",
      url: "https://t.me/fttrenches_main",
    },
    {
      id: "3",
      label: "Notion Hub",
      icon: <FileText className="h-4 w-4 text-white" />,
      description: "Information",
      category: "main",
      end: "Resource",
      url: "https://0xtrablo.notion.site/FROM-THE-TRENCHES-ba42ad5238334ec596e5940ea4c1bbca",
    },
    {
      id: "4",
      label: "Bot Folder",
      icon: <Bot className="h-4 w-4 text-white" />,
      description: "Tools",
      category: "main",
      end: "Resource",
      url: "https://t.me/addlist/iVoyH0CX-TYyZmM1",
    },
    {
      id: "5",
      label: "Axiom Trading",
      icon: (
        <div className="h-4 w-4 flex items-center justify-center">
          <Image src="/images/axiom-logo.png" alt="AXIOM" width={16} height={16} />
        </div>
      ),
      description: "Partner",
      category: "main",
      end: "Platform",
      url: "https://axiom.trade/@ftt",
    },
    {
      id: "6",
      label: "0xTrablo",
      icon: <Twitter className="h-3 w-3 text-white" />,
      description: "",
      category: "team",
      end: "",
      url: "https://x.com/0xTrablo",
    },
    {
      id: "7",
      label: "0xCaesar1",
      icon: <Twitter className="h-3 w-3 text-white" />,
      description: "",
      category: "team",
      end: "",
      url: "https://x.com/0xCaesar1",
    },
    {
      id: "8",
      label: "brianthelowkey",
      icon: <Twitter className="h-3 w-3 text-white" />,
      description: "",
      category: "team",
      end: "",
      url: "https://x.com/brianthelowkey",
    },
  ]

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
  }

  const handleActionClick = (action: any) => {
    setSelectedAction(action)
    window.open(action.url, "_blank", "noopener,noreferrer")
  }

  const handleFocus = () => {
    setSelectedAction(null)
    setIsFocused(true)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background with reduced opacity */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/videos/controller-animation.gif"
            alt="Background animation showing digital interface"
            fill
            className="object-cover"
            style={{
              filter: "blur(2px) brightness(0.35)", // Dimmed for better readability
              transform: "scale(1.05)",
            }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/60" /> {/* Darker overlay */}
        <div className="scanline"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-[80vh]">
          {/* Main content - centered */}
          <div className="space-y-8 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Logo */}
              <div className="mb-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <FTTLogo size="lg" variant="full" />
                </motion.div>
              </div>

              <div className="inline-block bg-accent/20 border border-accent/40 rounded-md px-3 py-1 text-sm text-accent-400">
                CRYPTO INTELLIGENCE PLATFORM
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight neon-text">
                GAIN THE EDGE IN <br />
                <span className="text-accent">CRYPTO TRADING</span>
              </h1>

              <p className="text-lg md:text-xl text-primary/90 max-w-xl leading-relaxed font-sans">
                AI-POWERED SIGNALS THAT TRACK SMART MONEY MOVEMENTS, GIVING YOU THE INTELLIGENCE ADVANTAGE IN THE
                TRENCHES OF CRYPTO TRADING.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <V31Button
                variant="primary"
                size="lg"
                glow="subtle"
                as="a"
                href="https://t.me/fttrenches_main"
                target="_blank"
                rel="noopener noreferrer"
              >
                GET STARTED NOW
                <ArrowRight className="h-4 w-4" />
              </V31Button>

              <V31Button
                variant="secondary"
                size="lg"
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              >
                HOW IT WORKS
              </V31Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-md mx-auto"
            >
              <h3 className="text-primary font-bold mb-4 text-lg">SEARCH COMMANDS</h3>
              <div className="relative">
                <Input
                  id="search-input"
                  type="text"
                  placeholder="FIND RESOURCES..."
                  value={query}
                  onChange={handleInputChange}
                  onFocus={handleFocus}
                  onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                  className="pl-4 pr-10 py-2 h-10 text-sm rounded-lg focus-visible:ring-offset-0 bg-black/70 border-primary/30 text-primary placeholder:text-primary/50"
                  aria-label="Search resources"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4">
                  <Search className="w-4 h-4 text-primary/70" aria-hidden="true" />
                </div>
              </div>

              <div className="w-full relative mt-2">
                <AnimatePresence>
                  {isFocused && result && (
                    <motion.div
                      className="w-full border rounded-md shadow-lg overflow-hidden border-primary/30 bg-black/80 backdrop-blur-sm"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      role="listbox"
                      aria-label="Search results"
                    >
                      <div>
                        {/* Main resources section */}
                        {result.actions
                          .filter((action: any) => action.category === "main")
                          .map((action: any) => (
                            <div
                              key={action.id}
                              className="px-3 py-2 flex items-center justify-between hover:bg-primary/10 cursor-pointer"
                              onClick={() => handleActionClick(action)}
                              role="option"
                              aria-selected={selectedAction?.id === action.id}
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-primary bg-black/50 p-1 rounded-full">{action.icon}</span>
                                <div className="flex flex-col">
                                  <span className="text-sm font-medium text-primary">{action.label}</span>
                                  {action.description && (
                                    <span className="text-xs text-primary/60">{action.description}</span>
                                  )}
                                </div>
                              </div>
                              <span className="text-xs text-primary/50">{action.end}</span>
                            </div>
                          ))}

                        {/* Team section */}
                        {result.actions.some((action: any) => action.category === "team") && (
                          <>
                            <div className="px-3 py-2 border-t border-primary/20">
                              <span className="text-xs text-primary/60">CORE TEAM MEMBER</span>
                            </div>
                            {result.actions
                              .filter((action: any) => action.category === "team")
                              .map((action: any) => (
                                <div
                                  key={action.id}
                                  className="px-3 py-1.5 flex items-center gap-3 hover:bg-primary/10 cursor-pointer"
                                  onClick={() => handleActionClick(action)}
                                  role="option"
                                  aria-selected={selectedAction?.id === action.id}
                                >
                                  <span className="text-primary bg-black/50 p-0.5 rounded-full">{action.icon}</span>
                                  <span className="text-xs text-primary/80">{action.label}</span>
                                </div>
                              ))}
                          </>
                        )}
                        {/* Subscription section */}
                        <div className="px-3 py-2 border-t border-primary/20">
                          <span className="text-xs text-primary/60">SUBSCRIPTION</span>
                        </div>
                        <div
                          className="px-3 py-1.5 flex items-center gap-3 hover:bg-primary/10 cursor-pointer"
                          onClick={() =>
                            window.open("https://app.hel.io/x/fttrenches-1mo", "_blank", "noopener,noreferrer")
                          }
                          role="option"
                        >
                          <span className="text-primary bg-black/50 p-0.5 rounded-full">
                            <span className="text-xs">💳</span>
                          </span>
                          <span className="text-xs text-primary/80">Monthly</span>
                        </div>
                        <div
                          className="px-3 py-1.5 flex items-center gap-3 hover:bg-primary/10 cursor-pointer"
                          onClick={() =>
                            window.open("https://app.hel.io/x/fttrenches-3mo", "_blank", "noopener,noreferrer")
                          }
                          role="option"
                        >
                          <span className="text-primary bg-black/50 p-0.5 rounded-full">
                            <span className="text-xs">💎</span>
                          </span>
                          <span className="text-xs text-primary/80">Quarterly</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
            >
              <div className="flex items-start gap-3 bg-black/40 backdrop-blur-sm border border-primary/10 rounded-md p-3">
                <TrendingUp className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <h3 className="text-primary-100 font-medium text-sm">HIGH RETURNS</h3>
                  <p className="text-primary/70 text-xs font-sans">UP TO 10X ON SIGNALS</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-black/40 backdrop-blur-sm border border-primary/10 rounded-md p-3">
                <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
                <div>
                  <h3 className="text-primary-100 font-medium text-sm">RISK MANAGEMENT</h3>
                  <p className="text-primary/70 text-xs font-sans">CLEAR RISK PROFILES</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-black/40 backdrop-blur-sm border border-primary/10 rounded-md p-3">
                <Shield className="h-5 w-5 text-info mt-0.5" />
                <div>
                  <h3 className="text-primary-100 font-medium text-sm">SMART MONEY</h3>
                  <p className="text-primary/70 text-xs font-sans">INSIDER WALLET TRACKING</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
