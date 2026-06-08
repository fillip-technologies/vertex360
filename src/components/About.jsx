import { CheckCircle2, Award, Shield, Users, Clock } from 'lucide-react'
import eventImg1 from '../assets/images/events_2.jpeg'
import eventImg2 from '../assets/images/events_1.jpeg'

export default function About() {
  const pillars = [
    {
      title: 'Strategy-led concepts, not generic execution',
      desc: 'We align event themes and formats with your high-level business goals.',
    },
    {
      title: 'Pan-India vendor network with quality control',
      desc: 'Consistency, reliability, and speed across tier-1, tier-2, and tier-3 cities.',
    },
    {
      title: 'Technology-enabled engagement',
      desc: 'Webinars, hybrid setups, QR lead capture, and interactive audience analytics.',
    },
    {
      title: 'Content production that extends reach',
      desc: 'High-quality films, event videos, and digital campaign content that outlasts the venue.',
    },
  ]

  const stats = [
    { number: '16+', label: 'Years of Experience', icon: Clock },
    { number: '500+', label: 'Successful Campaigns', icon: Award },
    { number: '50+', label: 'Cities Covered', icon: Users },
    { number: '100%', label: 'Safety Record', icon: Shield },
  ]

  return (
    <section id="about" className="py-24 sm:py-32 bg-slate-950 relative overflow-hidden border-y border-slate-900">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-violet-500/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Visual Showcase: Overlapping Images (5 Columns) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Background shape */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-violet-500/5 to-indigo-500/5 rounded-[2.5rem] blur-xl" />

            <div className="relative grid grid-cols-12 gap-4 w-full">
              {/* Main Image */}
              <div className="col-span-8 relative">
                <div className="overflow-hidden rounded-3xl border border-slate-800 shadow-xl transition-all duration-300 hover:shadow-2xl">
                  <img
                    className="w-full h-80 sm:h-[420px] object-cover object-center transition-transform duration-700 hover:scale-103"
                    src={eventImg1}
                    alt="Vertex 360 Event Production"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                </div>

                {/* Frosted Branded Experience Badge */}
                <div className="absolute -bottom-3 -left-4 bg-slate-900 border border-slate-800 shadow-xl hover:shadow-2xl flex items-center gap-3.5 px-6 py-4 rounded-2xl z-25 transition-transform duration-300 hover:scale-102">
                  <div className="w-12 h-12 rounded-xl bg-indigo-950/40 border border-indigo-900/30 flex items-center justify-center text-3xl font-black text-indigo-400 font-outfit">
                    16
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-200 font-black leading-tight uppercase tracking-wider">
                    Years of<br /><span className="text-indigo-400">Excellence</span>
                  </div>
                </div>
              </div>

              {/* Overlapping Offset Image */}
              <div className="col-span-4 flex items-end relative">
                <div className="overflow-hidden rounded-2xl border border-slate-800 shadow-xl transition-all duration-300 hover:shadow-2xl w-full">
                  <img
                    className="w-full h-48 sm:h-64 object-cover object-center transition-transform duration-700 hover:scale-103"
                    src={eventImg2}
                    alt="Vertex 360 Control Deck"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* Copy Writing details (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-extrabold tracking-widest text-indigo-400 uppercase mb-2.5 block">
              Who We Are
            </span>
            <h2 className="font-outfit text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              About Vertex 360 Experiences
            </h2>

            <h3 className="font-outfit text-lg sm:text-xl font-bold text-slate-200 mb-4 leading-snug">
              We are experience architects, built for execution at scale.
            </h3>

            <p className="font-inter text-slate-400 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Vertex 360 Experiences is a full-service experiential and production company delivering end-to-end brand experiences for enterprises, high-growth companies, and institutions. We operate at the intersection of creative storytelling and operational precision designing experiences that look world-class, run flawlessly, and deliver outcomes you can measure.
            </p>

            {/* Strategic Pillars styled as sleek modern cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 rounded-2xl border border-slate-850 bg-slate-900/40 hover:border-indigo-500/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-950/40 border border-indigo-900/30 text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-250 shadow-inner">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-20 bg-slate-900/40 border border-slate-800 rounded-3xl p-8 shadow-lg">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="flex flex-col items-center justify-center text-center p-4 group">
                <div className="p-3 bg-indigo-950/40 rounded-2xl text-indigo-400 group-hover:bg-indigo-900/60 group-hover:scale-110 transition-all duration-300 mb-4 border border-indigo-900/30">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="font-outfit text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
                  {stat.number}
                </div>
                <div className="font-inter text-slate-400 text-xs sm:text-sm font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
