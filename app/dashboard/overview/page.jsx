"use client"

import { useState } from "react"
import Link from "next/link"

// Sample data for viral videos
const trendingVideos = [
  {
    id: 1,
    title: "Top 10 AI Gadgets 2024",
    platform: "YouTube",
    platformIcon: "smart_display",
    platformColor: "text-red-500",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuA97cBjam5EOmFz6n_Hl-xTR_j_Fql664cdlYaA19wK5T5dxqfRNcK8jARhFEGJe-5eV8Ixi2pKOz3tYNQPqCEPOkCbuKQSVt9yIpJ5PQuIqTPLrN6KpwXR99grfxquq8i1XyuUApVCZ0CGwx7BIlvHyydkMcU_z_N1wGI_Ve5-ko36M2dXVE4DHrmHXKNl5_FUc2tkNZM5hl88U5pQ_rUn6zMIS-Aoibz5MphB1qWzt__Qkvp9ZkYfbsaFPbckovcxu03pGdVZ_PPQ",
    viralScore: 98,
    scoreColor: "green",
    views: "2.4M",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "Morning Routine & Coffee",
    platform: "Instagram",
    platformIcon: "photo_camera",
    platformColor: "text-pink-500",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb7x380zL-hi-6K26BW8qJJj_82uYWY-5fRKnUTQdgJidMH-tOm1-lhxKW7bC7atv9XY4XN9M-HLtY0VKhnK02SIQUX2GtFdnU4tAEHAo9X55QBqwXmsHpA6OcPL5w9vFvurrGXeVLDrssmlF6LRU91EM6LD75o-Omj1OgWVE_OnEwZfGOri-ZAvr74l32DLnWJvdnZs4-nfDGo5jAS5gueTb3PbxdWNwNwV47_qu8MzIIwnItrqSXB1_jCFccL6mf3HKQPwGzXJ4l",
    viralScore: 74,
    scoreColor: "yellow",
    views: "856K",
    time: "5 hours ago",
  },
  {
    id: 3,
    title: "Coding ASMR Setup",
    platform: "TikTok",
    platformIcon: "music_note",
    platformColor: "text-cyan-400",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBixOnb8tcWN2OE46BLA5aewLiz96O7NhX1PPs-o5hfAjugsck4BmaTytisCoP5DLXHQrFW81vS7x-vfatcA73FRM0h5yJRnMgXv6Zy1AuLESkdhLzeSUH4-uEuwnklKEawqdvjOHlE_DzdHumV0vzPPTMs-wxrxKkN3Acv3ejEwDB31vFNc18SXSXaKeItcdDZJfNpMKzLm-5Df5XzscOzvb8YJTYLqBD5I4fiqVRIc2-UUFKNn3K5WXAyRznnRIQzRCJmIPvqRfpt",
    viralScore: 89,
    scoreColor: "green",
    views: "1.2M",
    time: "1 day ago",
  },
  {
    id: 4,
    title: "How to Scale in 2024",
    platform: "YouTube",
    platformIcon: "smart_display",
    platformColor: "text-red-500",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0fNHXQBUxIk4m9dQaZXQr0qPHNW4PC8yiquuhGTLnWYXJ8dj-9a6x7osVr43oeLZqCBkETEb8XHliMhsDhYiFBmmPtmIOl93FzmFhRsvrP9DFNQlNECjHNZsqkjvILkaC13z0PJqiesg0H-utAQQWa-uyrTTsczOiMfu3sTzXwDgdV0ovdtZaH6vFmYG93xwSbxFZk7i97rYx6TGXB9MS6aUykdz3X_0WsUlvb6--b2GQ9m172OSQkSS5zXrh-bY3bcAYslqwFGUh",
    viralScore: 92,
    scoreColor: "green",
    views: "12.4K",
    time: "3 days ago",
  },
]

const stats = [
  {
    label: "Total Videos in DB",
    value: "2,847",
    icon: "database",
    trend: "+124 this week",
    trendType: "positive",
    color: "primary",
  },
  {
    label: "Trending This Week",
    value: "89",
    icon: "trending_up",
    trend: "+23%",
    trendType: "positive",
    color: "green",
  },
  {
    label: "Top Niche",
    value: "Tech",
    icon: "category",
    subtext: "32% of viral content",
    color: "purple",
  },
  {
    label: "Repurposed Content",
    value: "156",
    icon: "autorenew",
    trend: "+18 today",
    trendType: "positive",
    color: "orange",
  },
]

