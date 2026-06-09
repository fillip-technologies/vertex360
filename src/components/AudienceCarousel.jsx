import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react'
import imgMic from '../assets/images/carousel_mic.png'
import imgConf from '../assets/images/carousel_conf.png'
import imgCal from '../assets/images/carousel_cal.png'
import imgMeet from '../assets/images/carousel_meet.png'
import imgTab from '../assets/images/carousel_tab.png'
import eventImg1 from '../assets/images/events_1.jpeg'
import eventImg2 from '../assets/images/events_2.jpeg'

export default function AudienceCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const slides = [
    {
      id: 1,
      image: imgMic,
      title: 'Keynote & Speeches',
      desc: 'High-impact keynote setups featuring state-of-the-art audio-visual production, tailored scenic stage designs, and seamless lighting coordination.',
      location: 'Dubai World Trade Centre',
      category: 'Conferences',
      alt: 'Microphone on stage',
    },
    {
      id: 2,
      image: imgConf,
      title: 'Leadership Summits',
      desc: 'Prestige corporate summits designed for executive alignment, featuring custom stage sets, interactive panels, and delegate experience management.',
      location: 'Grand Hyatt, New Delhi',
      category: 'Summits',
      alt: 'Audience in conference hall',
    },
    {
      id: 3,
      image: imgCal,
      title: 'Strategic Planning',
      desc: 'Behind-the-scenes event mapping, digital planning, timelines, and logistical frameworks that ensure zero-error execution.',
      location: 'Vertex Headquarters',
      category: 'Planning',
      alt: 'Laptop calendar view',
    },
    {
      id: 4,
      image: imgMeet,
      title: 'Corporate Workshops',
      desc: 'Interactive learning spaces, corporate training retreats, and team-building sessions optimized for high engagement.',
      location: 'The Leela, Bengaluru',
      category: 'Workshops',
      alt: 'People meeting in office',
    },
    {
      id: 5,
      image: imgTab,
      title: 'Digital & Hybrid Events',
      desc: 'Cutting-edge virtual broadcast studios, green screen setups, and hybrid interaction hubs for global audiences.',
      location: 'Tech Hub, Hyderabad',
      category: 'Digital',
      alt: 'Partners looking at tablet',
    },
    {
      id: 6,
      image: eventImg1,
      title: 'Exhibitions & Trade Shows',
      desc: 'Bespoke custom-fabricated exhibition stands, premium brand booths, and visitor experience environments.',
      location: 'Pragati Maidan, New Delhi',
      category: 'Exhibitions',
      alt: 'Exhibition Stall design',
    },
    {
      id: 7,
      image: eventImg2,
      title: 'Brand Activations',
      desc: 'Immersive consumer touchpoints, experiential roadshows, and launch setups that drive emotional connection.',
      location: 'Mall of India, Noida',
      category: 'Activations',
      alt: 'Brand Activation setup',
    },
  ]

  const handlePrev = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 400)
    return () => clearTimeout(timer)
  }, [activeIndex])

  const activeSlide = slides[activeIndex]

  return (
    <section id="our-gallery" className="py-16 sm:py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold tracking-widest text-indigo-600 uppercase mb-3 block">
            Our Gallery
          </span>
          <h2 className="font-outfit text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Event Showcase
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Gallery Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Side: Large Image Viewer (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center relative group">
            <div className="w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden border border-slate-100 bg-slate-50 relative shadow-xl shadow-slate-200/50">
              
              {/* Slide Image */}
              <img
                src={activeSlide.image}
                alt={activeSlide.alt}
                className={`w-full h-full object-cover transition-all duration-300 ease-in-out ${
                  isTransitioning ? 'scale-[1.01] opacity-90 blur-[2px]' : 'scale-100 opacity-100 blur-none'
                }`}
              />

              {/* Floating Category Badge */}
              <div className="absolute top-6 left-6 z-20">
                <span className="bg-indigo-600 text-white font-extrabold uppercase text-[10px] tracking-widest px-3.5 py-1.5 rounded-full shadow-md">
                  {activeSlide.category}
                </span>
              </div>

              {/* Navigation Arrows Inside the Image Viewer */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-indigo-600 flex items-center justify-center shadow-lg pointer-events-auto transition-all duration-300 hover:scale-105 active:scale-95 border border-slate-100"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-white/90 hover:bg-white text-slate-800 hover:text-indigo-600 flex items-center justify-center shadow-lg pointer-events-auto transition-all duration-300 hover:scale-105 active:scale-95 border border-slate-100"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Dim Gradient Bottom overlay */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Side: Showcase Info Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-between shadow-sm">
              <div>
                {/* Index / Counter */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/60">
                  <span className="font-outfit text-sm font-extrabold text-indigo-600 tracking-wider">
                    CASE STUDY
                  </span>
                  <span className="font-outfit text-sm font-bold text-slate-400">
                    {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                  </span>
                </div>

                {/* Details */}
                <h3 className={`font-outfit text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4 transition-all duration-300 ${
                  isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}>
                  {activeSlide.title}
                </h3>
                
                <p className={`font-inter text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-light transition-all duration-300 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}>
                  {activeSlide.desc}
                </p>
              </div>

              {/* Meta information grid */}
              <div className={`grid grid-cols-2 gap-4 pt-6 border-t border-slate-200/60 transition-all duration-300 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}>
                <div className="flex items-start gap-2.5">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-wider text-slate-400 block mb-0.5">
                      Location / Venue
                    </span>
                    <span className="text-xs font-semibold text-slate-800">
                      {activeSlide.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-2 bg-violet-50 text-violet-600 rounded-lg">
                    <Tag className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black tracking-wider text-slate-400 block mb-0.5">
                      Event Type
                    </span>
                    <span className="text-xs font-semibold text-slate-800">
                      {activeSlide.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Thumbnail Preview Strip */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Quick Navigation
          </span>
          <div className="flex items-center gap-3 overflow-x-auto max-w-full py-2 px-4 no-scrollbar">
            {slides.map((slide, idx) => {
              const isActive = idx === activeIndex
              return (
                <button
                  key={slide.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 flex-shrink-0 cursor-pointer relative ${
                    isActive
                      ? 'border-indigo-600 scale-105 shadow-md shadow-indigo-100'
                      : 'border-slate-200 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:border-slate-400'
                  }`}
                  aria-label={`Showcase slide ${idx + 1}`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-indigo-600/10 pointer-events-none" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

