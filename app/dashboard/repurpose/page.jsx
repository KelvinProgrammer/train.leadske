"use client"

import { useState } from "react"
import Link from "next/link"

const sourceVideos = [
  {
    id: 1,
    title: "10 AI Tools That Will Change Your Workflow in 2024",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuA97cBjam5EOmFz6n_Hl-xTR_j_Fql664cdlYaA19wK5T5dxqfRNcK8jARhFEGJe-5eV8Ixi2pKOz3tYNQPqCEPOkCbuKQSVt9yIpJ5PQuIqTPLrN6KpwXR99grfxquq8i1XyuUApVCZ0CGwx7BIlvHyydkMcU_z_N1wGI_Ve5-ko36M2dXVE4DHrmHXKNl5_FUc2tkNZM5hl88U5pQ_rUn6zMIS-Aoibz5MphB1qWzt__Qkvp9ZkYfbsaFPbckovcxu03pGdVZ_PPQ",
    duration: "12:34",
    platform: "YouTube",
    viralScore: 87,
  },
  {
    id: 2,
    title: "Morning Routine & Coffee",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb7x380zL-hi-6K26BW8qJJj_82uYWY-5fRKnUTQdgJidMH-tOm1-lhxKW7bC7atv9XY4XN9M-HLtY0VKhnK02SIQUX2GtFdnU4tAEHAo9X55QBqwXmsHpA6OcPL5w9vFvurrGXeVLDrssmlF6LRU91EM6LD75o-Omj1OgWVE_OnEwZfGOri-ZAvr74l32DLnWJvdnZs4-nfDGo5jAS5gueTb3PbxdWNwNwV47_qu8MzIIwnItrqSXB1_jCFccL6mf3HKQPwGzXJ4l",
    duration: "8:22",
    platform: "Instagram",
    viralScore: 74,
  },
]

const outputFormats = [
  { id: "tiktok", name: "TikTok", icon: "music_note", color: "text-cyan-400", aspect: "9:16" },
  { id: "reels", name: "Reels", icon: "photo_camera", color: "text-pink-500", aspect: "9:16" },
  { id: "shorts", name: "Shorts", icon: "smart_display", color: "text-red-500", aspect: "9:16" },
  { id: "twitter", name: "Twitter/X", icon: "alternate_email", color: "text-blue-400", aspect: "Text" },
  { id: "linkedin", name: "LinkedIn", icon: "work", color: "text-blue-600", aspect: "Text" },
  { id: "blog", name: "Blog Post", icon: "article", color: "text-green-500", aspect: "Long-form" },
]

const generatedClips = [
  {
    id: 1,
    title: "Hook: Why 90% of people don't know these tools",
    startTime: "0:00",
    endTime: "0:15",
    score: 95,
    selected: true,
  },
  {
    id: 2,
    title: "ChatGPT Pro Tips",
    startTime: "0:45",
    endTime: "1:30",
    score: 88,
    selected: true,
  },
  {
    id: 3,
    title: "Midjourney Workflow Demo",
    startTime: "2:10",
    endTime: "3:15",
    score: 91,
    selected: false,
  },
  {
    id: 4,
    title: "The One Tool That Changed Everything",
    startTime: "5:20",
    endTime: "6:10",
    score: 82,
    selected: true,
  },
]

const recentRepurposes = [
  { title: "How to Scale Fast", outputs: 5, created: "2 hours ago", status: "completed" },
  { title: "Tech Review #42", outputs: 3, created: "1 day ago", status: "completed" },
  { title: "Morning Vibes", outputs: 4, created: "2 days ago", status: "processing" },
]

