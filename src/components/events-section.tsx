import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import { EventCard as EventCardComponent } from "@/components/event-card"
import Image from "next/image"
import { motion } from "framer-motion"

interface EventCardProps {
  type: "google-meet" | "twitter" | "discord" |"in-person";
  date: string;
  title: string;
  description: string;
  attendees?: number;
  buttonText: string;
  href?: string;
  tags?: string[];
  image?: string;
}

function EventCard({ 
  type, 
  date, 
  title, 
  description, 
  attendees, 
  buttonText,
  href,
  tags,
  image 
}: EventCardProps) {
  return (
    <div className="rounded-lg border border-gray-700/50 bg-gray-900/50 p-6 hover:border-vibrantBlue/50 transition-colors">
      {image && (
        <div className="mb-4 relative w-full h-48 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
      )}
      
      <div className="flex items-center gap-2 mb-4">
        
      </div>
    </div>
  )
}

export function EventsSection() {
  return (
    <section id="events" className="py-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, skewY: 0 }}
        animate={{ opacity: 1, skewY: -3 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-deepBlue/10 via-gray-900/0 to-warmOrange/5 dark:bg-darkGray/50 -z-10"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-warmOrange/5 to-vibrantBlue/5 rounded-full blur-3xl"
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Badge 
              className="mb-4 bg-gradient-to-r from-warmOrange/10 to-vibrantBlue/10 
                text-vibrantBlue border-vibrantBlue/20 px-4 py-1.5 
                hover:border-vibrantBlue/50 transition-all duration-300
                backdrop-blur-sm"
              variant="outline"
            >
              Events & Sessions
            </Badge>
          </motion.div>

          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4
              bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
          >
            Join Our Upcoming Events
          </motion.h2>

          <motion.p
            className="mt-4 max-w-[700px] text-gray-400 md:text-xl leading-relaxed
              backdrop-blur-sm"
          >
            Participate in our interactive sessions, workshops, and community meetups
          </motion.p>
        </motion.div>

        <Tabs defaultValue="upcoming" className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center mb-10"
          >
            <TabsList className="bg-gray-800/30 p-1 backdrop-blur-md border border-gray-700/50 rounded-lg">
              <TabsTrigger
                value="upcoming"
                className="data-[state=active]:bg-vibrantBlue data-[state=active]:text-white
                  px-6 py-2 transition-all duration-300 hover:text-vibrantBlue
                  data-[state=active]:shadow-lg data-[state=active]:shadow-vibrantBlue/25"
              >
                Upcoming Events
              </TabsTrigger>
              <TabsTrigger
                value="past"
                className="data-[state=active]:bg-gray-700 data-[state=active]:text-white
                  px-6 py-2 transition-all duration-300 hover:text-gray-300
                  data-[state=active]:shadow-lg data-[state=active]:shadow-gray-700/25"
              >
                Past Events
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="upcoming" className="space-y-10 animate-in fade-in-50 duration-300">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <EventCardComponent
                type="twitter"
                date="Feb 28 - Mar 31, 2025"
                title=" Website Building Competition"
                description="Use your skills to build a website for GrowInCommunity and win exciting prizes! "
                buttonText="Details"
                href="https://github.com/GrowInCommunity/Growincomm-website-competetion"
                image="/images/events/website.png"
                category="Website Building Competition"
              />

              <EventCardComponent
                type="discord"
                date="March 20 "
                title="Community Call"
                description="Do join our Bi-monthly community calls' session full of brainstorming, learning and collaboration. "
                buttonText="Details"
                href="https://x.com/GrowInComm"
                image="/images/events/calls.png"
                category="Community Call"
              />

              {/* <EventCardComponent
                type="discord"
                date="November 26 - December 3, 2024"
                title="KubeCon + CloudNativeCon India 2024 Sponsorship Program"
                description="Win a sponsored ticket to KubeCon India 2024! Write a blog post about 'Importance of Communities' or 'How GrowInCommunity helped your tech career'. Host it on your domain, share on social media, and submit via our Discord channel."
                isPast={true}
                buttonText="Learn More"
              /> */}

              

            </div>

            {/* <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg" className="group">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div> */}
          </TabsContent>

          <TabsContent value="past" className="space-y-10 animate-in fade-in-50 duration-300">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <EventCardComponent
                 type="discord"
                 date="November 26 - December 3, 2023"
                 title="KubeCon India 2024 Sponsorship Program"
                 description="Win a sponsored ticket to KubeCon + CloudNativeCon India 2024! Write a blog post about communities or your GrowInCommunity journey."
                 buttonText="Details"
                 href="https://github.com/GrowInCommunity/Kubecon-India-2024-sponsorship/blob/main/README.md"
                 image="/images/events/kube.png"
                 category="Challenge"
              />

              <EventCardComponent
                  type="twitter"
                  date="June 9 - June 30, 2024"
                  title="Blog-A-Thon: Unlocking the Power of Technical Writing"
                  description="Join Showwcase and GrowInCommunity's collaborative initiative to showcase your writing skills and share your technical expertise with a wider audience."
                  buttonText="Details"
                  href="https://x.com/GrowInComm/status/1667473287440658433?s=20"
                  image="/images/events/blog.png"
                  category="Writing Challenge"
              />
              <EventCardComponent
                  type="in-person"
                  date="January 20, 2024"
                  title="Delhi NCR Meetup 2024"
                  description="GrowIn* the Cloud Ops: Join us for an exciting in-person meetup in Delhi NCR. Connect with fellow community members and share cloud operations experiences."
                  buttonText="Details"
                  href="https://x.com/GrowInComm/"  
                  category="Meetup"
                  image="/images/events/meetup.png"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

