import { Code, Lightbulb, Users } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: "users" | "code" | "lightbulb"
  title: string
  description: string
  index?: number
}

export function FeatureCard({ icon, title, description, index = 0 }: FeatureCardProps) {
  const Icon = {
    users: Users,
    code: Code,
    lightbulb: Lightbulb,
  }[icon]

  const iconColors = {
    users: "from-blue-500/20 via-vibrantBlue/10 to-blue-500/20",
    code: "from-purple-500/20 via-vibrantBlue/10 to-purple-500/20",
    lightbulb: "from-orange-500/20 via-warmOrange/10 to-orange-500/20",
  }[icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full relative"
    >
      {/* Icon positioned absolutely between cards */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <div className="relative w-16 h-16">
          <div className={cn(
            "absolute inset-0 rounded-full bg-gradient-to-br blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100",
            iconColors
          )} />
          <div className={cn(
            "relative h-full rounded-full bg-gradient-to-br p-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg flex items-center justify-center",
            iconColors
          )}>
            <Icon className="h-8 w-8 text-white transition-transform duration-300 group-hover:rotate-[-8deg]" />
          </div>
        </div>
      </div>

      <div className="group relative overflow-hidden rounded-xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm transition-all duration-300 hover:border-vibrantBlue/50 hover:bg-gray-800/50 h-full flex flex-col pt-20 min-h-[300px] w-full">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glow effect */}
        <div className="absolute -inset-px bg-gradient-to-r from-transparent via-vibrantBlue/10 to-transparent opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />

        <div className="relative z-10 p-8 flex flex-col h-full">
          <div className="flex flex-col flex-grow justify-center text-center">
            <h3 className="text-xl font-bold group-hover:text-vibrantBlue transition-colors duration-300 mb-3">
              {title}
            </h3>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

