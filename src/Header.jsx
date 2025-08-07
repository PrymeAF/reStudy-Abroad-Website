import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Menu, X, Mail } from 'lucide-react'
import logo from '../assets/restudy_abroad_logo_option1.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState('')
  const location = useLocation()

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    // Handle email subscription
    console.log('Email submitted:', email)
    setEmail('')
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="ReStudy Abroad" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-700 hover:text-primary transition-colors font-medium ${
                  isActive(item.path) ? 'text-primary border-b-2 border-primary pb-1' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Email Signup & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop Email Signup */}
            <form onSubmit={handleEmailSubmit} className="hidden lg:flex items-center space-x-2">
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-700 hover:text-primary transition-colors font-medium ${
                    isActive(item.path) ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Email Signup */}
              <form onSubmit={handleEmailSubmit} className="flex flex-col space-y-2 pt-4 border-t">
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
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

