"use client"

import Link from "next/link"
import Footer from "@/components/Footer"

const engines = [
  {
    id: 1,
    name: "Viral Score Engine",
    tagline: "Know before you publish",
    description: "Our AI analyzes thousands of viral signals to predict how your content will perform. Get a score from 0-100 with actionable recommendations to boost virality.",
    icon: "trending_up",
    color: "from-green-500 to-emerald-600",
    capabilities: [
      "Predictive viral score (0-100)",
      "Thumbnail effectiveness analysis",
      "Title optimization suggestions",
      "Hook strength evaluation",
      "Audience retention prediction",
    ],
    stats: { value: "87%", label: "Accuracy rate" },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVbQ2u9KNxODFqECn4ixppNtnyTpQ4V77Fi7BWqmXf3eyiZrX9JBEFhd-ovly-app9DPAGFG2tFQaUD7rPmBUblY-RAIqhtzCu6ziXLO7NoOls3vS-2ii7AyxH5xKMEJJugnWC6ZqQEzDtFycwbekS55JRn2MOF1h0NbheZ0Oj5Q4hx3XXMESbhukuN8EhSGOpQlfzCxjpjOV6tFCpz7xaXJS37K2m7aCstJasnx-Np52eSE7E9G_ZRoxANJ0h6zy5qeKEBTZYp4UO",
  },
  {
    id: 2,
    name: "Smart Tagging AI",
    tagline: "SEO that actually works",
    description: "Automatically generate high-ranking tags, keywords, and hashtags optimized for each platform. Our AI knows what's trending and what the algorithm wants.",
    icon: "tag",
    color: "from-blue-500 to-cyan-600",
    capabilities: [
      "Platform-specific tag generation",
      "Trending hashtag detection",
      "Keyword density optimization",
      "Competitor tag analysis",
      "Search ranking prediction",
    ],
    stats: { value: "3.2x", label: "More discoverable" },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBteg7f8evK2lCYBWBzO2laq401r_fBqc1fAek2tAnG7cExMehdIQE3XekU8OMUzwqX8z7mHo_k-ttZZzbZzIsvWsfuQ37Qdxts-CF37GZi25u7t4yI3CqXK83Eh5colBx05ZxCO3F0P5MtX41SD2ZWpbQ_zOao8moklTzi0T4UITsIiWEkZgAJHYc4zUx08JLFRDL69D8uynYdAlk7rsctc1nY2p8dHLibMtMSSMChD-qznMQWMEn0NCR8nhD67hEPbgzxp-0L5I0e",
  },
  {
    id: 3,
    name: "Content Analyzer",
    tagline: "Deep insights in seconds",
    description: "Get comprehensive analysis of any video. Understand sentiment, pacing, engagement patterns, and exactly where viewers drop off—with AI-powered recommendations.",
    icon: "analytics",
    color: "from-purple-500 to-pink-600",
    capabilities: [
      "Frame-by-frame engagement analysis",
      "Sentiment scoring throughout",
      "Pacing and rhythm detection",
      "Audio/visual quality assessment",
      "Drop-off point identification",
    ],
    stats: { value: "15s", label: "Average analysis time" },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApv_hYd0tl_7QYavmaS3Dl1phgrvViIXB29WIeV5STUwpBjw-2Yp534pH8y39XVmdtxN1GMmR5f3MzZReMj_CPf23t10ADquRkTiWVBeDewCM8ZMnoiah8P20j6xewdvG4lMsZzdiy0QHLKtVgV1P3T-SXv_soVTMliHfUWlGO9mF7wndrENZAVy1k0xxLSCjAwFmDXhVQV6qMJwGQbnzBx4HmXRcz0Yd0YNE4LHtXYQGnR8DA_6GT6GlfqVNCZz8T1FmJQH5FkJ85",
  },
  {
    id: 4,
    name: "Repurposing Studio",
    tagline: "One video, infinite content",
    description: "Transform long-form content into platform-optimized shorts, clips, and posts. Our AI identifies the most engaging moments and reformats them automatically.",
    icon: "autorenew",
    color: "from-orange-500 to-red-600",
    capabilities: [
      "Auto-detect viral moments",
      "Smart cropping for vertical video",
      "Captions & subtitles generation",
      "Platform-specific formatting",
      "Batch export to all platforms",
    ],
    stats: { value: "10x", label: "Content output" },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVbQ2u9KNxODFqECn4ixppNtnyTpQ4V77Fi7BWqmXf3eyiZrX9JBEFhd-ovly-app9DPAGFG2tFQaUD7rPmBUblY-RAIqhtzCu6ziXLO7NoOls3vS-2ii7AyxH5xKMEJJugnWC6ZqQEzDtFycwbekS55JRn2MOF1h0NbheZ0Oj5Q4hx3XXMESbhukuN8EhSGOpQlfzCxjpjOV6tFCpz7xaXJS37K2m7aCstJasnx-Np52eSE7E9G_ZRoxANJ0h6zy5qeKEBTZYp4UO",
  },
  {
    id: 5,
    name: "Trend Radar",
    tagline: "Catch trends before they peak",
    description: "Real-time monitoring of emerging trends across all platforms. Get alerts when trends match your niche and AI-generated content ideas to capitalize on them.",
    icon: "radar",
    color: "from-primary to-blue-600",
    capabilities: [
      "Cross-platform trend detection",
      "Niche-specific trend matching",
      "Trend velocity scoring",
      "Content idea generation",
      "Optimal posting time prediction",
    ],
    stats: { value: "48hrs", label: "Early trend detection" },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBteg7f8evK2lCYBWBzO2laq401r_fBqc1fAek2tAnG7cExMehdIQE3XekU8OMUzwqX8z7mHo_k-ttZZzbZzIsvWsfuQ37Qdxts-CF37GZi25u7t4yI3CqXK83Eh5colBx05ZxCO3F0P5MtX41SD2ZWpbQ_zOao8moklTzi0T4UITsIiWEkZgAJHYc4zUx08JLFRDL69D8uynYdAlk7rsctc1nY2p8dHLibMtMSSMChD-qznMQWMEn0NCR8nhD67hEPbgzxp-0L5I0e",
  },
]

