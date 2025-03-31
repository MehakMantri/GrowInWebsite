"use client"
import { useEffect, useState } from "react"
import { Navbar } from "../components/navbar"
import { HeroSection } from "../components/hero-section"
import { AboutSection } from "../components/about-section"
import { EventsSection } from "../components/events-section"
// import {MeetupSection} from "../components/meetup-section"
import {MeetupSection} from "../components/meetup-section"
import { CTASection } from "../components/cta-section"
import { Footer } from "../components/footer"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  // Ensure the component is mounted on the client before rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-deepBlue via-darkNavy to-deepBlue text-white dark:bg-gradient-to-br dark:from-darkGray dark:via-darkNavy dark:to-darkGray">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <MeetupSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

