"use client"

import { motion } from "framer-motion"
import { useState } from "react"

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
      width: variant === "icon" ? 36 : 120,
      height: variant === "icon" ? 36 : 36,
      iconSize: 24,
      fontSize: 14,
      padding: 6,
    },
    md: {
      width: variant === "icon" ? 48 : 160,
      height: variant === "icon" ? 48 : 48,
      iconSize: 32,
      fontSize: 18,
      padding: 8,
    },
    lg: {
      width: variant === "icon" ? 64 : 200,
      height: variant === "icon" ? 64 : 64,
      iconSize: 40,
      fontSize: 22,
      padding: 10,
    },
    xl: {
      width: variant === "icon" ? 80 : 240,
      height: variant === "icon" ? 80 : 80,
      iconSize: 48,
      fontSize: 28,
      padding: 12,
    },
  }

  const currentSize = sizes[size]

  // Define our color palette
  const colors = {
    primary: "#efd6ac", // Primary text color (beige/cream)
    secondary: "#080f0f", // Secondary color (dark)
    accent: "#c44900", // Accent color (burnt orange)
    success: "#183a37", // Success color (dark teal)
    info: "#adb6c4", // Info color (light gray)
    border: "rgba(239, 214, 172, 0.3)", // Border color
    text: "#efd6ac",
  }

  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={animated ? { scale: 1.05 } : {}}
      whileTap={animated ? { scale: 0.95 } : {}}
      style={{
        width: currentSize.width,
        height: currentSize.height,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${currentSize.width} ${currentSize.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        {variant !== "text" && (
          <motion.rect
            x="0"
            y="0"
            width={variant === "icon" ? currentSize.width : currentSize.iconSize}
            height={currentSize.height}
            rx="4"
            fill={colors.secondary}
            stroke={colors.border}
            strokeWidth="1"
            animate={{
              filter: isHovered && animated ? "drop-shadow(0 0 8px rgba(239, 214, 172, 0.5))" : "none",
            }}
          />
        )}

        {/* FT Icon */}
        {variant !== "text" && (
          <>
            <motion.text
              x={variant === "icon" ? currentSize.width / 2 : currentSize.iconSize / 2}
              y={currentSize.height / 2 + currentSize.fontSize / 3}
              fontSize={currentSize.fontSize * 0.9}
              fontWeight="bold"
              fill={colors.accent}
              textAnchor="middle"
              fontFamily="'Share Tech Mono', monospace"
              animate={{
                fill: isHovered && animated ? colors.success : colors.accent,
                filter: isHovered && animated ? "drop-shadow(0 0 3px rgba(24, 58, 55, 0.8))" : "none",
              }}
              transition={{ duration: 0.3 }}
            >
              FT
            </motion.text>

            {/* Decorative elements */}
            <motion.line
              x1="2"
              y1="2"
              x2={variant === "icon" ? currentSize.width - 2 : currentSize.iconSize - 2}
              y2="2"
              stroke={colors.border}
              strokeWidth="1"
              animate={{
                opacity: isHovered && animated ? 1 : 0.5,
              }}
            />
            <motion.line
              x1="2"
              y1={currentSize.height - 2}
              x2={variant === "icon" ? currentSize.width - 2 : currentSize.iconSize - 2}
              y2={currentSize.height - 2}
              stroke={colors.border}
              strokeWidth="1"
              animate={{
                opacity: isHovered && animated ? 1 : 0.5,
              }}
            />
          </>
        )}

        {/* Text part */}
        {variant !== "icon" && (
          <g>
            <motion.text
              x={variant === "text" ? 0 : currentSize.iconSize + 10}
              y={currentSize.height / 2 - currentSize.fontSize / 3}
              fontSize={currentSize.fontSize}
              fontWeight="bold"
              fill={colors.primary}
              fontFamily="'Share Tech Mono', monospace"
              animate={{
                filter: isHovered && animated ? "drop-shadow(0 0 2px rgba(239, 214, 172, 0.8))" : "none",
              }}
            >
              FROM THE
            </motion.text>
            <motion.text
              x={variant === "text" ? 0 : currentSize.iconSize + 10}
              y={currentSize.height / 2 + currentSize.fontSize}
              fontSize={currentSize.fontSize}
              fontWeight="bold"
              fill={colors.accent}
              fontFamily="'Share Tech Mono', monospace"
              animate={{
                filter: isHovered && animated ? "drop-shadow(0 0 2px rgba(196, 73, 0, 0.8))" : "none",
              }}
            >
              TRENCHES
            </motion.text>
          </g>
        )}

        {/* Scan line effect */}
        {isHovered && animated && (
          <motion.rect
            x="0"
            y="0"
            width="100%"
            height="1"
            fill={colors.success}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: currentSize.height + 10, opacity: 0.7 }}
            transition={{ duration: 1, repeat: 1, repeatType: "reverse" }}
          />
        )}

        {/* Glitch effect */}
        {isHovered && animated && (
          <>
            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="transparent"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.05, 0, 0.02, 0],
                x: [0, -2, 1, 0, 0],
              }}
              transition={{ duration: 0.5, repeat: 1, repeatDelay: 1 }}
            />
          </>
        )}
      </svg>
    </motion.div>
  )
}
