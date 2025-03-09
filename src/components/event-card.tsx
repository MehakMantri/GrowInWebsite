import { Calendar, DiscIcon as Discord, Twitter, Video, ArrowRight, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface EventCardProps {
  type: "google-meet" | "twitter" | "discord" | "in-person"
  date: string
  title: string
  description: string
  attendees?: number
  buttonText: string
  isPast?: boolean
  href?: string
  tags?: string[]
  image?: string
  category?: string
}

export function EventCard({ 
  type, 
  date, 
  title, 
  description, 
  attendees, 
  buttonText, 
  isPast = false,
  href,
  tags,
  image,
  category 
}: EventCardProps) {
  const getEventDetails = () => {
    switch (type) {
      case "google-meet":
        return {
          icon: Video,
          badgeText: "Google Meet",
          badgeColor: isPast ? "bg-gray-600" : "bg-vibrantBlue",
          gradientFrom: isPast ? "from-gray-700/50" : "from-vibrantBlue/20",
          gradientTo: isPast ? "to-gray-600/50" : "to-purple-500/20",
          iconColor: isPast ? "text-gray-400" : "text-vibrantBlue",
        }
      case "twitter":
        return {
          icon: Twitter,
          badgeText: "Twitter Spaces",
          badgeColor: isPast ? "bg-gray-600" : "bg-vibrantBlue",
          gradientFrom: isPast ? "from-gray-700/50" : "from-blue-500/20",
          gradientTo: isPast ? "to-gray-600/50" : "to-vibrantBlue/20",
          iconColor: isPast ? "text-gray-400" : "text-vibrantBlue",
        }
      case "discord":
        return {
          icon: Discord,
          badgeText: "Discord",
          badgeColor: isPast ? "bg-gray-600" : "bg-deepBlue",
          gradientFrom: isPast ? "from-gray-700/50" : "from-indigo-500/20",
          gradientTo: isPast ? "to-gray-600/50" : "to-purple-500/20",
          iconColor: isPast ? "text-gray-400" : "text-electricBlue",
        }
      case "in-person":
        return {
          icon: MapPin,
          badgeText: "In Person",
          badgeColor: isPast ? "bg-gray-600" : "bg-warmOrange",
          gradientFrom: isPast ? "from-gray-700/50" : "from-warmOrange/20",
          gradientTo: isPast ? "to-gray-600/50" : "to-orange-500/20",
          iconColor: isPast ? "text-gray-400" : "text-warmOrange",
        }
    }
  }

  const { icon: Icon, badgeText, badgeColor, gradientFrom, gradientTo, iconColor } = getEventDetails()

  return (
    <Card
      className={`
      backdrop-blur-sm overflow-hidden group
      ${
        isPast
          ? "bg-gray-800/30 border-gray-700/50 opacity-80"
          : "bg-gray-800/30 border-gray-700/50 transition-all duration-300 hover:border-vibrantBlue/50 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-vibrantBlue/5"
      }
    `}
    >
      <div className={`h-48 relative`}>
        {image ? (
          <div className="absolute inset-0">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo} mix-blend-overlay`}></div>
          </div>
        ) : (
          <div className={`h-full bg-gradient-to-r ${gradientFrom} ${gradientTo} relative`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon
                className={`h-16 w-16 ${iconColor} opacity-75 ${!isPast && "group-hover:scale-110 transition-transform duration-300"}`}
              />
            </div>
          </div>
        )}
        <Badge className={`absolute top-4 right-4 ${badgeColor} text-white`}>{badgeText}</Badge>
        {category && (
          <Badge className="absolute top-4 left-4 bg-warmOrange/80 text-white">
            {category}
          </Badge>
        )}
      </div>

      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <CardTitle
          className={`${!isPast && "group-hover:text-vibrantBlue transition-colors"} ${isPast ? "text-gray-300" : ""}`}
        >
          {title}
        </CardTitle>
        <CardDescription className={isPast ? "text-gray-500" : "text-gray-400"}>{description}</CardDescription>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardHeader>

      <CardContent className="flex justify-between items-center">
        {attendees ? (
          <div className="flex -space-x-2">
            {[...Array(Math.min(4, attendees))].map((_, i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full bg-gray-700 border-2 border-gray-800 flex items-center justify-center text-xs font-medium"
              >
                {i + 1}
              </div>
            ))}
            {attendees > 4 && (
              <div className="h-8 w-8 rounded-full bg-vibrantBlue/20 border-2 border-gray-800 flex items-center justify-center text-xs font-medium text-vibrantBlue">
                +{attendees - 4}
              </div>
            )}
          </div>
        ) : (
          <div></div>
        )}
        {href ? (
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              variant="outline"
              className={!isPast ? "group-hover:bg-warmOrange group-hover:text-white transition-colors" : ""}
            >
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <Button
            size="sm"
            variant="outline"
            className={!isPast ? "group-hover:bg-warmOrange group-hover:text-white transition-colors" : ""}
          >
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

