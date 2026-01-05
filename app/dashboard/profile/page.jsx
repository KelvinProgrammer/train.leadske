"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"

const achievements = [
  { title: "First Course Completed", icon: "school", date: "Dec 10, 2024" },
  { title: "Lab Master", icon: "science", date: "Dec 15, 2024" },
  { title: "7-Day Streak", icon: "local_fire_department", date: "Dec 20, 2024" },
  { title: "Community Helper", icon: "volunteer_activism", date: "Dec 25, 2024" },
]

const recentActivity = [
  { action: "Completed module", detail: "Email Automation Setup", course: "VA Track", time: "2 hours ago" },
  { action: "Earned badge", detail: "Lab Master", course: "", time: "Yesterday" },
  { action: "Started course", detail: "Digital Marketing Fundamentals", course: "", time: "3 days ago" },
  { action: "Submitted assignment", detail: "Cold Email Template", course: "Sales Track", time: "5 days ago" },
]

const skills = [
  { name: "Lead Generation", level: 85 },
  { name: "Email Automation", level: 70 },
  { name: "CRM Management", level: 90 },
  { name: "SEO Basics", level: 45 },
  { name: "Content Strategy", level: 30 },
]

export default function ProfilePage() {
  const { data: session } = useSession()
  const user = session?.user

  const initials = user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2) || "U"

  return (
    <div className="p-6 space-y-6">
      {/* Profile Header */}
      <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="size-24 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
            {user?.image ? (
              <img src={user.image} alt={user.name} className="size-24 rounded-full object-cover" />
            ) : (
              <span className="text-white text-3xl font-medium">{initials}</span>
            )}
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white">{user?.name || "User"}</h1>
            <p className="text-neutral-400 mt-1">{user?.email}</p>
            <p className="text-neutral-500 text-sm mt-2">Learning to become a certified LeadsKe VA</p>
            <div className="flex items-center gap-4 mt-4">
              <span className="text-neutral-400 text-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-lg">calendar_month</span>
                Joined Dec 2024
              </span>
              <span className="text-neutral-400 text-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-lg">location_on</span>
                Nairobi, Kenya
              </span>
            </div>
          </div>
          <Link
            href="/dashboard/settings"
            className="px-4 py-2 bg-neutral-800 text-white rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors"
          >
            Edit Profile
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Courses", value: "3", icon: "school" },
              { label: "Hours", value: "24", icon: "schedule" },
              { label: "Certificates", value: "1", icon: "workspace_premium" },
              { label: "Rank", value: "#47", icon: "leaderboard" },
            ].map((stat) => (
              <div key={stat.label} className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 text-center">
                <span className="material-symbols-outlined text-neutral-500 text-2xl">{stat.icon}</span>
                <p className="text-xl font-bold text-white mt-2">{stat.value}</p>
                <p className="text-neutral-500 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Skills Progress</h2>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-neutral-300 text-sm">{skill.name}</span>
                    <span className="text-neutral-500 text-xs">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-white rounded-full transition-all"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-4 border-b border-neutral-800 last:border-0 last:pb-0">
                  <div className="size-10 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-neutral-400 text-lg">
                      {activity.action.includes("Completed") ? "check_circle" :
                       activity.action.includes("Earned") ? "emoji_events" :
                       activity.action.includes("Started") ? "play_circle" : "assignment"}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">
                      <span className="text-neutral-400">{activity.action}:</span> {activity.detail}
                    </p>
                    {activity.course && (
                      <p className="text-neutral-600 text-xs mt-1">{activity.course}</p>
                    )}
                  </div>
                  <span className="text-neutral-600 text-xs">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Current Track */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Current Track</h2>
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 rounded-lg bg-neutral-800 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-xl">support_agent</span>
              </div>
              <div>
                <p className="text-white font-medium">Virtual Assistant Track</p>
                <p className="text-neutral-500 text-xs">75% complete</p>
              </div>
            </div>
            <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
              <div className="h-full w-[75%] bg-white rounded-full"></div>
            </div>
            <Link
              href="/dashboard/courses"
              className="block w-full mt-4 py-2 bg-neutral-800 text-white text-center rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors"
            >
              Continue Learning
            </Link>
          </div>

          {/* Achievements */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Achievements</h2>
              <span className="text-neutral-500 text-xs">{achievements.length} earned</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-center">
                  <div className="size-10 rounded-full bg-neutral-800 flex items-center justify-center mx-auto mb-2">
                    <span className="material-symbols-outlined text-yellow-400 text-lg">{achievement.icon}</span>
                  </div>
                  <p className="text-white text-xs font-medium">{achievement.title}</p>
                  <p className="text-neutral-600 text-[10px] mt-1">{achievement.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Certifications</h2>
              <Link href="/dashboard/certifications" className="text-neutral-400 text-xs hover:text-white transition-colors">
                View all
              </Link>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-neutral-900 border border-neutral-700 rounded-lg">
                <div className="size-10 rounded-lg bg-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-neutral-900">verified</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">LeadsKe Fundamentals</p>
                  <p className="text-neutral-500 text-xs">Earned Dec 15, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-neutral-900 border border-neutral-800 rounded-lg opacity-60">
                <div className="size-10 rounded-lg bg-neutral-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-neutral-500">workspace_premium</span>
                </div>
                <div>
                  <p className="text-neutral-400 text-sm font-medium">Certified LeadsKe VA</p>
                  <p className="text-neutral-600 text-xs">In progress</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Connect</h2>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 p-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors">
                <span className="material-symbols-outlined text-neutral-400">link</span>
                <span className="text-neutral-300 text-sm">Add LinkedIn Profile</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors">
                <span className="material-symbols-outlined text-neutral-400">code</span>
                <span className="text-neutral-300 text-sm">Add GitHub Profile</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 transition-colors">
                <span className="material-symbols-outlined text-neutral-400">language</span>
                <span className="text-neutral-300 text-sm">Add Website</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
