import { Compass, Calendar, Globe, Users, Award, MapPin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import heroBg from '../assets/images/hero-bg.png'

export default function Hero() {
  const navigate = useNavigate()

  const handleScrollToServices = (e) => {
    e.preventDefault()
    navigate('/services')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScrollToPortfolio = (e) => {
    e.preventDefault()
    const portfolioSec = document.getElementById('what-wedo')
    if (portfolioSec) {
      const offset = 95
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = portfolioSec.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-[780px] lg:h-screen w-full flex flex-col justify-between bg-slate-950 pt-36 sm:pt-40 lg:pt-28 pb-8 bg-cover bg-[position:70%_center] lg:bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(2, 6, 23, 0.75) 15%, rgba(2, 6, 23, 0.35) 65%, rgba(2, 6, 23, 0.5) 100%), url(${heroBg})`,
      }}
    >
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-gold/2 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="flex-grow flex items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8 lg:pb-48">
        <div className="w-full flex flex-col items-start text-left mt-8 sm:mt-12">

          {/* Logo Branding Stack */}
          <div className="flex flex-col items-center text-center mb-6 animate-fade-in-down max-w-[190px] font-outfit">
            {/* <img className="h-20 w-auto object-contain mb-2.5 hover:scale-105 transition-transform duration-300 brightness-125 contrast-125 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" src={logoImg} alt="Vertex Emblem" /> */}
            <span className="text-base font-bold tracking-[0.2em] text-white leading-none">VERTEX360°</span>
            <span className="text-[8px] font-semibold tracking-[0.35em] text-slate-300 mt-1 uppercase">EXPERIENCES</span>
            <div className="w-full h-[1px] bg-brand-gold/30 my-2" />
            <span className="text-[7px] font-bold tracking-[0.3em] text-brand-gold uppercase">A unit of SAV production private limited</span>
          </div>

          {/* Main Tagline */}
          <h1 className="font-outfit text-3xl sm:text-6xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4 max-w-4xl">
            Creating Experiences. <br />
            <span className="text-brand-gold bg-clip-text">Delivering Excellence.</span>
          </h1>

          {/* Service Categories Bullet Row */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-semibold tracking-wide text-slate-200/90 mb-6 font-outfit">
            <span>Conferences</span>
            <span className="text-brand-gold font-bold">•</span>
            <span>Exhibitions</span>
            <span className="text-brand-gold font-bold">•</span>
            <span>MICE</span>
            <span className="text-brand-gold font-bold">•</span>
            <span>Brand Activations</span>
            <span className="text-brand-gold font-bold">•</span>
            <span>Government Projects</span>
          </div>

          {/* Call to Actions Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            <a
              href="/services"
              onClick={handleScrollToServices}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-brand-gold hover:bg-brand-gold/90 hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg shadow-brand-gold/15 group cursor-pointer"
            >
              <Compass className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              Explore Services
            </a>
            <a
              href="#portfolio"
              onClick={handleScrollToPortfolio}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-bold text-brand-gold border border-brand-gold bg-transparent hover:bg-brand-gold/5 hover:scale-[1.02] active:scale-95 transition-all duration-300 group cursor-pointer"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Our Work
            </a>
          </div>

        </div>
      </div>

      {/* Stats Bar Container (Sits at the bottom of section) */}
      <div className="relative mt-12 mb-6 mx-auto w-[92%] max-w-7xl z-20 lg:absolute lg:bottom-12 lg:left-1/2 lg:-translate-x-1/2 lg:mt-0 lg:mb-0">
        <div className="w-full bg-slate-950/70 border border-slate-900/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent pointer-events-none" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">

            {/* Stat 1 */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-gold/10 border border-brand-gold/15 rounded-xl text-brand-gold">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-outfit text-lg sm:text-2xl font-bold text-white leading-none">500+</h3>
                <p className="text-slate-400 text-[10px] sm:text-xs font-light mt-1">Events Delivered</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-gold/10 border border-brand-gold/15 rounded-xl text-brand-gold">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-outfit text-lg sm:text-2xl font-bold text-white leading-none">20+</h3>
                <p className="text-slate-400 text-[10px] sm:text-xs font-light mt-1">Cities Covered</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-gold/10 border border-brand-gold/15 rounded-xl text-brand-gold">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-outfit text-lg sm:text-2xl font-bold text-white leading-none">100K+</h3>
                <p className="text-slate-400 text-[10px] sm:text-xs font-light mt-1">Attendees Managed</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-gold/10 border border-brand-gold/15 rounded-xl text-brand-gold">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-outfit text-lg sm:text-2xl font-bold text-white leading-none">10+</h3>
                <p className="text-slate-400 text-[10px] sm:text-xs font-light mt-1">Years of Experience</p>
              </div>
            </div>

            {/* Stat 5 */}
            <div className="flex items-center gap-4 col-span-2 sm:col-span-1">
              <div className="p-3 bg-brand-gold/10 border border-brand-gold/15 rounded-xl text-brand-gold">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-outfit text-lg sm:text-2xl font-bold text-white leading-none">PAN India</h3>
                <p className="text-slate-400 text-[10px] sm:text-xs font-light mt-1">Execution Network</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
