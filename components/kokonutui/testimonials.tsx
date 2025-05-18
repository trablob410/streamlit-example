"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { V31Button } from "../ui/v31-button"

interface Testimonial {
  id: number
  text: string
  author: string
  role: string
  rating: number
  tradingExperience: string
  returns?: string
}

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "I've tried multiple signal groups before, but FTT is on another level. The Smart Money tracking actually works. I've seen 3x returns on multiple signals within days. The community is also incredibly supportive and educational.",
      author: "Crypto_Trader_42",
      role: "Community Member",
      rating: 5,
      tradingExperience: "3 years",
      returns: "~300% in 2 months",
    },
    {
      id: 2,
      text: "What sets FTT apart is their transparency. They don't hide their losses and actually explain the reasoning behind each signal. The different signal types help me choose based on my risk tolerance. Mid-sized signals have been particularly profitable for me.",
      author: "BlockchainBaron",
      role: "Commander Tier Member",
      rating: 5,
      tradingExperience: "5+ years",
      returns: "~450% since joining",
    },
    {
      id: 3,
      text: "As someone new to crypto trading, FTT has been invaluable. The educational resources helped me understand the market, and the signals gave me confidence to make my first trades. The community answered all my questions without judgment.",
      author: "CryptoNewbie",
      role: "Recon Tier Member",
      rating: 4,
      tradingExperience: "6 months",
      returns: "~120% in first month",
    },
    {
      id: 4,
      text: "The Volume Spike + SM signals are incredibly fast and accurate. I've caught several 2-3x pumps within hours. The Telegram notifications are reliable, and the team is always available to answer questions. Worth every SOL of the subscription.",
      author: "MoonHunter",
      role: "Commander Tier Member",
      rating: 5,
      tradingExperience: "2 years",
      returns: "~280% in 3 months",
    },
  ]

  const nextTestimonial = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [autoplay, activeIndex])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
    }),
  }

  return (
    <div id="testimonials" ref={ref} className="w-full py-20 relative overflow-hidden bg-black">
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 neon-text">TRADER TESTIMONIALS</h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            HEAR FROM THE COMMUNITY ABOUT THEIR EXPERIENCE WITH FROM THE TRENCHES
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial carousel */}
          <div
            className="relative overflow-hidden min-h-[400px] md:min-h-[350px]"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="cyber-card rounded-lg p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center">
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonials[activeIndex].rating ? "text-warning fill-warning" : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-primary/90 text-lg mb-6 italic">
                    "{testimonials[activeIndex].text}"
                  </blockquote>

                  <div className="border-t border-primary/10 pt-4 mt-4">
                    <div className="font-bold text-primary">{testimonials[activeIndex].author}</div>
                    <div className="text-primary/70 text-sm">{testimonials[activeIndex].role}</div>
                    <div className="flex flex-wrap gap-4 mt-2 text-xs text-primary/60">
                      <span>TRADING EXPERIENCE: {testimonials[activeIndex].tradingExperience}</span>
                      {testimonials[activeIndex].returns && (
                        <span>REPORTED RETURNS: {testimonials[activeIndex].returns}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-secondary/40 border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1)
                    setActiveIndex(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? "bg-accent w-4" : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : "false"}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-secondary/40 border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-primary-100/80 mb-6">
              JOIN OUR COMMUNITY TO SEE MORE SUCCESS STORIES AND START YOUR OWN TRADING JOURNEY
            </p>
            <V31Button
              variant="secondary"
              as="a"
              href="https://t.me/fttrenches_main"
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN OUR COMMUNITY
            </V31Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