const integrations = [
  { name: "YouTube", icon: "play_arrow", color: "text-red-500" },
  { name: "TikTok", icon: "music_note", color: "text-white" },
  { name: "Instagram", icon: "photo_camera", color: "text-pink-500" },
  { name: "Twitter/X", icon: "flutter_dash", color: "text-blue-400" },
  { name: "LinkedIn", icon: "work", color: "text-blue-600" },
  { name: "Twitch", icon: "videocam", color: "text-purple-500" },
]

const workflow = [
  { step: "1", title: "Connect", description: "Link your YouTube, paste a URL, or upload directly", icon: "link" },
  { step: "2", title: "Analyze", description: "AI engines process your content in seconds", icon: "psychology" },
  { step: "3", title: "Optimize", description: "Get scores, tags, and improvement suggestions", icon: "tune" },
  { step: "4", title: "Repurpose", description: "Auto-generate content for every platform", icon: "autorenew" },
  { step: "5", title: "Publish", description: "Export optimized content ready to go viral", icon: "rocket_launch" },
]

export default function AgentsPage() {
  return (
    <main className="w-full bg-[#101c22]">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-[#101c22] to-[#101c22] pointer-events-none"></div>

        <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-6">
            <span className="material-symbols-outlined text-[16px]">smart_toy</span>
            <span>AI-Powered Engines</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Meet the <span className="text-primary">AI engines</span> behind viral content
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Five specialized AI systems work together to analyze, optimize, and repurpose your content for maximum reach across every platform.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-primary text-[#101c22] font-bold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(37,175,244,0.3)] inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined">rocket_launch</span>
              Try All Engines Free
            </Link>
            <Link
              href="#engines"
              className="px-8 py-4 border border-[#223c49] text-white font-bold rounded-lg hover:bg-[#182b34] transition-all inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined">arrow_downward</span>
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Workflow Section */}
      <section className="w-full border-y border-[#223c49] bg-[#182b34]/50">
        <div className="w-full grid grid-cols-2 md:grid-cols-5">
          {workflow.map((item, idx) => (
            <div key={idx} className="relative p-6 lg:p-8 text-center border-r border-[#223c49] last:border-r-0 group hover:bg-[#182b34] transition-colors">
              {idx < workflow.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <span className="material-symbols-outlined text-slate-600 text-xl">chevron_right</span>
                </div>
              )}
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-3 group-hover:bg-primary group-hover:text-[#101c22] transition-colors">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <div className="text-xs text-primary font-bold mb-1">Step {item.step}</div>
              <h3 className="text-white font-bold mb-1">{item.title}</h3>
              <p className="text-slate-400 text-xs hidden lg:block">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Engines Section */}
      <section id="engines" className="w-full py-20">
        <div className="px-6 max-w-5xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Five engines. <span className="text-primary">One platform.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Each engine is specialized for a specific task, but they work together seamlessly to maximize your content's potential.
          </p>
        </div>

        <div className="space-y-0">
          {engines.map((engine, idx) => (
            <div
              key={engine.id}
              className={`w-full border-y border-[#223c49] ${idx % 2 === 0 ? 'bg-[#182b34]/30' : 'bg-[#101c22]'}`}
            >
              <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Content */}
                  <div className={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${engine.color} flex items-center justify-center shadow-lg`}>
                        <span className="material-symbols-outlined text-white text-2xl">{engine.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white">{engine.name}</h3>
                        <p className="text-primary font-medium">{engine.tagline}</p>
                      </div>
                    </div>

                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">{engine.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {engine.capabilities.map((cap, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                          <span className="text-slate-300 text-sm">{cap}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-3">
                        <span className={`text-4xl font-black bg-gradient-to-r ${engine.color} bg-clip-text text-transparent`}>
                          {engine.stats.value}
                        </span>
                        <span className="text-slate-400 text-sm">{engine.stats.label}</span>
                      </div>
                      <Link
                        href="/signup"
                        className="px-6 py-3 bg-primary/10 border border-primary/30 text-primary font-bold rounded-lg hover:bg-primary/20 transition-all inline-flex items-center gap-2"
                      >
                        Try it free
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </Link>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`relative ${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className={`absolute -inset-4 bg-gradient-to-r ${engine.color} rounded-2xl blur-xl opacity-20`}></div>
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-[#223c49]">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url("${engine.image}")` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#101c22] via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations Section */}
      <section className="w-full py-20 bg-[#182b34]/30">
        <div className="px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Works with <span className="text-primary">every platform</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Analyze content from anywhere. Repurpose for everywhere.
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {integrations.map((platform, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#182b34] border border-[#223c49] rounded-xl hover:border-primary/50 transition-colors group"
              >
                <span className={`material-symbols-outlined text-4xl mb-3 ${platform.color} group-hover:scale-110 transition-transform inline-block`}>
                  {platform.icon}
                </span>
                <p className="text-white font-medium text-sm">{platform.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How They Work Together */}
      <section className="w-full py-20 bg-[#101c22]">
        <div className="px-6 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              How it all <span className="text-primary">connects</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Each engine enhances the others. The more you use, the smarter they get.
            </p>
          </div>

          <div className="relative">
            {/* Center Hub */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-blue-600 items-center justify-center z-10 shadow-[0_0_50px_rgba(37,175,244,0.5)]">
              <div className="text-center">
                <span className="material-symbols-outlined text-[#101c22] text-3xl">hub</span>
                <p className="text-[#101c22] font-bold text-xs mt-1">ViralEngine</p>
              </div>
            </div>

            {/* Engine Cards in Circle */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:p-20">
              {engines.slice(0, 5).map((engine, idx) => (
                <div
                  key={engine.id}
                  className={`p-6 bg-[#182b34] border border-[#223c49] rounded-xl hover:border-primary/50 transition-colors ${idx === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${engine.color} flex items-center justify-center mb-4`}>
                    <span className="material-symbols-outlined text-white text-xl">{engine.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{engine.name}</h3>
                  <p className="text-slate-400 text-sm">{engine.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-gradient-to-b from-[#182b34]/30 to-[#101c22]">
        <div className="px-6 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
            <span className="material-symbols-outlined text-4xl">rocket_launch</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to unleash all <span className="text-primary">five engines</span>?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Start your free trial today. No credit card required. Full access to every AI engine.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="/signup"
              className="px-8 py-4 bg-primary text-[#101c22] font-bold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(37,175,244,0.3)] inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined">auto_awesome</span>
              Start Free Trial
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 border border-[#223c49] text-white font-bold rounded-lg hover:bg-[#182b34] transition-all inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined">payments</span>
              View Pricing
            </Link>
          </div>

          <p className="text-slate-500 text-sm">
            14-day free trial • No credit card • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
