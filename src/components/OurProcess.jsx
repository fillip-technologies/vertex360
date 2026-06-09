import { useState } from 'react'
import { Search, Palette, Hammer, Zap, LineChart, ChevronDown } from 'lucide-react'
import imgDiscover from '../assets/images/process_discover.png'
import imgDesign from '../assets/images/process_design.png'
import imgBuild from '../assets/images/process_build.png'
import imgDeliver from '../assets/images/process_deliver.png'
import imgMeasure from '../assets/images/process_measure.png'

export default function OurProcess() {
  const [hoveredIdx, setHoveredIdx] = useState(0)
  const [mobileExpandedIdx, setMobileExpandedIdx] = useState(0)

  const steps = [
    {
      id: 0,
      num: '01',
      title: 'Discover',
      desc: 'Understanding objectives and audience.',
      icon: Search,
      image: imgDiscover,
      overlayGradient: 'from-blue-950 via-blue-900/60 to-transparent',
      collapsedColor: 'text-blue-600',
      collapsedBg: 'hover:border-blue-300 hover:bg-blue-50/40',
      badgeColor: 'bg-blue-500/20 text-blue-100 border-blue-400/30'
    },
    {
      id: 1,
      num: '02',
      title: 'Design',
      desc: 'Creative concepts and visualisation.',
      icon: Palette,
      image: imgDesign,
      overlayGradient: 'from-violet-950 via-violet-900/60 to-transparent',
      collapsedColor: 'text-violet-600',
      collapsedBg: 'hover:border-violet-300 hover:bg-violet-50/40',
      badgeColor: 'bg-violet-500/20 text-violet-100 border-violet-400/30'
    },
    {
      id: 2,
      num: '03',
      title: 'Build',
      desc: 'Fabrication, production and logistics.',
      icon: Hammer,
      image: imgBuild,
      overlayGradient: 'from-orange-950 via-orange-900/60 to-transparent',
      collapsedColor: 'text-amber-600',
      collapsedBg: 'hover:border-amber-300 hover:bg-amber-50/40',
      badgeColor: 'bg-amber-500/20 text-amber-100 border-amber-400/30'
    },
    {
      id: 3,
      num: '04',
      title: 'Deliver',
      desc: 'On-ground execution and show management.',
      icon: Zap,
      image: imgDeliver,
      overlayGradient: 'from-emerald-950 via-emerald-900/60 to-transparent',
      collapsedColor: 'text-emerald-600',
      collapsedBg: 'hover:border-emerald-300 hover:bg-emerald-50/40',
      badgeColor: 'bg-emerald-500/20 text-emerald-100 border-emerald-400/30'
    },
    {
      id: 4,
      num: '05',
      title: 'Measure',
      desc: 'Reporting and performance analysis.',
      icon: LineChart,
      image: imgMeasure,
      overlayGradient: 'from-rose-950 via-rose-900/60 to-transparent',
      collapsedColor: 'text-rose-600',
      collapsedBg: 'hover:border-rose-300 hover:bg-rose-50/40',
      badgeColor: 'bg-rose-500/20 text-rose-100 border-rose-400/30'
    }
  ]

  return (
    <section id="our-process" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Background glow decorator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold tracking-widest text-indigo-650 uppercase mb-3 block">
            Our Method
          </span>
          <h2 className="font-outfit text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Our Process
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Process Flow Interactive Container */}
        
        {/* Desktop Layout: Horizontal Accordion Flex Row */}
        <div className="hidden md:flex gap-4 h-[440px] w-full items-stretch relative">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const isExpanded = hoveredIdx === idx

            return (
              <div
                key={step.id}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`rounded-3xl border transition-all duration-500 ease-out flex flex-col p-8 select-none relative overflow-hidden cursor-pointer group ${
                  isExpanded
                    ? `w-[40%] border-transparent text-white shadow-2xl shadow-slate-950/20 scale-[1.01] z-20`
                    : `w-[15%] bg-white border-slate-200 text-slate-500 hover:text-slate-900 shadow-sm ${step.collapsedBg} z-10`
                }`}
              >
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl z-0">
                  <img
                    src={step.image}
                    alt={step.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                      isExpanded
                        ? 'scale-105 opacity-100 filter brightness-90 contrast-105'
                        : 'scale-100 opacity-15 filter grayscale contrast-125'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      isExpanded
                        ? `bg-gradient-to-t ${step.overlayGradient} opacity-95`
                        : 'bg-white/95 group-hover:bg-white/90'
                    }`}
                  />
                </div>

                {/* Background glow circle inside expanded card */}
                {isExpanded && (
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none z-10" />
                )}

                {isExpanded ? (
                  // Expanded Content
                  <div className="h-full flex flex-col justify-between relative z-10 animate-fade-in">
                    {/* Header */}
                    <div className="flex items-center justify-between w-full">
                      <div className={`px-3 py-1.5 rounded-lg border text-[10px] font-black uppercase tracking-wider ${step.badgeColor}`}>
                        Phase {step.num}
                      </div>
                      <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    {/* Details */}
                    <div>
                      <h3 className="font-outfit text-3xl font-black mb-3">
                        {step.title}
                      </h3>
                      <p className="font-inter text-slate-100 text-sm leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ) : (
                  // Collapsed Content
                  <div className="h-full flex flex-col justify-between items-center py-2 relative z-10">
                    <span className={`font-outfit text-2xl font-black ${step.collapsedColor}`}>
                      {step.num}
                    </span>
                    
                    {/* Vertical Text Title */}
                    <span className="font-outfit font-extrabold text-sm tracking-[0.2em] uppercase [writing-mode:vertical-lr] rotate-180 select-none">
                      {step.title}
                    </span>

                    <div className={`p-2.5 rounded-xl border border-slate-100 bg-slate-50/50 text-slate-400 group-hover:text-slate-600 transition-colors`}>
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Mobile Layout: Vertical Accordion List */}
        <div className="flex flex-col gap-4 md:hidden w-full">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const isExpanded = mobileExpandedIdx === idx

            return (
              <div
                key={step.id}
                onClick={() => setMobileExpandedIdx(idx)}
                className={`rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden cursor-pointer select-none relative group ${
                  isExpanded
                    ? `border-transparent text-white shadow-lg p-6`
                    : 'bg-white border-slate-200 text-slate-700 p-5 hover:bg-slate-50'
                }`}
              >
                {/* Background Image & Overlay for Mobile */}
                <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl z-0">
                  <img
                    src={step.image}
                    alt={step.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out ${
                      isExpanded
                        ? 'scale-105 opacity-100 filter brightness-90 contrast-105'
                        : 'scale-100 opacity-15 filter grayscale contrast-125'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${
                      isExpanded
                        ? `bg-gradient-to-t ${step.overlayGradient} opacity-95`
                        : 'bg-white/95 group-hover:bg-white/90'
                    }`}
                  />
                </div>

                {/* Accordion Header */}
                <div className="flex items-center justify-between w-full relative z-10">
                  <div className="flex items-center gap-4">
                    <span className={`font-outfit text-lg font-black transition-colors duration-300 ${isExpanded ? 'text-white/60' : 'text-slate-400'}`}>
                      {step.num}
                    </span>
                    <div className={`p-2 rounded-xl transition-colors duration-300 ${isExpanded ? 'bg-white/10 text-white' : `bg-slate-50 border border-slate-100 ${step.collapsedColor}`}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-outfit font-extrabold text-md tracking-wide">
                      {step.title}
                    </span>
                  </div>
                  <ChevronDown className={`h-4.5 w-4.5 opacity-55 transition-all duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-white/10 animate-fade-in relative z-10">
                    <p className="font-inter text-slate-100 text-xs sm:text-sm leading-relaxed font-light animate-fade-in">
                      {step.desc}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

