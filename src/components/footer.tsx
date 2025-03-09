import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Rocket, Twitter, DiscIcon as Discord } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-700/50 bg-gray-900/50 py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Rocket className="h-6 w-6 text-vibrantBlue" />
              <span className="text-xl font-bold">GrowInCommunity</span>
            </div>
            <p className="text-gray-400 mb-4">
              A vibrant tech community where developers, designers, and tech enthusiasts collaborate, learn, and grow
              together.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-vibrantBlue transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-vibrantBlue transition-colors">
                <Discord className="h-5 w-5" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-vibrantBlue transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-vibrantBlue transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-vibrantBlue transition-colors">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-vibrantBlue transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-vibrantBlue transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-vibrantBlue transition-colors">
                  Discord Server
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-vibrantBlue transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-vibrantBlue transition-colors">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-vibrantBlue transition-colors">
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get the latest updates on events and resources.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800/50 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-vibrantBlue focus:border-transparent"
              />
              <Button type="submit" size="sm" className="bg-vibrantBlue hover:bg-vibrantBlue/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700/50 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} GrowInCommunity. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

