"use client"

import Link from "next/link"
import Footer from "@/components/Footer"

const stats = [
  { value: "10M+", label: "Videos Analyzed", icon: "play_circle" },
  { value: "50K+", label: "Active Creators", icon: "group" },
  { value: "500M+", label: "Views Generated", icon: "visibility" },
  { value: "99.9%", label: "Uptime", icon: "verified" },
]

const values = [
  {
    title: "Creator-First",
    description: "Every feature we build starts with a simple question: will this help creators succeed? We obsess over your workflow.",
    icon: "favorite",
  },
  {
    title: "AI That Works",
    description: "No gimmicks. Our AI delivers real, measurable results. We test every model against millions of viral videos.",
    icon: "psychology",
  },
  {
    title: "Radical Transparency",
    description: "You see exactly how our algorithms work. No black boxes. We explain every viral score and recommendation.",
    icon: "visibility",
  },
  {
    title: "Speed Matters",
    description: "In the creator economy, timing is everything. Our engine processes videos in seconds, not hours.",
    icon: "bolt",
  },
]

const timeline = [
  {
    year: "2022",
    title: "The Spark",
    description: "Started as a side project to help YouTubers understand why some videos go viral and others don't.",
  },
  {
    year: "2023",
    title: "Launch & Growth",
    description: "Launched publicly. Analyzed 1M videos in the first month. Creators saw 3x increase in viral hit rate.",
  },
  {
    year: "2024",
    title: "AI Revolution",
    description: "Introduced GPT-powered analysis and multi-platform repurposing. Became the go-to tool for top creators.",
  },
  {
    year: "2025",
    title: "The Future",
    description: "Building the complete creator intelligence platform. One video in, viral ecosystem out.",
  },
]

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    bio: "Former YouTube product lead. Built recommendation systems that drove 1B+ views.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVbQ2u9KNxODFqECn4ixppNtnyTpQ4V77Fi7BWqmXf3eyiZrX9JBEFhd-ovly-app9DPAGFG2tFQaUD7rPmBUblY-RAIqhtzCu6ziXLO7NoOls3vS-2ii7AyxH5xKMEJJugnWC6ZqQEzDtFycwbekS55JRn2MOF1h0NbheZ0Oj5Q4hx3XXMESbhukuN8EhSGOpQlfzCxjpjOV6tFCpz7xaXJS37K2m7aCstJasnx-Np52eSE7E9G_ZRoxANJ0h6zy5qeKEBTZYp4UO",
  },
  {
    name: "Sarah Kim",
    role: "CTO",
    bio: "AI researcher from Stanford. Published 20+ papers on content understanding and virality.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBteg7f8evK2lCYBWBzO2laq401r_fBqc1fAek2tAnG7cExMehdIQE3XekU8OMUzwqX8z7mHo_k-ttZZzbZzIsvWsfuQ37Qdxts-CF37GZi25u7t4yI3CqXK83Eh5colBx05ZxCO3F0P5MtX41SD2ZWpbQ_zOao8moklTzi0T4UITsIiWEkZgAJHYc4zUx08JLFRDL69D8uynYdAlk7rsctc1nY2p8dHLibMtMSSMChD-qznMQWMEn0NCR8nhD67hEPbgzxp-0L5I0e",
  },
  {
    name: "Marcus Johnson",
    role: "Head of Product",
    bio: "Creator turned product builder. 2M+ subscribers on YouTube before joining ViralEngine.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApv_hYd0tl_7QYavmaS3Dl1phgrvViIXB29WIeV5STUwpBjw-2Yp534pH8y39XVmdtxN1GMmR5f3MzZReMj_CPf23t10ADquRkTiWVBeDewCM8ZMnoiah8P20j6xewdvG4lMsZzdiy0QHLKtVgV1P3T-SXv_soVTMliHfUWlGO9mF7wndrENZAVy1k0xxLSCjAwFmDXhVQV6qMJwGQbnzBx4HmXRcz0Yd0YNE4LHtXYQGnR8DA_6GT6GlfqVNCZz8T1FmJQH5FkJ85",
  },
]

