"use client"

import { useState } from "react"

const analysisResults = {
  viralScore: 87,
  title: "10 AI Tools That Will Change Your Workflow in 2024",
  thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuA97cBjam5EOmFz6n_Hl-xTR_j_Fql664cdlYaA19wK5T5dxqfRNcK8jARhFEGJe-5eV8Ixi2pKOz3tYNQPqCEPOkCbuKQSVt9yIpJ5PQuIqTPLrN6KpwXR99grfxquq8i1XyuUApVCZ0CGwx7BIlvHyydkMcU_z_N1wGI_Ve5-ko36M2dXVE4DHrmHXKNl5_FUc2tkNZM5hl88U5pQ_rUn6zMIS-Aoibz5MphB1qWzt__Qkvp9ZkYfbsaFPbckovcxu03pGdVZ_PPQ",
  duration: "12:34",
  platform: "YouTube",
  metrics: {
    hookStrength: 92,
    pacing: 78,
    retention: 85,
    engagement: 89,
    thumbnail: 94,
  },
  summary: "This video provides a comprehensive overview of 10 cutting-edge AI tools that are revolutionizing workflows across various industries. The presenter maintains strong engagement through quick cuts, visual demonstrations, and relatable examples. Key strengths include a compelling hook in the first 8 seconds and consistent pacing throughout.",
  keyTakeaways: [
    "Strong hook captures attention within first 5 seconds",
    "Clear structure with numbered list format",
    "High-quality B-roll and screen recordings",
    "Call-to-action placed strategically at 70% mark",
    "Thumbnail uses curiosity gap effectively",
  ],
  suggestedTags: [
    "AI Tools", "Productivity", "2024", "Tech Review", "Workflow",
    "Automation", "AI Software", "Best AI Tools", "Work Smarter", "Tech Tips"
  ],
  improvements: [
    { area: "Intro Length", suggestion: "Consider trimming intro by 3 seconds for faster hook", priority: "medium" },
    { area: "Mid-roll CTA", suggestion: "Add a subscribe reminder around the 6-minute mark", priority: "low" },
    { area: "End Screen", suggestion: "Extend end screen duration to 20 seconds for better click-through", priority: "high" },
  ],
  chapters: [
    { time: "0:00", title: "Introduction & Hook", score: 95 },
    { time: "0:45", title: "Tool #1 - ChatGPT Plus", score: 88 },
    { time: "2:10", title: "Tool #2 - Midjourney", score: 91 },
    { time: "3:45", title: "Tool #3 - Notion AI", score: 85 },
    { time: "5:20", title: "Tool #4 - GitHub Copilot", score: 82 },
    { time: "6:55", title: "Tool #5 - Jasper", score: 79 },
    { time: "8:30", title: "Tools #6-10 Overview", score: 86 },
    { time: "11:00", title: "Conclusion & CTA", score: 90 },
  ],
}

const recentAnalyses = [
  { title: "Morning Routine for Productivity", score: 74, time: "2 hours ago", platform: "TikTok" },
  { title: "How I Built a $1M Business", score: 91, time: "5 hours ago", platform: "YouTube" },
  { title: "Coding Setup Tour 2024", score: 88, time: "1 day ago", platform: "Instagram" },
]