export default function RepurposePage() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [selectedFormats, setSelectedFormats] = useState(["tiktok", "reels"])
  const [isProcessing, setIsProcessing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [clips, setClips] = useState(generatedClips)

  const toggleFormat = (formatId) => {
    setSelectedFormats((prev) =>
      prev.includes(formatId)
        ? prev.filter((f) => f !== formatId)
        : [...prev, formatId]
    )
  }

  const toggleClip = (clipId) => {
    setClips((prev) =>
      prev.map((clip) =>
        clip.id === clipId ? { ...clip, selected: !clip.selected } : clip
      )
    )
  }

  const handleProcess = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setShowResults(true)
    }, 2000)
  }

  return (
    <div className="p-4 md:p-8 lg:p-10 bg-[#101922] min-h-full">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 relative z-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Repurpose Content
            </h2>
            <p className="text-slate-400 text-base font-medium">
              Transform long-form videos into platform-optimized clips and posts
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#223c49] hover:bg-[#2e4e5e] text-white text-sm font-bold rounded-lg transition-colors">
              <span className="material-symbols-outlined text-lg">history</span>
              History
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 relative z-10">
          {/* Left Column - Source Selection */}
          <div className="xl:col-span-2 flex flex-col gap-6">
            {/* Source Video Selection */}
            <div className="bg-[#182b34] rounded-xl border border-[#223c49] p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">video_library</span>
                Select Source Video
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {sourceVideos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className={`relative group cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${
                      selectedVideo?.id === video.id
                        ? "border-primary shadow-lg shadow-primary/20"
                        : "border-[#223c49] hover:border-primary/50"
                    }`}
                  >
                    <div
                      className="h-32 bg-cover bg-center"
                      style={{ backgroundImage: `url('${video.thumbnail}')` }}
                    >
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                        {video.duration}
                      </div>
                      {selectedVideo?.id === video.id && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <span className="material-symbols-outlined text-[#101922] text-sm">check</span>
                        </div>
                      )}
                    </div>
                    <div className="p-3 bg-[#101922]">
                      <p className="text-white text-sm font-medium line-clamp-1">{video.title}</p>
                      <p className="text-slate-500 text-xs mt-1">{video.platform} • Score: {video.viralScore}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#223c49] hover:bg-[#2e4e5e] text-white text-sm font-medium rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-lg">upload</span>
                  Upload New
                </button>
                <span className="text-slate-500 text-sm">or</span>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#223c49] hover:bg-[#2e4e5e] text-white text-sm font-medium rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-lg">link</span>
                  Paste URL
                </button>
              </div>
            </div>

            {/* Output Format Selection */}
            <div className="bg-[#182b34] rounded-xl border border-[#223c49] p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">apps</span>
                Output Formats
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {outputFormats.map((format) => (
                  <button
                    key={format.id}
                    onClick={() => toggleFormat(format.id)}
                    className={`p-4 rounded-xl border transition-all flex flex-col items-center gap-2 ${
                      selectedFormats.includes(format.id)
                        ? "border-primary bg-primary/10"
                        : "border-[#223c49] hover:border-primary/50 bg-[#101922]"
                    }`}
                  >
                    <span className={`material-symbols-outlined text-2xl ${format.color}`}>
                      {format.icon}
                    </span>
                    <span className="text-white text-sm font-medium">{format.name}</span>
                    <span className="text-slate-500 text-xs">{format.aspect}</span>
                    {selectedFormats.includes(format.id) && (
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* AI Clips Detection */}
            {selectedVideo && (
              <div className="bg-[#182b34] rounded-xl border border-[#223c49] p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">auto_awesome</span>
                    AI-Detected Viral Moments
                  </h3>
                  <span className="text-slate-400 text-sm">{clips.filter(c => c.selected).length} selected</span>
                </div>

                <div className="space-y-3">
                  {clips.map((clip) => (
                    <div
                      key={clip.id}
                      onClick={() => toggleClip(clip.id)}
                      className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${
                        clip.selected
                          ? "border-primary/50 bg-primary/5"
                          : "border-[#223c49] bg-[#101922] hover:border-primary/30"
                      }`}
                    >
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                        clip.selected ? "border-primary bg-primary" : "border-[#223c49]"
                      }`}>
                        {clip.selected && (
                          <span className="material-symbols-outlined text-[#101922] text-sm">check</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm">{clip.title}</p>
                        <p className="text-slate-500 text-xs mt-1">
                          {clip.startTime} - {clip.endTime}
                        </p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                        clip.score >= 90 ? "bg-green-500/20 text-green-400" :
                        clip.score >= 80 ? "bg-yellow-500/20 text-yellow-400" :
                        "bg-slate-500/20 text-slate-400"
                      }`}>
                        {clip.score}
                      </div>
                      <button className="text-slate-400 hover:text-white transition-colors">
                        <span className="material-symbols-outlined">play_circle</span>
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">add</span>
                    Add Custom Clip
                  </button>
                  <button
                    onClick={handleProcess}
                    disabled={!selectedFormats.length || !clips.some(c => c.selected) || isProcessing}
                    className="px-6 py-3 bg-primary hover:bg-primary/90 text-[#101922] font-bold rounded-lg transition-all shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <span className="material-symbols-outlined animate-spin">progress_activity</span>
                        Processing...
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined">auto_awesome</span>
                        Generate {selectedFormats.length * clips.filter(c => c.selected).length} Outputs
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Results Preview */}
            {showResults && (
              <div className="bg-[#182b34] rounded-xl border border-[#223c49] p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500">check_circle</span>
                    Generated Content
                  </h3>
                  <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-[#101922] text-sm font-bold rounded-lg transition-colors">
                    <span className="material-symbols-outlined text-lg">download</span>
                    Download All
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedFormats.map((formatId) => {
                    const format = outputFormats.find(f => f.id === formatId)
                    return clips.filter(c => c.selected).map((clip) => (
                      <div
                        key={`${formatId}-${clip.id}`}
                        className="bg-[#101922] rounded-lg border border-[#223c49] overflow-hidden group"
                      >
                        <div className="aspect-[9/16] bg-gradient-to-br from-[#223c49] to-[#182b34] relative flex items-center justify-center">
                          <span className={`material-symbols-outlined text-4xl ${format.color}`}>
                            {format.icon}
                          </span>
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                              <span className="material-symbols-outlined text-white">play_arrow</span>
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                              <span className="material-symbols-outlined text-white">download</span>
                            </button>
                          </div>
                        </div>
                        <div className="p-3">
                          <p className="text-white text-xs font-medium line-clamp-1">{clip.title}</p>
                          <p className="text-slate-500 text-xs mt-1">{format.name}</p>
                        </div>
                      </div>
                    ))
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Settings & History */}
          <div className="flex flex-col gap-6">
            {/* Quick Settings */}
            <div className="bg-[#182b34] rounded-xl border border-[#223c49] p-6">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">tune</span>
                Quick Settings
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Caption Style</label>
                  <select className="w-full bg-[#101922] border border-[#223c49] text-white rounded-lg px-4 py-3 focus:border-primary focus:outline-none">
                    <option>Dynamic (Animated)</option>
                    <option>Static (Bottom)</option>
                    <option>Karaoke Style</option>
                    <option>No Captions</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Aspect Ratio Override</label>
                  <select className="w-full bg-[#101922] border border-[#223c49] text-white rounded-lg px-4 py-3 focus:border-primary focus:outline-none">
                    <option>Auto (Platform Default)</option>
                    <option>9:16 (Vertical)</option>
                    <option>1:1 (Square)</option>
                    <option>16:9 (Landscape)</option>
                  </select>
                </div>

                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Max Clip Duration</label>
                  <select className="w-full bg-[#101922] border border-[#223c49] text-white rounded-lg px-4 py-3 focus:border-primary focus:outline-none">
                    <option>60 seconds</option>
                    <option>90 seconds</option>
                    <option>3 minutes</option>
                    <option>No limit</option>
                  </select>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-white text-sm">Auto-add hooks</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-[#223c49] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-white text-sm">Auto-generate captions</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-[#223c49] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Recent Repurposes */}
            <div className="bg-[#182b34] rounded-xl border border-[#223c49] p-6 flex-1">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">history</span>
                Recent Projects
              </h3>

              <div className="space-y-3">
                {recentRepurposes.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-[#101922] rounded-lg border border-[#223c49] hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        item.status === "completed" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        <span className="material-symbols-outlined text-lg">
                          {item.status === "completed" ? "check" : "pending"}
                        </span>
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{item.title}</p>
                        <p className="text-slate-500 text-xs">{item.outputs} outputs • {item.created}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-400 hover:text-white transition-colors">
                      arrow_forward
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips Card */}
            <div className="bg-gradient-to-br from-purple-500/10 to-[#182b34] rounded-xl border border-purple-500/20 p-6">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-purple-400">tips_and_updates</span>
                Pro Tip
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Videos with hooks in the first 3 seconds get 40% more engagement. Our AI automatically detects and highlights the strongest opening moments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
