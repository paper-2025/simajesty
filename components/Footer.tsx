import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Services", href: "#services" },
  ]

  const services = [
    { name: "Web Development", href: "#web-dev" },
    { name: "Mobile Apps", href: "#mobile" },
    { name: "UI/UX Design", href: "#design" },
    { name: "Consulting", href: "#consulting" },
  ]

  const socialLinks = [
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  ]

  return (
    <footer className="relative bg-background/95 backdrop-blur-sm border-t border-border/50 mt-20">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Company Logo"
                width={120}
                height={24}
                priority
              />
            </Link>
            <p className="text-foreground/70 mb-6 max-w-md">
              Building modern, scalable web applications with cutting-edge technologies. 
              We create digital experiences that inspire and engage users worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm text-foreground/70">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>123 Tech Street, Innovation City, IC 12345</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-foreground/70">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-foreground/70">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>hello@yourcompany.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-lg bg-accent/50 hover:bg-accent transition-colors duration-200 group"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5 text-foreground/70 group-hover:text-cyan-400 transition-colors duration-200" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="font-semibold text-foreground mb-2">Stay Updated</h3>
              <p className="text-foreground/70 text-sm">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
            </div>
            <div className="flex space-x-3 max-w-md w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-accent/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200 text-sm"
              />
              <button className="px-6 py-2 bg-cyan-400 hover:bg-cyan-500 text-white rounded-lg transition-colors duration-200 font-medium text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-foreground/70 text-sm mb-4 md:mb-0">
              © {currentYear} Your Company Name. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#privacy" className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#cookies" className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer