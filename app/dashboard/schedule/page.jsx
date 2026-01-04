"use client"

import { useState } from "react"

const upcomingSessions = [
  {
    id: 1,
    title: "Live Q&A: Cold Outreach Mastery",
    type: "live",
    instructor: "James Mwangi",
    date: "Today",
    time: "3:00 PM",
    duration: "1 hour",
    track: "Sales & Pitching",
    attendees: 45,
  },
  {
    id: 2,
    title: "Workshop: Building Email Sequences",
    type: "workshop",
    instructor: "Sarah Wanjiku",
    date: "Tomorrow",
    time: "10:00 AM",
    duration: "2 hours",
    track: "Virtual Assistant",
    attendees: 32,
  },
  {
    id: 3,
    title: "Demo: Using Enrich.LeadsKe.Pro",
    type: "demo",
    instructor: "David Ochieng",
    date: "Fri, Jan 10",
    time: "2:00 PM",
    duration: "45 min",
    track: "Digital Marketing",
    attendees: 28,
  },
  {
    id: 4,
    title: "Office Hours: SEO Questions",
    type: "office_hours",
    instructor: "Grace Akinyi",
    date: "Sat, Jan 11",
    time: "11:00 AM",
    duration: "1 hour",
    track: "Digital Marketing",
    attendees: 15,
  },
  {
    id: 5,
    title: "Masterclass: Closing Enterprise Deals",
    type: "masterclass",
    instructor: "James Mwangi",
    date: "Mon, Jan 13",
    time: "4:00 PM",
    duration: "90 min",
    track: "Sales & Pitching",
    attendees: 67,
  },
]

const deadlines = [
  { title: "Scrape 500 Leads Exercise", course: "VA Track", dueDate: "Jan 8", daysLeft: 2 },
  { title: "Create SEO Audit Report", course: "Digital Marketing", dueDate: "Jan 11", daysLeft: 5 },
  { title: "Content Calendar Submission", course: "Social Media", dueDate: "Jan 15", daysLeft: 9 },
]

const typeIcons = {
  live: "videocam",
  workshop: "construction",
  demo: "play_circle",
  office_hours: "help",
  masterclass: "school",
}

const typeColors = {
  live: "bg-red-500/10 text-red-400",
  workshop: "bg-blue-500/10 text-blue-400",
  demo: "bg-green-500/10 text-green-400",
  office_hours: "bg-purple-500/10 text-purple-400",
  masterclass: "bg-yellow-500/10 text-yellow-400",
}

export default function SchedulePage() {
  const [view, setView] = useState("list")

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Schedule</h1>
          <p className="text-neutral-400 mt-1">Upcoming sessions and deadlines</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setView("list")}
            className={`p-2 rounded-lg transition-colors ${
              view === "list" ? "bg-white text-neutral-900" : "bg-neutral-800 text-neutral-400"
            }`}
          >
            <span className="material-symbols-outlined text-xl">view_list</span>
          </button>
          <button
            onClick={() => setView("calendar")}
            className={`p-2 rounded-lg transition-colors ${
              view === "calendar" ? "bg-white text-neutral-900" : "bg-neutral-800 text-neutral-400"
            }`}
          >
            <span className="material-symbols-outlined text-xl">calendar_month</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sessions List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Upcoming Sessions</h2>
            <span className="text-neutral-500 text-sm">{upcomingSessions.length} sessions</span>
          </div>

          <div className="space-y-3">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-xl">{typeIcons[session.type]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-medium">{session.title}</h3>
                      <span className={`px-2 py-0.5 rounded text-xs capitalize ${typeColors[session.type]}`}>
                        {session.type.replace("_", " ")}
                      </span>
                    </div>
                    <p className="text-neutral-500 text-sm">with {session.instructor}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-neutral-400 text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">calendar_today</span>
                        {session.date}
                      </span>
                      <span className="text-neutral-400 text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        {session.time}
                      </span>
                      <span className="text-neutral-400 text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">timer</span>
                        {session.duration}
                      </span>
                      <span className="text-neutral-500 text-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">group</span>
                        {session.attendees} attending
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-neutral-600 text-xs">{session.track}</span>
                    {session.date === "Today" ? (
                      <button className="px-4 py-2 bg-white text-neutral-900 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors">
                        Join Now
                      </button>
                    ) : (
                      <button className="px-4 py-2 bg-neutral-800 text-white rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors">
                        Set Reminder
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Mini Calendar */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-medium">January 2025</h3>
              <div className="flex items-center gap-1">
                <button className="p-1 hover:bg-neutral-800 rounded transition-colors">
                  <span className="material-symbols-outlined text-neutral-400 text-lg">chevron_left</span>
                </button>
                <button className="p-1 hover:bg-neutral-800 rounded transition-colors">
                  <span className="material-symbols-outlined text-neutral-400 text-lg">chevron_right</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                <span key={i} className="text-neutral-600 text-xs py-1">{day}</span>
              ))}
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <button
                  key={day}
                  className={`text-xs py-1.5 rounded transition-colors ${
                    day === 6
                      ? "bg-white text-neutral-900 font-medium"
                      : [8, 10, 11, 13].includes(day)
                      ? "bg-neutral-800 text-white"
                      : "text-neutral-400 hover:bg-neutral-800"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-neutral-800">
              <div className="flex items-center gap-2">
                <span className="size-2 bg-white rounded-full"></span>
                <span className="text-neutral-500 text-xs">Today</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 bg-neutral-600 rounded-full"></span>
                <span className="text-neutral-500 text-xs">Has Events</span>
              </div>
            </div>
          </div>

          {/* Deadlines */}
          <div>
            <h3 className="text-white font-medium mb-4">Upcoming Deadlines</h3>
            <div className="space-y-3">
              {deadlines.map((deadline, idx) => (
                <div key={idx} className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-white text-sm font-medium">{deadline.title}</p>
                      <p className="text-neutral-500 text-xs mt-1">{deadline.course}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      deadline.daysLeft <= 2
                        ? "bg-red-500/10 text-red-400"
                        : deadline.daysLeft <= 5
                        ? "bg-yellow-500/10 text-yellow-400"
                        : "bg-neutral-800 text-neutral-400"
                    }`}>
                      {deadline.daysLeft}d left
                    </span>
                  </div>
                  <p className="text-neutral-600 text-xs mt-2">Due: {deadline.dueDate}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
            <h3 className="text-white font-medium mb-4">This Week</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 text-sm">Live Sessions</span>
                <span className="text-white font-medium">3</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 text-sm">Workshops</span>
                <span className="text-white font-medium">1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 text-sm">Assignments Due</span>
                <span className="text-white font-medium">2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
