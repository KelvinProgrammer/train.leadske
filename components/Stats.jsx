"use client"

const tools = [
  { name: "SEO.LeadsKe.Pro", description: "Run SEO audits and optimize websites", icon: "search" },
  { name: "Enrich.LeadsKe.Pro", description: "Scrape and enrich lead data", icon: "person_search" },
  { name: "Global.LeadsKe.Pro", description: "Schedule and publish content", icon: "schedule" },
]

const tasks = [
  "Scrape 500 leads",
  "Build an email sequence",
  "Create SEO audit",
  "Schedule content",
]

export default function Stats() {
  return (
    <section id="tools" className="w-full py-20 bg-neutral-300">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <p className="text-neutral-500 text-sm font-medium uppercase tracking-wider">Practical Labs</p>
            <h2 className="text-black tracking-tight text-3xl md:text-4xl font-bold leading-tight max-w-xl">
              Hands-on with real tools
            </h2>
            <p className="text-neutral-600 text-base font-normal leading-relaxed max-w-[540px]">
              This is what makes your training employable. Not just courses—real execution with LeadsKe tools.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tools */}
            <div className="flex flex-col gap-4">
              <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider mb-2">Sandbox Access</p>
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-neutral-200 border border-neutral-400 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-black text-lg">{tool.icon}</span>
                  </div>
                  <div>
                    <p className="text-black text-sm font-medium">{tool.name}</p>
                    <p className="text-neutral-500 text-xs">{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Guided Tasks */}
            <div className="flex flex-col gap-4">
              <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider mb-2">Guided Tasks</p>
              <div className="grid grid-cols-2 gap-3">
                {tasks.map((task, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-neutral-200 border border-neutral-400 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-neutral-500 text-lg">task_alt</span>
                      <span className="text-neutral-700 text-sm">{task}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Auto-evaluated badge */}
              <div className="p-4 bg-neutral-200 border border-neutral-400 rounded-lg mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-black"></div>
                  <span className="text-black text-sm font-medium">Auto-evaluated results</span>
                </div>
                <p className="text-neutral-500 text-xs mt-2 ml-5">
                  Get instant feedback on your work. No waiting for manual reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
