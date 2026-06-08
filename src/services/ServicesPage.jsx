import { Award, Layers, Globe, Store, Laptop, Video, Plane, Gift, ArrowLeft, CheckCircle2, Megaphone } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import imgExperiential from '../assets/images/services_experiential.png'
import imgActivations from '../assets/images/services_brand_activations.png'
import imgOoh from '../assets/images/services_ooh.png'
import imgExhibition from '../assets/images/services_exhibition_stall.png'
import imgRetail from '../assets/images/services_retail_exp.png'
import imgDigital from '../assets/images/services_digital_hybrid.png'
import imgShortFilms from '../assets/images/services_short_films.png'
import imgMice from '../assets/images/services_mice_travel.png'
import imgGifting from '../assets/images/services_corporate_gifting.png'
import bgImg from '../assets/service/services-img.jpg'

export default function ServicesPage() {
  const navigate = useNavigate()

  const services = [
    {
      id: 'experiential-marketing',
      index: '01',
      icon: Award,
      name: 'Experiential Marketing',
      tagline: 'Immersive brand experiences designed to engage audiences, strengthen positioning, and deliver measurable business impact.',
      desc: 'We create high-impact experiential marketing programs including corporate events, conferences, summits, townhalls, and award ceremonies. From concept development to on-ground execution, every experience is driven by strategic storytelling, precise production planning, and seamless logistics to ensure brand consistency and audience engagement at scale.',
      benefit: 'Position your brand as a thought leader while creating meaningful, high-value connections with stakeholders.',
      img: imgExperiential,
    },
    {
      id: 'brand-activations',
      index: '02',
      icon: Layers,
      name: 'Brand Activations & Roadshows',
      tagline: 'On-ground brand activations and multi-city roadshows that bring your brand directly to your target audience.',
      desc: 'We design and execute retail activations, product launches, sampling campaigns, and pan-India roadshows that generate awareness, drive participation, and support sales objectives. Our activation strategies combine creative formats, trained manpower, and data-driven engagement to ensure consistent brand presence across multiple locations.',
      benefit: 'Increase brand visibility, drive product trials, and accelerate customer adoption across key markets.',
      img: imgActivations,
    },
    {
      id: 'ooh',
      index: '03',
      icon: Megaphone,
      name: 'OOH (Out-of-Home Advertising)',
      tagline: 'Strategic out-of-home campaigns that maximize visibility and reinforce brand recall in high-impact environments.',
      desc: 'We coordinate high-visibility placements including billboards, transit media, digital OOH, and ambient installations to amplify reach and build strong local presence. We combine strategic placement locations with creative visual design to ensure maximum impression counts and brand exposure.',
      benefit: 'Strengthen mass visibility and reinforce brand recall through consistent, large-scale exposure.',
      img: imgOoh,
    },
    {
      id: 'exhibition-stall',
      index: '04',
      icon: Layers,
      name: 'Exhibition & Stall Design',
      tagline: 'Custom exhibition stalls and pavilions designed to attract footfall and convert interest into business opportunities.',
      desc: 'We design, fabricate, and manage exhibition stalls, pop-ups, and retail showcases that attract visitors and deliver leads. Each project blends design innovation with operational excellence. Whether virtual or hybrid, our solutions include interactive elements, digital display walls, and personalized layouts.',
      benefit: 'Generate qualified leads and maximize ROI from exhibitions and trade fairs.',
      img: imgExhibition,
    },
    {
      id: 'retail-experiences',
      index: '05',
      icon: Store,
      name: 'Retail Experiences',
      tagline: 'Engaging retail environments that enhance customer interaction and drive purchase decisions.',
      desc: 'We create in-store experiences, pop-ups, and retail installations that blend design, technology, and shopper psychology. From product showcases to experiential retail zones, our solutions are crafted to increase dwell time, engagement, and conversion within physical retail spaces.',
      benefit: 'Improve customer experience and boost in-store engagement and sales performance.',
      img: imgRetail,
    },
    {
      id: 'digital-hybrid',
      index: '06',
      icon: Laptop,
      name: 'Digital & Hybrid Experiences',
      tagline: 'Technology-enabled digital and hybrid experiences that extend your reach beyond physical boundaries.',
      desc: 'We design and deliver virtual and hybrid events including webinars, conferences, product launches, and live streams. By integrating digital platforms with on-ground production, we create seamless experiences that engage both physical and remote audiences while providing actionable engagement analytics.',
      benefit: 'Expand audience reach, reduce geographical limitations, and capture measurable engagement data.',
      img: imgDigital,
    },
    {
      id: 'short-films',
      index: '07',
      icon: Video,
      name: 'Short Films, Ads & Brand Videos',
      tagline: 'Compelling visual content that tells your brand story and amplifies campaign impact.',
      desc: 'We produce high-quality short films, advertisements, corporate videos, event aftermovies, and digital content tailored for web, social media, and internal communication. Our storytelling-led approach ensures every video aligns with your brand message and marketing objectives.',
      benefit: 'Strengthen brand recall and extend the life of your campaigns across digital platforms.',
      img: imgShortFilms,
    },
    {
      id: 'mice-travel',
      index: '08',
      icon: Plane,
      name: 'MICE | Travel | Ticketing',
      tagline: 'End-to-end MICE, corporate travel, and ticketing solutions managed with precision and reliability.',
      desc: 'We handle complete itinerary planning, venue sourcing, booking, ticketing, ground transportation, and accommodation for corporate travel, incentive trips, exhibitions, and large-scale summits. We focus on seamless execution and premium service to ensure safety and comfort.',
      benefit: 'Deliver seamless corporate travel and MICE programs while ensuring comfort, compliance, and cost efficiency.',
      img: imgMice,
    },
    {
      id: 'corporate-gifting',
      index: '09',
      icon: Gift,
      name: 'Corporate Gifting',
      tagline: 'Strategic corporate gifting solutions designed to strengthen relationships, enhance brand recall, and deliver meaningful engagement.',
      desc: 'We provide end-to-end event and corporate gifting solutions across local and global markets, curated to align with brand values, budgets, and campaign objectives. From premium merchandise and promotional items to sustainable and wellness-focused gifts, our gifting programs are managed with precision covering sourcing, customization, packaging, and pan-India or international delivery.',
      benefit: 'Enhance stakeholder relations, improve brand recall, and deliver personalized gift experiences that stand out.',
      img: imgGifting,
    },
  ]

  const handleBackToHome = (e) => {
    e.preventDefault()
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleScrollToContact = (e) => {
    e.preventDefault()
    navigate('/contact')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Banner / Header */}
      <section
        className="relative pt-36 pb-24 sm:pb-32 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.2), rgba(2, 6, 23, 0.35)), url(${bgImg})` }}
      >
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb / Back Button */}
          <div className="mb-8 flex justify-center">
            <a
              href="/"
              onClick={handleBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 hover:text-white rounded-full text-slate-355 text-xs sm:text-sm transition-all shadow-md active:scale-95 group backdrop-blur-xs"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Back to Home
            </a>
          </div>

          <h1 className="font-outfit text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            Our Event Services
          </h1>
          <p className="font-outfit text-lg sm:text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto font-normal leading-relaxed mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            We design, manage, and measure brand experiences across physical, digital, and hybrid worlds.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="space-y-28 sm:space-y-36">
          {services.map((svc, idx) => {
            const SvcIcon = svc.icon
            const isEven = idx % 2 === 0
            
            return (
              <div
                key={svc.id}
                id={svc.id}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Side (Image with modern overlays) */}
                <div className="w-full lg:w-1/2 group relative">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-35 transition duration-500" />
                  
                  <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
                    <img
                      src={svc.img}
                      alt={svc.name}
                      className="w-full h-[320px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  {/* Service Index & Icon */}
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-outfit text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 to-indigo-950/20 select-none">
                      {svc.index}
                    </span>
                    <div className="p-3 bg-indigo-950/60 border border-indigo-900/50 text-indigo-400 rounded-xl">
                      <SvcIcon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Service Name */}
                  <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                    {svc.name}
                  </h2>

                  {/* Tagline */}
                  <p className="font-outfit text-md sm:text-lg text-indigo-200/90 font-medium mb-4 leading-relaxed">
                    {svc.tagline}
                  </p>

                  {/* Detailed Description */}
                  <p className="font-inter text-slate-400 text-sm sm:text-base leading-relaxed mb-6 font-light">
                    {svc.desc}
                  </p>

                  {/* Key Benefits Card */}
                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm relative overflow-hidden group/benefit">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/2 rounded-full blur-xl group-hover/benefit:bg-indigo-500/5 transition-colors" />
                    <div className="flex gap-3.5 items-start">
                      <CheckCircle2 className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-1.5">
                          Key Benefits
                        </h4>
                        <p className="text-slate-350 text-xs sm:text-sm font-light leading-relaxed">
                          {svc.benefit}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Call To Action Bottom Section */}
      <section className="py-20 bg-slate-950/30 border-t border-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/2 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Ready to design your next experience?
          </h2>
          <p className="font-inter text-slate-400 text-sm sm:text-base mb-8 max-w-lg mx-auto font-light">
            Our expert designers, fabricators, and production coordinators are ready to execute your vision.
          </p>
          <a
            href="/contact"
            onClick={handleScrollToContact}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/10 active:scale-95 transition-all cursor-pointer"
          >
            Let's Connect
          </a>
        </div>
      </section>
    </div>
  )
}
