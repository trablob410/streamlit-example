"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { AnimatePresence } from "framer-motion"
import FTTLogo from "./ftt-logo"

export default function Navigation() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogoClick = () => {
    router.push("/")
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const tooltips = {
    home: "RETURN TO THE MAIN PAGE",
    signalTypes: "EXPLORE DIFFERENT SIGNAL TYPES AND THEIR CHARACTERISTICS",
    pricing: "VIEW PRICING TIERS AND FEATURE COMPARISON",
    about: "LEARN ABOUT OUR TEAM AND MISSION",
    faq: "FREQUENTLY ASKED QUESTIONS",
    testimonials: "USER TESTIMONIALS",
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-secondary/90 backdrop-blur-md py-2 border-b border-primary/10" : "bg-transparent py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <FTTLogo size="md" onClick={handleLogoClick} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-primary hover:text-primary-100 transition-colors relative group"
                  onMouseEnter={() => setShowTooltip("home")}
                  onMouseLeave={() => setShowTooltip(null)}
                  aria-label="Go to home section"
                >
                  HOME
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </button>
                {showTooltip === "home" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-secondary/90 border border-primary/20 rounded text-xs text-primary whitespace-nowrap z-50"
                    role="tooltip"
                  >
                    {tooltips.home}
                  </motion.div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => scrollToSection("signal-types")}
                  className="text-primary hover:text-primary-100 transition-colors relative group"
                  onMouseEnter={() => setShowTooltip("signalTypes")}
                  onMouseLeave={() => setShowTooltip(null)}
                  aria-label="Go to signal types section"
                >
                  SIGNAL TYPES
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </button>
                {showTooltip === "signalTypes" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-secondary/90 border border-primary/20 rounded text-xs text-primary whitespace-nowrap z-50"
                    role="tooltip"
                  >
                    {tooltips.signalTypes}
                  </motion.div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-primary hover:text-primary-100 transition-colors relative group"
                  onMouseEnter={() => setShowTooltip("testimonials")}
                  onMouseLeave={() => setShowTooltip(null)}
                  aria-label="Go to testimonials section"
                >
                  TESTIMONIALS
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </button>
                {showTooltip === "testimonials" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-secondary/90 border border-primary/20 rounded text-xs text-primary whitespace-nowrap z-50"
                    role="tooltip"
                  >
                    {tooltips.testimonials}
                  </motion.div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-primary hover:text-primary-100 transition-colors relative group"
                  onMouseEnter={() => setShowTooltip("pricing")}
                  onMouseLeave={() => setShowTooltip(null)}
                  aria-label="Go to pricing section"
                >
                  PRICING
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </button>
                {showTooltip === "pricing" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-secondary/90 border border-primary/20 rounded text-xs text-primary whitespace-nowrap z-50"
                    role="tooltip"
                  >
                    {tooltips.pricing}
                  </motion.div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-primary hover:text-primary-100 transition-colors relative group"
                  onMouseEnter={() => setShowTooltip("faq")}
                  onMouseLeave={() => setShowTooltip(null)}
                  aria-label="Go to FAQ section"
                >
                  FAQ
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </button>
                {showTooltip === "faq" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-secondary/90 border border-primary/20 rounded text-xs text-primary whitespace-nowrap z-50"
                    role="tooltip"
                  >
                    {tooltips.faq}
                  </motion.div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-primary hover:text-primary-100 transition-colors relative group"
                  onMouseEnter={() => setShowTooltip("about")}
                  onMouseLeave={() => setShowTooltip(null)}
                  aria-label="Go to about section"
                >
                  ABOUT
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
                </button>
                {showTooltip === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-secondary/90 border border-primary/20 rounded text-xs text-primary whitespace-nowrap z-50"
                    role="tooltip"
                  >
                    {tooltips.about}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-primary p-2 rounded-md hover:bg-primary/10 transition-colors"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-secondary/95 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-primary text-xl hover:text-primary-100 transition-colors"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("signal-types")}
                className="text-primary text-xl hover:text-primary-100 transition-colors"
              >
                SIGNAL TYPES
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-primary text-xl hover:text-primary-100 transition-colors"
              >
                TESTIMONIALS
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-primary text-xl hover:text-primary-100 transition-colors"
              >
                PRICING
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-primary text-xl hover:text-primary-100 transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-primary text-xl hover:text-primary-100 transition-colors"
              >
                ABOUT
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-6 py-2 border border-primary text-primary-100 rounded-md hover:bg-primary/10 transition-colors"
              >
                CLOSE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
