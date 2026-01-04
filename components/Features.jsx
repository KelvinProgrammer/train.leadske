"use client"

const tracks = [
  {
    title: "Virtual Assistant Track",
    icon: "support_agent",
    description: "Master client management and automation",
    modules: [
      "Client onboarding & CRM",
      "Lead scraping & enrichment",
      "Email + WhatsApp automation",
      "Calendar booking & follow-ups",
      "Reporting & SOP execution",
    ],
  },
  {
    title: "Social Media Manager Track",
    icon: "campaign",
    description: "Grow brands across all platforms",
    modules: [
      "Content strategy",
      "Platform-specific growth (FB, IG, LinkedIn, X)",
      "Scheduling via Global.LeadsKe.Pro",
      "Ad creatives basics",
      "Analytics & reporting",
    ],
  },
  {
    title: "Digital Marketer Track",
    icon: "trending_up",
    description: "Drive traffic and conversions",
    modules: [
      "SEO (using SEO.LeadsKe.Pro)",
      "Funnels & landing pages",
      "Email/SMS automation",
      "Paid ads fundamentals",
      "Conversion optimization",
    ],
  },
  {
    title: "Sales & Pitching Track",
    icon: "handshake",
    description: "Close deals and grow revenue",
    highlight: true,
    modules: [
      "Cold outreach",
      "Proposal writing",
      "Objection handling",
      "Demo pitching LeadsKe",
      "Closing SMEs & agencies",
    ],
  },
]

export default function Features() {
  return (
    <section id="tracks" className="w-full py-20 bg-neutral-200">
      <div className="w-full">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center items-center px-6">
            <p className="text-neutral-500 text-sm font-medium uppercase tracking-wider">Structured Learning Paths</p>
            <h2 className="text-black tracking-tight text-3xl md:text-4xl font-bold leading-tight max-w-2xl">
              Four career tracks. Real-world skills.
            </h2>
            <p className="text-neutral-600 text-base font-normal leading-relaxed max-w-[600px]">
              Choose your path and master the skills that employers are looking for. Each track includes hands-on projects with real LeadsKe tools.
            </p>
          </div>

          {/* Track Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-400">
            {tracks.map((track, idx) => (
              <div
                key={idx}
                className={`flex flex-col p-8 ${track.highlight ? 'bg-neutral-300' : 'bg-neutral-200'}`}
              >
                {track.highlight && (
                  <div className="mb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-600 bg-neutral-400 px-2 py-1 rounded">
                      Most Important
                    </span>
                  </div>
                )}

                <div className="w-12 h-12 rounded-lg bg-black/5 flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-black text-2xl">{track.icon}</span>
                </div>

                <h3 className="text-black text-lg font-semibold mb-2">{track.title}</h3>
                <p className="text-neutral-500 text-sm mb-6">{track.description}</p>

                <div className="flex flex-col gap-3 mt-auto">
                  {track.modules.map((module, moduleIdx) => (
                    <div key={moduleIdx} className="flex items-start gap-2">
                      <span className="text-neutral-500 mt-0.5">
                        <span className="material-symbols-outlined text-sm">check</span>
                      </span>
                      <span className="text-neutral-600 text-sm">{module}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
