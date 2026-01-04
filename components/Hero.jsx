"use client"

import Link from "next/link"

const tracks = [
  { name: "Virtual Assistant", icon: "support_agent" },
  { name: "Social Media Manager", icon: "campaign" },
  { name: "Digital Marketer", icon: "trending_up" },
  { name: "Sales Partner", icon: "handshake" },
]

export default function Hero() {
  return (
    <section className="w-full py-24 lg:py-32 bg-neutral-200 relative overflow-hidden">
      <div className="w-full relative z-10">
        <div className="flex flex-col gap-16">
          {/* Main Content */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-0">
            {/* Left Content */}
            <div className="flex flex-col gap-8 px-6 md:px-12 lg:pl-16 xl:pl-24 lg:pr-10">
              <div className="flex flex-col gap-6 text-left">
                {/* Badge */}
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-400 bg-neutral-300/50 px-3 py-1 text-xs font-medium text-neutral-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
                  <span>Professional Training Platform</span>
                </div>

                {/* Headline */}
                <h1 className="text-black text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                  Master Digital Skills.
                  <br />
                  <span className="text-neutral-500">Get Certified.</span>
                </h1>

                {/* Description */}
                <p className="text-neutral-600 text-lg font-normal leading-relaxed max-w-[540px]">
                  Structured learning paths for Virtual Assistants, Social Media Managers, Digital Marketers, and Sales professionals. Learn with real tools. Get certified. Get hired.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/signup"
                  className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-black text-white text-sm font-semibold transition-all hover:bg-neutral-800"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="#tracks"
                  className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-neutral-400 text-black text-sm font-semibold transition-all hover:bg-black/5"
                >
                  Explore Tracks
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="text-black text-2xl font-bold">4</p>
                  <p className="text-neutral-500 text-sm">Career Tracks</p>
                </div>
                <div className="w-px bg-neutral-400"></div>
                <div>
                  <p className="text-black text-2xl font-bold">20+</p>
                  <p className="text-neutral-500 text-sm">Modules</p>
                </div>
                <div className="w-px bg-neutral-400"></div>
                <div>
                  <p className="text-black text-2xl font-bold">Real</p>
                  <p className="text-neutral-500 text-sm">Tool Access</p>
                </div>
              </div>
            </div>

            {/* Right - Track Cards */}
            <div className="w-full px-6 lg:px-0 lg:pr-16 xl:pr-24">
              <div className="grid grid-cols-2 gap-3">
                {tracks.map((track, idx) => (
                  <div
                    key={idx}
                    className="group p-6 bg-neutral-300 border border-neutral-400 rounded-lg hover:border-neutral-500 transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center mb-4 group-hover:bg-black/10 transition-colors">
                      <span className="material-symbols-outlined text-black text-xl">{track.icon}</span>
                    </div>
                    <p className="text-black text-sm font-medium">{track.name}</p>
                    <p className="text-neutral-500 text-xs mt-1">Certification Track</p>
                  </div>
                ))}
              </div>

              {/* Unlock Banner */}
              <div className="mt-4 p-4 bg-neutral-300 border border-neutral-400 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-neutral-600">lock_open</span>
                  <div>
                    <p className="text-black text-sm font-medium">Unlock tools as you progress</p>
                    <p className="text-neutral-500 text-xs">Access SEO, Enrich, and Global LeadsKe tools</p>
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
