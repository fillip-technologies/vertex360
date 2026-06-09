import React from 'react'
import { ArrowRight, Sparkles, Building2, Megaphone, Compass, Presentation, Palette } from 'lucide-react'

// Import images
import imgMpBirla from '../assets/images/project_mp_birla.png'
import imgGreenTourism from '../assets/images/project_green_tourism.png'
import imgAdventureTourism from '../assets/images/project_adventure_tourism.png'
import imgManthanBastar from '../assets/images/project_manthan_bastar.png'
import imgBrinton from '../assets/images/project_brinton.png'
import imgGantra from '../assets/images/project_gantra.png'

export default function WhatWeCreate() {
  const items = [
    {
      id: 1,
      title: 'Corporate Conferences',
      subtitle: 'Leadership Summits, Annual Meets, Townhalls, Sales Conferences',
      description: 'Leadership Summits, Annual Meets, Townhalls and Sales Conferences designed to inform, inspire and align stakeholders.',
      project: 'Brinton Conference',
      image: imgBrinton,
      icon: Presentation,
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 2,
      title: 'Experiential Marketing',
      subtitle: 'Brand Activations, Consumer Engagement, Roadshows',
      description: 'Brand Activations, Consumer Engagement Campaigns and Roadshows that create memorable audience interactions.',
      project: 'Adventure Tourism Summit',
      image: imgAdventureTourism,
      icon: Compass,
      color: 'from-rose-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Exhibitions & Trade Shows',
      subtitle: 'Exhibition Booth Design and Execution',
      description: 'Strategic exhibition environments, booth design and visitor experiences that drive visibility and engagement.',
      project: 'Gantra Medical Engagement',
      image: imgGantra,
      icon: Building2,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      id: 4,
      title: 'Product Launches',
      subtitle: 'Launch Events and Media Experiences',
      description: 'Launch Events and Media Experiences crafted to generate excitement, attention and impact.',
      project: 'MP Birla Cement',
      image: imgMpBirla,
      icon: Megaphone,
      color: 'from-amber-500 to-orange-500',
    },
    {
      id: 5,
      title: 'Awards & Recognition',
      subtitle: 'Award Ceremonies and Gala Nights',
      description: 'Premium award ceremonies, gala evenings and recognition platforms that celebrate achievement.',
      project: 'Manthan Bastar',
      image: imgManthanBastar,
      icon: Sparkles,
      color: 'from-violet-500 to-purple-500',
    },
    {
      id: 6,
      title: 'Custom Fabrication',
      subtitle: 'Photo Opportunities, Installations, Branded Environments',
      description: 'Bespoke installations, experience zones and branded environments built to bring ideas to life.',
      project: 'Green Tourism Summit',
      image: imgGreenTourism,
      icon: Palette,
      color: 'from-cyan-500 to-blue-500',
    },
  ]

  return (
    <section id="what-we-create" className="py-16 sm:py-20 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-6">
            {/* <span className="text-xs font-extrabold tracking-widest text-indigo-400 uppercase mb-3 block">
              Section 3 – What We Create
            </span> */}
            <h2 className="font-outfit text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
              WHAT WE CREATE
            </h2>
            <p className="font-outfit text-lg sm:text-xl text-slate-700 mt-4 font-bold leading-relaxed">
              Experiences that inspire, engage and leave a lasting impact.
            </p>
            <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-6" />
          </div>

          <div className="lg:col-span-6">
            <p className="font-inter text-slate-600 text-sm sm:text-base leading-relaxed font-light mt-6 lg:mt-0">
              At Vertex360, we combine strategy, creativity and flawless execution to transform ideas into meaningful brand experiences. From leadership summits and corporate conferences to immersive activations, exhibitions and custom-built environments, we create experiences that connect people, brands and communities.
            </p>
          </div>
        </div>

        {/* Divisions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="group relative h-[360px] sm:h-[400px] rounded-3xl overflow-hidden border border-slate-900 shadow-2xl hover:border-slate-800/80 transition-all duration-500 hover:shadow-indigo-500/5 cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent transition-opacity duration-300" />

                {/* Bottom Color Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10">
                  {/* Icon & Project Tag */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-[10px] font-extrabold tracking-wider text-[#d4af37] bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-850">
                      {item.project}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-outfit text-xl sm:text-2xl font-extrabold text-white mb-2 leading-tight group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Hover Hidden Info */}
                  <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[140px] group-hover:opacity-100 transition-all duration-500 ease-out">
                    <p className="font-inter text-slate-300 text-xs sm:text-sm leading-relaxed mb-3.5 font-light">
                      {item.description}
                    </p>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-widest border-t border-slate-800/80 pt-2.5">
                      {item.subtitle}
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
