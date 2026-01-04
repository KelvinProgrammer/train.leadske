"use client"

const dashboardFeatures = [
  {
    title: "Enrolled Courses",
    description: "Track your active courses and learning progress",
    icon: "school",
  },
  {
    title: "Progress Tracking",
    description: "See completion status and performance metrics",
    icon: "trending_up",
  },
  {
    title: "Live Sessions",
    description: "Join upcoming live training sessions",
    icon: "videocam",
  },
  {
    title: "Assignments",
    description: "Complete tasks and track deadlines",
    icon: "assignment",
  },
  {
    title: "Certifications",
    description: "View and download your earned certificates",
    icon: "workspace_premium",
  },
  {
    title: "Tool Access",
    description: "Unlock LeadsKe tools as you progress",
    icon: "build",
  },
]

export default function Agents() {
  return (
    <section className="w-full py-20 bg-[#0a0a0a]">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <p className="text-neutral-500 text-sm font-medium uppercase tracking-wider">Learning Dashboard</p>
            <h2 className="text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight max-w-xl">
              Everything in one place
            </h2>
            <p className="text-neutral-400 text-base font-normal leading-relaxed max-w-[540px]">
              Your personalized learning hub. Track progress, access tools, and manage your certification journey.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dashboardFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#141414] border border-neutral-800 rounded-lg hover:border-neutral-700 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-white text-lg">{feature.icon}</span>
                </div>
                <h3 className="text-white text-sm font-semibold mb-1">{feature.title}</h3>
                <p className="text-neutral-500 text-xs">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
