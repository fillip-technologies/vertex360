import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Phone, Calendar, ArrowRight, Shield } from 'lucide-react'

// Import service images
import imgExperiential from '../assets/images/services_experiential.png'
import imgActivations from '../assets/images/services_brand_activations.png'
import imgExhibition from '../assets/images/services_exhibition_stall.png'
import imgDigital from '../assets/images/services_digital_hybrid.png'
import imgShortFilms from '../assets/images/services_short_films.png'
import imgMice from '../assets/images/services_mice_travel.png'
import imgGifting from '../assets/images/services_corporate_gifting.png'

const servicesData = {
  experiential: {
    title: 'Experiential & Events Management',
    tagline: 'Immersive brand experiences designed to engage audiences, strengthen positioning, and deliver measurable business impact.',
    description: 'We create high-impact experiential marketing programs including corporate events, conferences, summits, townhalls, and award ceremonies. From concept development to on-ground execution, every experience is driven by strategic storytelling, precise production planning, and seamless logistics to ensure brand consistency and audience engagement at scale.',
    benefits: [
      'Position your brand as a industry thought leader.',
      'Create high-value, lasting emotional connections with key stakeholders.',
      'Ensure 100% safety with our structural fabrication guidelines.',
    ],
    features: [
      'Concept Development & Storyboarding',
      'Technical Stage Design & AV Production',
      'Artist, Host & Speaker Coordination',
      'Multi-city Venue Sourcing & Negotiation',
      'On-ground Operations & Guest Management',
    ],
    image: imgExperiential,
  },
  activations: {
    title: 'Brand Activations & Roadshows',
    tagline: 'On-ground brand activations and multi-city roadshows that bring your brand directly to your target audience.',
    description: 'We design and execute retail activations, product launches, sampling campaigns, and pan-India roadshows that generate awareness, drive participation, and support sales objectives. Our activation strategies combine creative engagement formats, trained brand promoters, and data-capture tech to ensure consistent brand presence across multiple locations.',
    benefits: [
      'Increase local brand visibility in high-footfall areas.',
      'Drive immediate product trials and customer feedback.',
      'Accelerate customer acquisition through interactive lead capture.',
    ],
    features: [
      'Mall, Tech-Park & Corporate Activations',
      'Mobile Float Fabrication & Logistics',
      'Promoter Sourcing, Training & Wardrobe',
      'Interactive Digital Games & AR Booths',
      'Real-time Reach & Lead Analytics',
    ],
    image: imgActivations,
  },
  exhibitions: {
    title: 'Exhibitions & Retail Experiences',
    tagline: 'Custom exhibition stalls and engaging retail environments designed to attract footfall and convert interest.',
    description: 'We design, fabricate, and manage custom exhibition stalls, pop-ups, and retail showcases that attract visitors and deliver qualified B2B leads. Every exhibition space is engineered to blend creative brand storytelling with operational safety and high fabrication finish.',
    benefits: [
      'Attract high B2B footfall in busy trade shows.',
      'Maximize exhibition space ROI with efficient layouts.',
      'Premium brand presentation with customized lighting & AV.',
    ],
    features: [
      'Custom 3D Stall & Pavilion Design',
      'On-site Fabrication & Setup Supervision',
      'Retail Merchandising Displays & Pop-up Kiosks',
      'Integrated B2B Lounge & Meeting Areas',
      'Interactive Demo Stations & Digital Displays',
    ],
    image: imgExhibition,
  },
  digital: {
    title: 'Digital & Hybrid Experiences',
    tagline: 'Technology-enabled digital and hybrid experiences that extend your reach beyond physical boundaries.',
    description: 'We design and deliver virtual and hybrid events including webinars, corporate conferences, product launches, and high-definition live streams. By integrating digital platforms with professional on-ground multi-camera setups, we create seamless experiences that engage both physical and remote attendees.',
    benefits: [
      'Expand audience reach across global geographies.',
      'Reduce logistics and travel overhead costs.',
      'Capture granular engagement metrics for post-event analytics.',
    ],
    features: [
      'Custom 3D Virtual Lobby & Stage Styling',
      'Multi-Camera HD Live Webcasting & RTMP Streaming',
      'Interactive Live Chat, Q&A & Real-time Polling',
      'Virtual Reality (VR) & Augmented Reality (AR) Activations',
      'Comprehensive Post-event Attendee Engagement Data',
    ],
    image: imgDigital,
  },
  content: {
    title: 'Content & Films',
    tagline: 'Compelling visual content that tells your brand story and amplifies campaign impact.',
    description: 'We produce high-quality short films, digital ads, corporate brand profiles, event aftermovies, and social media content. Our scripting-led approach ensures every video asset aligns with your overarching marketing campaign, creating lasting digital reach.',
    benefits: [
      'Extend the life and reach of your physical events.',
      'Drive higher digital engagement and social share rates.',
      'Professional cinematic storytelling that builds brand trust.',
    ],
    features: [
      'Creative Scriptwriting & Pre-production Planning',
      'Cinematic Multi-cam Video & Drone Shoots',
      'Event Highlights & Aftermovie Quick Turnarounds',
      '2D/3D Motion Graphics & VFX Enhancements',
      'Voiceover Sourcing & Sound Design Mixing',
    ],
    image: imgShortFilms,
  },
  mice: {
    title: 'MICE & IPs',
    tagline: 'End-to-end MICE, corporate travel, and intellectual properties managed with precision and reliability.',
    description: 'We handle complete itinerary planning, venue sourcing, booking, ticketing, ground transportation, and accommodation for corporate travel, incentive trips, exhibitions, and large-scale summits. We focus on seamless execution and premium service to ensure safety and comfort.',
    benefits: [
      'Flawless coordination for large-scale employee groups.',
      'Access to premium corporate venues and incentive rates.',
      'Stress-free compliance, ticketing, and flight management.',
    ],
    features: [
      'Destination & Venue Sourcing (National & International)',
      'Flight, Train & Bus Ticketing Logistics',
      'Cultural Excursions & Guided Local Activities',
      'Gala Theme Dinners & Entertainment Coordination',
      'On-site Helpdesks & Emergency Support Teams',
    ],
    image: imgMice,
  },
  gifting: {
    title: 'Corporate Gifting',
    tagline: 'Strategic corporate gifting solutions designed to strengthen relationships, enhance brand recall, and deliver meaningful engagement.',
    description: 'We provide end-to-end event and corporate gifting solutions across local and global markets, curated to align with brand values, budgets, and campaign objectives. From premium merchandise and promotional items to sustainable and wellness-focused gifts, our gifting programs are managed with precision covering sourcing, customization, packaging, and pan-India or international delivery.',
    benefits: [
      'Enhance stakeholder relations with custom-branded merchandise.',
      'Promote corporate values with sustainable/eco-friendly options.',
      'Hassle-free direct delivery to recipients across India.',
    ],
    features: [
      'Curated Product Sourcing & Catalog Selection',
      'Custom Laser Engraving, Printing & Branding',
      'Premium Box Packaging & Custom Gift Wrapping',
      'Inventory Storage & Warehouse Logistics',
      'Pan-India Courier Coordination & Tracking Support',
    ],
    image: imgGifting,
  },
}

