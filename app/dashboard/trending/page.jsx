"use client"

import { useState } from "react"
import Link from "next/link"

const trendCategories = [
  { id: "all", name: "All", icon: "apps" },
  { id: "tech", name: "Tech", icon: "computer" },
  { id: "lifestyle", name: "Lifestyle", icon: "favorite" },
  { id: "gaming", name: "Gaming", icon: "sports_esports" },
  { id: "education", name: "Education", icon: "school" },
  { id: "entertainment", name: "Entertainment", icon: "movie" },
]

const trendingTopics = [
  {
    id: 1,
    topic: "AI Tools 2024",
    growth: "+245%",
    mentions: "125K",
    platforms: ["YouTube", "TikTok", "Twitter"],
    status: "rising",
    score: 98,
  },
  {
    id: 2,
    topic: "Morning Routine",
    growth: "+89%",
    mentions: "89K",
    platforms: ["Instagram", "TikTok"],
    status: "stable",
    score: 85,
  },
  {
    id: 3,
    topic: "Tech Minimalism",
    growth: "+156%",
    mentions: "67K",
    platforms: ["YouTube", "Instagram"],
    status: "rising",
    score: 91,
  },
  {
    id: 4,
    topic: "Side Hustles",
    growth: "+312%",
    mentions: "203K",
    platforms: ["TikTok", "YouTube", "Twitter"],
    status: "viral",
    score: 99,
  },
  {
    id: 5,
    topic: "Productivity Hacks",
    growth: "+67%",
    mentions: "45K",
    platforms: ["YouTube"],
    status: "stable",
    score: 78,
  },
]

