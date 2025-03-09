import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-vibrantBlue/10 rounded-full blur-3xl"></div>

      <div className="container">
        <div className="rounded-2xl bg-gradient-to-r from-vibrantBlue/20 via-deepBlue/30 to-vibrantBlue/20 p-8 md:p-12 lg:p-16 backdrop-blur-sm border border-vibrantBlue/20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-warmOrange/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-vibrantBlue/10 rounded-full blur-3xl"></div>

          <div className="mx-auto max-w-3xl text-center relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to join our community?
            </h2>
            <p className="mt-4 text-gray-400 md:text-xl">
              Connect with like-minded individuals, learn new skills, and grow your career in tech
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-warmOrange hover:bg-warmOrange/90 text-white group relative overflow-hidden"
              >
                <span className="relative z-10">Join GrowInCommunity</span>
                <span className="absolute inset-0 bg-gradient-to-r from-warmOrange to-vibrantBlue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-gray-700/50 hover:border-vibrantBlue hover:text-vibrantBlue"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

