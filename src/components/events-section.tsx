import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import { EventCard } from "@/components/event-card"

export function EventsSection() {
  return (
    <section id="events" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-deepBlue/10 dark:bg-darkGray/50 -skew-y-3 -z-10"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-warmOrange/5 rounded-full blur-3xl"></div>

      <div className="container relative">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge className="mb-4" variant="outline">
            Events & Sessions
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Join Our Upcoming Events</h2>
          <p className="mt-4 max-w-[700px] text-gray-400 md:text-xl">
            Participate in our interactive sessions, workshops, and community meetups
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-gray-800/30 p-1">
              <TabsTrigger
                value="upcoming"
                className="data-[state=active]:bg-vibrantBlue data-[state=active]:text-white"
              >
                Upcoming Events
              </TabsTrigger>
              <TabsTrigger value="past" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">
                Past Events
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="upcoming" className="space-y-10 animate-in fade-in-50 duration-300">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <EventCard
                type="google-meet"
                date="March 15, 2025 • 7:00 PM EST"
                title="Web Development Workshop: Building Modern UIs"
                description="Learn how to create stunning user interfaces using the latest frontend technologies"
                attendees={15}
                buttonText="Register"
              />

              <EventCard
                type="twitter"
                date="March 20, 2025 • 6:00 PM EST"
                title="Career Paths in Tech: Industry Expert Panel"
                description="Join our discussion with industry experts about different career paths in technology"
                attendees={28}
                buttonText="Set Reminder"
              />

              <EventCard
                type="discord"
                date="March 25, 2025 • 8:00 PM EST"
                title="Coding Challenge: Collaborative Problem Solving"
                description="Team up with other community members to solve interesting coding challenges"
                attendees={10}
                buttonText="Join Event"
              />
            </div>

            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg" className="group">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-10 animate-in fade-in-50 duration-300">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <EventCard
                type="google-meet"
                date="February 15, 2025 • 7:00 PM EST"
                title="Introduction to Machine Learning"
                description="A beginner-friendly introduction to machine learning concepts and applications"
                isPast={true}
                buttonText="Watch Recording"
              />

              <EventCard
                type="twitter"
                date="February 10, 2025 • 6:00 PM EST"
                title="Navigating Tech Interviews"
                description="Tips and strategies for succeeding in technical interviews"
                isPast={true}
                buttonText="View Summary"
              />

              <EventCard
                type="discord"
                date="February 5, 2025 • 8:00 PM EST"
                title="Open Source Contribution Workshop"
                description="Learn how to contribute to open source projects and make your first PR"
                isPast={true}
                buttonText="View Resources"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

