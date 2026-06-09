import React from 'react'

export default function Clients() {
  const row1 = [
    'India Today',
    'ABP News',
    'SBI Life',
    'Shivani Cocreating IVF Success',
    'Godrej',
    'Bengal Tiles',
    'Canon',
    'Colgate',
    'Mahindra Tsubaki',
    'Xylem',
    'Times Hospitality',
    'Times of India',
  ]

  const row2 = [
    'Konica Minolta',
    'Lenovo',
    'BJP',
    'Glenmark',
    'Gulf',
    'Aristo Pharmaceuticals',
    'Dabur',
    'BlackBerry',
    'Zee',
    'Amway',
    'MP Birla Cement',
  ]

  // Double arrays to ensure seamless infinite looping marquee
  const row1Doubled = [...row1, ...row1]
  const row2Doubled = [...row2, ...row2]

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200 overflow-hidden relative">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-500/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-violet-500/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-12">
        <span className="text-xs font-extrabold tracking-widest text-indigo-600 uppercase mb-3.5 block">
          Clients
        </span>
        <h2 className="font-outfit text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="font-inter text-slate-600 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
          We have partnerered with top corporate brands, media outlets, and public organizations across India to deliver exceptional brand experiences.
        </p>
        <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto rounded-full mt-6" />
      </div>

      {/* Marquee Rows */}
      <div className="space-y-6 md:space-y-8 relative z-10 w-full">
        {/* Row 1 - Scroller moving Left */}
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="animate-marquee-left flex gap-4 pr-4">
            {row1Doubled.map((client, idx) => (
              <div
                key={`r1-${idx}`}
                className="flex items-center justify-center px-8 py-4 bg-slate-50 border border-slate-200 hover:border-indigo-500/35 hover:bg-white hover:shadow-md transition-all duration-300 rounded-2xl shadow-sm group cursor-default whitespace-nowrap min-w-[180px] text-center"
              >
                <span className="font-outfit text-sm sm:text-base font-bold text-slate-600 group-hover:text-indigo-650 transition-all">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scroller moving Right */}
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="animate-marquee-right flex gap-4 pr-4">
            {row2Doubled.map((client, idx) => (
              <div
                key={`r2-${idx}`}
                className="flex items-center justify-center px-8 py-4 bg-slate-50 border border-slate-200 hover:border-violet-500/35 hover:bg-white hover:shadow-md transition-all duration-300 rounded-2xl shadow-sm group cursor-default whitespace-nowrap min-w-[180px] text-center"
              >
                <span className="font-outfit text-sm sm:text-base font-bold text-slate-600 group-hover:text-violet-650 transition-all">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
