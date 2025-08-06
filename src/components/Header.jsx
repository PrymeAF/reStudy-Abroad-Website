import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Menu, X, Mail } from 'lucide-react'
import logo from '../assets/restudy_abroad_logo_option1.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    // Handle email signup
    console.log('Email signup:', email)
    setEmail('')
  }

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="ReStudy Abroad" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
            <a href="#blog" className="text-gray-700 hover:text-primary transition-colors">Blog</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Email Signup Form - Desktop */}
          <div className="hidden lg:flex items-center space-x-2">
            <form onSubmit={handleEmailSubmit} className="flex items-center space-x-2">
              <Input
                type="email"
                placeholder="Get study abroad updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-64"
                required
              />
              <Button type="submit" size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              <a href="#blog" className="text-gray-700 hover:text-primary transition-colors">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
              
              {/* Mobile Email Signup */}
              <div className="pt-4 border-t">
                <form onSubmit={handleEmailSubmit} className="flex flex-col space-y-2">
                  <Input
                    type="email"
                    placeholder="Get study abroad updates"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" size="sm" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Subscribe
                  </Button>
                </form>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

