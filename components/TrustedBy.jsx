"use client"

const tools = [
  { name: "SEO.LeadsKe", icon: "search" },
  { name: "Enrich.LeadsKe", icon: "person_search" },
  { name: "Global.LeadsKe", icon: "schedule" },
  { name: "CRM Tools", icon: "contacts" },
  { name: "Analytics", icon: "analytics" },
]

export default function TrustedBy() {
  return (
    <section className="w-full border-y border-neutral-300 bg-neutral-300/50 py-8">
      <div className="w-full flex flex-col items-center">
        <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider text-center mb-6">
          Learn with real tools
        </p>
        <div className="w-full flex flex-wrap justify-center gap-6 md:gap-12 px-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2 text-neutral-600 text-sm"
            >
              <span className="material-symbols-outlined text-neutral-500 text-lg">{tool.icon}</span>
              {tool.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