const trendingVideos = [
  {
    id: 1,
    title: "I Built a $1M Business Using AI",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuA97cBjam5EOmFz6n_Hl-xTR_j_Fql664cdlYaA19wK5T5dxqfRNcK8jARhFEGJe-5eV8Ixi2pKOz3tYNQPqCEPOkCbuKQSVt9yIpJ5PQuIqTPLrN6KpwXR99grfxquq8i1XyuUApVCZ0CGwx7BIlvHyydkMcU_z_N1wGI_Ve5-ko36M2dXVE4DHrmHXKNl5_FUc2tkNZM5hl88U5pQ_rUn6zMIS-Aoibz5MphB1qWzt__Qkvp9ZkYfbsaFPbckovcxu03pGdVZ_PPQ",
    platform: "YouTube",
    platformIcon: "smart_display",
    platformColor: "text-red-500",
    views: "2.4M",
    viralScore: 98,
    timeAgo: "2 hours ago",
    channel: "Tech Insights",
  },
  {
    id: 2,
    title: "My 5AM Morning Routine",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb7x380zL-hi-6K26BW8qJJj_82uYWY-5fRKnUTQdgJidMH-tOm1-lhxKW7bC7atv9XY4XN9M-HLtY0VKhnK02SIQUX2GtFdnU4tAEHAo9X55QBqwXmsHpA6OcPL5w9vFvurrGXeVLDrssmlF6LRU91EM6LD75o-Omj1OgWVE_OnEwZfGOri-ZAvr74l32DLnWJvdnZs4-nfDGo5jAS5gueTb3PbxdWNwNwV47_qu8MzIIwnItrqSXB1_jCFccL6mf3HKQPwGzXJ4l",
    platform: "Instagram",
    platformIcon: "photo_camera",
    platformColor: "text-pink-500",
    views: "856K",
    viralScore: 74,
    timeAgo: "5 hours ago",
    channel: "Lifestyle Daily",
  },
  {
    id: 3,
    title: "Coding ASMR - Building an App",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBixOnb8tcWN2OE46BLA5aewLiz96O7NhX1PPs-o5hfAjugsck4BmaTytisCoP5DLXHQrFW81vS7x-vfatcA73FRM0h5yJRnMgXv6Zy1AuLESkdhLzeSUH4-uEuwnklKEawqdvjOHlE_DzdHumV0vzPPTMs-wxrxKkN3Acv3ejEwDB31vFNc18SXSXaKeItcdDZJfNpMKzLm-5Df5XzscOzvb8YJTYLqBD5I4fiqVRIc2-UUFKNn3K5WXAyRznnRIQzRCJmIPvqRfpt",
    platform: "TikTok",
    platformIcon: "music_note",
    platformColor: "text-cyan-400",
    views: "1.2M",
    viralScore: 89,
    timeAgo: "1 day ago",
    channel: "DevVibes",
  },
  {
    id: 4,
    title: "How to Scale Your Business",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0fNHXQBUxIk4m9dQaZXQr0qPHNW4PC8yiquuhGTLnWYXJ8dj-9a6x7osVr43oeLZqCBkETEb8XHliMhsDhYiFBmmPtmIOl93FzmFhRsvrP9DFNQlNECjHNZsqkjvILkaC13z0PJqiesg0H-utAQQWa-uyrTTsczOiMfu3sTzXwDgdV0ovdtZaH6vFmYG93xwSbxFZk7i97rYx6TGXB9MS6aUykdz3X_0WsUlvb6--b2GQ9m172OSQkSS5zXrh-bY3bcAYslqwFGUh",
    platform: "YouTube",
    platformIcon: "smart_display",
    platformColor: "text-red-500",
    views: "12.4K",
    viralScore: 92,
    timeAgo: "3 days ago",
    channel: "Business Hub",
  },
  {
    id: 5,
    title: "Day in My Life as a Developer",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuApv_hYd0tl_7QYavmaS3Dl1phgrvViIXB29WIeV5STUwpBjw-2Yp534pH8y39XVmdtxN1GMmR5f3MzZReMj_CPf23t10ADquRkTiWVBeDewCM8ZMnoiah8P20j6xewdvG4lMsZzdiy0QHLKtVgV1P3T-SXv_soVTMliHfUWlGO9mF7wndrENZAVy1k0xxLSCjAwFmDXhVQV6qMJwGQbnzBx4HmXRcz0Yd0YNE4LHtXYQGnR8DA_6GT6GlfqVNCZz8T1FmJQH5FkJ85",
    platform: "TikTok",
    platformIcon: "music_note",
    platformColor: "text-cyan-400",
    views: "567K",
    viralScore: 86,
    timeAgo: "6 hours ago",
    channel: "CodeLife",
  },
  {
    id: 6,
    title: "10 Apps That Pay You Money",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuA97cBjam5EOmFz6n_Hl-xTR_j_Fql664cdlYaA19wK5T5dxqfRNcK8jARhFEGJe-5eV8Ixi2pKOz3tYNQPqCEPOkCbuKQSVt9yIpJ5PQuIqTPLrN6KpwXR99grfxquq8i1XyuUApVCZ0CGwx7BIlvHyydkMcU_z_N1wGI_Ve5-ko36M2dXVE4DHrmHXKNl5_FUc2tkNZM5hl88U5pQ_rUn6zMIS-Aoibz5MphB1qWzt__Qkvp9ZkYfbsaFPbckovcxu03pGdVZ_PPQ",
    platform: "YouTube",
    platformIcon: "smart_display",
    platformColor: "text-red-500",
    views: "3.2M",
    viralScore: 95,
    timeAgo: "12 hours ago",
    channel: "Money Makers",
  },
]

const contentIdeas = [
  {
    title: "5 AI Tools You're Not Using Yet",
    topic: "AI Tools 2024",
    difficulty: "Easy",
    potentialViews: "500K+",
  },
  {
    title: "My Minimalist Tech Setup Tour",
    topic: "Tech Minimalism",
    difficulty: "Medium",
    potentialViews: "200K+",
  },
  {
    title: "How I Make $10K/Month Side Hustling",
    topic: "Side Hustles",
    difficulty: "Hard",
    potentialViews: "1M+",
  },
]

