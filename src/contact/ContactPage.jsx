import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowLeft, Send, Calendar, Users, Briefcase, DollarSign, CheckCircle2 } from 'lucide-react'
import logoImg from '../assets/logo/vertexlogo-1.png'
import Logo from '../components/Logo'

export default function ContactPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: 'Experiential & Corporate Events',
    guestCount: '100 - 500',
    budgetRange: '15 - 50 Lakhs',
    eventDate: '',
    location: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        eventType: 'Experiential & Corporate Events',
        guestCount: '100 - 500',
        budgetRange: '15 - 50 Lakhs',
        eventDate: '',
        location: '',
        message: '',
      })
      setTimeout(() => setSubmitSuccess(false), 5000)
    }, 1500)
  }

  const handleBackToHome = (e) => {
    e.preventDefault()
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Banner / Header */}
      <section className="relative pt-36 pb-20 sm:pb-24 overflow-hidden bg-radial-gradient from-indigo-950/40 via-slate-950 to-slate-950">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb / Back Button */}
          <div className="mb-8 flex justify-center">
            <a
              href="/"
              onClick={handleBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:text-white rounded-full text-slate-400 text-xs sm:text-sm transition-all shadow-sm active:scale-95 group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Back to Home
            </a>
          </div>

          <h1 className="font-outfit text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-350 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="font-outfit text-lg sm:text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-6">
            Let’s collaborate to bring your experiential event vision to life.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Contact Information (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Logo className="h-10 w-auto object-contain" src={logoImg} alt="Vertex 360 Logo" />
                <span className="font-outfit text-xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent tracking-wide">
                  VERTEX 360
                </span>
              </div>
              
              <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-6">
                Ready to create <br />
                something exceptional?
              </h2>
              
              <p className="font-inter text-slate-400 text-sm sm:text-base leading-relaxed mb-8 font-light max-w-md">
                Whether you are planning a national brand activation, a corporate summit, an interactive digital showcase, or looking for premium fabrication details, our design and production architects are standing by to execute your vision.
              </p>

              {/* Direct Info Channels */}
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-indigo-400 shadow-md flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">North Office</h4>
                    <p className="text-slate-300 text-sm font-light leading-relaxed">
                      Property No. 22, Second Floor, Cabin No. 201, Gurunanak Market, Lajpat Nagar 4, New Delhi 110024
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-indigo-400 shadow-md flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">East Office</h4>
                    <p className="text-slate-300 text-sm font-light leading-relaxed">
                      Gr Fl F 400, 829, Upendra Nath Banerjee Road, Kalcher Math, Parnasree, Kolkata 700060
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-indigo-400 shadow-md flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">West Office</h4>
                    <p className="text-slate-300 text-sm font-light leading-relaxed">
                      Opp Vakola Market, Nehru Rd Santacruz (E) Mumbai 400055
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-indigo-400 shadow-md flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">Call Us</h4>
                    <a href="tel:+918287055441" className="text-slate-300 text-sm font-light hover:text-white transition-colors block">
                      +91-8287055441
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-indigo-400 shadow-md flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">Email Inquiry</h4>
                    <a href="mailto:info@vertex360.co.in" className="text-slate-300 text-sm font-light hover:text-white transition-colors block">
                      info@vertex360.co.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response assurance card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/30 to-slate-900/50 border border-indigo-900/20 backdrop-blur-sm relative overflow-hidden max-w-md">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/2 rounded-full blur-xl pointer-events-none" />
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="h-5 w-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-1.5">
                    Proposal Guarantee
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                    Submit your detailed event specifications, and our estimation team will deliver custom creative concepts and preliminary budgets within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Consultation / Event RFP Form (7 Columns) */}
          <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/2 rounded-full blur-3xl pointer-events-none" />
            <h3 className="font-outfit text-xl sm:text-2xl font-bold text-white mb-2">
              Request an Event Proposal
            </h3>
            <p className="font-inter text-slate-450 text-xs sm:text-sm font-light mb-8">
              Complete the event RFP form below to share your target timelines, attendees, and objectives.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Client details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-600 focus:bg-slate-950 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-all placeholder-slate-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-600 focus:bg-slate-950 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-all placeholder-slate-600"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              {/* Row 2: Business details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-600 focus:bg-slate-950 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-all placeholder-slate-600"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-600 focus:bg-slate-950 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-all placeholder-slate-600"
                    placeholder="Vertex Ltd."
                  />
                </div>
              </div>

              {/* Row 3: Event specification inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType" className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-2">
                    Event Type / Service
                  </label>
                  <select
                    name="eventType"
                    id="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-600 focus:bg-slate-950 rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="Experiential & Corporate Events">Experiential & Corporate Events</option>
                    <option value="Brand Activations & Roadshows">Brand Activations & Roadshows</option>
                    <option value="OOH Campaigns">OOH Campaigns</option>
                    <option value="Exhibitions & Stall Design">Exhibitions & Stall Design</option>
                    <option value="Retail Experiences">Retail Experiences</option>
                    <option value="Digital & Hybrid Experiences">Digital & Hybrid Experiences</option>
                    <option value="Short Films & Brand Videos">Short Films & Brand Videos</option>
                    <option value="MICE & Incentive Travel">MICE & Incentive Travel</option>
                    <option value="Corporate Gifting">Corporate Gifting</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="eventDate" className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-2">
                    Target Event Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="eventDate"
                      id="eventDate"
                      required
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-600 focus:bg-slate-950 rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none transition-all cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Row 4: Event size and budget metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="guestCount" className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-2">
                    Expected Attendance
                  </label>
                  <select
                    name="guestCount"
                    id="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-600 focus:bg-slate-950 rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="Under 100 guests">Under 100 guests</option>
                    <option value="100 - 500 guests">100 - 500 guests</option>
                    <option value="500 - 2,000 guests">500 - 2,000 guests</option>
                    <option value="2,000+ guests">2,000+ guests</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budgetRange" className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-2">
                    Estimated Budget Bracket
                  </label>
                  <select
                    name="budgetRange"
                    id="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-600 focus:bg-slate-950 rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none transition-all cursor-pointer"
                  >
                    <option value="Under 5 Lakhs">Under 5 Lakhs</option>
                    <option value="5 - 15 Lakhs">5 - 15 Lakhs</option>
                    <option value="15 - 50 Lakhs">15 - 50 Lakhs</option>
                    <option value="50 Lakhs+">50 Lakhs+</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Event location */}
              <div>
                <label htmlFor="location" className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-2">
                  Event Location / City
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-600 focus:bg-slate-950 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-all placeholder-slate-600"
                  placeholder="e.g. Mumbai, MH"
                />
              </div>

              {/* Row 6: Event detailed message */}
              <div>
                <label htmlFor="message" className="block text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-2">
                  RFP Details / Creative Scope
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-600 focus:bg-slate-950 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-all resize-none placeholder-slate-600"
                  placeholder="Share details about the event format, custom booth size requirements, specific gifting quantities, or travel guidelines..."
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-650 to-violet-650 hover:from-indigo-700 hover:to-violet-700 disabled:opacity-50 transition-all duration-300 shadow-md hover:shadow-indigo-500/10 active:scale-98 group cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting Proposal...
                  </>
                ) : (
                  <>
                    Submit RFP Request
                    <Send className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className="p-4 bg-emerald-950/60 border border-emerald-800/80 rounded-xl text-emerald-350 text-sm text-center font-medium animate-fade-in">
                  Thank you! Your event RFP has been successfully submitted. Our estimation coordinators will contact you within 24 hours.
                </div>
              )}
            </form>
          </div>

        </div>
      </section>
    </div>
  )
}