export default function AboutPage() {
  return (
    <main className="w-full bg-[#101c22]">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-[#101c22] to-[#101c22] pointer-events-none"></div>

        <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-6">
            <span className="material-symbols-outlined text-[16px]">info</span>
            <span>Our Story</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            We're building the <span className="text-primary">intelligence layer</span> for creators
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            ViralEngine was born from a simple frustration: great content doesn't always get seen. We're changing that with AI that understands what makes content spread.
          </p>
        </div>
      </section>

      {/* Stats Section - Full Width */}
      <section className="w-full border-y border-[#223c49] bg-[#182b34]/50">
        <div className="w-full grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-8 lg:p-12 text-center border-r border-[#223c49] last:border-r-0 md:[&:nth-child(2)]:border-r md:[&:nth-child(4)]:border-r-0">
              <div className="flex justify-center mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">{stat.icon}</span>
              </div>
              <div className="text-3xl lg:text-4xl font-black text-white mb-2">{stat.value}</div>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-20 lg:py-28">
        <div className="px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Every minute, 500 hours of video are uploaded to YouTube. Only 0.1% go viral. We believe the difference isn't just luck—it's understanding.
              </p>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                ViralEngine gives every creator access to the same insights that top creators and studios use. AI-powered analysis that tells you exactly why content works and how to make yours work better.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/signup"
                  className="px-6 py-3 bg-primary text-[#101c22] font-bold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(37,175,244,0.3)]"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/pricing"
                  className="px-6 py-3 border border-[#223c49] text-white font-bold rounded-lg hover:bg-[#182b34] transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-[#223c49]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuApv_hYd0tl_7QYavmaS3Dl1phgrvViIXB29WIeV5STUwpBjw-2Yp534pH8y39XVmdtxN1GMmR5f3MzZReMj_CPf23t10ADquRkTiWVBeDewCM8ZMnoiah8P20j6xewdvG4lMsZzdiy0QHLKtVgV1P3T-SXv_soVTMliHfUWlGO9mF7wndrENZAVy1k0xxLSCjAwFmDXhVQV6qMJwGQbnzBx4HmXRcz0Yd0YNE4LHtXYQGnR8DA_6GT6GlfqVNCZz8T1FmJQH5FkJ85")` }}
                ></div>
                <div className="absolute inset-0 bg-[#101c22]/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_30px_rgba(37,175,244,0.5)]">
                    <span className="material-symbols-outlined text-[#101c22] text-4xl">play_arrow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Full Width */}
      <section className="w-full py-20 bg-[#182b34]/30">
        <div className="px-6 max-w-5xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            What we <span className="text-primary">believe</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            The principles that guide everything we build
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="p-8 lg:p-10 border border-[#223c49] bg-[#182b34] hover:bg-[#1a3340] transition-all group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-[#101c22] transition-colors">
                <span className="material-symbols-outlined text-3xl">{value.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-20 lg:py-28 bg-[#101c22]">
        <div className="px-6 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-slate-400 text-lg">From side project to creator intelligence platform</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#223c49] transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className={`relative flex items-start gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 mt-2 shadow-[0_0_15px_rgba(37,175,244,0.5)]"></div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-3">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 bg-[#182b34]/30">
        <div className="px-6 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Meet the <span className="text-primary">Team</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We're creators, engineers, and AI researchers on a mission to democratize viral content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-[#182b34] border border-[#223c49] rounded-xl overflow-hidden hover:border-primary/50 transition-colors group">
                <div className="aspect-square relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url("${member.image}")` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#182b34] to-transparent"></div>
                </div>
                <div className="p-6 -mt-12 relative z-10">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-slate-400 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hiring Banner */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-purple-500/10 border border-[#223c49] rounded-xl text-center">
            <h3 className="text-xl font-bold text-white mb-2">We're Hiring!</h3>
            <p className="text-slate-400 mb-4">Join us in building the future of content intelligence</p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-[#101c22] font-bold rounded-lg hover:bg-primary/90 transition-all"
            >
              <span className="material-symbols-outlined">work</span>
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-[#101c22]">
        <div className="px-6 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to unlock your <span className="text-primary">viral potential</span>?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Join 50,000+ creators who are using ViralEngine to understand, optimize, and scale their content.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-primary text-[#101c22] font-bold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(37,175,244,0.3)] inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined">rocket_launch</span>
              Start Analyzing Free
            </Link>
            <Link
              href="/agents"
              className="px-8 py-4 border border-[#223c49] text-white font-bold rounded-lg hover:bg-[#182b34] transition-all inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined">play_circle</span>
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
