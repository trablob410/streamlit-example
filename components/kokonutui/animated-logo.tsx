"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

interface AnimatedLogoProps {
  width?: number
  height?: number
  className?: string
  onClick?: () => void
  intensity?: "low" | "medium" | "high"
}

export default function AnimatedLogo({
  width = 100,
  height = 40,
  className = "h-8 w-auto",
  onClick,
  intensity = "medium",
}: AnimatedLogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Configure animation intensity
  const glowIntensity = {
    low: {
      min: 0.1,
      max: 0.3,
      duration: 5,
    },
    medium: {
      min: 0.3,
      max: 0.5,
      duration: 3,
    },
    high: {
      min: 0.5,
      max: 0.8,
      duration: 2,
    },
  }[intensity]

  const glitchFrequency = {
    low: 10,
    medium: 7,
    high: 4,
  }[intensity]

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`cursor-pointer relative ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute w-full h-[1px] bg-[#fcf0c1]/50"
          animate={{ top: ["-100%", "200%"] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        initial={{ filter: "drop-shadow(0 0 0px rgba(252, 240, 193, 0))" }}
        animate={{
          filter: [
            `drop-shadow(0 0 2px rgba(252, 240, 193, ${glowIntensity.min}))`,
            `drop-shadow(0 0 5px rgba(252, 240, 193, ${glowIntensity.max}))`,
            `drop-shadow(0 0 2px rgba(252, 240, 193, ${glowIntensity.min}))`,
          ],
        }}
        transition={{
          duration: glowIntensity.duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Image src="/images/ftt-logo.png" alt="FROM THE TRENCHES" width={width} height={height} className={className} />
      </motion.div>

      {/* Glitch effect overlay - only shows occasionally */}
      <motion.div
        className="absolute inset-0 opacity-0 pointer-events-none"
        animate={{
          opacity: [0, 0, 0, 0.7, 0],
          x: [0, -2, 1, -1, 0],
          y: [0, 1, -1, 0, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: glitchFrequency,
        }}
      >
        <Image
          src="/images/ftt-logo.png"
          alt=""
          width={width}
          height={height}
          className={`${className} mix-blend-screen filter hue-rotate-15`}
        />
      </motion.div>

      {/* Hover shine effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "100%", opacity: 0.7 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="w-1/4 h-full bg-gradient-to-r from-transparent via-[#fcf0c1]/30 to-transparent transform rotate-12" />
        </motion.div>
      )}
    </motion.div>
  )
}
