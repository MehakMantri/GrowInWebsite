import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ValueCard } from "./value-card"

export function AboutSection() {
  return (
    <section 
      id="about" 
      aria-label="About Our Community"
      className="py-32 relative overflow-hidden bg-gradient-to-b from-vibrantBlue/[0.02] via-vibrantBlue/[0.05] to-transparent dark:from-vibrantBlue/[0.03] dark:via-vibrantBlue/[0.07] dark:to-transparent"
    >
      {/* Refined background decorations */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-vibrantBlue/[0.03] dark:bg-vibrantBlue/[0.05] -skew-y-6 -z-10 transform transition-transform duration-1000 backdrop-blur-3xl"
        style={{ transform: 'translateY(calc(var(--scroll-y, 0) * -0.1))' }}
      ></div>
      <div 
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-vibrantBlue/[0.08] dark:bg-vibrantBlue/[0.1] rounded-full blur-[100px] animate-pulse"
        style={{ transform: 'translateY(calc(var(--scroll-y, 0) * 0.05))' }}
      ></div>
      <div 
        className="absolute -bottom-60 -right-40 w-[600px] h-[600px] bg-warmOrange/[0.05] dark:bg-warmOrange/[0.08] rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>

      <div className="container relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge 
            className="mb-6 px-6 py-2 hover:scale-105 transition-transform shadow-lg backdrop-blur-sm" 
            variant="outline"
          >
            <span className="bg-gradient-to-r from-vibrantBlue to-warmOrange bg-clip-text text-transparent font-medium text-lg">
              About Us
            </span>
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-5xl mb-4 bg-gradient-to-r from-vibrantBlue to-deepBlue bg-clip-text text-transparent">
            Our Mission & Values
          </h2>
          <p className="mt-4 max-w-2xl text-white-300 dark:text-gray-200 sm:text-lg md:text-xl">
            Building a supportive environment where everyone can learn, collaborate, and grow together
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {[
            {
              icon: "lightbulb",
              title: "Learning",
              description: "Continuous learning through workshops, tutorials, and resources shared by community members"
            },
            {
              icon: "users",
              title: "Collaboration",
              description: "Working together on projects, sharing ideas, and building solutions as a community"
            },
            {
              icon: "rocket",
              title: "Growth",
              description: "Personal and professional development through mentorship and skill-building opportunities"
            },
            {
              icon: "message-square",
              title: "Inclusivity",
              description: "Creating a welcoming space for everyone regardless of background or experience level"
            }
          ].map((value, index) => (
            <div 
              key={value.title} 
              className="transition-all duration-300 ease-out"
              style={{ 
                animationDelay: `${index * 200}ms`,
                opacity: 0,
                animation: 'fadeInUp 0.6s ease forwards'
              }}
            >
              <ValueCard {...value} index={index} />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a href="/about" className="inline-block">
            <Button 
              variant="outline" 
              size="lg" 
              className="group relative overflow-hidden px-8 py-6 text-lg font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2"
            >
              <span className="relative z-10 bg-gradient-to-r from-vibrantBlue to-warmOrange bg-clip-text text-transparent">
                Learn More About Our Community
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-vibrantBlue/10 to-warmOrange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  )
}

