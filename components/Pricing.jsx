"use client"

import Link from "next/link"

const certifications = [
  {
    name: "Certified LeadsKe VA",
    icon: "support_agent",
    description: "Virtual Assistant certification",
    requirements: [
      "Complete VA track course",
      "Pass practical lab assessment",
      "CRM & automation proficiency",
    ],
  },
  {
    name: "Certified Social Media Manager",
    icon: "campaign",
    description: "Social media management certification",
    requirements: [
      "Complete SMM track course",
      "Pass content strategy assessment",
      "Global.LeadsKe.Pro proficiency",
    ],
  },
  {
    name: "Certified Digital Marketer",
    icon: "trending_up",
    description: "Digital marketing certification",
    requirements: [
      "Complete Digital Marketer track",
      "Pass SEO & funnel assessment",
      "SEO.LeadsKe.Pro proficiency",
    ],
  },
  {
    name: "Certified LeadsKe Sales Partner",
    icon: "handshake",
    description: "Sales & pitching certification",
    highlight: true,
    requirements: [
      "Complete Sales & Pitching track",
      "Pass demo & closing assessment",
      "Proven sales methodology",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="certification" className="w-full py-20 bg-[#0a0a0a]">
      <div className="w-full">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center items-center px-6">
            <p className="text-neutral-500 text-sm font-medium uppercase tracking-wider">Certification & Skill Validation</p>
            <h2 className="text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight max-w-2xl">
              Get certified. Get hired.
            </h2>
            <p className="text-neutral-400 text-base font-normal leading-relaxed max-w-[600px]">
              Complete your track, pass the practical assessment, and earn a verifiable certification that employers trust.
            </p>
          </div>

          {/* Certification Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`flex flex-col p-8 ${cert.highlight ? 'bg-[#141414]' : 'bg-[#0a0a0a]'}`}
              >
                {cert.highlight && (
                  <div className="mb-4">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 bg-neutral-800 px-2 py-1 rounded">
                      High Demand
                    </span>
                  </div>
                )}

                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined text-white text-2xl">{cert.icon}</span>
                </div>

                <h3 className="text-white text-base font-semibold mb-1">{cert.name}</h3>
                <p className="text-neutral-500 text-sm mb-6">{cert.description}</p>

                <div className="flex flex-col gap-3 mb-6">
                  {cert.requirements.map((req, reqIdx) => (
                    <div key={reqIdx} className="flex items-start gap-2">
                      <span className="text-neutral-600 mt-0.5">
                        <span className="material-symbols-outlined text-sm">check</span>
                      </span>
                      <span className="text-neutral-400 text-sm">{req}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/signup"
                  className="mt-auto w-full flex items-center justify-center rounded-lg h-10 px-4 bg-white/5 border border-neutral-800 text-white text-sm font-medium transition-all hover:bg-white/10"
                >
                  Start Track
                </Link>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div className="px-6 md:px-12 lg:px-16 xl:px-24">
            <div className="p-8 bg-[#141414] border border-neutral-800 rounded-lg">
              <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider mb-6">How Certification Works</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-medium">1</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Complete Course</p>
                    <p className="text-neutral-500 text-xs mt-1">Finish all modules in your chosen track</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-medium">2</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Pass Practical Lab</p>
                    <p className="text-neutral-500 text-xs mt-1">Demonstrate real skills with auto-evaluated tasks</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-medium">3</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Get Certified</p>
                    <p className="text-neutral-500 text-xs mt-1">Receive verifiable certificate and unlock tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
