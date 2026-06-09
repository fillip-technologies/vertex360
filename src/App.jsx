import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatWeCreate from './components/WhatWeCreate'
import FeaturedProjects from './components/FeaturedProjects'
import WhatWeDo from './components/WhatWeDo'
import AudienceCarousel from './components/AudienceCarousel'
import OurProcess from './components/OurProcess'
import About from './components/About'
import Clients from './components/Clients'
import MissionVision from './components/MissionVision'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import ServicesPage from './services/ServicesPage'
import ExperientialPage from './services/ExperientialPage'
import ActivationsPage from './services/ActivationsPage'
import ExhibitionsPage from './services/ExhibitionsPage'
import DigitalPage from './services/DigitalPage'
import ContentFilmsPage from './services/ContentFilmsPage'
import MicePage from './services/MicePage'
import GiftingPage from './services/GiftingPage'
import ContactPage from './contact/ContactPage'
import AboutPage from './about/AboutPage'
import PortfolioPage from './portfolio/PortfolioPage'

function HomePage() {
  return (
    <>
      {/* Hero Banner with video background */}
      <Hero />

      {/* What We Create Section */}
      <WhatWeCreate />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Services / What We Do Section */}
      <WhatWeDo />

      {/* Mission, Vision & Core Values Section */}
      <MissionVision />

      {/* Detailed About Section */}
      <About />

      {/* Interactive 3D Audience Carousel */}
      <AudienceCarousel />

      {/* Our Process Section */}
      <OurProcess />

      {/* Infinite scrolling Clients Marquee */}
      <Clients />

      {/* Client Testimonials Section */}
      <Testimonials />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Navigation bar */}
      <Navbar />

      {/* Main page layout */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/experiential" element={<ExperientialPage />} />
          <Route path="/services/activations" element={<ActivationsPage />} />
          <Route path="/services/exhibitions" element={<ExhibitionsPage />} />
          <Route path="/services/digital" element={<DigitalPage />} />
          <Route path="/services/content" element={<ContentFilmsPage />} />
          <Route path="/services/mice" element={<MicePage />} />
          <Route path="/services/gifting" element={<GiftingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>

        {/* Footer with corporate contact details */}
        <Footer />
      </main>
    </div>
  )
}

export default App
