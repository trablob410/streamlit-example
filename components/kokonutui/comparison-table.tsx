"use client"

import { motion } from "framer-motion"
import { Star, Check, X, HelpCircle } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { V31Button } from "../ui/v31-button"

interface FeatureComparisonProps {
  feature: string
  benefit: string
  free: {
    available: boolean
    enhanced?: boolean
    description: string
  }
  paid: {
    available: boolean
    enhanced?: boolean
    description: string
  }
}

const FeatureComparison = ({ feature, benefit, free, paid }: FeatureComparisonProps) => {
  const [showBenefit, setShowBenefit] = useState(false)

  return (
    <div className="grid grid-cols-3 gap-4 py-4 border-b border-[#fcf0c1]/20">
      <div className="text-[#fcf0c1] font-medium text-center uppercase text-sm relative">
        <div className="flex items-center justify-center gap-2">
          {feature}
          <button
            className="text-[#fcf0c1]/50 hover:text-[#fcf0c1]"
            onMouseEnter={() => setShowBenefit(true)}
            onMouseLeave={() => setShowBenefit(false)}
          >
            <HelpCircle className="h-3 w-3" />
          </button>
        </div>
        {showBenefit && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-black/90 border border-[#fcf0c1]/20 rounded text-xs text-[#fcf0c1] z-50 w-64"
          >
            {benefit}
          </motion.div>
        )}
      </div>
      <div className="flex flex-col items-center text-center px-2 py-3 rounded-md bg-black/60">
        <div className="mb-1">
          {free.available ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-red-500" />}
        </div>
        <span
          className={`text-xs uppercase ${free.available ? "text-[#fcf0c1]/70" : "text-[#fcf0c1]/40 line-through"}`}
        >
          {free.description}
        </span>
      </div>
      <div className="flex flex-col items-center text-center px-2 py-3 rounded-md hologram-bg">
        <div className="mb-1">
          {paid.available ? (
            paid.enhanced ? (
              <Star className="h-5 w-5 text-yellow-400 glow-effect" />
            ) : (
              <Check className="h-5 w-5 text-green-400" />
            )
          ) : (
            <X className="h-5 w-5 text-red-500" />
          )}
        </div>
        <span className="text-xs uppercase text-[#efd6ac] font-medium">{paid.description}</span>
      </div>
    </div>
  )
}

export default function ComparisonTable() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const features = [
    {
      feature: "MAIN BOT ACCESS",
      benefit:
        "RECEIVE TRADING SIGNALS DIRECTLY TO YOUR TELEGRAM, ALLOWING YOU TO CAPITALIZE ON MARKET OPPORTUNITIES QUICKLY.",
      free: {
        available: true,
        description: "BASIC VERSION (STANDARD SIGNALS)",
      },
      paid: {
        available: true,
        enhanced: true,
        description: "ENHANCED WITH FASTER SIGNALS (~3 MINS) + INSIDER WALLET DATA",
      },
    },
    {
      feature: "VOL + SM BOT",
      benefit: "IDENTIFY SUDDEN VOLUME SPIKES VALIDATED BY SMART MONEY PARTICIPATION, PERFECT FOR QUICK TRADES.",
      free: {
        available: true,
        description: "FULL ACCESS",
      },
      paid: {
        available: true,
        description: "FULL ACCESS",
      },
    },
    {
      feature: "CURATED ALPHA",
      benefit:
        "RECEIVE ONLY THE HIGHEST CONVICTION PLAYS WHEN MULTIPLE BOTS CONFIRM THE SAME SIGNAL, MAXIMIZING WIN RATE.",
      free: {
        available: false,
        description: "NOT AVAILABLE",
      },
      paid: {
        available: true,
        enhanced: true,
        description: "MULTI-BOT CONFIRMATION SIGNALS (HIGHEST CONVICTION PLAYS)",
      },
    },
    {
      feature: "SOCIAL BOT (KOL TRACKING)",
      benefit: "GAIN EARLY ACCESS TO PROJECTS BACKED BY KEY OPINION LEADERS BEFORE THEY BECOME WIDELY KNOWN.",
      free: {
        available: false,
        description: "NOT AVAILABLE",
      },
      paid: {
        available: true,
        enhanced: true,
        description: "EARLY ACCESS TO KOL-BACKED PROJECTS",
      },
    },
    {
      feature: "FTT SCAN BOT",
      benefit: "ANALYZE WALLETS, CHECK TOP HOLDERS, AND VERIFY TOKEN BUNDLES TO MAKE MORE INFORMED TRADING DECISIONS.",
      free: {
        available: false,
        description: "NOT AVAILABLE",
      },
      paid: {
        available: true,
        enhanced: true,
        description: "UNLIMITED SCANNING OF WALLET ANALYSIS, TOP HOLDERS, BUNDLE CHECKING",
      },
    },
    {
      feature: "PROJECT TRACKING",
      benefit: "STAY UPDATED ON PROMISING PROJECTS WITH CONTINUOUS MONITORING AND ALERTS FOR SIGNIFICANT DEVELOPMENTS.",
      free: {
        available: false,
        description: "NOT AVAILABLE",
      },
      paid: {
        available: true,
        enhanced: true,
        description: "EXCLUSIVE PROJECT MONITORING",
      },
    },
    {
      feature: "COMMUNITY ACCESS",
      benefit: "CONNECT WITH LIKE-MINDED TRADERS TO SHARE STRATEGIES, INSIGHTS, AND LEARN FROM EXPERIENCED MEMBERS.",
      free: {
        available: true,
        description: "BASIC GROUP",
      },
      paid: {
        available: true,
        enhanced: true,
        description: "PRIVATE STRATEGY GROUPS WITH SERIOUS TRADERS",
      },
    },
    {
      feature: "SIGNAL TIMING",
      benefit:
        "GAIN A CRUCIAL TIME ADVANTAGE WITH FASTER SIGNAL DELIVERY, ALLOWING YOU TO ENTER POSITIONS BEFORE PRICE MOVEMENTS.",
      free: {
        available: true,
        description: "STANDARD DELIVERY",
      },
      paid: {
        available: true,
        enhanced: true,
        description: "PRIORITY DELIVERY (~3 MINS FASTER)",
      },
    },
    {
      feature: "SMART MONEY INTELLIGENCE",
      benefit: "TRACK THE MOVEMENTS OF SUCCESSFUL TRADERS AND INSIDERS TO IDENTIFY PROFITABLE OPPORTUNITIES EARLY.",
      free: {
        available: true,
        description: "BASIC WALLET TRACKING",
      },
      paid: {
        available: true,
        enhanced: true,
        description: "ENHANCED WITH INSIDER WALLET DATA",
      },
    },
  ]

  return (
    <div id="pricing" ref={ref} className="w-full py-20 relative overflow-hidden">
      {/* Blurred background image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/bg-controller.png')",
            filter: "blur(8px) brightness(0.3)",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 neon-text">
            FROM THE TRENCHES: INTELLIGENCE UPGRADE
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            CHOOSE YOUR ARSENAL FOR THE CRYPTO BATTLEFIELD AND GAIN THE EDGE YOU NEED TO SUCCEED
          </p>
        </div>

        <div className="bg-black/80 backdrop-blur-md border border-primary/30 rounded-lg overflow-hidden shadow-2xl">
          {/* Table header */}
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-primary/20">
            <div className="text-primary font-bold text-lg text-center uppercase">FEATURE</div>
            <div className="text-center px-2 py-3 rounded-md bg-black/60 border border-primary/10">
              <div className="text-primary/80 font-bold text-lg mb-1 uppercase">RECON TIER</div>
              <div className="text-primary/60 text-sm">FREE</div>
            </div>
            <div className="text-center px-2 py-3 rounded-md hologram-bg border border-primary/30">
              <div className="text-white font-bold text-lg mb-1 glow-effect uppercase">COMMANDER TIER</div>
              <div className="text-white/90 text-sm">1 SOL/MONTH</div>
            </div>
          </div>

          {/* Table body */}
          <div className="p-6">
            {features.map((feature, index) => (
              <FeatureComparison key={index} {...feature} />
            ))}
          </div>

          {/* Update the CTA button */}
          <div className="text-center p-6">
            <V31Button
              variant="primary"
              as="a"
              href="https://t.me/fttrenches_main"
              target="_blank"
              rel="noopener noreferrer"
              glow="subtle"
            >
              UPGRADE TO COMMANDER TIER
              <span className="text-xs opacity-70">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block ml-1"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </V31Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
