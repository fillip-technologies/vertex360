import { Sparkles, Megaphone, Store, Globe, Film, Award, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import imgExperiential from '../assets/images/services_experiential.png'
import imgActivations from '../assets/images/services_brand_activations.png'
import imgExhibitions from '../assets/images/services_exhibition_stall.png'
import imgDigital from '../assets/images/services_digital_hybrid.png'
import imgContent from '../assets/images/services_short_films.png'
import imgMice from '../assets/images/services_mice_travel.png'

export default function WhatWeDo() {
  const navigate = useNavigate()

  const services = [
    {
      id: 1,
      title: 'Experiential & Events',
      icon: Sparkles,
      image: imgExperiential,
      glowGrad: 'from-pink-600/40 via-violet-600/20 to-transparent',
      to: '/services/experiential',
      colSpan: 'md:col-span-2',
    },
    {
      id: 2,
      title: 'Brand Activations & Roadshows',
      icon: Megaphone,
      image: imgActivations,
      glowGrad: 'from-amber-600/40 via-orange-600/20 to-transparent',
      to: '/services/activations',
      colSpan: 'md:col-span-1',
    },
    {
      id: 3,
      title: 'Exhibitions & Retail Experiences',
      icon: Store,
      image: imgExhibitions,
      glowGrad: 'from-emerald-600/40 via-teal-600/20 to-transparent',
      to: '/services/exhibitions',
      colSpan: 'md:col-span-1',
    },
    {
      id: 4,
      title: 'Digital & Hybrid Events',
      icon: Globe,
      image: imgDigital,
      glowGrad: 'from-blue-600/40 via-indigo-600/20 to-transparent',
      to: '/services/digital',
      colSpan: 'md:col-span-2',
    },
    {
      id: 5,
      title: 'Content & Films Production',
      icon: Film,
      image: imgContent,
      glowGrad: 'from-purple-600/40 via-fuchsia-600/20 to-transparent',
      to: '/services/content',
      colSpan: 'md:col-span-2',
    },
    {
      id: 6,
      title: 'MICE & Intellectual Properties',
      icon: Award,
      image: imgMice,
      glowGrad: 'from-indigo-600/40 via-cyan-600/20 to-transparent',
      to: '/services/mice',
      colSpan: 'md:col-span-1',
    },
  ]

  const handleServiceClick = (to) => {
    navigate(to)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="what-wedo" className="pt-16 pb-16 sm:pt-20 sm:pb-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-indigo-600 uppercase mb-3 block">
            Expertise & Capabilities
          </span>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            What We Do
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Premium Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.to)}
                className={`group relative h-[260px] sm:h-[320px] rounded-[28px] overflow-hidden border border-slate-200/80 shadow-lg hover:border-slate-350 transition-all duration-500 hover:shadow-2xl cursor-pointer ${service.colSpan}`}
              >
                {/* Background Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.70] saturate-[0.85] group-hover:brightness-[0.75] group-hover:scale-105 transition-all duration-700 ease-out pointer-events-none"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent transition-opacity duration-300" />
                
                {/* Active Hover Glow Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${service.glowGrad} opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay`} />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10 select-none">
                  
                  {/* Top Row: Index and Icon */}
                  <div className="flex items-start justify-between w-full">
                    <span className="font-outfit text-sm font-extrabold text-white/50 tracking-wider">
                      0{service.id}
                    </span>
                    
                    <div className="p-2.5 rounded-2xl bg-white/10 border border-white/15 text-white/90 group-hover:text-white group-hover:bg-white/20 group-hover:border-white/25 transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Bottom Row: Topic Title and Arrow */}
                  <div className="flex items-end justify-between w-full gap-4">
                    <h3 className="font-outfit text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight group-hover:text-white/95 transition-colors">
                      {service.title}
                    </h3>
                    
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white/90 group-hover:border-white/40 group-hover:bg-white/20 group-hover:translate-x-1.5 transition-all duration-300">
                      <ArrowRight className="h-4.5 w-4.5" />
                    </div>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}


