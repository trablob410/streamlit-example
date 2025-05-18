"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Search, Zap, TrendingUp, BarChart3 } from "lucide-react"

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: <Search className="h-8 w-8 text-[#fcf0c1]" />,
      title: "SMART MONEY DETECTION",
      description:
        "OUR AI ALGORITHMS CONTINUOUSLY SCAN BLOCKCHAIN DATA TO IDENTIFY WALLETS BELONGING TO SUCCESSFUL TRADERS AND INSTITUTIONAL INVESTORS.",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#fcf0c1]" />,
      title: "REAL-TIME MONITORING",
      description:
        "WE TRACK THESE WALLETS 24/7, ALERTING YOU WHEN THEY MAKE SIGNIFICANT MOVES OR ACCUMULATE SPECIFIC TOKENS.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-[#fcf0c1]" />,
      title: "SIGNAL GENERATION",
      description:
        "WHEN MULTIPLE SMART MONEY WALLETS CONVERGE ON THE SAME TOKEN, OUR SYSTEM GENERATES A SIGNAL WITH RISK ASSESSMENT AND POTENTIAL RETURNS.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-[#fcf0c1]" />,
      title: "PROFIT OPTIMIZATION",
      description:
        "SIGNALS ARE CATEGORIZED BY TYPE, ALLOWING YOU TO CHOOSE STRATEGIES THAT MATCH YOUR RISK TOLERANCE AND TRADING STYLE.",
    },
  ]

  return (
    <div id="how-it-works" ref={ref} className="py-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        <div className="scanline"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#fcf0c1] mb-4 neon-text">HOW IT WORKS</h2>
          <p className="text-xl text-[#fcf0c1]/80 max-w-3xl mx-auto">
            FROM THE TRENCHES USES ADVANCED AI TO TRACK SMART MONEY MOVEMENTS AND DELIVER ACTIONABLE TRADING SIGNALS
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>

              {/* Content */}
              <div className="cyber-card rounded-lg p-6 h-full">
                <div className="mb-4 p-3 bg-black/60 rounded-full inline-block">{step.icon}</div>
                <h3 className="text-xl font-bold text-[#fcf0c1] mb-3">{step.title}</h3>
                <p className="text-[#fcf0c1]/80 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Connector line (except for the last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-red-600/50">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://t.me/fttrenches_main"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition-colors"
          >
            JOIN OUR TELEGRAM
          </a>
        </motion.div>
      </div>
    </div>
  )
}
