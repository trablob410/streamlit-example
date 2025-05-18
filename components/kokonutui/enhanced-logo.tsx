"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface EnhancedLogoProps {
  className?: string
  onClick?: () => void
  size?: "sm" | "md" | "lg"
}

export default function EnhancedLogo({ className = "", onClick, size = "md" }: EnhancedLogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Size configurations
  const sizes = {
    sm: {
      height: "40px",
      fontSize: "16px",
      iconSize: "18px",
      padding: "6px 10px",
    },
    md: {
      height: "50px",
      fontSize: "20px",
      iconSize: "22px",
      padding: "8px 14px",
    },
    lg: {
      height: "60px",
      fontSize: "24px",
      iconSize: "26px",
      padding: "10px 18px",
    },
  }

  const currentSize = sizes[size]

  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ height: currentSize.height }}
    >
      {/* Main logo container */}
      <motion.div
        className="relative flex items-center bg-black border border-[#fcf0c1]/30 rounded-md overflow-hidden"
        style={{ padding: currentSize.padding }}
        animate={{
          boxShadow: isHovered
            ? [
                "0 0 5px rgba(252, 240, 193, 0.3)",
                "0 0 10px rgba(252, 240, 193, 0.5)",
                "0 0 5px rgba(252, 240, 193, 0.3)",
              ]
            : "0 0 5px rgba(252, 240, 193, 0.3)",
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        {/* Icon */}
        <div
          className="mr-3 bg-red-600 rounded-sm flex items-center justify-center text-white font-bold"
          style={{ width: currentSize.iconSize, height: currentSize.iconSize }}
        >
          FT
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <motion.span
            className="text-[#fcf0c1] font-bold leading-none"
            style={{ fontSize: currentSize.fontSize }}
            animate={{
              textShadow: isHovered
                ? "0 0 5px rgba(252, 240, 193, 0.7), 0 0 10px rgba(252, 240, 193, 0.4)"
                : "0 0 2px rgba(252, 240, 193, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            FROM THE
          </motion.span>
          <motion.span
            className="text-red-500 font-bold leading-none"
            style={{ fontSize: currentSize.fontSize }}
            animate={{
              textShadow: isHovered
                ? "0 0 5px rgba(239, 68, 68, 0.7), 0 0 10px rgba(239, 68, 68, 0.4)"
                : "0 0 2px rgba(239, 68, 68, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            TRENCHES
          </motion.span>
        </div>
      </motion.div>

      {/* Glitch effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.5, 0],
            x: [-2, 1, 0],
            y: [1, -1, 0],
          }}
          transition={{
            duration: 0.3,
            repeat: 2,
            repeatType: "reverse",
          }}
        >
          <div
            className="relative flex items-center bg-black border border-[#fcf0c1]/30 rounded-md overflow-hidden"
            style={{ padding: currentSize.padding }}
          >
            <div
              className="mr-3 bg-red-600 rounded-sm flex items-center justify-center text-white font-bold"
              style={{ width: currentSize.iconSize, height: currentSize.iconSize }}
            >
              FT
            </div>
            <div className="flex flex-col">
              <span className="text-[#fcf0c1] font-bold leading-none" style={{ fontSize: currentSize.fontSize }}>
                FROM THE
              </span>
              <span className="text-red-500 font-bold leading-none" style={{ fontSize: currentSize.fontSize }}>
                TRENCHES
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Scan line */}
      {isHovered && (
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
    </motion.div>
  )
}
