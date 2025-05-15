"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Rocket, TrendingUp, Twitter, BarChart3, AlertTriangle, Clock, Target, Award } from "lucide-react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

type SignalType = {
  id: string
  name: string
  icon: React.ReactNode
  riskProfile: {
    level: string
    color: string
  }
  expectedReturns: string
  winRate: string
  timeHorizon: string
  description: string
  idealFor: string
  image: string
  stats: {
    icon: React.ReactNode
    label: string
    value: string
  }[]
}

export default function SignalTypes() {
  const [activeTab, setActiveTab] = useState("new-launch")
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })
  const [isHovered, setIsHovered] = useState(false)

  const signalTypes: SignalType[] = [
    {
      id: "new-launch",
      name: "NEW LAUNCH SIGNAL",
      icon: <Rocket className="h-5 w-5" />,
      riskProfile: {
        level: "HIGH",
        color: "text-red-500",
      },
      expectedReturns: "5-10X",
      winRate: "~50-55%",
      timeHorizon: "HOURS TO DAYS",
      description:
        "THESE SIGNALS IDENTIFY VERY EARLY-STAGE TOKENS THAT MULTIPLE SMART MONEY WALLETS ARE BUYING, OFTEN WITHIN HOURS OF LAUNCH. REQUIRES IMMEDIATE EXECUTION AND PRECISE ENTRY STRATEGIES.",
      idealFor: "EXPERIENCED TRADERS COMFORTABLE WITH HIGH VOLATILITY AND RAPID DECISION-MAKING.",
      image: "/images/new-launch-signal.png",
      stats: [
        {
          icon: <AlertTriangle className="h-4 w-4 text-red-500" />,
          label: "RISK LEVEL",
          value: "HIGH",
        },
        {
          icon: <Clock className="h-4 w-4 text-[#fcf0c1]" />,
          label: "EXECUTION SPEED",
          value: "IMMEDIATE",
        },
        {
          icon: <Target className="h-4 w-4 text-[#fcf0c1]" />,
          label: "PROFIT TARGET",
          value: "5-10X",
        },
      ],
    },
    {
      id: "mid-sized",
      name: "MID-SIZED SIGNAL",
      icon: <TrendingUp className="h-5 w-5" />,
      riskProfile: {
        level: "MODERATE",
        color: "text-yellow-500",
      },
      expectedReturns: "2-5X",
      winRate: "~60%",
      timeHorizon: "DAYS TO WEEKS",
      description:
        "THESE SIGNALS IDENTIFY ESTABLISHED TOKENS WITH SIGNIFICANT SMART MONEY INTEREST, OFTEN WITH GROWING POSITIONS OVER $100K. STRATEGIC PLAYS FOLLOWING ESTABLISHED SMART MONEY ACCUMULATION PATTERNS.",
      idealFor: "TRADERS SEEKING MORE STABILITY WHILE STILL CAPTURING SIGNIFICANT UPSIDE.",
      image: "/images/mid-sized-signal.png",
      stats: [
        {
          icon: <AlertTriangle className="h-4 w-4 text-yellow-500" />,
          label: "RISK LEVEL",
          value: "MODERATE",
        },
        {
          icon: <Clock className="h-4 w-4 text-[#fcf0c1]" />,
          label: "EXECUTION SPEED",
          value: "WITHIN 24H",
        },
        {
          icon: <Target className="h-4 w-4 text-[#fcf0c1]" />,
          label: "PROFIT TARGET",
          value: "2-5X",
        },
      ],
    },
    {
      id: "social-based",
      name: "SOCIAL-BASED TWITTER BOT",
      icon: <Twitter className="h-5 w-5" />,
      riskProfile: {
        level: "VARIABLE",
        color: "text-purple-500",
      },
      expectedReturns: "VARIABLE",
      winRate: "~60%",
      timeHorizon: "HOURS TO WEEKS",
      description:
        "THESE SIGNALS IDENTIFY PROJECTS RECEIVING ATTENTION FROM KEY OPINION LEADERS (KOLS) THAT CORRELATE WITH SMART MONEY INTEREST. TRACKS WHEN KEY OPINION LEADERS FOLLOW PROJECTS.",
      idealFor: "TRADERS WHO UNDERSTAND NARRATIVE-DRIVEN MARKET MOVEMENTS AND SOCIAL INFLUENCE.",
      image: "/images/social-based-signal.png",
      stats: [
        {
          icon: <AlertTriangle className="h-4 w-4 text-purple-500" />,
          label: "RISK LEVEL",
          value: "VARIABLE",
        },
        {
          icon: <Clock className="h-4 w-4 text-[#fcf0c1]" />,
          label: "EXECUTION SPEED",
          value: "STRATEGIC",
        },
        {
          icon: <Award className="h-4 w-4 text-[#fcf0c1]" />,
          label: "NARRATIVE POWER",
          value: "HIGH",
        },
      ],
    },
    {
      id: "volume-spike",
      name: "VOLUME SPIKE + SM",
      icon: <BarChart3 className="h-5 w-5" />,
      riskProfile: {
        level: "EXTREME",
        color: "text-red-600",
      },
      expectedReturns: "2-3X",
      winRate: "38-45%",
      timeHorizon: "MINUTES TO HOURS",
      description:
        "THESE SIGNALS IDENTIFY TOKENS EXPERIENCING SUDDEN VOLUME INCREASES COINCIDING WITH SMART MONEY PURCHASES. REQUIRES IMMEDIATE EXECUTION AND CLOSE MONITORING.",
      idealFor: "EXPERIENCED TRADERS COMFORTABLE WITH HIGH VOLATILITY AND RAPID DECISION-MAKING.",
      image: "/images/volume-spike-signal.png",
      stats: [
        {
          icon: <AlertTriangle className="h-4 w-4 text-red-600" />,
          label: "RISK LEVEL",
          value: "EXTREME",
        },
        {
          icon: <Clock className="h-4 w-4 text-[#fcf0c1]" />,
          label: "EXECUTION SPEED",
          value: "INSTANT",
        },
        {
          icon: <Target className="h-4 w-4 text-[#fcf0c1]" />,
          label: "PROFIT TARGET",
          value: "2-3X",
        },
      ],
    },
  ]

  const activeSignal = signalTypes.find((signal) => signal.id === activeTab) || signalTypes[0]

  // Scanline effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsHovered((prev) => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div id="signal-types" ref={ref} className="w-full py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/80" />
        <div className="scanline"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#fcf0c1] mb-4 relative inline-block glitch-text neon-text"
            data-text="SIGNAL TYPES FOR EVERY STRATEGY"
          >
            SIGNAL TYPES FOR EVERY STRATEGY
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-red-500 mt-2"></div>
          </h2>
          <p className="text-xl text-[#fcf0c1]/80 mt-6">
            WE'VE DEVELOPED MULTIPLE SIGNAL TYPES TO MATCH DIFFERENT RISK PROFILES
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2 md:gap-8">
          {signalTypes.map((signal) => (
            <button
              key={signal.id}
              className={`px-4 py-2 text-[#fcf0c1] font-medium text-sm md:text-base relative transition-all duration-300 ${
                activeTab === signal.id ? "opacity-100" : "opacity-70 hover:opacity-90"
              }`}
              onClick={() => setActiveTab(signal.id)}
            >
              {signal.name}
              {activeTab === signal.id && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                ></motion.div>
              )}
            </button>
          ))}
        </div>

        {/* Signal Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSignal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="cyber-card rounded-lg overflow-hidden shadow-2xl"
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-full bg-[#fcf0c1]/10 glow-effect">{activeSignal.icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#fcf0c1] neon-text">{activeSignal.name}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Image Column */}
                <div className="md:col-span-1 flex justify-center items-start">
                  <motion.div
                    className="rounded-lg overflow-hidden border border-[#fcf0c1]/20 w-full max-w-xs relative"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="relative aspect-square w-full">
                      <Image
                        src={activeSignal.image || "/placeholder.svg"}
                        alt={activeSignal.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <div className={`${activeSignal.riskProfile.color} font-bold text-sm`}>
                          {activeSignal.riskProfile.level} RISK
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Details Column */}
                <div className="md:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    {activeSignal.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="bg-black/60 p-4 rounded-md border border-[#fcf0c1]/10 hover:border-[#fcf0c1]/30 transition-colors"
                        whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {stat.icon}
                          <h4 className="text-[#fcf0c1] text-xs font-medium">{stat.label}</h4>
                        </div>
                        <p className="text-[#fcf0c1] font-bold">{stat.value}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-black/60 p-4 rounded-md border border-[#fcf0c1]/10">
                      <h4 className="text-[#fcf0c1] text-sm font-medium mb-1">WIN RATE:</h4>
                      <p className="text-[#fcf0c1]">{activeSignal.winRate}</p>
                    </div>

                    <div className="bg-black/60 p-4 rounded-md border border-[#fcf0c1]/10">
                      <h4 className="text-[#fcf0c1] text-sm font-medium mb-1">TIME HORIZON:</h4>
                      <p className="text-[#fcf0c1]">{activeSignal.timeHorizon}</p>
                    </div>
                  </div>

                  <div className="bg-black/60 p-4 rounded-md mb-4 border border-[#fcf0c1]/10">
                    <p className="text-[#fcf0c1]/90">{activeSignal.description}</p>
                  </div>

                  <div className="bg-[#1a2e1a] border-l-4 border-green-500 p-4 rounded-md">
                    <h4 className="text-[#fcf0c1] text-sm font-medium mb-1">IDEAL FOR:</h4>
                    <p className="text-[#fcf0c1]/90">{activeSignal.idealFor}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Cards View (visible on small screens) */}
        <div className="mt-8 md:hidden space-y-6">
          {signalTypes
            .filter((signal) => signal.id !== activeTab)
            .map((signal) => (
              <motion.div
                key={signal.id}
                className="cyber-card rounded-lg overflow-hidden shadow-lg p-4 cursor-pointer"
                onClick={() => setActiveTab(signal.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-[#fcf0c1]/10">{signal.icon}</div>
                  <h3 className="text-lg font-bold text-[#fcf0c1]">{signal.name}</h3>
                </div>
                <div className="flex justify-between text-xs text-[#fcf0c1]/70">
                  <span>
                    RISK: <span className={signal.riskProfile.color}>{signal.riskProfile.level}</span>
                  </span>
                  <span>RETURNS: {signal.expectedReturns}</span>
                  <span>WIN RATE: {signal.winRate}</span>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  )
}
