import React from 'react'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Vikram Mehta',
      role: 'VP - Brand Strategy & Activations',
      company: 'Godrej Group',
      text: 'Vertex 360 Experiences executed our pan-India activation program flawlessly. Their creative concepts and checklist-based execution across 15 cities helped us connect with millions of customers effectively and reliably.',
      rating: 5,
      initials: 'VM',
      color: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Aisha Sharma',
      role: 'Head of Marketing Communications',
      company: 'SBI Life',
      text: 'From virtual product launches to high-profile corporate summits, Vertex has been our most reliable experience architect. Their absolute attention to detail, secure rigged stages, and hybrid setup is truly exceptional.',
      rating: 5,
      initials: 'AS',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      name: 'Rajesh Iyer',
      role: 'Director - Special Events & IPs',
      company: 'Times of India Group',
      text: 'The hospitality, ticketing, and ground production logistics for our national awards summit were executed to perfection. Vertex takes absolute ownership of safety and execution, making them our go-to partner.',
      rating: 5,
      initials: 'RI',
      color: 'from-violet-500 to-purple-500',
    },
    {
      name: 'Neha Gupta',
      role: 'Senior Manager - B2B Marketing',
      company: 'Lenovo India',
      text: 'We worked with Vertex on our annual partner conferences. The attendee engagement analytics, interactive virtual lobby, and flawless live streaming surpassed all expectations. Flawless execution throughout.',
      rating: 5,
      initials: 'NG',
      color: 'from-amber-500 to-orange-500',
    },
    {
      name: 'Amit Verma',
      role: 'Regional Lead - Corporate Events',
      company: 'Canon India',
      text: 'The B2B exhibition pavilion designed and fabricated by Vertex was a major crowd puller. The custom stall layout, LED video wall setup, and VIP lounge were top-notch. Their team is extremely professional and reliable.',
      rating: 5,
      initials: 'AV',
      color: 'from-emerald-500 to-teal-500',
    },
  ]

  return (
    <section className="py-20 sm:py-28 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-violet-500/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-extrabold tracking-widest text-indigo-400 uppercase mb-3.5 block">
            Testimonials
          </span>
          <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="font-inter text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Read stories of how we partnered with industry leaders to bring creative event storytelling and operational precision to life.
          </p>
          <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`group relative bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/30 hover:bg-slate-900/60 rounded-3xl p-8 sm:p-10 transition-all duration-300 shadow-sm flex flex-col justify-between overflow-hidden hover:translate-y-[-4px] hover:shadow-lg ${
                idx === 3 ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Background Quote Icon for Aesthetics */}
              <div className="absolute top-6 right-6 text-slate-800/20 group-hover:text-indigo-500/10 transition-colors pointer-events-none">
                <Quote className="h-12 w-12 transform rotate-180" />
              </div>

              <div className="relative z-10 flex-grow">
                {/* Stars Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="font-inter text-slate-300 text-sm sm:text-base font-light italic leading-relaxed mb-8">
                  "{t.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-slate-800/60 mt-auto">
                {/* Initials Circle */}
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-sm font-bold text-white shadow-inner flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-outfit text-sm sm:text-base font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight">
                    {t.name}
                  </h4>
                  <p className="font-inter text-[11px] sm:text-xs text-slate-400 mt-1 font-medium">
                    {t.role}, <span className="text-slate-300 font-semibold">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