const recentActivity = [
  {
    type: "summary",
    title: "AI Summary Generated",
    description: "\"Top 10 AI Gadgets 2024\" - Key points extracted",
    time: "10 min ago",
    icon: "auto_awesome",
    iconColor: "text-primary",
  },
  {
    type: "tags",
    title: "Tags Auto-Generated",
    description: "#TechReview #AI #Gadgets2024 #Viral",
    time: "25 min ago",
    icon: "label",
    iconColor: "text-green-500",
  },
  {
    type: "repurpose",
    title: "Script Repurposed",
    description: "TikTok script created from \"Morning Routine\"",
    time: "1 hour ago",
    icon: "edit_note",
    iconColor: "text-purple-500",
  },
  {
    type: "analysis",
    title: "Viral Analysis Complete",
    description: "\"How to Scale in 2024\" scored 92/100",
    time: "2 hours ago",
    icon: "insights",
    iconColor: "text-orange-500",
  },
  {
    type: "fetch",
    title: "Trending Videos Fetched",
    description: "12 new videos added from TikTok",
    time: "3 hours ago",
    icon: "cloud_download",
    iconColor: "text-cyan-500",
  },
]

export default function OverviewPage() {
  const [selectedPlatform, setSelectedPlatform] = useState("all")

  const filteredVideos = selectedPlatform === "all"
    ? trendingVideos
    : trendingVideos.filter(v => v.platform.toLowerCase() === selectedPlatform)

  return (
    <div className="p-4 md:p-8 lg:p-10 bg-[#101922] min-h-full">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
        {/* Background decorative element */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

        {/* Page Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 relative z-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Dashboard Overview
            </h2>
            <p className="text-slate-400 text-base font-medium">
              Snapshot of trends, recent videos, and quick actions
            </p>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center justify-center gap-2 rounded-xl h-10 px-4 bg-[#223c49] hover:bg-[#2e4e5e] text-white text-sm font-bold transition-colors border border-[#223c49]">
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
              <span>Add Video</span>
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl h-10 px-4 bg-[#223c49] hover:bg-[#2e4e5e] text-white text-sm font-bold transition-colors border border-[#223c49]">
              <span className="material-symbols-outlined text-[20px]">cloud_download</span>
              <span>Fetch Trending</span>
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl h-10 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-colors shadow-lg shadow-primary/25">
              <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
              <span>Analyze & Summarize</span>
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {stats.map((stat) => {
            const colorClasses = {
              primary: "from-primary/20 to-[#182b34] border-primary/20",
              green: "from-green-500/20 to-[#182b34] border-green-500/20",
              purple: "from-purple-500/20 to-[#182b34] border-purple-500/20",
              orange: "from-orange-500/20 to-[#182b34] border-orange-500/20",
            }
            const iconColors = {
              primary: "text-primary",
              green: "text-green-500",
              purple: "text-purple-500",
              orange: "text-orange-500",
            }
            return (
              <div
                key={stat.label}
                className={`p-6 rounded-xl bg-gradient-to-br ${colorClasses[stat.color]} border shadow-sm flex flex-col gap-2 relative overflow-hidden`}
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
                <div className="flex items-start justify-between relative z-10">
                  <p className="text-white/80 text-sm font-medium">{stat.label}</p>
                  <span className={`material-symbols-outlined ${iconColors[stat.color]}`}>{stat.icon}</span>
                </div>
                <div className="relative z-10">
                  <p className="text-4xl font-black text-white">{stat.value}</p>
                  {stat.trend && (
                    <p className={`text-xs mt-2 font-medium ${stat.trendType === "positive" ? "text-green-400" : "text-red-400"}`}>
                      {stat.trend}
                    </p>
                  )}
                  {stat.subtext && (
                    <p className="text-xs mt-2 text-slate-400">{stat.subtext}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 relative z-10">
          {/* Viral Video Feed - Takes 2 columns */}
          <div className="xl:col-span-2 flex flex-col gap-6">
            {/* Section Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-white text-xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">whatshot</span>
                Viral Video Feed
              </h3>
              {/* Platform Filter */}
              <div className="flex gap-2">
                {["all", "youtube", "tiktok", "instagram"].map((platform) => (
                  <button
                    key={platform}
                    onClick={() => setSelectedPlatform(platform)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors capitalize ${
                      selectedPlatform === platform
                        ? "bg-primary text-white"
                        : "bg-[#223c49] text-slate-300 hover:bg-[#2e4e5e]"
                    }`}
                  >
                    {platform === "all" ? "All" : platform}
                  </button>
                ))}
              </div>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredVideos.map((video) => (
                <Link
                  href={`/dashboard/analysis/${video.id}`}
                  key={video.id}
                  className="group flex flex-col bg-[#182b34] border border-[#223c49] hover:border-primary/50 rounded-xl overflow-hidden transition-all cursor-pointer"
                >
                  <div
                    className="h-40 bg-cover bg-center relative"
                    style={{ backgroundImage: `url('${video.thumbnail}')` }}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                    {/* Platform Badge */}
                    <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-md flex items-center gap-1">
                      <span className={`material-symbols-outlined text-[12px] ${video.platformColor}`}>{video.platformIcon}</span>
                      {video.platform}
                    </div>
                    {/* Viral Score Badge */}
                    <div className={`absolute bottom-2 left-2 ${
                      video.scoreColor === "green"
                        ? "bg-green-500/20 border-green-500/50 text-green-400"
                        : "bg-yellow-500/20 border-yellow-500/50 text-yellow-400"
                    } border text-xs font-bold px-2 py-0.5 rounded backdrop-blur-md`}>
                      {video.viralScore} Viral Score
                    </div>
                    {/* Views Badge */}
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-md flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">visibility</span>
                      {video.views}
                    </div>
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white text-5xl">play_circle</span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col gap-1">
                    <h4 className="text-white text-sm font-bold line-clamp-1 group-hover:text-primary transition-colors">{video.title}</h4>
                    <p className="text-slate-500 text-xs">Added {video.time}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Link */}
            <div className="text-center">
              <Link
                href="/dashboard/videos"
                className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1 transition-colors"
              >
                View All Videos <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Recent Activity */}
          <div className="flex flex-col gap-6">
            {/* Recent Activity Section */}
            <div className="bg-[#182b34] rounded-xl border border-[#223c49] shadow-sm flex flex-col flex-1">
              <div className="p-4 border-b border-[#223c49] flex justify-between items-center">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">history</span>
                  Recent AI Activity
                </h3>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
              </div>
              <div className="p-4 flex flex-col gap-0 flex-1 overflow-y-auto max-h-[500px]">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 pb-4 border-l-2 ${
                      index === recentActivity.length - 1 ? "border-transparent" : "border-[#223c49]"
                    } pl-4 relative`}
                  >
                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#182b34] border-2 border-[#223c49] flex items-center justify-center`}>
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div className="flex flex-col gap-1 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className={`material-symbols-outlined text-lg ${activity.iconColor}`}>{activity.icon}</span>
                          <span className="text-sm font-bold text-white">{activity.title}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400">{activity.description}</p>
                      <span className="text-[10px] font-mono text-slate-500 mt-1">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-[#223c49] text-center">
                <button className="text-xs text-primary font-bold hover:underline">View Full Activity Log</button>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="bg-gradient-to-br from-[#101d23] to-[#182b34] rounded-xl border border-[#223c49] p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-6xl text-white">insights</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2 relative z-10">
                <span className="material-symbols-outlined text-primary">analytics</span>
                Performance Insights
              </h3>
              <div className="space-y-4 relative z-10">
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-green-500 text-sm">trending_up</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Engagement Up</p>
                    <p className="text-slate-400 text-xs mt-1">Your content engagement increased 32% this week</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-sm">star</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Top Performing</p>
                    <p className="text-slate-400 text-xs mt-1">Tech niche videos score 25% higher on average</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="size-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-purple-500 text-sm">tips_and_updates</span>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Recommendation</p>
                    <p className="text-slate-400 text-xs mt-1">Post more short-form content between 3-5 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
