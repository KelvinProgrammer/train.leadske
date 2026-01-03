"use client"

import { useState } from "react"
import Link from "next/link"

const allVideos = [
  {
    id: 1,
    title: "10 AI Tools That Will Change Your Workflow in 2024",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuA97cBjam5EOmFz6n_Hl-xTR_j_Fql664cdlYaA19wK5T5dxqfRNcK8jARhFEGJe-5eV8Ixi2pKOz3tYNQPqCEPOkCbuKQSVt9yIpJ5PQuIqTPLrN6KpwXR99grfxquq8i1XyuUApVCZ0CGwx7BIlvHyydkMcU_z_N1wGI_Ve5-ko36M2dXVE4DHrmHXKNl5_FUc2tkNZM5hl88U5pQ_rUn6zMIS-Aoibz5MphB1qWzt__Qkvp9ZkYfbsaFPbckovcxu03pGdVZ_PPQ",
    platform: "YouTube",
    platformIcon: "smart_display",
    platformColor: "text-red-500",
    viralScore: 87,
    views: "2.4M",
    duration: "12:34",
    addedDate: "Dec 24, 2024",
    status: "analyzed",
    tags: ["AI", "Tech", "Productivity"],
  },
  {
    id: 2,
    title: "Morning Routine & Coffee",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb7x380zL-hi-6K26BW8qJJj_82uYWY-5fRKnUTQdgJidMH-tOm1-lhxKW7bC7atv9XY4XN9M-HLtY0VKhnK02SIQUX2GtFdnU4tAEHAo9X55QBqwXmsHpA6OcPL5w9vFvurrGXeVLDrssmlF6LRU91EM6LD75o-Omj1OgWVE_OnEwZfGOri-ZAvr74l32DLnWJvdnZs4-nfDGo5jAS5gueTb3PbxdWNwNwV47_qu8MzIIwnItrqSXB1_jCFccL6mf3HKQPwGzXJ4l",
    platform: "Instagram",
    platformIcon: "photo_camera",
    platformColor: "text-pink-500",
    viralScore: 74,
    views: "856K",
    duration: "8:22",
    addedDate: "Dec 22, 2024",
    status: "analyzed",
    tags: ["Lifestyle", "Routine"],
  },
  {
    id: 3,
    title: "Coding ASMR Setup",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBixOnb8tcWN2OE46BLA5aewLiz96O7NhX1PPs-o5hfAjugsck4BmaTytisCoP5DLXHQrFW81vS7x-vfatcA73FRM0h5yJRnMgXv6Zy1AuLESkdhLzeSUH4-uEuwnklKEawqdvjOHlE_DzdHumV0vzPPTMs-wxrxKkN3Acv3ejEwDB31vFNc18SXSXaKeItcdDZJfNpMKzLm-5Df5XzscOzvb8YJTYLqBD5I4fiqVRIc2-UUFKNn3K5WXAyRznnRIQzRCJmIPvqRfpt",
    platform: "TikTok",
    platformIcon: "music_note",
    platformColor: "text-cyan-400",
    viralScore: 89,
    views: "1.2M",
    duration: "0:58",
    addedDate: "Dec 21, 2024",
    status: "analyzed",
    tags: ["Tech", "ASMR", "Coding"],
  },
  {
    id: 4,
    title: "How to Scale in 2024",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0fNHXQBUxIk4m9dQaZXQr0qPHNW4PC8yiquuhGTLnWYXJ8dj-9a6x7osVr43oeLZqCBkETEb8XHliMhsDhYiFBmmPtmIOl93FzmFhRsvrP9DFNQlNECjHNZsqkjvILkaC13z0PJqiesg0H-utAQQWa-uyrTTsczOiMfu3sTzXwDgdV0ovdtZaH6vFmYG93xwSbxFZk7i97rYx6TGXB9MS6aUykdz3X_0WsUlvb6--b2GQ9m172OSQkSS5zXrh-bY3bcAYslqwFGUh",
    platform: "YouTube",
    platformIcon: "smart_display",
    platformColor: "text-red-500",
    viralScore: 92,
    views: "12.4K",
    duration: "15:42",
    addedDate: "Dec 20, 2024",
    status: "analyzed",
    tags: ["Business", "Growth"],
  },
  {
    id: 5,
    title: "Day in My Life as a Developer",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuApv_hYd0tl_7QYavmaS3Dl1phgrvViIXB29WIeV5STUwpBjw-2Yp534pH8y39XVmdtxN1GMmR5f3MzZReMj_CPf23t10ADquRkTiWVBeDewCM8ZMnoiah8P20j6xewdvG4lMsZzdiy0QHLKtVgV1P3T-SXv_soVTMliHfUWlGO9mF7wndrENZAVy1k0xxLSCjAwFmDXhVQV6qMJwGQbnzBx4HmXRcz0Yd0YNE4LHtXYQGnR8DA_6GT6GlfqVNCZz8T1FmJQH5FkJ85",
    platform: "TikTok",
    platformIcon: "music_note",
    platformColor: "text-cyan-400",
    viralScore: 0,
    views: "-",
    duration: "1:15",
    addedDate: "Dec 19, 2024",
    status: "pending",
    tags: [],
  },
  {
    id: 6,
    title: "Top 5 Side Hustles for 2025",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuA97cBjam5EOmFz6n_Hl-xTR_j_Fql664cdlYaA19wK5T5dxqfRNcK8jARhFEGJe-5eV8Ixi2pKOz3tYNQPqCEPOkCbuKQSVt9yIpJ5PQuIqTPLrN6KpwXR99grfxquq8i1XyuUApVCZ0CGwx7BIlvHyydkMcU_z_N1wGI_Ve5-ko36M2dXVE4DHrmHXKNl5_FUc2tkNZM5hl88U5pQ_rUn6zMIS-Aoibz5MphB1qWzt__Qkvp9ZkYfbsaFPbckovcxu03pGdVZ_PPQ",
    platform: "YouTube",
    platformIcon: "smart_display",
    platformColor: "text-red-500",
    viralScore: 0,
    views: "-",
    duration: "18:30",
    addedDate: "Dec 18, 2024",
    status: "processing",
    tags: [],
  },
]

