"use client"

import { useState } from "react"
import Link from "next/link"

const tracks = [
  {
    id: "va",
    title: "Virtual Assistant Track",
    description: "Master client management, lead generation, and automation tools",
    icon: "support_agent",
    duration: "8 weeks",
    modules: 5,
    students: 2340,
    level: "Beginner",
    certification: "Certified LeadsKe VA",
    modules_list: [
      { title: "Client Onboarding & CRM", lessons: 8, duration: "2h 30m" },
      { title: "Lead Scraping & Enrichment", lessons: 10, duration: "3h 15m" },
      { title: "Email & WhatsApp Automation", lessons: 12, duration: "4h" },
      { title: "Calendar Booking & Follow-ups", lessons: 6, duration: "1h 45m" },
      { title: "Reporting & SOP Execution", lessons: 8, duration: "2h 30m" },
    ],
  },
  {
    id: "smm",
    title: "Social Media Manager Track",
    description: "Build audiences and manage content across all platforms",
    icon: "share",
    duration: "10 weeks",
    modules: 5,
    students: 1856,
    level: "Beginner",
    certification: "Certified Social Media Manager",
    modules_list: [
      { title: "Content Strategy Fundamentals", lessons: 10, duration: "3h" },
      { title: "Platform-Specific Growth (FB, IG, LinkedIn, X)", lessons: 16, duration: "5h" },
      { title: "Scheduling with Global.LeadsKe.Pro", lessons: 8, duration: "2h 30m" },
      { title: "Ad Creatives Basics", lessons: 10, duration: "3h 15m" },
      { title: "Analytics & Reporting", lessons: 8, duration: "2h 30m" },
    ],
  },
  {
    id: "dm",
    title: "Digital Marketer Track",
    description: "Master SEO, funnels, automation, and paid advertising",
    icon: "campaign",
    duration: "12 weeks",
    modules: 5,
    students: 1523,
    level: "Intermediate",
    certification: "Certified Digital Marketer",
    modules_list: [
      { title: "SEO with SEO.LeadsKe.Pro", lessons: 14, duration: "4h 30m" },
      { title: "Funnels & Landing Pages", lessons: 12, duration: "4h" },
      { title: "Email/SMS Automation", lessons: 10, duration: "3h 15m" },
      { title: "Paid Ads Fundamentals", lessons: 12, duration: "4h" },
      { title: "Conversion Optimization", lessons: 10, duration: "3h 15m" },
    ],
  },
  {
    id: "sales",
    title: "Sales & Pitching Track",
    description: "Close deals, handle objections, and become a LeadsKe partner",
    icon: "handshake",
    duration: "6 weeks",
    modules: 5,
    students: 987,
    level: "All Levels",
    certification: "Certified LeadsKe Sales Partner",
    featured: true,
    modules_list: [
      { title: "Cold Outreach Mastery", lessons: 10, duration: "3h" },
      { title: "Proposal Writing", lessons: 8, duration: "2h 30m" },
      { title: "Objection Handling", lessons: 12, duration: "4h" },
      { title: "Demo Pitching LeadsKe", lessons: 10, duration: "3h 15m" },
      { title: "Closing SMEs & Agencies", lessons: 10, duration: "3h" },
    ],
  },
]