export default function TrendingPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPlatform, setSelectedPlatform] = useState("all")
  const [timeRange, setTimeRange] = useState("24h")

  const getStatusColor = (status) => {
    switch (status) {
      case "viral": return "bg-red-500/20 text-red-400 border-red-500/30"
      case "rising": return "bg-green-500/20 text-green-400 border-green-500/30"
      default: return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    }
  }

  return (
    <div className="p-4 md:p-8 lg:p-10 bg-[#101922] min-h-full">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 relative z-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Trending Now
            </h2>
            <p className="text-slate-400 text-base font-medium">
              Discover viral trends, topics, and content opportunities
            </p>
          </div>
          <div className="flex gap-3">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-[#223c49] border border-[#223c49] text-white rounded-lg px-4 py-2 text-sm font-medium focus:outline-none focus:border-primary"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
            </select>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-[#101922] text-sm font-bold rounded-lg transition-colors shadow-lg shadow-primary/25">
              <span className="material-symbols-outlined text-lg">refresh</span>
              Refresh
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 relative z-10">
          {trendCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? "bg-primary text-[#101922]"
                  : "bg-[#223c49] text-white hover:bg-[#2e4e5e]"
              }`}
            >
              <span className="material-symbols-outlined text-lg">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 relative z-10">
          {/* Left Column - Trending Topics & Videos */}
          <div className="xl:col-span-2 flex flex-col gap-6">
            {/* Trending Topics */}
            <div className="bg-[#182b34] rounded-xl border border-[#223c49] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-orange-500">local_fire_department</span>
                  Hot Topics
                </h3>
                <Link href="#" className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                  View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>

              <div className="space-y-3">
                {trendingTopics.map((topic, idx) => (
                  <div
                    key={topic.id}
                    className="flex items-center gap-4 p-4 bg-[#101922] rounded-lg border border-[#223c49] hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-white font-bold">{topic.topic}</p>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold border ${getStatusColor(topic.status)}`}>
                          {topic.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-500 text-xs">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">trending_up</span>
                          {topic.growth}
                        </span>
                        <span>{topic.mentions} mentions</span>
                        <span className="flex items-center gap-1">
                          {topic.platforms.slice(0, 2).join(", ")}
                          {topic.platforms.length > 2 && ` +${topic.platforms.length - 2}`}
                        </span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                      topic.score >= 90 ? "bg-green-500/20 text-green-400" :
                      topic.score >= 75 ? "bg-yellow-500/20 text-yellow-400" :
                      "bg-slate-500/20 text-slate-400"
                    }`}>
                      {topic.score}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Videos Grid */}
            <div className="bg-[#182b34] rounded-xl border border-[#223c49] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">whatshot</span>
                  Viral Videos
                </h3>
                <div className="flex gap-2">
                  {["all", "youtube", "tiktok", "instagram"].map((platform) => (
                    <button
                      key={platform}
                      onClick={() => setSelectedPlatform(platform)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors capitalize ${
                        selectedPlatform === platform
                          ? "bg-primary text-[#101922]"
                          : "bg-[#223c49] text-slate-300 hover:bg-[#2e4e5e]"
                      }`}
                    >
                      {platform === "all" ? "All" : platform}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {trendingVideos
                  .filter(v => selectedPlatform === "all" || v.platform.toLowerCase() === selectedPlatform)
                  .map((video) => (
                  <Link
                    href={`/dashboard/analyze?video=${video.id}`}
                    key={video.id}
                    className="group flex flex-col bg-[#101922] border border-[#223c49] hover:border-primary/50 rounded-xl overflow-hidden transition-all cursor-pointer"
                  >
                    <div
                      className="h-32 bg-cover bg-center relative"
                      style={{ backgroundImage: `url('${video.thumbnail}')` }}
                    >
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                      <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-md flex items-center gap-1">
                        <span className={`material-symbols-outlined text-[12px] ${video.platformColor}`}>{video.platformIcon}</span>
                        {video.platform}
                      </div>
                      <div className={`absolute bottom-2 left-2 ${
                        video.viralScore >= 90 ? "bg-green-500/20 border-green-500/50 text-green-400" :
                        video.viralScore >= 75 ? "bg-yellow-500/20 border-yellow-500/50 text-yellow-400" :
                        "bg-slate-500/20 border-slate-500/50 text-slate-400"
                      } border text-xs font-bold px-2 py-0.5 rounded backdrop-blur-md`}>
                        {video.viralScore} Score
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-md flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">visibility</span>
                        {video.views}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined text-white text-4xl">play_circle</span>
                      </div>
                    </div>
                    <div className="p-3 flex flex-col gap-1">
                      <h4 className="text-white text-sm font-bold line-clamp-2 group-hover:text-primary transition-colors">{video.title}</h4>
                      <p className="text-slate-500 text-xs">{video.channel} • {video.timeAgo}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Insights & Ideas */}
          <div className="flex flex-col gap-6">
            {/* Content Ideas */}
            <div className="bg-[#182b34] rounded-xl border border-[#223c49] p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">lightbulb</span>
                AI Content Ideas
              </h3>

              <div className="space-y-3">
                {contentIdeas.map((idea, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#101922] rounded-lg border border-[#223c49] hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <p className="text-white font-medium text-sm mb-2">{idea.title}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-primary">{idea.topic}</span>
                      <span className="text-slate-500">{idea.potentialViews} potential</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                        idea.difficulty === "Easy" ? "bg-green-500/20 text-green-400" :
                        idea.difficulty === "Medium" ? "bg-yellow-500/20 text-yellow-400" :
                        "bg-red-500/20 text-red-400"
                      }`}>
                        {idea.difficulty}
                      </span>
                      <button className="text-primary text-xs font-medium hover:underline">
                        Generate Script
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-2 border border-[#223c49] text-primary text-sm font-medium rounded-lg hover:bg-[#223c49] transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">auto_awesome</span>
                Generate More Ideas
              </button>
            </div>

            {/* Platform Stats */}
            <div className="bg-[#182b34] rounded-xl border border-[#223c49] p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">insights</span>
                Platform Breakdown
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-500">smart_display</span>
                    <span className="text-white text-sm">YouTube</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-[#223c49] rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                    <span className="text-slate-400 text-xs">45%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-cyan-400">music_note</span>
                    <span className="text-white text-sm">TikTok</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-[#223c49] rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ width: "35%" }}></div>
                    </div>
                    <span className="text-slate-400 text-xs">35%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-pink-500">photo_camera</span>
                    <span className="text-white text-sm">Instagram</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-[#223c49] rounded-full overflow-hidden">
                      <div className="h-full bg-pink-500 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                    <span className="text-slate-400 text-xs">20%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Posting Times */}
            <div className="bg-gradient-to-br from-orange-500/10 to-[#182b34] rounded-xl border border-orange-500/20 p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-400">schedule</span>
                Best Posting Times
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-[#101922]/50 rounded-lg">
                  <span className="text-slate-300 text-sm">YouTube</span>
                  <span className="text-white font-bold text-sm">2-4 PM</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#101922]/50 rounded-lg">
                  <span className="text-slate-300 text-sm">TikTok</span>
                  <span className="text-white font-bold text-sm">7-9 PM</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#101922]/50 rounded-lg">
                  <span className="text-slate-300 text-sm">Instagram</span>
                  <span className="text-white font-bold text-sm">11 AM-1 PM</span>
                </div>
              </div>

              <p className="text-slate-400 text-xs mt-4">
                Based on your audience timezone (EST)
              </p>
            </div>

            {/* Quick Stats */}
            <div className="bg-[#182b34] rounded-xl border border-[#223c49] p-6">
              <h3 className="text-white font-bold mb-4">Today's Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-black text-primary">156</p>
                  <p className="text-slate-400 text-xs mt-1">New Trends</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-black text-green-400">89%</p>
                  <p className="text-slate-400 text-xs mt-1">Match Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
