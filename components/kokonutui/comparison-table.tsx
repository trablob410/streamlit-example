"use client"

import { motion } from "framer-motion"
import { Star, Check, X } from "lucide-react"
import { useInView } from "react-intersection-observer"

interface FeatureComparisonProps {
  feature: string
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

const FeatureComparison = ({ feature, free, paid }: FeatureComparisonProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 py-4 border-b border-[#fcf0c1]/20">
      <div className="text-[#fcf0c1] font-medium text-center uppercase text-sm">{feature}</div>
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
        <span className="text-xs uppercase text-white font-medium">{paid.description}</span>
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
    <div ref={ref} className="w-full py-20 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#fcf0c1] mb-4 neon-text">
            FROM THE TRENCHES: INTELLIGENCE UPGRADE
          </h2>
          <p className="text-xl text-[#fcf0c1]/80">CHOOSE YOUR ARSENAL FOR THE CRYPTO BATTLEFIELD</p>
        </div>

        <div className="bg-black/80 backdrop-blur-md border border-[#fcf0c1]/30 rounded-lg overflow-hidden shadow-2xl">
          {/* Table header */}
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-[#fcf0c1]/20">
            <div className="text-[#fcf0c1] font-bold text-lg text-center uppercase">FEATURE</div>
            <div className="text-center px-2 py-3 rounded-md bg-black/60 border border-[#fcf0c1]/10">
              <div className="text-[#fcf0c1]/80 font-bold text-lg mb-1 uppercase">RECON TIER</div>
              <div className="text-[#fcf0c1]/60 text-sm">FREE</div>
            </div>
            <div className="text-center px-2 py-3 rounded-md hologram-bg border border-[#fcf0c1]/30">
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

          {/* CTA with Telegram link */}
          <div className="p-6 bg-[#fcf0c1]/10 border-t border-[#fcf0c1]/20">
            <div className="text-center">
              <p className="text-[#fcf0c1] mb-4">
                FTT IS EVOLVING FROM A FREE SERVICE TO A PREMIUM INTELLIGENCE SUITE - EARLY SUPPORTERS GET SPECIAL
                PRICING AND BENEFITS
              </p>
              <a
                href="https://t.me/fttrenches_main"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-[#fcf0c1] text-[#fcf0c1] font-bold rounded-md hover:bg-[#fcf0c1]/10 transition-colors hologram-bg glow-effect uppercase"
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
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
