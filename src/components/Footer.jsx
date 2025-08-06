import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import logo from '../assets/restudy_abroad_logo_option1.png'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    // Handle email signup
    console.log('Footer email signup:', email)
    setEmail('')
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    { name: 'Educational Consulting', href: '#' },
    { name: 'Scholarship Applications', href: '#' },
    { name: 'Visa Processing', href: '#' },
    { name: 'Test Preparation', href: '#' },
    { name: 'Flight Booking', href: '#' }
  ]

  const destinations = [
    { name: 'Study in USA', href: '#' },
    { name: 'Study in UK', href: '#' },
    { name: 'Study in Canada', href: '#' },
    { name: 'Study in Australia', href: '#' },
    { name: 'Study in Europe', href: '#' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Stay Updated on Study Abroad Opportunities
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get the latest scholarship opportunities, application deadlines, and study abroad tips 
              delivered directly to your inbox.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-gray-900 border-0 flex-1"
                  required
                />
                <Button type="submit" variant="secondary" className="px-6">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/60 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <img src={logo} alt="ReStudy Abroad" className="h-10 w-auto filter brightness-0 invert" />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Empowering ambitious professionals to secure scholarships and admissions 
                at top universities worldwide. Your gateway to global education.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">Accra & Kumasi, Ghana</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm">+233 XX XXX XXXX</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm">info@restudyabroad.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Study Destinations */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Study Destinations</h4>
              <ul className="space-y-3">
                {destinations.map((destination, index) => (
                  <li key={index}>
                    <a
                      href={destination.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {destination.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 ReStudy Abroad. All rights reserved. Made with ❤️ for ambitious professionals.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

