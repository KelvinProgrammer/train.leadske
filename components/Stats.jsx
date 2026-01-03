"use client"

const platforms = [
  { name: "YouTube", icon: "play_arrow", color: "text-red-500" },
  { name: "Instagram", icon: "photo_camera", color: "text-pink-500" },
  { name: "Twitter", icon: "flutter_dash", color: "text-blue-400" },
  { name: "TikTok", icon: "music_note", color: "text-white" },
  { name: "Twitch", icon: "videocam", color: "text-indigo-500" },
]

export default function Stats() {
  return (
    <section className="w-full border-y border-[#223c49] bg-[#182b34]/30 py-10">
      <div className="w-full px-4 md:px-10 lg:px-40 flex justify-center">
        <div className="max-w-[1280px] w-full flex flex-col items-center">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest text-center mb-8">
            Trusted by 2,000+ top creators & brands
          </p>

          {/* Platform Logos */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-500">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex items-center gap-2 text-white font-bold text-xl"
              >
                <span className={`material-symbols-outlined ${platform.color}`}>{platform.icon}</span>
                {platform.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
