"use client"

import { useState } from "react"

const labs = [
  {
    id: 1,
    title: "Lead Scraping Lab",
    description: "Scrape and organize 500 business leads using Enrich.LeadsKe.Pro",
    tool: "Enrich.LeadsKe.Pro",
    icon: "person_search",
    difficulty: "Beginner",
    duration: "45 min",
    xp: 150,
    tasks: [
      { title: "Set up search criteria", completed: true },
      { title: "Execute lead scrape", completed: true },
      { title: "Clean and validate data", completed: false },
      { title: "Export to CRM format", completed: false },
    ],
    status: "in_progress",
    progress: 50,
  },
  {
    id: 2,
    title: "Email Sequence Builder",
    description: "Create a 5-email nurture sequence for cold prospects",
    tool: "Global.LeadsKe.Pro",
    icon: "mail",
    difficulty: "Intermediate",
    duration: "1 hour",
    xp: 200,
    tasks: [
      { title: "Write introduction email", completed: false },
      { title: "Create follow-up sequence", completed: false },
      { title: "Set up automation triggers", completed: false },
      { title: "Configure A/B testing", completed: false },
    ],
    status: "locked",
    progress: 0,
    unlockRequirement: "Complete Email Automation module",
  },
  {
    id: 3,
    title: "SEO Audit Report",
    description: "Perform a comprehensive SEO audit for a sample website",
    tool: "SEO.LeadsKe.Pro",
    icon: "search",
    difficulty: "Intermediate",
    duration: "1.5 hours",
    xp: 250,
    tasks: [
      { title: "Run technical SEO scan", completed: false },
      { title: "Analyze on-page factors", completed: false },
      { title: "Check backlink profile", completed: false },
      { title: "Generate recommendations report", completed: false },
    ],
    status: "available",
    progress: 0,
  },
  {
    id: 4,
    title: "Content Calendar Setup",
    description: "Plan and schedule 30 days of social media content",
    tool: "Global.LeadsKe.Pro",
    icon: "calendar_month",
    difficulty: "Beginner",
    duration: "1 hour",
    xp: 180,
    tasks: [
      { title: "Define content pillars", completed: false },
      { title: "Create content templates", completed: false },
      { title: "Schedule 30 posts", completed: false },
      { title: "Set up analytics tracking", completed: false },
    ],
    status: "available",
    progress: 0,
  },
  {
    id: 5,
    title: "Sales Demo Simulation",
    description: "Practice pitching LeadsKe products to a simulated client",
    tool: "Demo Environment",
    icon: "co_present",
    difficulty: "Advanced",
    duration: "30 min",
    xp: 300,
    tasks: [
      { title: "Review client profile", completed: false },
      { title: "Deliver product demo", completed: false },
      { title: "Handle objections", completed: false },
      { title: "Close the deal", completed: false },
    ],
    status: "locked",
    progress: 0,
    unlockRequirement: "Complete Sales & Pitching Track",
  },
  {
    id: 6,
    title: "Client Onboarding Flow",
    description: "Set up a complete client onboarding workflow",
    tool: "Global.LeadsKe.Pro",
    icon: "how_to_reg",
    difficulty: "Intermediate",
    duration: "1 hour",
    xp: 220,
    tasks: [
      { title: "Create welcome sequence", completed: false },
      { title: "Set up intake forms", completed: false },
      { title: "Configure CRM pipeline", completed: false },
      { title: "Automate task assignments", completed: false },
    ],
    status: "available",
    progress: 0,
  },
]

const toolStats = [
  { name: "SEO.LeadsKe.Pro", status: "Active", usage: "12 hours" },
  { name: "Enrich.LeadsKe.Pro", status: "Active", usage: "8 hours" },
  { name: "Global.LeadsKe.Pro", status: "Locked", usage: "0 hours" },
]

