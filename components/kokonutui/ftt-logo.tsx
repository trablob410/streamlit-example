"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

interface FTTLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "full" | "icon" | "text"
  className?: string
  onClick?: () => void
  animated?: boolean
}

export default function FTTLogo({
  size = "md",
  variant = "full",
  className = "",
  onClick,
  animated = true,
}: FTTLogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Size configurations
  const sizes = {
    sm: {
      width: 120,
      height: 40,
    },
    md: {
      width: 160,
      height: 53,
    },
    lg: {
      width: 200,
      height: 67,
    },
    xl: {
      width: 240,
      height: 80,
    },
  }

  const currentSize = sizes[size]

  return (
    <div
      className={`relative cursor-pointer ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: currentSize.width,
        height: currentSize.height,
      }}
    >
      <Image
        src="/images/FLORA-Style_Variation-8d4003ff-removebg-preview.png"
        alt="FROM THE TRENCHES"
        width={currentSize.width}
        height={currentSize.height}
        className="w-full h-full object-contain"
        priority
      />

      {/* Scan line effect */}
      {isHovered && animated && (
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute w-full h-[1px] bg-[#fcf0c1]/70"
            animate={{ top: ["-100%", "200%"] }}
            transition={{
              duration: 1,
              repeat: 2,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        </motion.div>
      )}

      {/* Glitch effect overlay - only shows occasionally */}
      {isHovered && animated && (
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          animate={{
            opacity: [0, 0, 0, 0.7, 0],
            x: [0, -2, 1, -1, 0],
            y: [0, 1, -1, 0, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: 1,
            repeatDelay: 3,
          }}
        >
          <Image
            src="/images/FLORA-Style_Variation-8d4003ff-removebg-preview.png"
            alt=""
            width={currentSize.width}
            height={currentSize.height}
            className="w-full h-full object-contain mix-blend-screen filter hue-rotate-15"
          />
        </motion.div>
      )}
    </div>
  )
}