export default function AnalyzePage() {
  const [videoUrl, setVideoUrl] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  const handleAnalyze = () => {
    if (!videoUrl) return
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      setShowResults(true)
    }, 2500)
  }

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-400"
    if (score >= 60) return "text-yellow-400"
    return "text-red-400"
  }

  const getScoreBg = (score) => {
    if (score >= 80) return "bg-green-500/20 border-green-500/30"
    if (score >= 60) return "bg-yellow-500/20 border-yellow-500/30"
    return "bg-red-500/20 border-red-500/30"
  }

  return (
    <div className="p-4 md:p-8 lg:p-10 bg-[#101922] min-h-full">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <div className="flex flex-col gap-2 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Analyze Video
          </h2>
          <p className="text-slate-400 text-base font-medium">
            Get AI-powered insights, viral scores, and optimization suggestions
          </p>
        </div>

        <div className="bg-[#182b34] rounded-xl border border-[#223c49] p-6 relative z-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">link</span>
              <h3 className="text-white font-bold text-lg">Paste Video URL</h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                  <span className="material-symbols-outlined">smart_display</span>
                </span>
                <input
                  type="text"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://youtube.com/watch?v=... or https://tiktok.com/..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg border bg-[#101922] text-white placeholder-slate-500 border-[#223c49] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
                />
              </div>
              <button
                onClick={handleAnalyze}
                disabled={!videoUrl || isAnalyzing}
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-[#101922] font-bold rounded-lg transition-all shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[160px]"
              >
                {isAnalyzing ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">auto_awesome</span>
                    Analyze
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center gap-4 text-slate-500 text-sm">
              <span>Supported:</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-red-500 text-lg">smart_display</span> YouTube</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-pink-500 text-lg">photo_camera</span> Instagram</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-cyan-400 text-lg">music_note</span> TikTok</span>
              </div>
            </div>
          </div>
        </div>

        {isAnalyzing && (
          <div className="bg-[#182b34] rounded-xl border border-[#223c49] p-12 relative z-10 text-center">
            <div className="flex flex-col items-center gap-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-4 border-primary/30 border-t-primary animate-spin"></div>
                <span className="material-symbols-outlined text-primary text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">psychology</span>
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-2">Analyzing Your Video</h3>
                <p className="text-slate-400">Our AI is extracting insights, scoring virality, and generating suggestions...</p>
              </div>
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                  Fetching metadata
                </span>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-lg animate-pulse">pending</span>
                  Analyzing content
                </span>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-600 text-lg">hourglass_empty</span>
                  Generating report
                </span>
              </div>
            </div>
          </div>
        )}

        {showResults && !isAnalyzing && (
          <div className="flex flex-col gap-6 relative z-10">
            <div className="bg-[#182b34] rounded-xl border border-[#223c49] overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-80 h-48 lg:h-auto relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${analysisResults.thumbnail}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                      <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                    {analysisResults.duration}
                  </div>
                </div>

                <div className="flex-1 p-6 flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                      <span className="material-symbols-outlined text-red-500 text-lg">smart_display</span>
                      {analysisResults.platform}
                    </div>
                    <h3 className="text-white text-xl font-bold mb-3">{analysisResults.title}</h3>
                    <p className="text-slate-400 text-sm line-clamp-2">{analysisResults.summary}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#223c49] hover:bg-[#2e4e5e] text-white text-sm font-bold rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-lg">autorenew</span>
                      Repurpose
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#223c49] hover:bg-[#2e4e5e] text-white text-sm font-bold rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-lg">download</span>
                      Export Report
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#223c49] hover:bg-[#2e4e5e] text-white text-sm font-bold rounded-lg transition-colors">
                      <span className="material-symbols-outlined text-lg">bookmark</span>
                      Save
                    </button>
                  </div>
                </div>

                <div className="lg:w-48 p-6 bg-gradient-to-br from-green-500/10 to-[#182b34] border-l border-[#223c49] flex flex-col items-center justify-center">
                  <p className="text-slate-400 text-sm mb-2">Viral Score</p>
                  <div className="text-6xl font-black text-green-400">{analysisResults.viralScore}</div>
                  <p className="text-green-400 text-sm font-medium mt-1">High Potential</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 border-b border-[#223c49] pb-0">
              {[
                { id: "overview", label: "Overview", icon: "dashboard" },
                { id: "metrics", label: "Metrics", icon: "analytics" },
                { id: "chapters", label: "Chapters", icon: "list" },
                { id: "suggestions", label: "Suggestions", icon: "lightbulb" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-bold transition-colors border-b-2 -mb-[2px] ${
                    activeTab === tab.id
                      ? "text-primary border-primary"
                      : "text-slate-400 border-transparent hover:text-white"
                  }`}
                >
                  <span className="material-symbols-outlined text-lg">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {activeTab === "overview" && (
                <>
                  <div className="lg:col-span-2 bg-[#182b34] rounded-xl border border-[#223c49] p-6">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">summarize</span>
                      AI Summary
                    </h4>
                    <p className="text-slate-300 leading-relaxed mb-6">{analysisResults.summary}</p>

                    <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-500">check_circle</span>
                      Key Takeaways
                    </h4>
                    <ul className="space-y-2">
                      {analysisResults.keyTakeaways.map((takeaway, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                          <span className="material-symbols-outlined text-primary text-lg mt-0.5">arrow_right</span>
                          {takeaway}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#182b34] rounded-xl border border-[#223c49] p-6">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">label</span>
                      Suggested Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {analysisResults.suggestedTags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 hover:bg-primary/20 cursor-pointer transition-colors"
                        >
                          #{tag.replace(/\s+/g, "")}
                        </span>
                      ))}
                    </div>
                    <button className="w-full mt-4 py-2 border border-[#223c49] text-slate-400 text-sm font-medium rounded-lg hover:bg-[#223c49] hover:text-white transition-colors flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-lg">content_copy</span>
                      Copy All Tags
                    </button>
                  </div>
                </>
              )}

              {activeTab === "metrics" && (
                <>
                  <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {Object.entries(analysisResults.metrics).map(([key, value]) => (
                      <div key={key} className={`p-6 rounded-xl border ${getScoreBg(value)}`}>
                        <p className="text-slate-400 text-sm capitalize mb-2">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                        <p className={`text-4xl font-black ${getScoreColor(value)}`}>{value}</p>
                        <div className="mt-3 h-2 bg-[#101922] rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${value >= 80 ? 'bg-green-500' : value >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                            style={{ width: `${value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#182b34] rounded-xl border border-[#223c49] p-6">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">pie_chart</span>
                      Score Breakdown
                    </h4>
                    <div className="space-y-4">
                      {Object.entries(analysisResults.metrics).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-slate-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                          <span className={`font-bold ${getScoreColor(value)}`}>{value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === "chapters" && (
                <div className="lg:col-span-3 bg-[#182b34] rounded-xl border border-[#223c49] p-6">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">playlist_play</span>
                    Video Chapters Analysis
                  </h4>
                  <div className="space-y-3">
                    {analysisResults.chapters.map((chapter, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-4 bg-[#101922] rounded-lg border border-[#223c49] hover:border-primary/50 transition-colors cursor-pointer"
                      >
                        <span className="text-primary font-mono text-sm w-12">{chapter.time}</span>
                        <div className="flex-1">
                          <p className="text-white font-medium">{chapter.title}</p>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-sm font-bold ${getScoreBg(chapter.score)} ${getScoreColor(chapter.score)}`}>
                          {chapter.score}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "suggestions" && (
                <div className="lg:col-span-3 bg-[#182b34] rounded-xl border border-[#223c49] p-6">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">tips_and_updates</span>
                    Improvement Suggestions
                  </h4>
                  <div className="space-y-4">
                    {analysisResults.improvements.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-4 bg-[#101922] rounded-lg border border-[#223c49]"
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          item.priority === "high" ? "bg-red-500/20 text-red-400" :
                          item.priority === "medium" ? "bg-yellow-500/20 text-yellow-400" :
                          "bg-green-500/20 text-green-400"
                        }`}>
                          <span className="material-symbols-outlined">
                            {item.priority === "high" ? "priority_high" : item.priority === "medium" ? "remove" : "keyboard_arrow_down"}
                          </span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <p className="text-white font-bold">{item.area}</p>
                            <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${
                              item.priority === "high" ? "bg-red-500/20 text-red-400" :
                              item.priority === "medium" ? "bg-yellow-500/20 text-yellow-400" :
                              "bg-green-500/20 text-green-400"
                            }`}>
                              {item.priority}
                            </span>
                          </div>
                          <p className="text-slate-400 text-sm">{item.suggestion}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {!showResults && !isAnalyzing && (
          <div className="bg-[#182b34] rounded-xl border border-[#223c49] p-6 relative z-10">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">history</span>
              Recent Analyses
            </h3>
            <div className="space-y-3">
              {recentAnalyses.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 bg-[#101922] rounded-lg border border-[#223c49] hover:border-primary/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">analytics</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">{item.title}</p>
                      <p className="text-slate-500 text-xs">{item.platform} • {item.time}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${getScoreBg(item.score)} ${getScoreColor(item.score)}`}>
                    {item.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
