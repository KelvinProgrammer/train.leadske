"use client"

import { useState } from "react"

const discussions = [
  {
    id: 1,
    title: "Best practices for cold email subject lines?",
    author: "Michael K.",
    avatar: "MK",
    track: "Sales & Pitching",
    replies: 24,
    views: 156,
    lastActivity: "2 hours ago",
    pinned: true,
  },
  {
    id: 2,
    title: "How to handle 'We already have a solution' objection",
    author: "Grace A.",
    avatar: "GA",
    track: "Sales & Pitching",
    replies: 18,
    views: 98,
    lastActivity: "4 hours ago",
    pinned: false,
  },
  {
    id: 3,
    title: "SEO.LeadsKe.Pro - Tips for technical audit",
    author: "David O.",
    avatar: "DO",
    track: "Digital Marketing",
    replies: 12,
    views: 87,
    lastActivity: "Yesterday",
    pinned: false,
  },
  {
    id: 4,
    title: "Content calendar templates that work",
    author: "Sarah W.",
    avatar: "SW",
    track: "Social Media",
    replies: 31,
    views: 203,
    lastActivity: "Yesterday",
    pinned: false,
  },
  {
    id: 5,
    title: "VA Track graduates - Share your success stories!",
    author: "Admin",
    avatar: "AD",
    track: "Virtual Assistant",
    replies: 45,
    views: 412,
    lastActivity: "2 days ago",
    pinned: true,
  },
]

const topContributors = [
  { name: "James M.", avatar: "JM", points: 2450, badges: 12 },
  { name: "Sarah W.", avatar: "SW", points: 2180, badges: 10 },
  { name: "David O.", avatar: "DO", points: 1890, badges: 8 },
  { name: "Grace A.", avatar: "GA", points: 1654, badges: 7 },
  { name: "Michael K.", avatar: "MK", points: 1420, badges: 6 },
]

