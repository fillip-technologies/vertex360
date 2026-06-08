import { useNavigate } from 'react-router-dom'
import { CheckCircle2, Award, Shield, Users, Clock, Target, Eye, Compass, ShieldCheck, HeartHandshake, Zap, Scale, ArrowLeft, Sparkles, Globe, Building2, Handshake } from 'lucide-react'
import eventImg1 from '../assets/images/events_2.jpeg'
import eventImg2 from '../assets/images/events_1.jpeg'
import bgImg from '../assets/images/about_hero_bg.png'

export default function AboutPage() {
  const navigate = useNavigate()

  const handleBackToHome = (e) => {
    e.preventDefault()
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavigateContact = (e) => {
    e.preventDefault()
    navigate('/contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const pillars = [
    {
      title: 'Strategy-led concepts, not generic execution',
      desc: 'We align event themes and formats with your high-level business goals.',
      icon: Target,
    },
    {
      title: 'Pan-India vendor network with quality control',
      desc: 'Consistency, reliability, and speed across tier-1, tier-2, and tier-3 cities.',
      icon: Globe,
    },
    {
      title: 'Technology-enabled engagement',
      desc: 'Webinars, hybrid setups, QR lead capture, and interactive audience analytics.',
      icon: Sparkles,
    },
    {
      title: 'Content production that extends reach',
      desc: 'High-quality films, event videos, and digital campaign content that outlasts the venue.',
      icon: Zap,
    },
  ]

  const stats = [
    { number: '16+', label: 'Years of Experience', icon: Clock },
    { number: '500+', label: 'Successful Campaigns', icon: Award },
    { number: '50+', label: 'Cities Covered', icon: Users },
    { number: '100%', label: 'Safety Record', icon: Shield },
  ]

  const values = [
    {
      title: 'Precision in execution',
      desc: 'Flawless operations, rigorous site checks, and complete checklist management.',
      icon: Compass,
    },
    {
      title: 'Respect for timelines & budgets',
      desc: 'We treat budgets as fixed constraints and timelines as promises.',
      icon: Scale,
    },
    {
      title: 'Safety-first production culture',
      desc: 'Engineered stages, secure rigging, and compliance with structural standards.',
      icon: ShieldCheck,
    },
    {
      title: 'Transparency & accountability',
      desc: 'Open accounting, honest communication, and taking absolute ownership.',
      icon: HeartHandshake,
    },
    {
      title: 'Learning mindset & innovation',
      desc: 'Constantly testing new engagement tech, hybrid formats, and visual effects.',
      icon: Zap,
    },
  ]

  const timeline = [
    { year: '2009', title: 'Founded', desc: 'Vertex 360 Experiences was established as a creative event management agency in Mumbai.' },
    { year: '2012', title: 'Pan-India Expansion', desc: 'Expanded vendor network and execution capabilities across 20+ cities nationwide.' },
    { year: '2016', title: 'Digital Integration', desc: 'Pioneered hybrid event formats, integrating live streaming and virtual audience engagement.' },
    { year: '2019', title: '500+ Events Milestone', desc: 'Crossed 500 successful event deliveries across corporate, government, and entertainment sectors.' },
    { year: '2022', title: 'Full-Stack Experiential Agency', desc: 'Evolved into a full-service experiential marketing, production, and content creation company.' },
    { year: '2025', title: 'Industry Leadership', desc: 'Recognized as a leading experiential agency with PAN India execution and global clientele.' },
  ]

  const clientTypes = [
    { name: 'Enterprise Corporates', icon: Building2, desc: 'Fortune 500 and large-scale enterprises trusting us with their annual events and brand experiences.' },
    { name: 'Government & PSUs', icon: Shield, desc: 'Public sector organizations relying on our expertise for summits, expos, and national-level conferences.' },
    { name: 'Startups & Scale-ups', icon: Sparkles, desc: 'High-growth companies leveraging our creative strategies for product launches and brand activations.' },
    { name: 'Agencies & Partners', icon: Handshake, desc: 'Marketing agencies collaborating with us for on-ground production, fabrication, and event execution.' },
  ]

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">

      {/* Hero Banner */}
      <section
        className="relative pt-36 pb-24 sm:pb-32 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.2), rgba(2, 6, 23, 0.35)), url(${bgImg})` }}
      >
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Back Button */}
          <div className="mb-8 flex justify-center">
            <a
              href="/"
              onClick={handleBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 hover:text-white rounded-full text-slate-400 text-xs sm:text-sm transition-all shadow-md active:scale-95 group backdrop-blur-xs"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Back to Home
            </a>
          </div>

          <h1 className="font-outfit text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            About Vertex 360
          </h1>
          <p className="font-outfit text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            Experience architects built for execution at scale.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
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

                {/* Experience Badge */}
                <div className="absolute -bottom-3 -left-4 bg-slate-900 border border-slate-800 shadow-xl hover:shadow-2xl flex items-center gap-3.5 px-6 py-4 rounded-2xl z-25 transition-transform duration-300 hover:scale-102">
                  <div className="w-12 h-12 rounded-xl bg-indigo-950/40 border border-indigo-900/30 flex items-center justify-center text-3xl font-black text-indigo-400 font-outfit">
                    16
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-200 font-black leading-tight uppercase tracking-wider">
                    Years of<br /><span className="text-indigo-400">Excellence</span>
                  </div>
                </div>
              </div>

              {/* Side Image */}
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

          {/* Content */}
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

            <p className="font-inter text-slate-400 text-sm sm:text-base leading-relaxed mb-4 font-light">
              Vertex 360 Experiences is a full-service experiential and production company delivering end-to-end brand experiences for enterprises, high-growth companies, and institutions. We operate at the intersection of creative storytelling and operational precision — designing experiences that look world-class, run flawlessly, and deliver outcomes you can measure.
            </p>

            <p className="font-inter text-slate-400 text-sm sm:text-base leading-relaxed mb-8 font-light">
              Since 2009, we have been transforming ideas into immersive brand experiences. Our team of strategists, designers, production specialists, and on-ground coordinators work as a single unit to deliver events that create lasting impact.
            </p>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-indigo-500/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-950/40 border border-indigo-900/30 text-indigo-400 flex items-center justify-center group-hover:scale-105 transition-transform duration-250 shadow-inner">
                      <Icon className="h-5 w-5" />
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
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 bg-slate-900/40 border border-slate-800 rounded-3xl p-8 shadow-lg">
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
      </section>

      {/* Journey Timeline */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-indigo-400 uppercase mb-3 block">
            Our Story
          </span>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            The Vertex Journey
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500/40 via-violet-500/30 to-indigo-500/10 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {timeline.map((item, idx) => {
              const isLeft = idx % 2 === 0
              return (
                <div key={idx} className="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:mb-16">
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-6 z-10">
                    <div className="w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-950 shadow-lg shadow-indigo-500/30" />
                  </div>

                  {/* Content */}
                  <div className={`${isLeft ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'}`}>
                    <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/30 transition-all duration-300 group">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:justify-end' : ''}`}>
                        <span className="font-outfit text-2xl font-black bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="font-outfit text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-inter text-slate-400 text-sm leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Empty column for alternating layout */}
                  {isLeft && <div className="hidden lg:block" />}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 sm:py-28 bg-slate-950 relative overflow-hidden border-y border-slate-900">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-500/2 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-widest text-indigo-400 uppercase mb-3 block">
              Our Purpose & DNA
            </span>
            <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Mission, Vision & Values
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
          </div>

          {/* Mission and Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Mission Card */}
            <div className="group relative bg-slate-900/40 border border-slate-800 hover:border-violet-500/30 rounded-3xl p-8 sm:p-10 transition-all duration-300 shadow-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl group-hover:bg-violet-500/10 transition-colors" />
              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="p-4 bg-violet-950/40 rounded-2xl text-violet-400 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-violet-900/30">
                  <Target className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-outfit text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="font-inter text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                    To transform business objectives into memorable human experiences powered by creativity, production discipline, and measurable impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-slate-900/40 border border-slate-800 hover:border-indigo-500/30 rounded-3xl p-8 sm:p-10 transition-all duration-300 shadow-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors" />
              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="p-4 bg-indigo-950/40 rounded-2xl text-indigo-400 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-indigo-900/30">
                  <Eye className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-outfit text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="font-inter text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                    To become the most trusted experience partner for brands that want scale, consistency, and excellence across physical, digital, and hybrid worlds.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-slate-900/20 border border-slate-800/80 rounded-3xl p-8 sm:p-12">
            <h3 className="font-outfit text-xl sm:text-2xl font-extrabold text-white text-center mb-10 tracking-tight">
              The Core Values That Drive Us
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon
                return (
                  <div key={idx} className="flex flex-col items-center text-center p-4 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-indigo-500/30 hover:bg-slate-900/60 transition-all duration-300 group shadow-sm">
                    <div className="p-3 bg-indigo-950/40 border border-indigo-900/30 rounded-xl text-indigo-400 group-hover:bg-indigo-900/60 group-hover:scale-110 transition-all duration-300 mb-4 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-outfit text-sm sm:text-base font-bold text-white mb-2 leading-tight">
                      {value.title}
                    </h4>
                    <p className="font-inter text-slate-400 text-xs leading-relaxed font-light">
                      {value.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-indigo-400 uppercase mb-3 block">
            Our Clients
          </span>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Who We Serve
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientTypes.map((client, idx) => {
            const Icon = client.icon
            return (
              <div key={idx} className="group relative bg-slate-900/40 border border-slate-800 hover:border-indigo-500/30 rounded-3xl p-8 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <div className="p-4 bg-indigo-950/40 border border-indigo-900/30 rounded-2xl text-indigo-400 inline-flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="font-outfit text-lg font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    {client.name}
                  </h4>
                  <p className="font-inter text-slate-400 text-sm leading-relaxed font-light">
                    {client.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-950/30 border-t border-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/2 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Ready to partner with us?
          </h2>
          <p className="font-inter text-slate-400 text-sm sm:text-base mb-8 max-w-lg mx-auto font-light">
            Let's create experiences that make your brand unforgettable. Get in touch to start your next project.
          </p>
          <a
            href="/contact"
            onClick={handleNavigateContact}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/10 active:scale-95 transition-all cursor-pointer"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
