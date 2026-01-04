import Link from "next/link"

const enrolledCourses = [
  {
    id: 1,
    title: "Virtual Assistant Track",
    progress: 75,
    modules: 5,
    completedModules: 4,
    nextLesson: "Email Automation Setup",
    icon: "support_agent",
  },
  {
    id: 2,
    title: "Digital Marketing Fundamentals",
    progress: 30,
    modules: 6,
    completedModules: 2,
    nextLesson: "SEO Basics with SEO.LeadsKe.Pro",
    icon: "campaign",
  },
]

const upcomingSessions = [
  { title: "Live Q&A: Cold Outreach Mastery", date: "Today, 3:00 PM", instructor: "James Mwangi" },
  { title: "Workshop: Building Email Sequences", date: "Tomorrow, 10:00 AM", instructor: "Sarah Wanjiku" },
  { title: "Demo: Using Enrich.LeadsKe.Pro", date: "Fri, 2:00 PM", instructor: "David Ochieng" },
]

const assignments = [
  { title: "Scrape 500 Leads Exercise", course: "VA Track", dueDate: "Due in 2 days", status: "pending" },
  { title: "Create SEO Audit Report", course: "Digital Marketing", dueDate: "Due in 5 days", status: "pending" },
  { title: "Cold Email Template", course: "Sales Track", dueDate: "Submitted", status: "completed" },
]

const toolAccess = [
  { name: "SEO.LeadsKe.Pro", status: "unlocked", icon: "search" },
  { name: "Enrich.LeadsKe.Pro", status: "unlocked", icon: "person_search" },
  { name: "Global.LeadsKe.Pro", status: "locked", icon: "public", unlockAt: "Complete Module 5" },
]

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Welcome back</h1>
          <p className="text-neutral-400 mt-1">Continue your learning journey</p>
        </div>
        <Link
          href="/dashboard/courses"
          className="px-4 py-2 bg-white text-neutral-900 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors"
        >
          Browse Courses
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Courses Enrolled", value: "3", icon: "school" },
          { label: "Hours Learned", value: "24", icon: "schedule" },
          { label: "Assignments Done", value: "12", icon: "task_alt" },
          { label: "Certifications", value: "1", icon: "workspace_premium" },
        ].map((stat) => (
          <div key={stat.label} className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="material-symbols-outlined text-neutral-500">{stat.icon}</span>
              <span className="text-2xl font-bold text-white">{stat.value}</span>
            </div>
            <p className="text-neutral-400 text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Enrolled Courses */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Enrolled Courses</h2>
            <Link href="/dashboard/courses" className="text-sm text-neutral-400 hover:text-white transition-colors">
              View all
            </Link>
          </div>

          <div className="space-y-3">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white">{course.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium">{course.title}</h3>
                    <p className="text-neutral-500 text-sm mt-1">
                      Next: {course.nextLesson}
                    </p>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-neutral-400">{course.completedModules} of {course.modules} modules</span>
                        <span className="text-white font-medium">{course.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-white rounded-full transition-all"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 bg-white text-neutral-900 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors shrink-0">
                    Continue
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Assignments */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Assignments</h2>
            </div>
            <div className="bg-neutral-950 border border-neutral-800 rounded-lg divide-y divide-neutral-800">
              {assignments.map((assignment, index) => (
                <div key={index} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`size-8 rounded-lg flex items-center justify-center ${
                      assignment.status === "completed" ? "bg-neutral-800" : "bg-neutral-800"
                    }`}>
                      <span className={`material-symbols-outlined text-sm ${
                        assignment.status === "completed" ? "text-green-400" : "text-neutral-400"
                      }`}>
                        {assignment.status === "completed" ? "check_circle" : "assignment"}
                      </span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{assignment.title}</p>
                      <p className="text-neutral-500 text-xs">{assignment.course}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    assignment.status === "completed"
                      ? "bg-neutral-800 text-green-400"
                      : "bg-neutral-800 text-neutral-400"
                  }`}>
                    {assignment.dueDate}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Sessions */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Upcoming Sessions</h2>
            <div className="space-y-3">
              {upcomingSessions.map((session, index) => (
                <div key={index} className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="size-10 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-white text-lg">videocam</span>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{session.title}</p>
                      <p className="text-neutral-500 text-xs mt-1">{session.instructor}</p>
                      <p className="text-neutral-400 text-xs mt-2">{session.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tool Access */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">LeadsKe Tools</h2>
            <div className="bg-neutral-950 border border-neutral-800 rounded-lg divide-y divide-neutral-800">
              {toolAccess.map((tool, index) => (
                <div key={index} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`size-8 rounded-lg flex items-center justify-center ${
                      tool.status === "unlocked" ? "bg-white" : "bg-neutral-800"
                    }`}>
                      <span className={`material-symbols-outlined text-sm ${
                        tool.status === "unlocked" ? "text-neutral-900" : "text-neutral-500"
                      }`}>{tool.icon}</span>
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${
                        tool.status === "unlocked" ? "text-white" : "text-neutral-500"
                      }`}>{tool.name}</p>
                      {tool.unlockAt && (
                        <p className="text-neutral-600 text-xs">{tool.unlockAt}</p>
                      )}
                    </div>
                  </div>
                  {tool.status === "unlocked" ? (
                    <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
                  ) : (
                    <span className="material-symbols-outlined text-neutral-600 text-lg">lock</span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-neutral-500 text-xs mt-3 text-center">
              Unlock tools as you progress through courses
            </p>
          </div>

          {/* Certification Progress */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded-lg bg-white flex items-center justify-center">
                <span className="material-symbols-outlined text-neutral-900">workspace_premium</span>
              </div>
              <div>
                <p className="text-white font-medium">Certification Status</p>
                <p className="text-neutral-500 text-xs">Virtual Assistant Track</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-400">Course Progress</span>
                <span className="text-green-400">Complete</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-400">Practical Lab</span>
                <span className="text-yellow-400">In Progress</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-400">Final Assessment</span>
                <span className="text-neutral-500">Locked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
