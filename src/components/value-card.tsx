import { Lightbulb, MessageSquare, Rocket, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ValueCardProps {
  icon: "lightbulb" | "users" | "rocket" | "message-square"
  title: string
  description: string
  index?: number
}

export function ValueCard({ icon, title, description, index = 0 }: ValueCardProps) {
  const Icon = {
    lightbulb: Lightbulb,
    users: Users,
    rocket: Rocket,
    "message-square": MessageSquare,
  }[icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card 
        className="bg-gray-900/40 border-gray-800 backdrop-blur-sm transition-all duration-300 
                 hover:border-vibrantBlue/50 hover:bg-gray-900/60 hover:shadow-lg hover:shadow-vibrantBlue/5 
                 overflow-hidden group relative"
        role="article"
        tabIndex={0}
      >
        {/* Animated background effects */}
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-vibrantBlue/5 rounded-full blur-3xl 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-warmOrange/5 rounded-full blur-3xl 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />

        <CardHeader className="pb-2 relative">
          <motion.div 
            className="w-12 h-12 rounded-full bg-vibrantBlue/10 flex items-center justify-center mb-4"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(var(--vibrant-blue), 0.2)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Icon className="h-6 w-6 text-vibrantBlue" aria-hidden="true" />
          </motion.div>
          <CardTitle className="text-gray-200 group-hover:text-vibrantBlue transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription 
            className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300
                       leading-relaxed"
          >
            {description}
          </CardDescription>
        </CardContent>

        {/* Hover indicator */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-vibrantBlue via-purple-500 to-warmOrange 
                      group-hover:w-full transition-all duration-300 ease-in-out" />
      </Card>
    </motion.div>
  )
}