export default function ServiceDetailPage() {
  const { serviceId } = useParams()
  const navigate = useNavigate()

  const service = servicesData[serviceId]

  if (!service) {
    return (
      <div className="bg-slate-950 text-slate-100 min-h-screen pt-36 pb-24 flex flex-col items-center justify-center">
        <h2 className="font-outfit text-3xl font-bold mb-4">Service Not Found</h2>
        <p className="text-slate-400 mb-8">The requested service page does not exist.</p>
        <button
          onClick={() => navigate('/services')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </button>
      </div>
    )
  }

  const handleBackToServices = (e) => {
    e.preventDefault()
    navigate('/services')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleContactClick = (e) => {
    e.preventDefault()
    navigate('/contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* Hero Banner */}
      <section
        className="relative pt-36 pb-24 sm:pb-32 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.2), rgba(2, 6, 23, 0.35)), url(${service.image})` }}
      >
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Back to Services Button */}
          <div className="mb-8 flex justify-center">
            <a
              href="/services"
              onClick={handleBackToServices}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 hover:text-white rounded-full text-slate-300 text-xs sm:text-sm transition-all shadow-md active:scale-95 group backdrop-blur-xs"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              All Services
            </a>
          </div>

          <h1 className="font-outfit text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            {service.title}
          </h1>
          <p className="font-outfit text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            {service.tagline}
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </div>
      </section>

      {/* Main Details Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Description and Benefits */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white mb-6 tracking-tight">
                About the Service
              </h2>
              <p className="font-inter text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                {service.description}
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-outfit text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Shield className="h-5 w-5 text-indigo-400" />
                Key Strategic Benefits
              </h3>
              <ul className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-5 w-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span className="font-inter text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Features / Offerings */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-outfit text-xl font-extrabold text-white mb-6 tracking-tight">
                What We Offer
              </h3>
              <div className="space-y-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 py-3 px-4 rounded-xl border border-slate-800/80 bg-slate-950/40 group hover:border-violet-500/30 transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-violet-500" />
                    <span className="font-outfit text-xs sm:text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Action CTA Section */}
      <section className="py-20 bg-slate-950 border-t border-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/2 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Planning a {service.title}?
          </h2>
          <p className="font-inter text-slate-400 text-sm sm:text-base mb-8 max-w-lg mx-auto font-light">
            Partner with us to create structured, secure, and visually spectacular experiences that deliver results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/10 active:scale-95 transition-all cursor-pointer"
            >
              Get a Proposal
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="/services"
              onClick={handleBackToServices}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-bold text-indigo-400 border border-indigo-500/40 bg-transparent hover:bg-indigo-500/5 active:scale-95 transition-all cursor-pointer"
            >
              All Services
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