export default function CoursesPage() {
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [filter, setFilter] = useState("all")

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Course Library</h1>
          <p className="text-neutral-400 mt-1">Structured learning paths by role</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2">
        {["all", "beginner", "intermediate", "advanced"].map((level) => (
          <button
            key={level}
            onClick={() => setFilter(level)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
              filter === level
                ? "bg-white text-neutral-900"
                : "bg-neutral-800 text-neutral-400 hover:text-white"
            }`}
          >
            {level === "all" ? "All Tracks" : level}
          </button>
        ))}
      </div>

      {/* Featured Track - Sales */}
      <div className="bg-gradient-to-r from-neutral-900 to-neutral-950 border border-neutral-800 rounded-lg p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="size-14 rounded-lg bg-white flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-neutral-900 text-2xl">handshake</span>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 bg-white text-neutral-900 text-xs font-medium rounded">Featured</span>
                <span className="px-2 py-0.5 bg-neutral-800 text-neutral-300 text-xs rounded">Most Important</span>
              </div>
              <h2 className="text-xl font-bold text-white">Sales & Pitching Track</h2>
              <p className="text-neutral-400 mt-1 max-w-2xl">
                Learn to close deals, handle objections, and become a certified LeadsKe Sales Partner.
                This track is essential for monetizing your skills.
              </p>
              <div className="flex items-center gap-6 mt-4">
                <span className="text-neutral-500 text-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-lg">schedule</span>
                  6 weeks
                </span>
                <span className="text-neutral-500 text-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-lg">library_books</span>
                  5 modules
                </span>
                <span className="text-neutral-500 text-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-lg">group</span>
                  987 students
                </span>
              </div>
            </div>
          </div>
          <button className="px-5 py-2.5 bg-white text-neutral-900 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors shrink-0">
            Start Track
          </button>
        </div>
      </div>

      {/* Tracks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {tracks.filter(t => !t.featured).map((track) => (
          <div
            key={track.id}
            className="bg-neutral-950 border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white text-xl">{track.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold">{track.title}</h3>
                  <span className="px-2 py-0.5 bg-neutral-800 text-neutral-400 text-xs rounded">{track.level}</span>
                </div>
                <p className="text-neutral-500 text-sm">{track.description}</p>
                <div className="flex items-center gap-4 mt-3">
                  <span className="text-neutral-500 text-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    {track.duration}
                  </span>
                  <span className="text-neutral-500 text-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">library_books</span>
                    {track.modules} modules
                  </span>
                  <span className="text-neutral-500 text-xs flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">group</span>
                    {track.students.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Modules Preview */}
            <div className="mt-4 pt-4 border-t border-neutral-800">
              <p className="text-neutral-400 text-xs mb-3">Modules included:</p>
              <div className="space-y-2">
                {track.modules_list.slice(0, 3).map((module, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="size-5 rounded bg-neutral-800 flex items-center justify-center text-neutral-500 text-xs">
                        {idx + 1}
                      </span>
                      <span className="text-neutral-300 text-sm">{module.title}</span>
                    </div>
                    <span className="text-neutral-600 text-xs">{module.lessons} lessons</span>
                  </div>
                ))}
                {track.modules_list.length > 3 && (
                  <p className="text-neutral-600 text-xs">+{track.modules_list.length - 3} more modules</p>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-neutral-500 text-lg">workspace_premium</span>
                <span className="text-neutral-400 text-xs">{track.certification}</span>
              </div>
              <button
                onClick={() => setSelectedTrack(track)}
                className="px-4 py-2 bg-neutral-800 text-white rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Track Detail Modal */}
      {selectedTrack && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6 border-b border-neutral-800 sticky top-0 bg-neutral-900">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-lg bg-neutral-800 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-xl">{selectedTrack.icon}</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{selectedTrack.title}</h2>
                    <p className="text-neutral-500 text-sm">{selectedTrack.certification}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTrack(null)}
                  className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
                >
                  <span className="material-symbols-outlined text-neutral-400">close</span>
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-neutral-400">{selectedTrack.description}</p>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-center">
                  <p className="text-white font-semibold">{selectedTrack.duration}</p>
                  <p className="text-neutral-500 text-xs">Duration</p>
                </div>
                <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-center">
                  <p className="text-white font-semibold">{selectedTrack.modules}</p>
                  <p className="text-neutral-500 text-xs">Modules</p>
                </div>
                <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-center">
                  <p className="text-white font-semibold">{selectedTrack.level}</p>
                  <p className="text-neutral-500 text-xs">Level</p>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4">Course Modules</h3>
                <div className="space-y-3">
                  {selectedTrack.modules_list.map((module, idx) => (
                    <div key={idx} className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="size-8 rounded-lg bg-neutral-800 flex items-center justify-center text-white text-sm font-medium">
                            {idx + 1}
                          </span>
                          <div>
                            <p className="text-white font-medium">{module.title}</p>
                            <p className="text-neutral-500 text-xs">{module.lessons} lessons • {module.duration}</p>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-neutral-600">lock</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full py-3 bg-white text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 transition-colors">
                Enroll in Track
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
