"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full py-20 lg:py-32 bg-[#101c22] relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-[#101c22] to-[#101c22] pointer-events-none"></div>

      <div className="w-full relative z-10">
        <div className="flex flex-col gap-12">
          {/* Main Content - Two columns */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6 px-6 md:px-12 lg:pl-16 xl:pl-24 lg:pr-10 py-8">
              <div className="flex flex-col gap-4 text-left">
                {/* Badge */}
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
                  <span>AI-Powered Content Intelligence</span>
                </div>

                {/* Headline */}
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl xl:text-7xl">
                  Turn One Video into a <span className="text-primary">Viral Ecosystem</span>.
                </h1>

                {/* Description */}
                <p className="text-slate-400 text-lg lg:text-xl font-normal leading-relaxed max-w-[600px]">
                  The intelligence engine that analyzes, tags, summarizes, and repurposes your content for maximum reach across every platform.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/signup"
                  className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-[#101c22] text-base font-bold transition-all hover:bg-primary/90 hover:scale-105 shadow-[0_0_20px_rgba(37,175,244,0.4)]"
                >
                  <span className="truncate">Start Analyzing for Free</span>
                </Link>
                <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-[#182b34] border border-[#223c49] text-white text-base font-bold transition-all hover:bg-[#223c49]">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">play_circle</span>
                    <span className="truncate">Watch Demo</span>
                  </span>
                </button>
              </div>

              {/* Trust Text */}
              <p className="text-xs text-slate-500 mt-2">No credit card required · 14-day free trial</p>
            </div>

            {/* Right Image - Full bleed to right edge */}
            <div className="w-full h-full relative group lg:pr-0">
              {/* Glow effect behind image */}
              <div className="absolute -inset-2 left-6 lg:left-0 bg-gradient-to-r from-primary to-purple-600 rounded-l-xl lg:rounded-r-none blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div
                className="relative w-full ml-6 lg:ml-0 bg-[#182b34] aspect-video lg:aspect-auto lg:h-[500px] rounded-l-xl lg:rounded-r-none border border-[#223c49] lg:border-r-0 overflow-hidden shadow-2xl bg-cover bg-center"
                style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3cMbjsPB2nOfDo-vQBZXqEn2QRDtJCjcy-bkD0cBImDd2AxjLxJMCSt4FtvH4KWZBdCeP78USuWh695hMRYyB-XFBTnLbOZ_IVh0yOk7OGChROK_nSlxwiTFZXyExDj4lmoufjtUJSTrn7yg_JlXvM2ODp_3Oxj-FEJs0jLkwC84raD373txdrVF3C4EUQiRiSkvko9wcPkm3tvmvG-NeMz5mPJhkm0gHmYB30J-O76c4_owq1ogQSm6xzaYYAm982p60UpoPDnTc")`}}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#101c22]/30"></div>

                {/* Floating Stats Overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <div className="bg-[#182b34]/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-[#223c49]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500 text-lg">trending_up</span>
                      <span className="text-white text-sm font-bold">92</span>
                      <span className="text-slate-400 text-xs">Viral Score</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#182b34]/95 backdrop-blur-sm rounded-lg border border-[#223c49] shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Analysis Complete</span>
                    </div>
                    <span className="text-xs font-mono text-primary font-bold">OUTPUTS READY</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-[#223c49] rounded-lg p-2 text-center">
                      <span className="material-symbols-outlined text-primary text-lg">tag</span>
                      <p className="text-[10px] text-slate-400 mt-1">12 Tags</p>
                    </div>
                    <div className="flex-1 bg-[#223c49] rounded-lg p-2 text-center">
                      <span className="material-symbols-outlined text-primary text-lg">auto_awesome</span>
                      <p className="text-[10px] text-slate-400 mt-1">Summary</p>
                    </div>
                    <div className="flex-1 bg-[#223c49] rounded-lg p-2 text-center">
                      <span className="material-symbols-outlined text-primary text-lg">autorenew</span>
                      <p className="text-[10px] text-slate-400 mt-1">3 Formats</p>
                    </div>
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
