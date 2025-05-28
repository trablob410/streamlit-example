"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface RotatingImageGalleryProps {
  images: string[]
  interval?: number
  className?: string
}

export default function RotatingImageGallery({ images, interval = 5000, className = "" }: RotatingImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 for forward, -1 for backward
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return

    const timer = setTimeout(() => {
      // Generate random index that's different from current
      let newIndex
      do {
        newIndex = Math.floor(Math.random() * images.length)
      } while (newIndex === currentIndex && images.length > 1)

      setDirection(newIndex > currentIndex ? 1 : -1)
      setCurrentIndex(newIndex)
    }, interval)

    return () => clearTimeout(timer)
  }, [currentIndex, interval, images.length, isHovered])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
          }}
          className="w-full h-full"
        >
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`FTT Crypto Intelligence ${currentIndex + 1}`}
            className="w-full h-full object-contain"
            width={400}
            height={400}
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-accent w-4" : "bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
