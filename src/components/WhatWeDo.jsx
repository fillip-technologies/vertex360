import { Sparkles, Megaphone, Store, Globe, Film, Award, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function WhatWeDo() {
  const navigate = useNavigate()

  const services = [
    {
      id: 1,
      title: 'Experiential & Events',
      description:
        'Bring ideas to life with impactful conferences, summits, and celebrations. We design seamless end-to-end event experiences that engage audiences, strengthen brands, and deliver measurable business results.',
      icon: Sparkles,
      gradient: 'from-pink-500/5 via-violet-500/2 to-transparent',
      borderColor: 'group-hover:border-pink-500/20',
      iconColor: 'text-pink-400 bg-pink-950/40 border-pink-900/30',
      to: '/services/experiential',
    },
    {
      id: 2,
      title: 'Brand Activations & Roadshows',
      description:
        'Take your brand directly to your audience. Our high-energy activations and multi-city roadshows build awareness, generate buzz, and create lasting impressions that drive loyalty and sales.',
      icon: Megaphone,
      gradient: 'from-amber-500/5 via-orange-500/2 to-transparent',
      borderColor: 'group-hover:border-amber-500/20',
      iconColor: 'text-amber-400 bg-amber-950/40 border-amber-900/30',
      to: '/services/activations',
    },
    {
      id: 3,
      title: 'Exhibitions & Retail Experiences',
      description:
        'Stand out with immersive exhibition stalls, pop-ups, and retail takeovers. From creative design to flawless execution, we ensure your brand captures attention and converts visitors into customers.',
      icon: Store,
      gradient: 'from-emerald-500/5 via-teal-500/2 to-transparent',
      borderColor: 'group-hover:border-emerald-500/20',
      iconColor: 'text-emerald-400 bg-emerald-950/40 border-emerald-900/30',
      to: '/services/exhibitions',
    },
    {
      id: 4,
      title: 'Digital/Hybrid Experiences',
      description:
        'Bridge the gap between physical and digital. We produce hybrid events, webinars, and virtual showcases that maximize reach, boost interactivity, and keep your audiences engaged anywhere in the world.',
      icon: Globe,
      gradient: 'from-blue-500/5 via-indigo-500/2 to-transparent',
      borderColor: 'group-hover:border-blue-500/20',
      iconColor: 'text-blue-400 bg-blue-950/40 border-blue-900/30',
      to: '/services/digital',
    },
    {
      id: 5,
      title: 'Content & Films',
      description:
        'Every great experience deserves a great story. From event films and brand videos to social media content, we craft compelling visuals that amplify your reach and extend impact beyond the event.',
      icon: Film,
      gradient: 'from-purple-500/5 via-fuchsia-500/2 to-transparent',
      borderColor: 'group-hover:border-purple-500/20',
      iconColor: 'text-purple-400 bg-purple-950/40 border-purple-900/30',
      to: '/services/content',
    },
    {
      id: 6,
      title: 'MICE & IPs',
      description:
        'Transform meetings, incentives, conferences, and exhibitions into unforgettable journeys. We also build proprietary IPs that create annual communities and unlock new revenue streams for your brand.',
      icon: Award,
      gradient: 'from-indigo-500/5 via-cyan-500/2 to-transparent',
      borderColor: 'group-hover:border-indigo-500/20',
      iconColor: 'text-indigo-400 bg-indigo-950/40 border-indigo-900/30',
      to: '/services/mice',
    },
  ]

  const handleServiceClick = (to) => {
    navigate(to)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="what-wedo" className="pt-24 pb-8 sm:pt-32 sm:pb-12 bg-slate-950 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-base font-semibold tracking-wider text-indigo-500 uppercase mb-3">
            Expertise & Capabilities
          </h2>
          <p className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            What We Do
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mb-6" />
          <h3 className="font-outfit text-lg sm:text-xl font-bold text-slate-200 mb-4 max-w-2xl mx-auto">
            We are Good at Marketing & <br className="sm:hidden" /> Better at Integrated Marketing
          </h3>
          <p className="font-inter text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            A 360° experiential marketing and event management agency, delivering integrated brand experiences since 2009. We take your vision and build a custom ecosystem designed to achieve scale, engagement, and conversion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.to)}
                className={`group relative bg-slate-900/40 border border-slate-800 hover:border-indigo-500/35 rounded-3xl p-8 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] overflow-hidden cursor-pointer`}
              >
                {/* Background glow gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div
                      className={`inline-flex items-center justify-center p-4 rounded-2xl border ${service.iconColor} group-hover:scale-110 transition-transform duration-300 shadow-md mb-6`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <h4 className="font-outfit text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                      {service.title}
                    </h4>

                    <p className="font-inter text-slate-450 text-xs sm:text-sm leading-relaxed transition-colors font-light mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Read More link indicator */}
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all mt-auto duration-300">
                    Explore Details
                    <ArrowRight className="h-3.5 w-3.5" />
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
