"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check, Clock, Shield, Zap } from "lucide-react"
import { V31Button } from "../ui/v31-button"

export default function SubscriptionOptions() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="w-full py-16 relative overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        <div className="scanline"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 neon-text">COMMANDER TIER SUBSCRIPTION</h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            CHOOSE YOUR SUBSCRIPTION PLAN AND GAIN ACCESS TO PREMIUM SIGNALS AND FEATURES
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Monthly Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="cyber-card rounded-lg overflow-hidden cursor-pointer hover:border-accent/70 transition-colors"
            onClick={() => window.open("https://app.hel.io/x/fttrenches-1mo", "_blank", "noopener,noreferrer")}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">MONTHLY</h3>
                  <p className="text-primary/70">1 Month Access</p>
                </div>
                <div className="bg-accent/20 px-3 py-1 rounded text-accent text-sm">POPULAR</div>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-primary">1 SOL</div>
                <div className="text-primary/70 text-sm">Billed monthly</div>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-primary/90 text-sm">Full access to all premium signals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-primary/90 text-sm">Priority signal delivery (~3 mins faster)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-primary/90 text-sm">Access to private strategy groups</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-primary/50 mt-0.5 flex-shrink-0" />
                  <span className="text-primary/70 text-sm">30 days of premium access</span>
                </li>
              </ul>

              <V31Button
                variant="primary"
                fullWidth={true}
                glow="subtle"
                as="a"
                href="https://app.hel.io/x/fttrenches-1mo"
                target="_blank"
                rel="noopener noreferrer"
              >
                SUBSCRIBE MONTHLY
                <Zap className="h-4 w-4" />
              </V31Button>
            </div>
          </motion.div>

          {/* Quarterly Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cyber-card rounded-lg overflow-hidden border-2 border-accent/50 cursor-pointer hover:border-accent/70 transition-colors"
            onClick={() => window.open("https://app.hel.io/x/fttrenches-3mo", "_blank", "noopener,noreferrer")}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">QUARTERLY</h3>
                  <p className="text-primary/70">3 Months Access</p>
                </div>
                <div className="bg-success-900/30 px-3 py-1 rounded text-success-300 text-sm">BEST VALUE</div>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-primary">2.75 SOL</div>
                <div className="text-primary/70 text-sm">Save 8% compared to monthly</div>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-primary/90 text-sm">Everything in monthly plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-primary/90 text-sm">Extended access to historical signals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary/90 text-sm">Price lock guarantee for future renewals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-5 w-5 text-primary/50 mt-0.5 flex-shrink-0" />
                  <span className="text-primary/70 text-sm">90 days of premium access</span>
                </li>
              </ul>

              <V31Button
                variant="secondary"
                fullWidth={true}
                glow="subtle"
                as="a"
                href="https://app.hel.io/x/fttrenches-3mo"
                target="_blank"
                rel="noopener noreferrer"
              >
                SUBSCRIBE QUARTERLY
                <Zap className="h-4 w-4" />
              </V31Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
