import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ChevronLeft, ChevronRight, Sparkles, Megaphone, Store, Globe, Film, Award, Eye, ArrowRight } from 'lucide-react'
import imgExperiential from '../assets/images/services_experiential.png'
import imgActivations from '../assets/images/services_brand_activations.png'
import imgOoh from '../assets/images/services_ooh.png'
import imgExhibition from '../assets/images/services_exhibition_stall.png'
import imgRetail from '../assets/images/services_retail_exp.png'
import imgDigital from '../assets/images/services_digital_hybrid.png'
import imgShortFilms from '../assets/images/services_short_films.png'
import imgMice from '../assets/images/services_mice_travel.png'
import imgGifting from '../assets/images/services_corporate_gifting.png'
import imgMic from '../assets/images/carousel_mic.png'
import imgConf from '../assets/images/carousel_conf.png'
import imgCal from '../assets/images/carousel_cal.png'
import imgMeet from '../assets/images/carousel_meet.png'
import imgTab from '../assets/images/carousel_tab.png'
import eventImg1 from '../assets/images/events_1.jpeg'
import eventImg2 from '../assets/images/events_2.jpeg'
import bgImg from '../assets/images/portfolio_hero_bg.png'

export default function PortfolioPage() {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)

  const handleBackToHome = (e) => {
    e.preventDefault()
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavigateServices = (e) => {
    e.preventDefault()
    navigate('/services')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavigateContact = (e) => {
    e.preventDefault()
    navigate('/contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'experiential', label: 'Experiential' },
    { key: 'activations', label: 'Activations' },
    { key: 'exhibitions', label: 'Exhibitions' },
    { key: 'digital', label: 'Digital' },
    { key: 'content', label: 'Content' },
  ]

  const projects = [
    {
      id: 1,
      title: 'National Corporate Summit 2024',
      category: 'experiential',
      client: 'Fortune 500 Enterprise',
      desc: 'A 3-day multi-stage corporate summit with 2,000+ attendees, featuring keynote sessions, breakout workshops, and an immersive brand zone with interactive installations.',
      stats: { attendees: '2,000+', duration: '3 Days', cities: 'Mumbai' },
      image: imgExperiential,
      tags: ['Corporate Events', 'Summit', 'Production'],
    },
    {
      id: 2,
      title: 'Pan-India Brand Roadshow',
      category: 'activations',
      client: 'Leading FMCG Brand',
      desc: 'A 12-city brand activation roadshow covering tier-1 and tier-2 cities with custom-built brand experience zones, product sampling stations, and digital engagement touchpoints.',
      stats: { attendees: '50K+', duration: '45 Days', cities: '12 Cities' },
      image: imgActivations,
      tags: ['Roadshow', 'Brand Activation', 'Pan-India'],
    },
    {
      id: 3,
      title: 'Tech Exhibition Pavilion',
      category: 'exhibitions',
      client: 'Global Tech Company',
      desc: 'A 5,000 sq. ft. custom exhibition pavilion featuring interactive product demo stations, LED video walls, AR experiences, and a private meeting lounge for B2B engagement.',
      stats: { attendees: '10K+', duration: '4 Days', cities: 'Delhi' },
      image: imgExhibition,
      tags: ['Exhibition', 'Stall Design', 'Tech'],
    },
    {
      id: 4,
      title: 'Luxury Retail Pop-up Experience',
      category: 'exhibitions',
      client: 'Premium Lifestyle Brand',
      desc: 'An exclusive pop-up retail experience in Mumbai featuring bespoke interiors, curated product displays, and personalized shopping experiences with VIP guest management.',
      stats: { attendees: '3K+', duration: '10 Days', cities: 'Mumbai' },
      image: imgRetail,
      tags: ['Retail', 'Pop-up', 'Luxury'],
    },
    {
      id: 5,
      title: 'Global Hybrid Conference',
      category: 'digital',
      client: 'International SaaS Platform',
      desc: 'A hybrid global conference with 500 in-person attendees and 5,000 virtual participants across 15 countries, featuring live streaming, real-time polling, and virtual networking rooms.',
      stats: { attendees: '5,500+', duration: '2 Days', cities: 'Bangalore' },
      image: imgDigital,
      tags: ['Hybrid', 'Virtual', 'Conference'],
    },
    {
      id: 6,
      title: 'Brand Documentary Series',
      category: 'content',
      client: 'Heritage Brand Group',
      desc: 'A 6-episode brand documentary series capturing the legacy, craftsmanship, and vision behind India\'s most iconic heritage brands, shot across 8 locations nationwide.',
      stats: { attendees: '1M+ Views', duration: '6 Episodes', cities: '8 Locations' },
      image: imgShortFilms,
      tags: ['Film', 'Documentary', 'Brand Story'],
    },
    {
      id: 7,
      title: 'OOH Campaign — Metro Cities',
      category: 'activations',
      client: 'E-commerce Giant',
      desc: 'A high-impact OOH campaign spanning Mumbai, Delhi, and Bangalore with premium billboard placements, transit media wraps, and digital OOH displays at key traffic intersections.',
      stats: { attendees: '20M+ Impressions', duration: '30 Days', cities: '3 Cities' },
      image: imgOoh,
      tags: ['OOH', 'Billboard', 'Digital'],
    },
    {
      id: 8,
      title: 'MICE Incentive Trip — Rajasthan',
      category: 'experiential',
      client: 'Insurance Corporation',
      desc: 'An exclusive 4-day incentive trip for 200 top performers, featuring luxury accommodations, cultural experiences, team-building activities, and a grand gala dinner ceremony.',
      stats: { attendees: '200', duration: '4 Days', cities: 'Rajasthan' },
      image: imgMice,
      tags: ['MICE', 'Incentive', 'Travel'],
    },
    {
      id: 9,
      title: 'Corporate Gifting Program',
      category: 'experiential',
      client: 'Banking Corporation',
      desc: 'A bespoke corporate gifting program for 5,000+ employees featuring premium curated gift boxes with personalized branding, sustainable packaging, and pan-India delivery coordination.',
      stats: { attendees: '5K+ Recipients', duration: 'Ongoing', cities: 'Pan India' },
      image: imgGifting,
      tags: ['Gifting', 'Corporate', 'Premium'],
    },
  ]

  const galleryImages = [
    { src: imgMic, alt: 'Keynote & Speeches', tag: 'Keynote & Speeches' },
    { src: imgConf, alt: 'Conferences & Summits', tag: 'Conferences & Summits' },
    { src: imgCal, alt: 'Event Planning', tag: 'Event Planning' },
    { src: imgMeet, alt: 'Corporate Workshops', tag: 'Corporate Workshops' },
    { src: imgTab, alt: 'Strategic Consulting', tag: 'Strategic Consulting' },
    { src: eventImg1, alt: 'Exhibition Setup', tag: 'Exhibitions & Retail' },
    { src: eventImg2, alt: 'Brand Activation', tag: 'Brand Activations' },
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  const services = [
    {
      title: 'Experiential & Events',
      icon: Sparkles,
      gradient: 'from-pink-500/10 to-pink-500/0',
      iconColor: 'text-pink-400 bg-pink-950/40 border-pink-900/30',
    },
    {
      title: 'Brand Activations & Roadshows',
      icon: Megaphone,
      gradient: 'from-amber-500/10 to-amber-500/0',
      iconColor: 'text-amber-400 bg-amber-950/40 border-amber-900/30',
    },
    {
      title: 'Exhibitions & Retail',
      icon: Store,
      gradient: 'from-emerald-500/10 to-emerald-500/0',
      iconColor: 'text-emerald-400 bg-emerald-950/40 border-emerald-900/30',
    },
    {
      title: 'Digital/Hybrid Experiences',
      icon: Globe,
      gradient: 'from-blue-500/10 to-blue-500/0',
      iconColor: 'text-blue-400 bg-blue-950/40 border-blue-900/30',
    },
    {
      title: 'Content & Films',
      icon: Film,
      gradient: 'from-purple-500/10 to-purple-500/0',
      iconColor: 'text-purple-400 bg-purple-950/40 border-purple-900/30',
    },
    {
      title: 'MICE & IPs',
      icon: Award,
      gradient: 'from-indigo-500/10 to-indigo-500/0',
      iconColor: 'text-indigo-400 bg-indigo-950/40 border-indigo-900/30',
    },
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
            Our Portfolio
          </h1>
          <p className="font-outfit text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            A curated showcase of brand experiences, events, and campaigns delivered across India.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </div>
      </section>

      {/* Expertise Overview */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold tracking-widest text-indigo-400 uppercase mb-3 block">
            Expertise & Capabilities
          </span>
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            What We Do Best
          </h2>
          <p className="font-inter text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            A 360° experiential marketing and event management agency, delivering integrated brand experiences since 2009.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((svc, idx) => {
            const Icon = svc.icon
            return (
              <div
                key={idx}
                className="group flex flex-col items-center text-center p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/30 hover:translate-y-[-2px] transition-all duration-300 cursor-pointer"
              >
                <div className={`p-3 rounded-xl border ${svc.iconColor} group-hover:scale-110 transition-transform duration-300 mb-3`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-outfit text-xs sm:text-sm font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight">
                  {svc.title}
                </h4>
              </div>
            )
          })}
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-500/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold tracking-widest text-indigo-400 uppercase mb-3 block">
            Featured Work
          </span>
          <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Project Showcase
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mb-8" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === cat.key
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:border-indigo-500/30 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-900/40 border border-slate-800 hover:border-indigo-500/30 rounded-3xl overflow-hidden transition-all duration-500 hover:translate-y-[-4px] hover:shadow-[0_16px_32px_rgba(0,0,0,0.2)]"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Tags overlay */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-950/70 backdrop-blur-sm border border-slate-700/50 rounded-lg text-[10px] font-semibold text-slate-300 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Eye icon on hover */}
                <div className={`absolute top-4 right-4 p-2.5 bg-indigo-600/90 backdrop-blur-sm rounded-xl text-white transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <Eye className="h-4 w-4" />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                    {project.client}
                  </span>
                </div>
                <h3 className="font-outfit text-lg font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="font-inter text-slate-400 text-sm leading-relaxed font-light mb-4 line-clamp-3">
                  {project.desc}
                </p>

                {/* Stats row */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800/60">
                  <div className="text-center flex-1">
                    <div className="font-outfit text-sm font-bold text-white">{project.stats.attendees}</div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Reach</div>
                  </div>
                  <div className="w-px h-8 bg-slate-800" />
                  <div className="text-center flex-1">
                    <div className="font-outfit text-sm font-bold text-white">{project.stats.duration}</div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Duration</div>
                  </div>
                  <div className="w-px h-8 bg-slate-800" />
                  <div className="text-center flex-1">
                    <div className="font-outfit text-sm font-bold text-white">{project.stats.cities}</div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold">Location</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-16 sm:py-24 border-y border-slate-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold tracking-widest text-indigo-400 uppercase mb-3 block">
              Visual Gallery
            </span>
            <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Event Gallery
            </h2>
            <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all duration-300 cursor-pointer ${
                  idx === 0 || idx === 4 ? 'row-span-2 h-[420px]' : 'h-[200px]'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1.5 bg-indigo-600/90 backdrop-blur-sm rounded-lg text-xs font-bold text-white">
                    {img.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/2 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Have a project in mind?
          </h2>
          <p className="font-inter text-slate-400 text-sm sm:text-base mb-8 max-w-lg mx-auto font-light">
            Let us bring your vision to life with creative excellence and flawless execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              onClick={handleNavigateContact}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/10 active:scale-95 transition-all cursor-pointer"
            >
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="/services"
              onClick={handleNavigateServices}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-bold text-indigo-400 border border-indigo-500/40 bg-transparent hover:bg-indigo-500/5 active:scale-95 transition-all cursor-pointer"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
