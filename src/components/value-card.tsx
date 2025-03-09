import { Lightbulb, MessageSquare, Rocket, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ValueCardProps {
  icon: "lightbulb" | "users" | "rocket" | "message-square"
  title: string
  description: string
}

export function ValueCard({ icon, title, description }: ValueCardProps) {
  const Icon = {
    lightbulb: Lightbulb,
    users: Users,
    rocket: Rocket,
    "message-square": MessageSquare,
  }[icon]

  return (
    <Card className="bg-gray-800/30 border-gray-700/50 backdrop-blur-sm transition-all duration-300 hover:border-vibrantBlue/50 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-vibrantBlue/5 overflow-hidden group">
      <div className="absolute -right-20 -top-20 w-40 h-40 bg-vibrantBlue/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardHeader className="pb-2 relative">
        <div className="w-12 h-12 rounded-full bg-vibrantBlue/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-vibrantBlue/20">
          <Icon className="h-6 w-6 text-vibrantBlue" />
        </div>
        <CardTitle className="group-hover:text-vibrantBlue transition-colors">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

