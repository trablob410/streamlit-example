"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"
import { AnimatePresence } from "framer-motion"
import EnhancedLogo from "./enhanced-logo"

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
          isScrolled ? "bg-black/90 backdrop-blur-md py-2 border-b border-[#fcf0c1]/10" : "bg-transparent py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <EnhancedLogo onClick={handleLogoClick} size="md" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-[#fcf0c1] hover:text-white transition-colors relative group"
                  onMouseEnter={() => setShowTooltip("home")}
                  onMouseLeave={() => setShowTooltip(null)}
                >
                  HOME
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                {showTooltip === "home" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-black/90 border border-[#fcf0c1]/20 rounded text-xs text-[#fcf0c1] whitespace-nowrap z-50"
                  >
                    {tooltips.home}
                  </motion.div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => scrollToSection("signal-types")}
                  className="text-[#fcf0c1] hover:text-white transition-colors relative group"
                  onMouseEnter={() => setShowTooltip("signalTypes")}
                  onMouseLeave={() => setShowTooltip(null)}
                >
                  SIGNAL TYPES
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                {showTooltip === "signalTypes" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-black/90 border border-[#fcf0c1]/20 rounded text-xs text-[#fcf0c1] whitespace-nowrap z-50"
                  >
                    {tooltips.signalTypes}
                  </motion.div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-[#fcf0c1] hover:text-white transition-colors relative group"
                  onMouseEnter={() => setShowTooltip("pricing")}
                  onMouseLeave={() => setShowTooltip(null)}
                >
                  PRICING
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                {showTooltip === "pricing" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-black/90 border border-[#fcf0c1]/20 rounded text-xs text-[#fcf0c1] whitespace-nowrap z-50"
                  >
                    {tooltips.pricing}
                  </motion.div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-[#fcf0c1] hover:text-white transition-colors relative group"
                  onMouseEnter={() => setShowTooltip("about")}
                  onMouseLeave={() => setShowTooltip(null)}
                >
                  ABOUT
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                {showTooltip === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-black/90 border border-[#fcf0c1]/20 rounded text-xs text-[#fcf0c1] whitespace-nowrap z-50"
                  >
                    {tooltips.about}
                  </motion.div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-[#fcf0c1] hover:text-white transition-colors relative group"
                  onMouseEnter={() => setShowTooltip("faq")}
                  onMouseLeave={() => setShowTooltip(null)}
                >
                  FAQ
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                {showTooltip === "faq" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-black/90 border border-[#fcf0c1]/20 rounded text-xs text-[#fcf0c1] whitespace-nowrap z-50"
                  >
                    {tooltips.faq}
                  </motion.div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-[#fcf0c1] hover:text-white transition-colors relative group"
                  onMouseEnter={() => setShowTooltip("testimonials")}
                  onMouseLeave={() => setShowTooltip(null)}
                >
                  TESTIMONIALS
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                {showTooltip === "testimonials" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1.5 bg-black/90 border border-[#fcf0c1]/20 rounded text-xs text-[#fcf0c1] whitespace-nowrap z-50"
                  >
                    {tooltips.testimonials}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#fcf0c1] p-2 rounded-md hover:bg-[#fcf0c1]/10 transition-colors"
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
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-[#fcf0c1] text-xl hover:text-white transition-colors"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection("signal-types")}
                className="text-[#fcf0c1] text-xl hover:text-white transition-colors"
              >
                SIGNAL TYPES
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-[#fcf0c1] text-xl hover:text-white transition-colors"
              >
                PRICING
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-[#fcf0c1] text-xl hover:text-white transition-colors"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-[#fcf0c1] text-xl hover:text-white transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-[#fcf0c1] text-xl hover:text-white transition-colors"
              >
                TESTIMONIALS
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-6 py-2 border border-[#fcf0c1] text-[#fcf0c1] rounded-md hover:bg-[#fcf0c1]/10 transition-colors"
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