const stats = [
  { label: "Total Videos", value: "156", icon: "video_library", color: "primary" },
  { label: "Analyzed", value: "142", icon: "check_circle", color: "green" },
  { label: "Pending", value: "8", icon: "pending", color: "yellow" },
  { label: "Avg Score", value: "82", icon: "trending_up", color: "purple" },
]

export default function VideosPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPlatform, setSelectedPlatform] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [sortBy, setSortBy] = useState("date")
  const [viewMode, setViewMode] = useState("grid")
  const [selectedVideos, setSelectedVideos] = useState([])

  const filteredVideos = allVideos
    .filter(v => selectedPlatform === "all" || v.platform.toLowerCase() === selectedPlatform)
    .filter(v => selectedStatus === "all" || v.status === selectedStatus)
    .filter(v => v.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "score") return b.viralScore - a.viralScore
      if (sortBy === "views") return parseInt(b.views.replace(/[^0-9]/g, "")) - parseInt(a.views.replace(/[^0-9]/g, ""))
      return 0
    })

  const toggleSelect = (id) => {
    setSelectedVideos(prev =>
      prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
    )
  }

  const selectAll = () => {
    if (selectedVideos.length === filteredVideos.length) {
      setSelectedVideos([])
    } else {
      setSelectedVideos(filteredVideos.map(v => v.id))
    }
  }

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-400"
    if (score >= 60) return "text-yellow-400"
    if (score > 0) return "text-red-400"
    return "text-slate-500"
  }

  const getScoreBg = (score) => {
    if (score >= 80) return "bg-green-500/20 border-green-500/30"
    if (score >= 60) return "bg-yellow-500/20 border-yellow-500/30"
    if (score > 0) return "bg-red-500/20 border-red-500/30"
    return "bg-slate-500/20 border-slate-500/30"
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "analyzed": return { bg: "bg-green-500/20 text-green-400", icon: "check_circle", text: "Analyzed" }
      case "processing": return { bg: "bg-yellow-500/20 text-yellow-400", icon: "pending", text: "Processing" }
      default: return { bg: "bg-slate-500/20 text-slate-400", icon: "schedule", text: "Pending" }
    }
  }

  return (
    <div className="p-4 md:p-8 lg:p-10 bg-[#101922] min-h-full">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 relative z-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Video Library
            </h2>
            <p className="text-slate-400 text-base font-medium">
              Manage and organize all your analyzed videos
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#223c49] hover:bg-[#2e4e5e] text-white text-sm font-bold rounded-lg transition-colors">
              <span className="material-symbols-outlined text-lg">upload</span>
              Upload
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-[#101922] text-sm font-bold rounded-lg transition-colors shadow-lg shadow-primary/25">
              <span className="material-symbols-outlined text-lg">add_link</span>
              Add URL
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
          {stats.map((stat) => {
            const colorClasses = {
              primary: "from-primary/20 to-[#182b34] text-primary",
              green: "from-green-500/20 to-[#182b34] text-green-500",
              yellow: "from-yellow-500/20 to-[#182b34] text-yellow-500",
              purple: "from-purple-500/20 to-[#182b34] text-purple-500",
            }
            return (
              <div
                key={stat.label}
                className={`p-5 rounded-xl bg-gradient-to-br ${colorClasses[stat.color].split(" ")[0]} ${colorClasses[stat.color].split(" ")[1]} border border-[#223c49]`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`material-symbols-outlined ${colorClasses[stat.color].split(" ")[2]}`}>{stat.icon}</span>
                </div>
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Filters & Search */}
        <div className="bg-[#182b34] rounded-xl border border-[#223c49] p-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                <span className="material-symbols-outlined">search</span>
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search videos..."
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border bg-[#101922] text-white placeholder-slate-500 border-[#223c49] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors text-sm"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="bg-[#223c49] border border-[#223c49] text-white rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:border-primary"
              >
                <option value="all">All Platforms</option>
                <option value="youtube">YouTube</option>
                <option value="tiktok">TikTok</option>
                <option value="instagram">Instagram</option>
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-[#223c49] border border-[#223c49] text-white rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:border-primary"
              >
                <option value="all">All Status</option>
                <option value="analyzed">Analyzed</option>
                <option value="processing">Processing</option>
                <option value="pending">Pending</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#223c49] border border-[#223c49] text-white rounded-lg px-3 py-2 text-sm font-medium focus:outline-none focus:border-primary"
              >
                <option value="date">Date Added</option>
                <option value="score">Viral Score</option>
                <option value="views">Views</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-[#223c49] rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded ${viewMode === "grid" ? "bg-primary text-[#101922]" : "text-slate-400 hover:text-white"}`}
                >
                  <span className="material-symbols-outlined text-lg">grid_view</span>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded ${viewMode === "list" ? "bg-primary text-[#101922]" : "text-slate-400 hover:text-white"}`}
                >
                  <span className="material-symbols-outlined text-lg">view_list</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedVideos.length > 0 && (
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-[#223c49]">
              <span className="text-slate-400 text-sm">{selectedVideos.length} selected</span>
              <button className="flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-lg hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-sm">autorenew</span>
                Repurpose
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 bg-[#223c49] text-white text-sm font-medium rounded-lg hover:bg-[#2e4e5e] transition-colors">
                <span className="material-symbols-outlined text-sm">download</span>
                Export
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 bg-red-500/10 text-red-400 text-sm font-medium rounded-lg hover:bg-red-500/20 transition-colors">
                <span className="material-symbols-outlined text-sm">delete</span>
                Delete
              </button>
            </div>
          )}
        </div>

        {/* Videos Grid/List */}
        <div className="relative z-10">
          {/* Select All */}
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={selectAll}
              className="flex items-center gap-2 text-slate-400 text-sm hover:text-white transition-colors"
            >
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                selectedVideos.length === filteredVideos.length && filteredVideos.length > 0
                  ? "border-primary bg-primary"
                  : "border-[#223c49]"
              }`}>
                {selectedVideos.length === filteredVideos.length && filteredVideos.length > 0 && (
                  <span className="material-symbols-outlined text-[#101922] text-sm">check</span>
                )}
              </div>
              Select All
            </button>
            <span className="text-slate-500 text-sm">•</span>
            <span className="text-slate-400 text-sm">{filteredVideos.length} videos</span>
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredVideos.map((video) => {
                const statusBadge = getStatusBadge(video.status)
                return (
                  <div
                    key={video.id}
                    className={`group bg-[#182b34] border rounded-xl overflow-hidden transition-all ${
                      selectedVideos.includes(video.id)
                        ? "border-primary shadow-lg shadow-primary/10"
                        : "border-[#223c49] hover:border-primary/50"
                    }`}
                  >
                    <div
                      className="h-40 bg-cover bg-center relative"
                      style={{ backgroundImage: `url('${video.thumbnail}')` }}
                    >
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

                      {/* Checkbox */}
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleSelect(video.id); }}
                        className="absolute top-2 left-2 z-10"
                      >
                        <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                          selectedVideos.includes(video.id)
                            ? "border-primary bg-primary"
                            : "border-white/50 bg-black/30 hover:border-white"
                        }`}>
                          {selectedVideos.includes(video.id) && (
                            <span className="material-symbols-outlined text-[#101922] text-sm">check</span>
                          )}
                        </div>
                      </button>

                      {/* Platform Badge */}
                      <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-md flex items-center gap-1">
                        <span className={`material-symbols-outlined text-[12px] ${video.platformColor}`}>{video.platformIcon}</span>
                        {video.platform}
                      </div>

                      {/* Duration */}
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                        {video.duration}
                      </div>

                      {/* Status Badge */}
                      <div className={`absolute bottom-2 left-2 ${statusBadge.bg} text-xs font-bold px-2 py-1 rounded backdrop-blur-md flex items-center gap-1`}>
                        <span className="material-symbols-outlined text-[12px]">{statusBadge.icon}</span>
                        {statusBadge.text}
                      </div>

                      {/* Play Button */}
                      <Link
                        href={`/dashboard/analyze?video=${video.id}`}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <span className="material-symbols-outlined text-white text-5xl">play_circle</span>
                      </Link>
                    </div>

                    <div className="p-4">
                      <h4 className="text-white text-sm font-bold line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h4>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">{video.addedDate}</span>
                        {video.viralScore > 0 ? (
                          <span className={`font-bold ${getScoreColor(video.viralScore)}`}>
                            Score: {video.viralScore}
                          </span>
                        ) : (
                          <span className="text-slate-500">Not analyzed</span>
                        )}
                      </div>
                      {video.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {video.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-[#223c49] text-slate-400 text-[10px] rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="bg-[#182b34] rounded-xl border border-[#223c49] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#223c49]">
                    <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-10"></th>
                    <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Video</th>
                    <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Platform</th>
                    <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Score</th>
                    <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Views</th>
                    <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                    <th className="text-left py-3 px-4 text-xs font-bold text-slate-500 uppercase tracking-wider w-10"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVideos.map((video) => {
                    const statusBadge = getStatusBadge(video.status)
                    return (
                      <tr
                        key={video.id}
                        className={`border-b border-[#223c49]/50 hover:bg-[#223c49]/30 transition-colors ${
                          selectedVideos.includes(video.id) ? "bg-primary/5" : ""
                        }`}
                      >
                        <td className="py-3 px-4">
                          <button onClick={() => toggleSelect(video.id)}>
                            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                              selectedVideos.includes(video.id)
                                ? "border-primary bg-primary"
                                : "border-[#223c49]"
                            }`}>
                              {selectedVideos.includes(video.id) && (
                                <span className="material-symbols-outlined text-[#101922] text-sm">check</span>
                              )}
                            </div>
                          </button>
                        </td>
                        <td className="py-3 px-4">
                          <Link href={`/dashboard/analyze?video=${video.id}`} className="flex items-center gap-3 group">
                            <div
                              className="w-16 h-10 rounded bg-cover bg-center flex-shrink-0"
                              style={{ backgroundImage: `url('${video.thumbnail}')` }}
                            ></div>
                            <div>
                              <p className="text-white text-sm font-medium line-clamp-1 group-hover:text-primary transition-colors">
                                {video.title}
                              </p>
                              <p className="text-slate-500 text-xs">{video.duration}</p>
                            </div>
                          </Link>
                        </td>
                        <td className="py-3 px-4">
                          <span className="flex items-center gap-1 text-sm">
                            <span className={`material-symbols-outlined text-lg ${video.platformColor}`}>{video.platformIcon}</span>
                            <span className="text-slate-300">{video.platform}</span>
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          {video.viralScore > 0 ? (
                            <span className={`px-2 py-1 rounded-full text-sm font-bold ${getScoreBg(video.viralScore)} ${getScoreColor(video.viralScore)}`}>
                              {video.viralScore}
                            </span>
                          ) : (
                            <span className="text-slate-500 text-sm">-</span>
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-white text-sm">{video.views}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`${statusBadge.bg} text-xs font-bold px-2 py-1 rounded flex items-center gap-1 w-fit`}>
                            <span className="material-symbols-outlined text-[12px]">{statusBadge.icon}</span>
                            {statusBadge.text}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-slate-400 text-sm">{video.addedDate}</span>
                        </td>
                        <td className="py-3 px-4">
                          <button className="text-slate-400 hover:text-white transition-colors">
                            <span className="material-symbols-outlined">more_vert</span>
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between relative z-10">
          <span className="text-slate-400 text-sm">Showing 1-{filteredVideos.length} of {allVideos.length} videos</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 bg-[#223c49] text-slate-400 text-sm font-medium rounded-lg hover:bg-[#2e4e5e] hover:text-white transition-colors disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-3 py-1.5 bg-primary text-[#101922] text-sm font-bold rounded-lg">
              1
            </button>
            <button className="px-3 py-1.5 bg-[#223c49] text-white text-sm font-medium rounded-lg hover:bg-[#2e4e5e] transition-colors">
              2
            </button>
            <button className="px-3 py-1.5 bg-[#223c49] text-white text-sm font-medium rounded-lg hover:bg-[#2e4e5e] transition-colors">
              3
            </button>
            <button className="px-3 py-1.5 bg-[#223c49] text-white text-sm font-medium rounded-lg hover:bg-[#2e4e5e] transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