export default function LabsPage() {
  const [selectedLab, setSelectedLab] = useState(null)
  const [filter, setFilter] = useState("all")

  const filteredLabs = labs.filter(lab => {
    if (filter === "all") return true
    return lab.status === filter
  })

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Practical Labs</h1>
          <p className="text-neutral-400 mt-1">Hands-on training with real LeadsKe tools</p>
        </div>
      </div>

      {/* Tool Access Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {toolStats.map((tool) => (
          <div key={tool.name} className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-medium text-sm">{tool.name}</span>
              <span className={`px-2 py-0.5 rounded text-xs ${
                tool.status === "Active"
                  ? "bg-green-500/10 text-green-400"
                  : "bg-neutral-800 text-neutral-500"
              }`}>
                {tool.status}
              </span>
            </div>
            <p className="text-neutral-500 text-xs">Sandbox usage: {tool.usage}</p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Labs Completed", value: "4", icon: "check_circle" },
          { label: "In Progress", value: "1", icon: "pending" },
          { label: "Total XP Earned", value: "680", icon: "stars" },
          { label: "Time in Labs", value: "12h", icon: "schedule" },
        ].map((stat) => (
          <div key={stat.label} className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="material-symbols-outlined text-neutral-500">{stat.icon}</span>
              <span className="text-xl font-bold text-white">{stat.value}</span>
            </div>
            <p className="text-neutral-400 text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2">
        {[
          { key: "all", label: "All Labs" },
          { key: "available", label: "Available" },
          { key: "in_progress", label: "In Progress" },
          { key: "locked", label: "Locked" },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === f.key
                ? "bg-white text-neutral-900"
                : "bg-neutral-800 text-neutral-400 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Labs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredLabs.map((lab) => (
          <div
            key={lab.id}
            className={`bg-neutral-950 border rounded-lg p-5 transition-colors ${
              lab.status === "locked"
                ? "border-neutral-800 opacity-60"
                : "border-neutral-800 hover:border-neutral-700"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`size-12 rounded-lg flex items-center justify-center shrink-0 ${
                lab.status === "locked" ? "bg-neutral-800" : "bg-neutral-800"
              }`}>
                <span className={`material-symbols-outlined text-xl ${
                  lab.status === "locked" ? "text-neutral-600" : "text-white"
                }`}>{lab.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold">{lab.title}</h3>
                  {lab.status === "in_progress" && (
                    <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-400 text-xs rounded">In Progress</span>
                  )}
                  {lab.status === "locked" && (
                    <span className="material-symbols-outlined text-neutral-600 text-lg">lock</span>
                  )}
                </div>
                <p className="text-neutral-500 text-sm">{lab.description}</p>

                <div className="flex items-center gap-4 mt-3">
                  <span className="text-neutral-500 text-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    {lab.duration}
                  </span>
                  <span className="text-neutral-500 text-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">stars</span>
                    {lab.xp} XP
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    lab.difficulty === "Beginner" ? "bg-green-500/10 text-green-400" :
                    lab.difficulty === "Intermediate" ? "bg-yellow-500/10 text-yellow-400" :
                    "bg-red-500/10 text-red-400"
                  }`}>
                    {lab.difficulty}
                  </span>
                </div>

                {lab.unlockRequirement && (
                  <p className="text-neutral-600 text-xs mt-2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">info</span>
                    {lab.unlockRequirement}
                  </p>
                )}
              </div>
            </div>

            {/* Progress for in-progress labs */}
            {lab.status === "in_progress" && (
              <div className="mt-4 pt-4 border-t border-neutral-800">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-neutral-400">Progress</span>
                  <span className="text-white font-medium">{lab.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full transition-all"
                    style={{ width: `${lab.progress}%` }}
                  ></div>
                </div>
                <div className="mt-3 space-y-2">
                  {lab.tasks.map((task, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className={`material-symbols-outlined text-sm ${
                        task.completed ? "text-green-400" : "text-neutral-600"
                      }`}>
                        {task.completed ? "check_circle" : "radio_button_unchecked"}
                      </span>
                      <span className={`text-xs ${
                        task.completed ? "text-neutral-400" : "text-neutral-500"
                      }`}>{task.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-800">
              <span className="text-neutral-500 text-xs">{lab.tool}</span>
              {lab.status === "locked" ? (
                <button disabled className="px-4 py-2 bg-neutral-800 text-neutral-600 rounded-lg text-sm font-medium cursor-not-allowed">
                  Locked
                </button>
              ) : lab.status === "in_progress" ? (
                <button className="px-4 py-2 bg-white text-neutral-900 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors">
                  Continue
                </button>
              ) : (
                <button className="px-4 py-2 bg-neutral-800 text-white rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors">
                  Start Lab
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Info Banner */}
      <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="size-12 rounded-lg bg-white flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-neutral-900 text-xl">science</span>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Why Labs Matter</h3>
            <p className="text-neutral-400 text-sm">
              Labs provide real-world execution experience, not just theory. Complete labs to unlock certifications
              and prove your skills to employers. Your lab results are auto-evaluated and added to your profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
