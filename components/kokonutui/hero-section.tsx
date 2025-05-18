"use client"

import { motion } from "framer-motion"
import { ArrowRight, AlertTriangle, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import FTTLogo from "./ftt-logo"
import { V31Button } from "../ui/v31-button"

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Main content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Logo */}
              <div className="mb-6">
                <FTTLogo size="xl" variant="full" />
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
              className="flex flex-col sm:flex-row gap-4"
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

          {/* Right column - Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="cyber-card rounded-lg overflow-hidden p-6 h-[400px] relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/80 to-black/40 z-0"></div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-primary/30"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-primary/30"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
                    <div className="text-xs text-primary/70">LIVE SIGNAL FEED</div>
                  </div>

                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.2 }}
                        className="bg-black/60 border border-primary/10 rounded p-3"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-success"></div>
                            <div className="text-sm text-primary-100">TOKEN #{i}</div>
                          </div>
                          <div className="text-xs text-success">+{Math.floor(Math.random() * 300) + 100}%</div>
                        </div>
                        <div className="mt-2 flex justify-between text-xs font-sans">
                          <div className="text-primary/60">SMART MONEY DETECTED</div>
                          <div className="text-primary/60">{Math.floor(Math.random() * 24) + 1}H AGO</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-primary/10 pt-4 mt-4">
                  <div className="text-xs text-primary/70 mb-2">PERFORMANCE METRICS</div>
                  <div className="flex justify-between">
                    <div className="text-sm">
                      <div className="text-primary/60 font-sans">WIN RATE</div>
                      <div className="text-primary-100">58.7%</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-primary/60 font-sans">AVG. RETURN</div>
                      <div className="text-primary-100">3.2X</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-primary/60 font-sans">SIGNALS</div>
                      <div className="text-primary-100">1,240+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
