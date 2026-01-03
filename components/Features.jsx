"use client"

const features = [
  {
    title: "Deep Analysis",
    description: "Unlock retention metrics, sentiment analysis, and audience drop-off points.",
    icon: "analytics",
  },
  {
    title: "Smart Tagging",
    description: "Auto-generate high-ranking SEO tags and keywords for every platform.",
    icon: "tag",
  },
  {
    title: "AI Summaries",
    description: "Get TL;DRs, key takeaways, and timestamped chapters in seconds.",
    icon: "auto_awesome",
  },
  {
    title: "Instant Repurposing",
    description: "Convert long-form to Shorts, Reels, TikToks, and Blog posts instantly.",
    icon: "autorenew",
  },
]

export default function Features() {
  return (
    <section className="w-full py-20 bg-[#182b34]/30">
      <div className="w-full">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center items-center px-6">
            <h2 className="text-white tracking-tight text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              The 4 Pillars of <span className="text-primary">Viral Growth</span>
            </h2>
            <p className="text-slate-400 text-lg font-normal leading-normal max-w-[720px]">
              Everything you need to dominate the algorithm in one platform. No more switching between five different tools.
            </p>
          </div>

          {/* Feature Cards - Full Width */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group flex gap-4 border border-[#223c49] bg-[#182b34] p-8 lg:p-10 flex-col hover:bg-[#1a3340] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#101c22] transition-colors">
                  <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-white text-xl font-bold leading-tight">{feature.title}</h3>
                  <p className="text-slate-400 text-sm font-normal leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
