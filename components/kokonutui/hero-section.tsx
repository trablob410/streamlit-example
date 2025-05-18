"use client"

import { motion } from "framer-motion"
import { ArrowRight, AlertTriangle, TrendingUp, Shield } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  return (
    <div id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
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
              className="space-y-4"
            >
              <div className="inline-block bg-red-600/20 border border-red-600/40 rounded-md px-3 py-1 text-sm text-red-400">
                CRYPTO INTELLIGENCE PLATFORM
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#fcf0c1] leading-tight neon-text">
                GAIN THE EDGE IN <br />
                <span className="text-red-500">CRYPTO TRADING</span>
              </h1>
              <p className="text-lg md:text-xl text-[#fcf0c1]/90 max-w-xl leading-relaxed">
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
              <motion.a
                href="https://t.me/fttrenches_main"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition-colors overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-[length:200%_100%]"
                  animate={{
                    backgroundPosition: isButtonHovered ? ["0% 0%", "100% 0%"] : "0% 0%",
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: isButtonHovered ? Number.POSITIVE_INFINITY : 0,
                    repeatType: "reverse",
                  }}
                />

                {/* Button content */}
                <span className="relative z-10">GET STARTED NOW</span>
                <ArrowRight className="relative z-10 h-4 w-4" />

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0"
                  animate={{ opacity: isButtonHovered ? 0.3 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow: "0 0 20px 5px rgba(239, 68, 68, 0.7)",
                  }}
                />
              </motion.a>

              <motion.button
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-[#fcf0c1] text-[#fcf0c1] font-bold rounded-md hover:bg-[#fcf0c1]/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                HOW IT WORKS
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
            >
              <div className="flex items-start gap-3 bg-black/40 backdrop-blur-sm border border-[#fcf0c1]/10 rounded-md p-3">
                <TrendingUp className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h3 className="text-[#fcf0c1] font-medium text-sm">HIGH RETURNS</h3>
                  <p className="text-[#fcf0c1]/70 text-xs">UP TO 10X ON SIGNALS</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-black/40 backdrop-blur-sm border border-[#fcf0c1]/10 rounded-md p-3">
                <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                <div>
                  <h3 className="text-[#fcf0c1] font-medium text-sm">RISK MANAGEMENT</h3>
                  <p className="text-[#fcf0c1]/70 text-xs">CLEAR RISK PROFILES</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-black/40 backdrop-blur-sm border border-[#fcf0c1]/10 rounded-md p-3">
                <Shield className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h3 className="text-[#fcf0c1] font-medium text-sm">SMART MONEY</h3>
                  <p className="text-[#fcf0c1]/70 text-xs">INSIDER WALLET TRACKING</p>
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
              <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-[#fcf0c1]/30"></div>
              <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-[#fcf0c1]/30"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                    <div className="text-xs text-[#fcf0c1]/70">LIVE SIGNAL FEED</div>
                  </div>

                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.2 }}
                        className="bg-black/60 border border-[#fcf0c1]/10 rounded p-3"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <div className="text-sm text-[#fcf0c1]">TOKEN #{i}</div>
                          </div>
                          <div className="text-xs text-green-500">+{Math.floor(Math.random() * 300) + 100}%</div>
                        </div>
                        <div className="mt-2 flex justify-between text-xs">
                          <div className="text-[#fcf0c1]/60">SMART MONEY DETECTED</div>
                          <div className="text-[#fcf0c1]/60">{Math.floor(Math.random() * 24) + 1}H AGO</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#fcf0c1]/10 pt-4 mt-4">
                  <div className="text-xs text-[#fcf0c1]/70 mb-2">PERFORMANCE METRICS</div>
                  <div className="flex justify-between">
                    <div className="text-sm">
                      <div className="text-[#fcf0c1]/60">WIN RATE</div>
                      <div className="text-[#fcf0c1]">58.7%</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-[#fcf0c1]/60">AVG. RETURN</div>
                      <div className="text-[#fcf0c1]">3.2X</div>
                    </div>
                    <div className="text-sm">
                      <div className="text-[#fcf0c1]/60">SIGNALS</div>
                      <div className="text-[#fcf0c1]">1,240+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
