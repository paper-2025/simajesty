import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Volunteer", href: "/contact" },
  ]

  const programs = [
    { name: "Mobile Healthcare", href: "#mobile-healthcare" },
    { name: "Emergency Response", href: "#emergency" },
    { name: "Health Education", href: "#education" },
    { name: "Community Outreach", href: "#outreach" },
  ]

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  ]

  return (
    <footer className="relative bg-background/95 backdrop-blur-sm border-t border-border/50 mt-20">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Foundation Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="mb-4">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Image
                  src="/company-logo.png"
                  alt="Dr. Obe Charity Foundation Logo"
                  width={120}
                  height={24}
                  priority
                />
              </Link>
              <p className="text-sm text-foreground/70 font-medium">Transforming Rural Healthcare in Nigeria</p>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              Bridging the healthcare gap in underserved rural communities through preventive care, 
              emergency medical services, and community health education programs across Nigeria.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm text-foreground/70">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>170 Ademola Adetokunbo Crescent Wuse 2,Abuja,Nigeria</span>
                <span>14361 Earl Chokiski Ave El Paso TX 79938, USA</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-foreground/70">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>+234  9030083129</span>
                <span>+1    9159992005</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-foreground/70">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>obefoundation4charity@gmail.com</span>
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

          {/* Our Programs */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    href={program.href}
                    className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {program.name}
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
              <h3 className="font-semibold text-foreground mb-2">Stay Informed About Our Mission</h3>
              <p className="text-foreground/70 text-sm">
                Subscribe to receive updates on our healthcare programs, impact stories, and volunteer opportunities.
              </p>
            </div>
            <div className="flex space-x-3 max-w-md w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-accent/50 border border-border/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-200 text-sm"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white rounded-lg transition-colors duration-200 font-medium text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-foreground/70 text-sm mb-4 md:mb-0">
              © {currentYear} Dr. Obe Charity Foundation. All rights reserved. | Registered NGO in Nigeria
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#privacy" className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#transparency" className="text-foreground/70 hover:text-cyan-400 transition-colors duration-200">
                Financial Transparency
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer