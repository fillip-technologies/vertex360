import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import logoImg from '../assets/logo/vertexlogo-1.png'
import Logo from './Logo'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleScrollTo = (e, id) => {
    e.preventDefault()

    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          const offset = 90
          const bodyRect = document.body.getBoundingClientRect().top
          const elementRect = element.getBoundingClientRect().top
          const elementPosition = elementRect - bodyRect
          const offsetPosition = elementPosition - offset
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        }
      }, 150)
      return
    }

    const element = document.getElementById(id)
    if (element) {
      const offset = 90
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleRouteNavigation = (e, path) => {
    e.preventDefault()
    navigate(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-900 relative overflow-hidden pt-24 pb-12">
      {/* Background glow decoration */}
      <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-violet-500/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-16 mb-16">

          {/* Brand & Description (3 Columns) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Logo className="h-14 w-auto object-contain" src={logoImg} alt="Vertex 360 Logo" />
              </div>

              <p className="font-outfit text-md font-semibold text-slate-300 mb-4 tracking-wide">
                Where Vision Meets Execution.
              </p>

              <p className="font-inter text-slate-400 text-sm leading-relaxed mb-8 font-light max-w-sm">
                We are a premier experiential marketing and event management agency. We combine bold creative strategies with operational precision to design events that drive business outcomes.
              </p>

              {/* Social Links (Inline SVGs) */}
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
                  aria-label="YouTube"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (2 Columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="/" onClick={(e) => handleRouteNavigation(e, '/')} className="text-slate-400 hover:text-white text-sm font-light transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleRouteNavigation(e, '/services')} className="text-slate-400 hover:text-white text-sm font-light transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" onClick={(e) => handleRouteNavigation(e, '/about')} className="text-slate-400 hover:text-white text-sm font-light transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/portfolio" onClick={(e) => handleRouteNavigation(e, '/portfolio')} className="text-slate-400 hover:text-white text-sm font-light transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleRouteNavigation(e, '/contact')} className="text-slate-400 hover:text-white text-sm font-light transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column (2 Columns) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-6">
              Our Services
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="/services" onClick={(e) => handleRouteNavigation(e, '/services')} className="text-slate-400 hover:text-white text-sm font-light transition-colors">
                  Experiential & Corporate Events
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleRouteNavigation(e, '/services')} className="text-slate-400 hover:text-white text-sm font-light transition-colors">
                  Brand Activations & Roadshows
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleRouteNavigation(e, '/services')} className="text-slate-400 hover:text-white text-sm font-light transition-colors">
                  Exhibitions & Retail Spaces
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleRouteNavigation(e, '/services')} className="text-slate-400 hover:text-white text-sm font-light transition-colors">
                  Digital & Hybrid Experiences
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleRouteNavigation(e, '/services')} className="text-slate-400 hover:text-white text-sm font-light transition-colors">
                  IPs, MICE & Content Creation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (5 Columns) */}
          <div className="lg:col-span-5">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-6">
              Contact Info
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-indigo-400 shadow-sm flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">North Office</h5>
                  <p className="text-slate-300 text-xs font-light leading-relaxed">
                    Property No. 22, Second Floor, Cabin No. 201, Gurunanak Market, Lajpat Nagar 4, New Delhi 110024
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-indigo-400 shadow-sm flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">East Office</h5>
                  <p className="text-slate-300 text-xs font-light leading-relaxed">
                    Gr Fl F 400, 829, Upendra Nath Banerjee Road, Kalcher Math, Parnasree, Kolkata 700060
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-indigo-400 shadow-sm flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">West Office</h5>
                  <p className="text-slate-300 text-xs font-light leading-relaxed">
                    Opp Vakola Market, Nehru Rd Santacruz (E) Mumbai 400055
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                  <div className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-indigo-400 shadow-sm flex-shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Phone</h5>
                    <a href="tel:+918287055441" className="text-slate-300 text-xs font-light hover:text-white transition-colors">
                      +91-8287055441
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-indigo-400 shadow-sm flex-shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">Email</h5>
                    <a href="mailto:info@vertex360.co.in" className="text-slate-300 text-xs font-light hover:text-white transition-colors">
                      info@vertex360.co.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-xs font-light">
          <div>
            &copy; {new Date().getFullYear()} Vertex 360 Experiences. All rights reserved.
          </div>

          <div className="flex gap-6 mt-4 sm:mt-0 items-center">
            <a href="/#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="/#about" onClick={(e) => handleScrollTo(e, 'about')} className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <button
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-slate-350 transition-colors cursor-pointer font-medium"
            >
              Back to Top
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}
