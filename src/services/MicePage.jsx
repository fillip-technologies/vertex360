import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, ArrowRight, Shield, Award, Users, ChevronDown, Plane } from 'lucide-react'
import imgMice from '../assets/images/services_mice_travel.png'
import logoImg from '../assets/logo/vertexlogo-1.png'
import Logo from '../components/Logo'

export default function MicePage() {
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
    { number: '50k+', label: 'Corporate Delegates Managed', icon: Users },
    { number: '12+', label: 'International Countries Visited', icon: Plane },
    { number: '16+', label: 'Years of Group Travel Logistics', icon: Award },
  ]

  const benefits = [
    'Ensure stress-free ticketing and group travel compliance for large employee sizes.',
    'Access corporate group discounts with international airlines and premium hotels.',
    'Engage employees with structured cultural excursions and professional team builders.',
    'Maintain a dedicated on-site helpdesk team for 24/7 emergencies.',
  ]

  const offerings = [
    {
      title: 'Incentive Travel & Retreats',
      desc: 'Premium international and domestic travel itineraries created to reward high-performing sales teams.'
    },
    {
      title: 'Corporate Sales Conventions',
      desc: 'Annual business conventions combining professional conference setups with luxury group stays.'
    },
    {
      title: 'IP & Festival Management',
      desc: 'Creation, marketing, and operational management of proprietary business summits and corporate IPs.'
    },
    {
      title: 'Team Building Workshops',
      desc: 'Interactive workshops led by professional facilitators to build trust and align team goals.'
    },
  ]

  const steps = [
    {
      num: '01',
      title: 'Feasibility & Budgeting',
      desc: 'We map destinations, compare hotel room block rates, and establish the total group budget limit.'
    },
    {
      num: '02',
      title: 'Logistics Coordination',
      desc: 'Our flight desk bookings bulk airline blocks, arranges corporate visas, and schedules airport coaches.'
    },
    {
      num: '03',
      title: 'Itinerary Customization',
      desc: 'We map local excursions, reserve themed restaurants, draft team-building schedules, and book artists.'
    },
    {
      num: '04',
      title: 'On-Ground Desk Operations',
      desc: 'Our crew manages check-in desks, runs airport transit sheets, and supports medical or safety emergencies.'
    }
  ]

  const faqs = [
    {
      q: 'Do you manage visas and travel insurance for international incentive trips?',
      a: 'Yes. We provide end-to-end visa application coordination, track submission timelines, and provide B2B travel insurance coverage for the entire group.'
    },
    {
      q: 'How do you handle delegate communications and registration?',
      a: 'We create custom registration portals and mobile apps. Delegates can submit passport details, select dietary preferences, and track their personal itinerary.'
    },
    {
      q: 'What is your group size capacity?',
      a: 'We manage retreats and MICE events starting from small executive boards of 20 up to massive scale company conventions of 1,500+ attendees.'
    }
  ]

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* Hero Banner */}
      <section
        className="relative pt-36 pb-24 sm:pb-32 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.2), rgba(2, 6, 23, 0.55)), url(${imgMice})` }}
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
            MICE & IPs
          </h1>
          <p className="font-outfit text-base sm:text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
            End-to-end MICE, corporate travel, and intellectual properties managed with precision and reliability.
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
                Global Travel & IP Operations
              </h2>
              <p className="font-inter text-slate-455 text-sm sm:text-base leading-relaxed font-light mb-4">
                We believe MICE trips are investments in corporate motivation and cultural alignment. We manage everything from flight ticketing blocks, hotel rooming negotiations, and visa tracking to custom gala setups and local excursion guides.
              </p>
              <p className="font-inter text-slate-455 text-sm sm:text-base leading-relaxed font-light">
                Our support team is on-ground at airports and hotels, managing arrivals, room distributions, and emergencies so your team has a stress-free travel experience.
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
                MICE Services
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
            <h3 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white">Travel Planning Flow</h3>
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
          <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white">MICE FAQ</h3>
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
            Planning a MICE travel program?
          </h2>
          <p className="font-inter text-slate-400 text-sm sm:text-base mb-8 max-w-lg mx-auto font-light">
            Partner with us to create structured, secure, and visually spectacular corporate travel retreats that deliver results.
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
