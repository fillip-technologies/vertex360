import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, ArrowRight, Shield, Award, Users, ChevronDown, Gift } from 'lucide-react'
import imgGifting from '../assets/images/services_corporate_gifting.png'
import logoImg from '../assets/logo/vertexlogo-1.png'
import Logo from '../components/Logo'

export default function GiftingPage() {
  const navigate = useNavigate()
  const [expandedFaq, setExpandedFaq] = useState(null)

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

  const toggleFaq = (idx) => {
    setExpandedFaq(expandedFaq === idx ? null : idx)
  }

  const stats = [
    { number: '150k+', label: 'Custom Gift Sets Delivered', icon: Gift },
    { number: '500+', label: 'Unique Gift Items & SKUs', icon: Award },
    { number: '100%', label: 'On-Time Warehouse Delivery', icon: Shield },
  ]

  const benefits = [
    'Enhance corporate stakeholder relations with high-quality custom-branded products.',
    'Promote company values with sustainable, bio-degradable, and eco-friendly gift choices.',
    'Enjoy hands-off logistics with direct home courier delivery across India.',
    'Access detailed item mockups and material quality check sheets.',
  ]

  const offerings = [
    {
      title: 'New Joiner Welcome Kits',
      desc: 'Premium onboard notebooks, metal bottles, tech accessories, and apparel bundled inside a custom branded box.'
    },
    {
      title: 'Premium Executive Gifts',
      desc: 'Fine leather goods, designer writing instruments, smart tech devices, and luxury customized gift baskets.'
    },
    {
      title: 'Eco-Friendly gift sets',
      desc: 'Recycled paper notebooks, bamboo desk tools, cork coffee cups, and organic seed kits promoting green initiatives.'
    },
    {
      title: 'Diwali & Festive Gifting',
      desc: 'Custom dry-fruit hampers, designer oil lamps, traditional sweets, and artisanal lifestyle sets packed for major holidays.'
    },
  ]

  const steps = [
    {
      num: '01',
      title: 'Curation & Sourcing',
      desc: 'We curate item combinations aligned with your campaign theme, brand guidelines, and unit cost limits.'
    },
    {
      num: '02',
      title: 'Mockups & Prototypes',
      desc: 'Our design team generates digital layouts of your logo on selected products and constructs actual sample kits.'
    },
    {
      num: '03',
      title: 'Laser Branding & Packing',
      desc: 'We laser-engrave, screen-print, or emboss your logo onto items, wrapping each set in premium custom boxes.'
    },
    {
      num: '04',
      title: 'Warehouse & Shipping',
      desc: 'Kits are safely stored in our warehouse, packed for courier dispatch, and shipped door-to-door with tracking links.'
    }
  ]

  const faqs = [
    {
      q: 'Do you ship individual kits directly to employees at their homes?',
      a: 'Yes. We manage direct-to-home shipping operations across India. You provide the address sheet, and our logistics partners dispatch and track each kit.'
    },
    {
      q: 'What is the minimum order quantity (MOQ) for custom-branded gifts?',
      a: 'Our standard MOQ is 50 kits. For high-end premium executive items or singular executive gifts, we can accommodate smaller batch quantities.'
    },
    {
      q: 'Can we include personalized greeting cards or letters in each kit?',
      a: 'Absolutely. We print and hand-pack customized letters, employee name cards, or festive greetings inside each kit during final box packaging.'
    }
  ]

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* Hero Banner */}
      <section
        className="relative pt-36 pb-24 sm:pb-32 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.2), rgba(2, 6, 23, 0.55)), url(${imgGifting})` }}
      >
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Back to Services Button */}
          <div className="mb-8 flex justify-center">
            <a
              href="/services"
              onClick={handleBackToServices}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 hover:text-white rounded-full text-slate-300 text-xs sm:text-sm transition-all shadow-md active:scale-95 group backdrop-blur-xs font-outfit"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              All Services
            </a>
          </div>

          <h1 className="font-outfit text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            Corporate Gifting
          </h1>
          <p className="font-outfit text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            Strategic corporate gifting solutions designed to strengthen relationships, enhance brand recall, and deliver meaningful engagement.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="py-12 border-b border-slate-900 bg-slate-950/60 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="flex items-center gap-5 p-6 rounded-2xl bg-slate-900/20 border border-slate-900 relative overflow-hidden">
                  <div className="p-3 bg-indigo-950/60 border border-indigo-900/40 text-indigo-400 rounded-xl">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white">{stat.number}</h3>
                    <p className="font-inter text-xs text-slate-455 uppercase tracking-wider font-semibold mt-0.5">{stat.label}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Description and Benefits */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white mb-6 tracking-tight">
                Turnkey Custom Merchandising
              </h2>
              <p className="font-inter text-slate-455 text-sm sm:text-base leading-relaxed font-light mb-4">
                We believe that corporate gifting is an extension of physical marketing and employee recognition. We source unique, high-quality B2B merchandise ranging from smart tech gadgets and sustainable utility kits to luxury hampers and customized apparel.
              </p>
              <p className="font-inter text-slate-455 text-sm sm:text-base leading-relaxed font-light">
                Our design team generates realistic digital mockups and manufactures physical samples, while our warehouse teams handle custom packing, laser branding, and pan-India door-to-door courier tracking.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/30 border border-slate-900 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/2 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-outfit text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Shield className="h-5 w-5 text-indigo-400" />
                Strategic Advantages
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-3.5 items-start">
                    <CheckCircle2 className="h-5 w-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <span className="font-inter text-slate-350 text-xs sm:text-sm font-light leading-relaxed">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Features / Offerings */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-slate-900/30 border border-slate-900 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/2 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-outfit text-xl font-extrabold text-white mb-6 tracking-tight">
                Gifting Themes
              </h3>
              <div className="space-y-4">
                {offerings.map((item, idx) => (
                  <div key={idx} className="p-5 rounded-2xl border border-slate-900 bg-slate-950/20 group hover:border-violet-500/25 transition-all duration-300">
                    <h4 className="font-outfit text-sm sm:text-base font-bold text-slate-200 group-hover:text-white transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="font-inter text-xs text-slate-455 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Execution Workflow (Process) */}
      <section className="py-20 border-y border-slate-900/60 bg-slate-950/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3">Our Framework</h2>
            <h3 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white">Full-Service Logistics</h3>
            <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-900/20 border border-slate-900/80 relative group hover:border-indigo-500/20 transition-all duration-300">
                <span className="font-outfit text-4xl font-black text-slate-850 absolute top-4 right-4 select-none group-hover:text-indigo-950/50 transition-colors">{step.num}</span>
                <h4 className="font-outfit text-base font-bold text-white mb-2.5 relative z-10">{step.title}</h4>
                <p className="font-inter text-xs text-slate-400 font-light leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A / FAQ Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3">Questions & Answers</h2>
          <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white">Gifting FAQ</h3>
          <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-900 pb-4">
              <button
                onClick={() => toggleFaq(idx)}
                className="flex justify-between items-center w-full text-left py-4 text-white hover:text-indigo-400 transition-colors font-outfit font-bold text-sm sm:text-base focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`h-5 w-5 text-indigo-400 transition-transform duration-300 flex-shrink-0 ml-4 ${expandedFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${expandedFaq === idx ? 'max-h-40 mt-2' : 'max-h-0'}`}>
                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Action CTA Section */}
      <section className="py-20 bg-slate-950 border-t border-slate-900 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/2 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Planning a corporate gifting kit?
          </h2>
          <p className="font-inter text-slate-400 text-sm sm:text-base mb-8 max-w-lg mx-auto font-light">
            Partner with us to curate, brand, and ship high-quality gift hampers that deliver your corporate appreciation.
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
