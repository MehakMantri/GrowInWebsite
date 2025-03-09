"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Users } from "lucide-react"
import { FeatureCard } from "./feature-card"
import { motion } from "framer-motion"
import Link from "next/link"
export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const { left, top, width, height } = heroRef.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      const moveX = x * 20
      const moveY = y * 20

      const glowElements = heroRef.current.querySelectorAll(".glow-effect")
      glowElements.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.transform = `translate(${moveX * -1}px, ${moveY * -1}px)`
        }
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section ref={heroRef} className="relative overflow-hidden py-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-vibrantBlue/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-warmOrange/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10 flex flex-col items-center text-center">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            className="mb-4 bg-vibrantBlue/10 text-vibrantBlue hover:bg-vibrantBlue/20 group transition-all duration-300"
            variant="secondary"
          >
            <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            Tech Community
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Join, Learn, and Grow with{" "}
          <span className="relative">
            <span className="bg-gradient-to-r from-vibrantBlue via-electricBlue to-warmOrange bg-clip-text text-transparent">
              GrowInCommunity
            </span>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -right-20 top-5"
            >
              🚀
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-[700px] text-gray-300 md:text-xl leading-relaxed"
        >
          A vibrant tech community where developers, designers, and tech enthusiasts collaborate, learn, and grow
          together through mentorship, events, and resources.
        </motion.p>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex gap-8 items-center justify-center text-center"
        >
          {[
            { number: "1400+", label: "Members" },
            { number: "50+", label: "Events" },
            { number: "20+", label: "Mentors" },
          ].map((stat) => (
            <div key={stat.label} className="px-4 border-r last:border-0 border-gray-700/50">
              <div className="text-2xl font-bold text-vibrantBlue">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link href="https://discord.com/invite/DrkxHqTTaN">
          <Button 
            size="lg" 
            className="group relative overflow-hidden bg-gradient-to-r from-vibrantBlue to-warmOrange hover:opacity-90 transition-opacity"
          >
            
            <span className="relative z-10 flex items-center">
              Join the Community
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button></Link>

          <Button
            size="lg"
            variant="outline"
            className="border-gray-700/50 text-vibrantBlue hover:border-vibrantBlue hover:text-deepBlue group"
          >
            <Users className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            Get Mentorship
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-28 grid gap-8 md:grid-cols-3 w-full"
        >
          {[
            {
              icon: "users",
              title: "Community Support",
              description: "Connect with like-minded individuals, share knowledge, and grow together in a supportive environment.",
            },
            {
              icon: "code",
              title: "Coding Sessions",
              description: "Join interactive live coding sessions, workshops, and collaborative programming challenges.",
            },
            {
              icon: "lightbulb",
              title: "Mentorship",
              description: "Get personalized guidance from industry experts and accelerate your professional growth.",
            },
          ].map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon as "code" | "users" | "lightbulb"}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Enhanced glow effect */}
      <div className="absolute -bottom-48 left-0 right-0 h-96 bg-gradient-to-t from-vibrantBlue/20 via-warmOrange/10 to-transparent blur-3xl glow-effect" />
    </section>
  )
}

