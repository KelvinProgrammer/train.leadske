"use client"

const companies = [
  { name: "YouTube", icon: "play" },
  { name: "Instagram", icon: "camera" },
  { name: "Twitter", icon: "twitter" },
  { name: "TikTok", icon: "music" },
  { name: "Twitch", icon: "video" },
]

const IconComponent = ({ name, className }) => {
  const icons = {
    play: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z"/>
      </svg>
    ),
    camera: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12m-3.2 0a3.2 3.2 0 1 0 6.4 0a3.2 3.2 0 1 0 -6.4 0M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
      </svg>
    ),
    twitter: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    music: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </svg>
    ),
    video: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
      </svg>
    ),
  }
  return icons[name] || null
}

export default function TrustedBy() {
  return (
    <section className="w-full border-y border-[#223c49] bg-[#182b34]/30 py-10">
      <div className="w-full flex flex-col items-center">
        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest text-center mb-8">
          Trusted by 2,000+ top creators & brands
        </p>
        <div className="w-full flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 px-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center gap-2 text-white font-bold text-xl"
            >
              <IconComponent name={company.icon} className="w-6 h-6 text-[#25aff4]" />
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
