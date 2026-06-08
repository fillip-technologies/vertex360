import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import imgMic from '../assets/images/carousel_mic.png'
import imgConf from '../assets/images/carousel_conf.png'
import imgCal from '../assets/images/carousel_cal.png'
import imgMeet from '../assets/images/carousel_meet.png'
import imgTab from '../assets/images/carousel_tab.png'
import eventImg1 from '../assets/images/events_1.jpeg'
import eventImg2 from '../assets/images/events_2.jpeg'

export default function AudienceCarousel() {
  const [activeIndex, setActiveIndex] = useState(2) // Default center is laptop calendar (idx 2)

  const slides = [
    {
      id: 1,
      image: imgMic,
      tag: 'Keynote & Speeches',
      alt: 'Microphone on stage',
    },
    {
      id: 2,
      image: imgConf,
      tag: 'Conferences & Summits',
      alt: 'Audience in conference hall',
    },
    {
      id: 3,
      image: imgCal,
      tag: 'Event Management Companies',
      alt: 'Laptop calendar view',
    },
    {
      id: 4,
      image: imgMeet,
      tag: 'Corporate Workshops',
      alt: 'People meeting in office',
    },
    {
      id: 5,
      image: imgTab,
      tag: 'Strategic Consulting',
      alt: 'Partners looking at tablet',
    },
    {
      id: 6,
      image: eventImg1,
      tag: 'Exhibitions & Retail',
      alt: 'Exhibition Stall design',
    },
    {
      id: 7,
      image: eventImg2,
      tag: 'Brand Activations',
      alt: 'Brand Activation setup',
    },
  ]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const getSlideStyle = (index) => {
    let offset = index - activeIndex

    // Handle wrapping for circular array of length 7
    if (offset < -3) offset += 7
    if (offset > 3) offset -= 7

    // Active Center Slide (Depth 40)
    if (offset === 0) {
      return {
        transform: 'translateX(0) scale(1) translateZ(100px) rotateY(0deg)',
        opacity: 1,
        zIndex: 40,
      }
    }
    // Left Slide (Depth 30)
    if (offset === -1) {
      return {
        transform: 'translateX(-55%) scale(0.85) translateZ(0) rotateY(15deg)',
        opacity: 0.85,
        zIndex: 30,
      }
    }
    // Far Left Slide (Depth 20)
    if (offset === -2) {
      return {
        transform: 'translateX(-100%) scale(0.7) translateZ(-50px) rotateY(25deg)',
        opacity: 0.6,
        zIndex: 20,
      }
    }
    // Far Far Left Slide (Depth 10)
    if (offset === -3) {
      return {
        transform: 'translateX(-138%) scale(0.55) translateZ(-100px) rotateY(35deg)',
        opacity: 0.35,
        zIndex: 10,
      }
    }
    // Right Slide (Depth 30)
    if (offset === 1) {
      return {
        transform: 'translateX(55%) scale(0.85) translateZ(0) rotateY(-15deg)',
        opacity: 0.85,
        zIndex: 30,
      }
    }
    // Far Right Slide (Depth 20)
    if (offset === 2) {
      return {
        transform: 'translateX(100%) scale(0.7) translateZ(-50px) rotateY(-25deg)',
        opacity: 0.6,
        zIndex: 20,
      }
    }
    // Far Far Right Slide (Depth 10)
    if (offset === 3) {
      return {
        transform: 'translateX(138%) scale(0.55) translateZ(-100px) rotateY(-35deg)',
        opacity: 0.35,
        zIndex: 10,
      }
    }

    return {
      transform: 'translateX(0) scale(0.4) translateZ(-150px)',
      opacity: 0,
      zIndex: 0,
    }
  }

  return (
    <section className="pt-0 pb-16 sm:pt-0 sm:pb-24 bg-slate-950 relative overflow-hidden border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold tracking-wider text-indigo-500 uppercase mb-3">
            Our Gallery
          </h2>
          <p className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Event Showcase
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* 3D Carousel Stage */}
        <div className="relative w-full max-w-5xl h-[340px] sm:h-[400px] md:h-[480px] flex items-center justify-center carousel-3d-container mb-12">
          {slides.map((slide, idx) => {
            const isActive = idx === activeIndex
            return (
              <div
                key={slide.id}
                style={getSlideStyle(idx)}
                onClick={() => setActiveIndex(idx)}
                className="absolute w-[240px] sm:w-[300px] md:w-[380px] h-[260px] sm:h-[320px] md:h-[400px] rounded-3xl overflow-visible shadow-xl transition-all duration-500 ease-out cursor-pointer select-none carousel-3d-slide"
              >
                {/* Image Wrap */}
                <div className="w-full h-full rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 relative">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  {/* Overlay shadow for side items */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-slate-950/20 transition-opacity duration-500" />
                  )}
                </div>

                {/* Mustard-gold dynamic label for the active slide */}
                {isActive && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#d4af37] text-slate-950 font-bold px-6 py-3 rounded-2xl shadow-lg border border-[#c5a028] z-40 transition-all duration-300 text-center w-[85%] max-w-[260px] text-xs sm:text-sm tracking-wide animate-fade-in">
                    {slide.tag}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 items-center justify-center mt-6">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-slate-800 bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors shadow-sm hover:shadow active:scale-95 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-slate-800 bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors shadow-sm hover:shadow active:scale-95 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

      </div>
    </section>
  )
}