const channels = [
  { name: "general", members: 1234, unread: 5 },
  { name: "sales-tips", members: 456, unread: 0 },
  { name: "seo-help", members: 321, unread: 2 },
  { name: "job-board", members: 789, unread: 8 },
  { name: "success-stories", members: 543, unread: 0 },
]

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("discussions")

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Community</h1>
          <p className="text-neutral-400 mt-1">Connect with fellow learners and mentors</p>
        </div>
        <button className="px-4 py-2 bg-white text-neutral-900 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-lg">add</span>
          New Discussion
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Members", value: "3,456", icon: "group" },
          { label: "Discussions", value: "892", icon: "forum" },
          { label: "Your Posts", value: "12", icon: "edit_note" },
          { label: "Reputation", value: "450", icon: "military_tech" },
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

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-neutral-800 pb-4">
        {[
          { key: "discussions", label: "Discussions", icon: "forum" },
          { key: "channels", label: "Channels", icon: "tag" },
          { key: "mentors", label: "Mentors", icon: "school" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
              activeTab === tab.key
                ? "bg-white text-neutral-900"
                : "text-neutral-400 hover:text-white hover:bg-neutral-800"
            }`}
          >
            <span className="material-symbols-outlined text-lg">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-4">
          {activeTab === "discussions" && (
            <>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Recent Discussions</h2>
                <select className="bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white">
                  <option>All Tracks</option>
                  <option>Sales & Pitching</option>
                  <option>Digital Marketing</option>
                  <option>Social Media</option>
                  <option>Virtual Assistant</option>
                </select>
              </div>

              <div className="space-y-3">
                {discussions.map((discussion) => (
                  <div
                    key={discussion.id}
                    className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="size-10 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                        <span className="text-white text-sm font-medium">{discussion.avatar}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {discussion.pinned && (
                            <span className="material-symbols-outlined text-yellow-400 text-sm">push_pin</span>
                          )}
                          <h3 className="text-white font-medium">{discussion.title}</h3>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-neutral-500 text-xs">{discussion.author}</span>
                          <span className="text-neutral-600">•</span>
                          <span className="px-2 py-0.5 bg-neutral-800 text-neutral-400 text-xs rounded">{discussion.track}</span>
                          <span className="text-neutral-600">•</span>
                          <span className="text-neutral-500 text-xs">{discussion.lastActivity}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-neutral-500 text-xs">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">chat_bubble</span>
                          {discussion.replies}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">visibility</span>
                          {discussion.views}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "channels" && (
            <>
              <h2 className="text-lg font-semibold text-white">Channels</h2>
              <div className="space-y-2">
                {channels.map((channel) => (
                  <div
                    key={channel.name}
                    className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 hover:border-neutral-700 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-neutral-500">#</span>
                      <div>
                        <p className="text-white font-medium">{channel.name}</p>
                        <p className="text-neutral-500 text-xs">{channel.members} members</p>
                      </div>
                    </div>
                    {channel.unread > 0 && (
                      <span className="size-5 bg-white text-neutral-900 rounded-full flex items-center justify-center text-xs font-medium">
                        {channel.unread}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "mentors" && (
            <>
              <h2 className="text-lg font-semibold text-white">Available Mentors</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "James Mwangi", role: "Sales Expert", expertise: "Cold outreach, Closing", sessions: 45, rating: 4.9, available: true },
                  { name: "Sarah Wanjiku", role: "VA Specialist", expertise: "Email automation, CRM", sessions: 38, rating: 4.8, available: true },
                  { name: "David Ochieng", role: "SEO Expert", expertise: "Technical SEO, Audits", sessions: 32, rating: 4.9, available: false },
                  { name: "Grace Akinyi", role: "Content Strategist", expertise: "Social media, Content", sessions: 28, rating: 4.7, available: true },
                ].map((mentor, idx) => (
                  <div key={idx} className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="size-12 rounded-full bg-neutral-800 flex items-center justify-center">
                        <span className="text-white font-medium">{mentor.name.split(" ").map(n => n[0]).join("")}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-white font-medium">{mentor.name}</h3>
                          <span className={`size-2 rounded-full ${mentor.available ? "bg-green-400" : "bg-neutral-600"}`}></span>
                        </div>
                        <p className="text-neutral-500 text-sm">{mentor.role}</p>
                        <p className="text-neutral-600 text-xs mt-1">{mentor.expertise}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-neutral-400 text-xs">{mentor.sessions} sessions</span>
                          <span className="text-yellow-400 text-xs flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs">star</span>
                            {mentor.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      className={`w-full mt-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        mentor.available
                          ? "bg-neutral-800 text-white hover:bg-neutral-700"
                          : "bg-neutral-900 text-neutral-600 cursor-not-allowed"
                      }`}
                      disabled={!mentor.available}
                    >
                      {mentor.available ? "Book Session" : "Unavailable"}
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top Contributors */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
            <h3 className="text-white font-medium mb-4">Top Contributors</h3>
            <div className="space-y-3">
              {topContributors.map((contributor, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-neutral-600 text-sm w-4">{idx + 1}</span>
                  <div className="size-8 rounded-full bg-neutral-800 flex items-center justify-center">
                    <span className="text-white text-xs font-medium">{contributor.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">{contributor.name}</p>
                    <p className="text-neutral-500 text-xs">{contributor.points} pts</p>
                  </div>
                  <span className="text-neutral-600 text-xs">{contributor.badges} badges</span>
                </div>
              ))}
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
            <h3 className="text-white font-medium mb-3">Community Guidelines</h3>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-400 text-sm mt-0.5">check</span>
                Be respectful and helpful
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-400 text-sm mt-0.5">check</span>
                Share knowledge and experiences
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-green-400 text-sm mt-0.5">check</span>
                Stay on topic in discussions
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-red-400 text-sm mt-0.5">close</span>
                No spam or self-promotion
              </li>
            </ul>
          </div>

          {/* Job Board Preview */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-medium">Job Board</h3>
              <span className="text-neutral-500 text-xs">8 new</span>
            </div>
            <div className="space-y-3">
              {[
                { title: "Virtual Assistant Needed", company: "TechStartup KE", type: "Remote" },
                { title: "Social Media Manager", company: "Fashion Brand", type: "Part-time" },
                { title: "SEO Specialist", company: "Agency X", type: "Full-time" },
              ].map((job, idx) => (
                <div key={idx} className="pb-3 border-b border-neutral-800 last:border-0 last:pb-0">
                  <p className="text-white text-sm font-medium">{job.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-neutral-500 text-xs">{job.company}</span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-neutral-500 text-xs">{job.type}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 bg-neutral-800 text-white rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors">
              View All Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
