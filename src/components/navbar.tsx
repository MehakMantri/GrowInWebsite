"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toogle"
import { Rocket, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.replace("#", "")).filter(Boolean)
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveItem(section.charAt(0).toUpperCase() + section.slice(1))
          break
        }
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-all duration-300",
        scrolled 
          ? "border-gray-700/50 backdrop-blur-lg bg-deepBlue/90 py-3"
          : "border-transparent bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3">
          {/* <Rocket className="h-7 w-7 text-vibrantBlue group-hover:rotate-12 transition-transform duration-300" /> */}
          <Image src="/images/events/logo.png" alt="Logo" width={32} height={32}></Image>
          <span className="text-2xl font-bold bg-gradient-to-r from-vibrantBlue to-warmOrange bg-clip-text text-transparent">
            GrowInCommunity
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative group py-2"
              onClick={() => setActiveItem(item.name)}
            >
              <span className={cn(
                "text-base font-medium transition-colors",
                activeItem === item.name ? "text-vibrantBlue" : "hover:text-vibrantBlue"
              )}>
                {item.name}
              </span>
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-vibrantBlue transition-all duration-300",
                activeItem === item.name ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <div className="hidden sm:flex items-center gap-3">
          {/* <Button 
  variant="outline" 
  className="border-gray-700/50 border-vibrantBlue text-vibrantBlue hover:bg-indigo-100/90 hover:text-deepBlue transition-all duration-300 text-base
    dark:bg-transparent dark:text-white
    light:bg-indigo-50/90 light:text-vibrantBlue light:bg-indigo-100/90"
>
  Sign In
</Button> */}
            <Button 
              className="bg-gradient-to-r from-vibrantBlue to-warmOrange hover:opacity-90 transition-opacity duration-300 text-base"
            ><Link 
                href="https://discord.com/invite/DrkxHqTTaN">
              Join Us
              </Link>
            </Button>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden hover:bg-gray-700/20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-deepBlue/95 backdrop-blur-lg border-b border-gray-700/50 py-4"
          >
            <nav className="container flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-base font-medium p-4 rounded-md transition-all duration-300",
                    activeItem === item.name
                      ? "bg-vibrantBlue/10 text-vibrantBlue"
                      : "hover:bg-gray-800/50"
                  )}
                  onClick={() => {
                    setActiveItem(item.name)
                    setMobileMenuOpen(false)
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col sm:hidden gap-2 pt-2">
                {/* <Button 
                  variant="outline" 
                  className="w-full justify-center text-base dark:bg-transparent dark:text-white light:bg-white light:text-deepBlue"
                >
                  Sign In
                </Button> */}
                <Button 
                  className="w-full justify-center bg-gradient-to-r from-vibrantBlue to-warmOrange hover:opacity-90 text-base"
                >
                  Join Us
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

