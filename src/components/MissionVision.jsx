import { Target, Eye, Compass, ShieldCheck, HeartHandshake, Zap, Scale } from 'lucide-react'

export default function MissionVision() {
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

  return (
    <section id="mission-vision" className="py-16 sm:py-20 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-indigo-600 font-semibold tracking-wider uppercase mb-3">
            Our Purpose & DNA
          </h2>
          <p className="font-outfit text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Mission, Vision & Values
          </p>
          <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full" />
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

          {/* Mission Card */}
          <div className="group relative bg-slate-50 border border-slate-200 hover:border-violet-500/30 rounded-3xl p-8 sm:p-10 transition-all duration-300 shadow-sm overflow-hidden hover:bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl group-hover:bg-violet-500/10 transition-colors" />

            <div className="flex gap-4 sm:gap-6 items-start">
              <div className="p-4 bg-violet-100/60 rounded-2xl text-violet-600 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-violet-200/50">
                <Target className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-outfit text-2xl font-bold text-slate-900 mb-4">
                  Our Mission
                </h3>
                <p className="font-inter text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  To transform business objectives into memorable human experiences powered by creativity, production discipline, and measurable impact.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-slate-50 border border-slate-200 hover:border-indigo-500/30 rounded-3xl p-8 sm:p-10 transition-all duration-300 shadow-sm overflow-hidden hover:bg-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors" />

            <div className="flex gap-4 sm:gap-6 items-start">
              <div className="p-4 bg-indigo-100/60 rounded-2xl text-indigo-600 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-indigo-200/50">
                <Eye className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-outfit text-2xl font-bold text-slate-900 mb-4">
                  Our Vision
                </h3>
                <p className="font-inter text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  To become the most trusted experience partner for brands that want scale, consistency, and excellence across physical, digital, and hybrid worlds.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Core Values Section */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12">
          <h3 className="font-outfit text-xl sm:text-2xl font-extrabold text-slate-900 text-center mb-10 tracking-tight">
            The Core Values That Drive Us
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="flex flex-col items-center text-center p-4 bg-white border border-slate-200 rounded-2xl hover:border-indigo-500/30 hover:bg-slate-50 transition-all duration-300 group shadow-sm">
                  <div className="p-3 bg-indigo-100/60 border border-indigo-200/50 rounded-xl text-indigo-650 group-hover:bg-indigo-200/80 group-hover:scale-110 transition-all duration-300 mb-4 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-outfit text-sm sm:text-base font-bold text-slate-800 mb-2 leading-tight">
                    {value.title}
                  </h4>
                  <p className="font-inter text-slate-600 text-xs leading-relaxed font-light">
                    {value.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
