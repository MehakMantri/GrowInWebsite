import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ValueCard } from "./value-card"

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-softBeige/5 dark:bg-transparent -skew-y-6 -z-10"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-vibrantBlue/5 rounded-full blur-3xl"></div>

      <div className="container relative">
        <div className="flex flex-col items-center text-center mb-16">
          <Badge className="mb-4" variant="outline">
            About Us
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Our Mission & Values</h2>
          <p className="mt-4 max-w-[700px] text-gray-400 md:text-xl">
            Building a supportive environment where everyone can learn, collaborate, and grow together
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ValueCard
            icon="lightbulb"
            title="Learning"
            description="Continuous learning through workshops, tutorials, and resources shared by community members"
          />
          <ValueCard
            icon="users"
            title="Collaboration"
            description="Working together on projects, sharing ideas, and building solutions as a community"
          />
          <ValueCard
            icon="rocket"
            title="Growth"
            description="Personal and professional development through mentorship and skill-building opportunities"
          />
          <ValueCard
            icon="message-square"
            title="Inclusivity"
            description="Creating a welcoming space for everyone regardless of background or experience level"
          />
        </div>

        <div className="mt-16 flex justify-center">
          <Button variant="outline" size="lg" className="group relative overflow-hidden">
            <span className="relative z-10">Learn More About Our Community</span>
            <span className="absolute inset-0 bg-gradient-to-r from-vibrantBlue/20 to-warmOrange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </div>
      </div>
    </section>
  )
}

