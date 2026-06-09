import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import logoImg from '../assets/logo/vertexlogo-1.png'
import Logo from './Logo'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesHovered, setIsServicesHovered] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsMobileServicesOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Home', to: '/', isRoute: true },
    { name: 'About', to: '/about', isRoute: true },
    { name: 'Services', to: '/services', isRoute: true, hasDropdown: true },
    { name: 'Portfolio', to: '/portfolio', isRoute: true },
    { name: 'Contact us', to: '/contact', isRoute: true },
  ]

  const dropdownItems = [
    { name: 'Experiential & Events Management', to: '/services/experiential' },
    { name: 'Brand Activations & Roadshows', to: '/services/activations' },
    { name: 'Exhibitions & Retail Experiences', to: '/services/exhibitions' },
    { name: 'Digital & Hybrid Experiences', to: '/services/digital' },
    { name: 'Content & Films', to: '/services/content' },
    { name: 'MICE & IPs', to: '/services/mice' },
    { name: 'Corporate Gifting', to: '/services/gifting' },
  ]

  const handleNavClick = (e, link) => {
    setIsMobileMenuOpen(false)

    // If it's a route-based link (Services, Home on services/contact page)
    if (link.isRoute) {
      e.preventDefault()
      navigate(link.to)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // If we're on a sub-page and clicking a scroll link, navigate home first then scroll
    if (location.pathname !== '/') {
      e.preventDefault()
      navigate('/')
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(link.scrollId)
        if (element) {
          const offset = isScrolled ? 90 : 100
          const bodyRect = document.body.getBoundingClientRect().top
          const elementRect = element.getBoundingClientRect().top
          const elementPosition = elementRect - bodyRect
          const offsetPosition = elementPosition - offset
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        }
      }, 150)
      return
    }

    // On homepage, just scroll to section
    e.preventDefault()
    const element = document.getElementById(link.scrollId)
    if (element) {
      const offset = isScrolled ? 90 : 100
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isActive = (link) => {
    if (link.isRoute) {
      return location.pathname === link.to
    }
    return false
  }

  const isHomePage = location.pathname === '/'

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md py-2.5 px-4 sm:px-12 border-b border-slate-200 shadow-md shadow-slate-100/20'
        : 'bg-transparent py-4 px-4 sm:px-12 border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 group"
          >
            {/* Logo Image */}
            <div className={`relative transition-all duration-300 ${isScrolled ? 'h-8 sm:h-10' : 'h-10 sm:h-15'}`}>
              <Logo
                className={`h-full w-auto object-contain transition-all duration-300 group-hover:scale-103 ${isScrolled ? 'brightness-0' : ''}`}
                src={logoImg}
                alt="Vertex 360 Logo"
              />
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link) || (link.to === '/' && isHomePage && !navLinks.some(l => l.isRoute && l.to !== '/' && location.pathname === l.to))

            if (link.hasDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative group/dropdown"
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => setIsServicesHovered(false)}
                >
                  <a
                    href={link.to}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`relative py-2 text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-1.5 cursor-pointer
                      ${active
                        ? isScrolled ? 'text-indigo-650 font-bold' : 'text-white font-semibold'
                        : isScrolled ? 'text-slate-700 hover:text-indigo-650' : 'text-slate-300 hover:text-white'
                      }`}
                  >
                    {link.name}
                    <ChevronDown className={`h-3.5 w-3.5 opacity-80 transition-transform duration-300 ${isServicesHovered ? 'rotate-180' : ''}`} />
                    {/* Active indicator line */}
                    <span
                      className={`absolute bottom-[-2px] left-0 right-0 h-[2px] transition-all duration-300 origin-center ${active
                        ? 'scale-x-100 opacity-100'
                        : 'scale-x-0 opacity-0 group-hover/dropdown:scale-x-100 group-hover/dropdown:opacity-100'
                        } ${isScrolled ? 'bg-indigo-650' : 'bg-white'}`}
                    />
                  </a>

                  {/* Dropdown Menu Card */}
                  <div
                    className={`absolute left-0 mt-2 w-72 border rounded-2xl shadow-2xl py-3 z-50 transition-all duration-300 origin-top transform ${isServicesHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                      } ${isScrolled ? 'bg-white border-slate-200 text-slate-800 shadow-slate-100/40' : 'bg-black border-slate-900 text-slate-300 shadow-black/80'}`}
                  >
                    {dropdownItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.to}
                        onClick={(e) => {
                          e.preventDefault()
                          setIsServicesHovered(false)
                          navigate(item.to)
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        className={`block px-5 py-3 text-xs sm:text-sm transition-colors font-medium ${isScrolled ? 'hover:bg-slate-50 hover:text-indigo-650 text-slate-700' : 'hover:bg-slate-900 hover:text-white text-slate-300'}`}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )
            }

            return (
              <a
                key={link.name}
                href={link.to}
                onClick={(e) => handleNavClick(e, link)}
                className={`relative py-2 text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-1.5 group
                  ${active
                    ? isScrolled ? 'text-indigo-650 font-bold' : 'text-white font-semibold'
                    : isScrolled ? 'text-slate-700 hover:text-indigo-650' : 'text-slate-300 hover:text-white'
                  }`}
              >
                {link.name}
                {/* Active indicator line */}
                <span
                  className={`absolute bottom-[-2px] left-0 right-0 h-[2px] transition-all duration-300 origin-center ${active
                    ? 'scale-x-100 opacity-100'
                    : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    } ${isScrolled ? 'bg-indigo-650' : 'bg-white'}`}
                />
              </a>
            )
          })}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className={`inline-flex items-center justify-center p-2 rounded-xl focus:outline-none transition-all duration-200 ${isScrolled ? 'text-slate-750 hover:text-slate-900' : 'text-slate-300 hover:text-white'}`}
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Card */}
      <div
        className={`md:hidden absolute left-0 right-0 mt-3 mx-3 backdrop-blur-xl border shadow-2xl rounded-2xl p-6 transition-all duration-300 origin-top transform ${isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          } ${isScrolled
            ? 'bg-white/95 border-slate-200 shadow-slate-100/40 text-slate-900'
            : 'bg-slate-950/95 border-slate-800/80 shadow-black/50 text-slate-300'
          }`}
      >
        <div className="space-y-1 flex flex-col">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              <a
                href={link.to}
                onClick={(e) => {
                  if (link.hasDropdown) {
                    e.preventDefault()
                    setIsMobileServicesOpen(!isMobileServicesOpen)
                  } else {
                    handleNavClick(e, link)
                  }
                }}
                className={`px-4 py-3 rounded-xl text-md font-semibold transition-all duration-200 flex items-center justify-between
                  ${isActive(link) && link.to === location.pathname
                    ? isScrolled ? 'text-indigo-650 bg-slate-50' : 'text-white bg-slate-900'
                    : isScrolled ? 'text-slate-700 hover:text-indigo-650 hover:bg-slate-50' : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                  }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className={`h-4 w-4 opacity-50 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                )}
              </a>
              {link.hasDropdown && isMobileServicesOpen && (
                <div className={`pl-6 space-y-1 mt-1 border-l ml-4 ${isScrolled ? 'border-slate-200' : 'border-slate-800'}`}>
                  {dropdownItems.map((subLink) => (
                    <a
                      key={subLink.name}
                      href={subLink.to}
                      onClick={(e) => {
                        e.preventDefault()
                        setIsMobileMenuOpen(false)
                        navigate(subLink.to)
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                      className={`block px-4 py-2.5 text-sm rounded-lg transition-all ${isScrolled ? 'text-slate-600 hover:text-indigo-650 hover:bg-slate-50' : 'text-slate-400 hover:text-white hover:bg-slate-900/60'}`}
                    >
                      {subLink.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
