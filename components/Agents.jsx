"use client"

const steps = [
  {
    number: "1",
    title: "Upload Video",
    description: "Paste a YouTube link or upload raw footage directly.",
    icon: "upload_file",
  },
  {
    number: "2",
    title: "Analyze & Process",
    description: "Our engine tags, clips, and identifies viral moments.",
    icon: "psychology",
    badge: "AI MAGIC",
  },
  {
    number: "3",
    title: "Publish Everywhere",
    description: "Export optimized shorts, tweets, and blogs instantly.",
    icon: "rocket_launch",
  },
]

export default function Agents() {
  return (
    <section className="w-full py-20 bg-[#101c22] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-[#101c22] to-[#101c22] pointer-events-none"></div>

      <div className="w-full relative z-10">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center items-center px-6">
            <h2 className="text-white tracking-tight text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              From Raw Footage to <span className="text-primary">Viral Gold</span>
            </h2>
            <p className="text-slate-400 text-lg font-normal leading-normal max-w-[720px]">
              Simply upload your video link, and let our AI engine handle the rest.
            </p>
          </div>

          {/* Steps Grid - Full Width */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className={`relative p-8 lg:p-10 border border-[#223c49] bg-[#182b34] transition-all hover:bg-[#1a3340] ${
                  step.badge ? "md:scale-105 z-10 md:-my-4 bg-gradient-to-br from-primary/20 to-[#182b34]" : ""
                }`}
              >
                {step.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-primary text-[#101c22] text-xs font-bold rounded-full shadow-lg">
                      {step.badge}
                    </span>
                  </div>
                )}

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                    <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3">{step.number}. {step.title}</h3>
                  <p className="text-slate-400 text-sm max-w-xs">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
