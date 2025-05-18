"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Twitter, MessageCircle, ExternalLink } from "lucide-react"
import Image from "next/image"
import { V31Button } from "../ui/v31-button"

interface TeamMember {
  name: string
  role: string
  bio: string
  twitter: string
  image: string
}

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const teamMembers: TeamMember[] = [
    {
      name: "0XTRABLO",
      role: "FOUNDER & LEAD DEVELOPER",
      bio: "CRYPTO VETERAN WITH 5+ YEARS EXPERIENCE IN ALGORITHMIC TRADING AND ON-CHAIN ANALYTICS.",
      twitter: "https://x.com/0xTrablo",
      image: "/placeholder-yxux7.png",
    },
    {
      name: "0XCAESAR1",
      role: "SMART MONEY ANALYST",
      bio: "SPECIALIZES IN TRACKING INSTITUTIONAL MOVEMENTS AND IDENTIFYING EARLY MARKET TRENDS.",
      twitter: "https://x.com/0xCaesar1",
      image: "/placeholder-h80w8.png",
    },
    {
      name: "BRIANTHELOWKEY",
      role: "COMMUNITY MANAGER",
      bio: "BUILDS AND NURTURES OUR COMMUNITY WHILE PROVIDING EDUCATIONAL CONTENT ON TRADING STRATEGIES.",
      twitter: "https://x.com/brianthelowkey",
      image: "/crypto-community-manager.png",
    },
  ]

  return (
    <div id="about" ref={ref} className="py-20 relative overflow-hidden bg-secondary">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary/40" />
        <div className="scanline"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 neon-text">ABOUT US</h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            FROM THE TRENCHES WAS CREATED BY TRADERS, FOR TRADERS. WE'VE BEEN IN THE CRYPTO TRENCHES AND BUILT THE TOOLS
            WE WISHED WE HAD.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="cyber-card rounded-lg overflow-hidden h-full">
                <div className="relative h-48 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                    <p className="text-sm text-accent">{member.role}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-primary/80 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary/70 hover:text-primary transition-colors text-sm"
                  >
                    <Twitter className="h-4 w-4" />
                    FOLLOW ON X
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-secondary/40 backdrop-blur-sm border border-primary/20 rounded-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#fcf0c1] mb-4">OUR MISSION</h3>
              <p className="text-[#fcf0c1]/80 mb-6 leading-relaxed">
                WE BELIEVE THAT RETAIL TRADERS DESERVE ACCESS TO THE SAME QUALITY OF INTELLIGENCE THAT INSTITUTIONS USE.
                OUR MISSION IS TO LEVEL THE PLAYING FIELD BY PROVIDING CUTTING-EDGE TOOLS THAT TRACK SMART MONEY
                MOVEMENTS AND TRANSLATE THEM INTO ACTIONABLE SIGNALS.
              </p>
              <V31Button
                variant="ghost"
                size="sm"
                as="a"
                href="https://t.me/fttrenches_main"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                JOIN OUR COMMUNITY
                <ExternalLink className="h-4 w-4" />
              </V31Button>
            </div>
            <div className="bg-black/60 p-6 rounded-lg border border-[#fcf0c1]/10">
              <h4 className="text-lg font-bold text-[#fcf0c1] mb-4">KEY ACHIEVEMENTS</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-[#fcf0c1]/80 text-sm">OVER 1,200+ SIGNALS GENERATED SINCE LAUNCH</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-[#fcf0c1]/80 text-sm">COMMUNITY OF 10,000+ ACTIVE TRADERS</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-[#fcf0c1]/80 text-sm">AVERAGE RETURN OF 3.2X ON SUCCESSFUL SIGNALS</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-[#fcf0c1]/80 text-sm">TRACKING OVER 500 SMART MONEY WALLETS</p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
