import React, { useState } from 'react'
import { ArrowRight, Compass, Shield, Award, Sparkles, Building2, Lightbulb, Target, TrendingUp } from 'lucide-react'

// Import images
import imgDubai from '../assets/images/project_dubai.png'
import imgGreenTourism from '../assets/images/project_green_tourism.png'
import imgAdventureTourism from '../assets/images/project_adventure_tourism.png'
import imgManthanBastar from '../assets/images/project_manthan_bastar.png'
import imgBrinton from '../assets/images/project_brinton.png'
import imgGantra from '../assets/images/project_gantra.png'

export default function FeaturedProjects() {
  const [activeTabs, setActiveTabs] = useState({
    2: 'challenge', // Green Tourism
    3: 'challenge', // Adventure Tourism
    4: 'challenge', // Manthan Bastar
    5: 'challenge', // Brinton
    6: 'challenge', // Gantra
  })

  const handleTabChange = (projectId, tab) => {
    setActiveTabs((prev) => ({
      ...prev,
      [projectId]: tab,
    }))
  }

  const dubaiProject = {
    id: 1,
    title: 'Dubai Tourism Showcase',
    image: imgDubai,
    challenge: "Create a premium destination experience that reflects Dubai's luxury positioning.",
    solution: 'Designed an immersive Arabic-inspired environment featuring custom fabrication, high-impact LED integration, thematic décor and premium guest engagement touchpoints.',
    outcome: 'Delivered a visually stunning showcase that enhanced destination visibility, generated meaningful stakeholder interactions and elevated overall attendee experience.',
  }

  const projectsGrid3 = [
    {
      id: 2,
      title: 'Green Tourism Summit',
      image: imgGreenTourism,
      challenge: 'Create a national platform to discuss sustainable tourism and future-ready travel ecosystems.',
      solution: 'End-to-end summit production including stage design, delegate management, speaker coordination, branding and audience engagement.',
      outcome: 'Successfully brought together policymakers, tourism boards, industry leaders and sustainability advocates under one impactful platform.',
      tag: 'Sustainability'
    },
    {
      id: 3,
      title: 'Adventure Tourism Summit',
      image: imgAdventureTourism,
      challenge: "Develop an engaging platform highlighting India's growing adventure tourism sector.",
      solution: 'Created a dynamic summit environment with experiential branding, destination showcases and stakeholder networking zones.',
      outcome: 'Increased visibility for participating destinations and facilitated valuable industry collaborations.',
      tag: 'Adventure'
    },
    {
      id: 4,
      title: 'Manthan Bastar',
      image: imgManthanBastar,
      challenge: 'Execute a high-profile thought leadership forum connecting government, industry and local communities.',
      solution: 'Managed complete event production including stage design, branding, audience management and speaker experiences.',
      outcome: 'Delivered a successful knowledge-sharing platform that generated strong engagement and regional visibility.',
      tag: 'Heritage'
    }
  ]

  const projectsGrid2 = [
    {
      id: 5,
      title: 'Brinton Annual Conference',
      image: imgBrinton,
      challenge: 'Deliver a large-scale corporate conference while maintaining a premium brand experience.',
      solution: 'Built a custom conference environment featuring large-format LED screens, stage production, delegate management and seamless show flow.',
      outcome: 'Achieved a highly professional conference experience with strong audience engagement and flawless execution.',
      tag: 'Corporate'
    },
    {
      id: 6,
      title: 'Gantra Medical Engagement',
      image: imgGantra,
      challenge: 'Increase attendee engagement during a medical conference.',
      solution: 'Designed a unique road-themed experiential environment with interactive educational touchpoints and immersive branding.',
      outcome: 'Enhanced participant involvement, improved session engagement and strengthened brand recall.',
      tag: 'Medical'
    }
  ]

  return (
    <section id="featured-projects" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          {/* <span className="text-xs font-extrabold tracking-widest text-indigo-600 uppercase mb-3 block">
            Section 4 – Featured Projects
          </span> */}
          <h2 className="font-outfit text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Featured Projects
          </h2>
          <p className="font-inter text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            A showcase of experiences that brought brands, leaders and communities together through impactful event execution.
          </p>
          <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mt-6" />
        </div>

        {/* Large Highlight Project Card (Dubai Tourism) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row gap-8 items-stretch mb-12">
          {/* Image */}
          <div className="lg:w-[48%] min-h-[260px] sm:min-h-[340px] rounded-2xl overflow-hidden relative border border-slate-100 flex-shrink-0">
            <img
              src={dubaiProject.image}
              alt={dubaiProject.title}
              className="absolute inset-0 w-full h-full object-cover hover:scale-103 transition-transform duration-700 pointer-events-none"
            />
          </div>

          {/* Content */}
          <div className="flex-grow flex flex-col justify-between py-2">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 bg-indigo-50 border border-indigo-100 rounded-lg text-[10px] font-extrabold text-indigo-650 uppercase tracking-wider">
                  Featured Case Study
                </span>
              </div>
              <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
                {dubaiProject.title}
              </h3>

              {/* Challenge / Solution / Outcome Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-slate-100 pt-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-rose-600">
                    <Target className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Challenge</span>
                  </div>
                  <p className="font-inter text-slate-650 text-xs sm:text-sm leading-relaxed font-light">
                    {dubaiProject.challenge}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 text-indigo-600">
                    <Lightbulb className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Solution</span>
                  </div>
                  <p className="font-inter text-slate-650 text-xs sm:text-sm leading-relaxed font-light">
                    {dubaiProject.solution}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2 text-emerald-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Outcome</span>
                  </div>
                  <p className="font-inter text-slate-650 text-xs sm:text-sm leading-relaxed font-light">
                    {dubaiProject.outcome}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-slate-100 pt-6 mt-6 flex justify-start">
              <a
                href="/portfolio"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-750 transition-colors group cursor-pointer"
              >
                View Case Study
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* 3-Card Grid Row (Green Tourism, Adventure Tourism, Manthan Bastar) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projectsGrid3.map((project) => {
            const activeTab = activeTabs[project.id] || 'challenge'
            return (
              <div
                key={project.id}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-lg text-[9px] font-bold text-slate-200 uppercase tracking-wider">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-outfit text-lg font-extrabold text-slate-900 mb-4 leading-tight">
                      {project.title}
                    </h4>

                    {/* Horizontal Tab Bar */}
                    <div className="flex border-b border-slate-100 mb-4 gap-2">
                      {['challenge', 'solution', 'outcome'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => handleTabChange(project.id, tab)}
                          className={`pb-2 text-[10px] font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${activeTab === tab
                              ? 'border-indigo-650 text-indigo-650'
                              : 'border-transparent text-slate-400 hover:text-slate-600'
                            }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Tab Content Display */}
                    <div className="min-h-[90px] mb-4">
                      {activeTab === 'challenge' && (
                        <p className="font-inter text-slate-650 text-xs sm:text-sm leading-relaxed font-light animate-fade-in">
                          {project.challenge}
                        </p>
                      )}
                      {activeTab === 'solution' && (
                        <p className="font-inter text-slate-650 text-xs sm:text-sm leading-relaxed font-light animate-fade-in">
                          {project.solution}
                        </p>
                      )}
                      {activeTab === 'outcome' && (
                        <p className="font-inter text-slate-650 text-xs sm:text-sm leading-relaxed font-light animate-fade-in">
                          {project.outcome}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="border-t border-slate-100 pt-4 mt-2">
                    <a
                      href="/portfolio"
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-750 transition-colors group cursor-pointer"
                    >
                      View Case Study
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* 2-Card Grid Row (Brinton Annual Conference, Gantra Medical Engagement) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsGrid2.map((project) => {
            const activeTab = activeTabs[project.id] || 'challenge'
            return (
              <div
                key={project.id}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:translate-y-[-4px] transition-all duration-300 flex flex-col sm:flex-row justify-between"
              >
                {/* Image */}
                <div className="h-48 sm:h-auto sm:w-[40%] relative overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover absolute inset-0 pointer-events-none"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-lg text-[9px] font-bold text-slate-200 uppercase tracking-wider">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-outfit text-lg font-extrabold text-slate-900 mb-4 leading-tight">
                      {project.title}
                    </h4>

                    {/* Horizontal Tab Bar */}
                    <div className="flex border-b border-slate-100 mb-4 gap-2">
                      {['challenge', 'solution', 'outcome'].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => handleTabChange(project.id, tab)}
                          className={`pb-2 text-[10px] font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${activeTab === tab
                              ? 'border-indigo-650 text-indigo-650'
                              : 'border-transparent text-slate-400 hover:text-slate-600'
                            }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Tab Content Display */}
                    <div className="min-h-[90px] mb-4">
                      {activeTab === 'challenge' && (
                        <p className="font-inter text-slate-650 text-xs sm:text-sm leading-relaxed font-light animate-fade-in">
                          {project.challenge}
                        </p>
                      )}
                      {activeTab === 'solution' && (
                        <p className="font-inter text-slate-650 text-xs sm:text-sm leading-relaxed font-light animate-fade-in">
                          {project.solution}
                        </p>
                      )}
                      {activeTab === 'outcome' && (
                        <p className="font-inter text-slate-650 text-xs sm:text-sm leading-relaxed font-light animate-fade-in">
                          {project.outcome}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="border-t border-slate-100 pt-4 mt-2">
                    <a
                      href="/portfolio"
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-750 transition-colors group cursor-pointer"
                    >
                      View Case Study
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
