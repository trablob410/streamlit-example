"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { V31Button } from "../ui/v31-button"
import Image from "next/image"

interface Testimonial {
  id: number
  text: string
  author: string
  avatar: string
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
      text: "Hey ser, just wanna say ur signals are fucking great, ive tried everything since teso, so i know my stuff, have also my own memetrade stuff, i code (noob tho), anw, just wanna say gj on consistency and algo i guess, u got that sauce ser. Avoided coding anything to check smart wallets (using only free apis to fetch price and trade), but ur bot made me change my mind for sure..",
      author: "candylaned",
      avatar: "/images/avatars/candylaned.jpg",
    },
    {
      id: 3,
      text: "That sounds sickk looking forward to it",
      author: "Demon",
      avatar: "/images/avatars/demon.jpg",
    },
    {
      id: 4,
      text: "yeah mean i trench a lot and use a few diff tools but ive been keeping my eye on yours",
      author: "Dags",
      avatar: "/images/avatars/dags.jpg",
    },
    {
      id: 5,
      text: "Lmao btw plz dnt release the twitter follow one publicly it's too good",
      author: "Popseye",
      avatar: "/images/avatars/popseye.jpg",
    },
    {
      id: 6,
      text: "The signals have been incredibly accurate and the community support is amazing. Really appreciate the transparency and educational content.",
      author: "HinTrenches",
      avatar: "/images/avatars/hintrenches.jpg",
    },
    {
      id: 7,
      text: "Been following FTT for months now and the consistency is unmatched. The smart money tracking really gives you an edge in this market.",
      author: "Josh",
      avatar: "/images/avatars/josh.jpg",
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 neon-text">COMMUNITY FEEDBACK</h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            REAL COMMENTS FROM OUR COMMUNITY MEMBERS ABOUT THEIR EXPERIENCE WITH FROM THE TRENCHES
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial carousel */}
          <div
            className="relative overflow-hidden min-h-[300px] md:min-h-[250px]"
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
                  <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-accent/50">
                    <Image
                      src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                      alt={testimonials[activeIndex].author}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center mb-4">
                    <Quote className="w-6 h-6 text-accent mr-2" />
                  </div>

                  <blockquote className="text-primary/90 text-lg mb-6 italic">
                    "{testimonials[activeIndex].text}"
                  </blockquote>

                  <div className="border-t border-primary/10 pt-4 mt-4">
                    <div className="font-bold text-primary text-lg">{testimonials[activeIndex].author}</div>
                    <div className="text-primary/70 text-sm">COMMUNITY MEMBER</div>
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
              JOIN OUR COMMUNITY TO SHARE YOUR OWN SUCCESS STORIES AND CONNECT WITH OTHER TRADERS
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
