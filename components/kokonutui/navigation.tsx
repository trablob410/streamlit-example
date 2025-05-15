"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { AnimatePresence } from "framer-motion"

export default function Navigation() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
                onClick={handleLogoClick}
              >
                <Image
                  src="/images/ftt-logo.png"
                  alt="FROM THE TRENCHES"
                  width={100}
                  height={40}
                  className="h-8 w-auto"
                />
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-[#fcf0c1] hover:text-white transition-colors relative group"
              >
                HOME
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("signal-types")}
                className="text-[#fcf0c1] hover:text-white transition-colors relative group"
              >
                SIGNAL TYPES
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-[#fcf0c1] hover:text-white transition-colors relative group"
              >
                PRICING
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#fcf0c1] p-2 rounded-md hover:bg-[#fcf0c1]/10 transition-colors"
              >
                <Menu className="h-6 w-6" />
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
