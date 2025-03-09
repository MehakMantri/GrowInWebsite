import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

const DISCORD_INVITE_URL = "https://discord.com/invite/DrkxHqTTaN"

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
  className?: string
  isExternal?: boolean
}

const CTAButton = ({ href, children, variant = "primary", className = "", isExternal = false }: CTAButtonProps) => {
  const baseStyles = "w-full sm:w-auto relative overflow-hidden group"
  const styles = variant === "primary"
    ? `${baseStyles} bg-warmOrange hover:bg-warmOrange/90 text-white ${className}`
    : `${baseStyles} border-gray-700/50 hover:border-vibrantBlue hover:text-vibrantBlue ${className}`

  const ButtonContent = (
    <Button size="lg" className={styles}>
      {variant === "primary" && (
        <span className="absolute inset-0 bg-gradient-to-r from-warmOrange to-vibrantBlue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {isExternal && (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        )}
      </span>
    </Button>
  )

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {ButtonContent}
      </a>
    )
  }

  return <Link href={href}>{ButtonContent}</Link>
}

export function CTASection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-24 relative overflow-hidden" aria-label="Call to action">
      {/* Background effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-vibrantBlue/10 rounded-full blur-3xl"
      />

      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="rounded-2xl bg-gradient-to-r from-vibrantBlue/20 via-deepBlue/30 to-vibrantBlue/20 p-8 md:p-12 lg:p-16 
            backdrop-blur-sm border border-vibrantBlue/20 relative overflow-hidden
            hover:border-vibrantBlue/30 transition-colors duration-300"
        >
          {/* Decorative elements with animation */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-24 -right-24 w-48 h-48 bg-warmOrange/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-24 -left-24 w-48 h-48 bg-vibrantBlue/10 rounded-full blur-3xl"
          />

          <div className="mx-auto max-w-3xl text-center relative z-10">
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              Ready to join our community?
            </motion.h2>
            
            <motion.p
              variants={itemVariants}
              className="mt-4 text-gray-400 md:text-xl"
            >
              Connect with like-minded individuals, learn new skills, and grow your career in tech
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <CTAButton
                href={DISCORD_INVITE_URL}
                variant="primary"
                className="animate-pulse hover:animate-none"
                isExternal
              >
                Join Our Discord Community
              </CTAButton>
              
              <CTAButton
                href="/about"
                variant="secondary"
              >
                Learn More
              </CTAButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

