"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Overview", href: "/dashboard/overview", icon: "dashboard" },
  { name: "Analyze Video", href: "/dashboard/analyze", icon: "auto_awesome" },
  { name: "Video Library", href: "/dashboard/videos", icon: "video_library" },
  { name: "Repurpose", href: "/dashboard/repurpose", icon: "edit_note" },
  { name: "Trending", href: "/dashboard/trending", icon: "whatshot" },
  { name: "Reports", href: "/dashboard/reports", icon: "insights" },
]

export default function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 hidden lg:flex flex-col border-r border-[#223c49] bg-[#101d23] shrink-0">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-white text-xl">analytics</span>
        </div>
        <div>
          <h1 className="text-base font-bold leading-none tracking-tight text-white">
            Viralytics
          </h1>
          <p className="text-xs text-slate-400 mt-1">Video Analysis Platform</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 flex flex-col gap-1 mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                isActive
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-slate-400 hover:bg-[#223c49] hover:text-white"
              }`}
            >
              <span className={`material-symbols-outlined text-xl ${isActive ? "text-primary" : ""}`}>{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* Upgrade Card */}
      <div className="p-4 mx-4 mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-[#182b34] border border-primary/20">
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-primary text-lg">rocket_launch</span>
          <span className="text-white text-sm font-bold">Upgrade to Pro</span>
        </div>
        <p className="text-slate-400 text-xs mb-3">Unlock unlimited analyses and advanced AI features.</p>
        <button className="w-full py-2 bg-primary hover:bg-primary/90 text-white text-xs font-bold rounded-lg transition-colors">
          Upgrade Now
        </button>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-[#223c49]">
        <Link
          href="/dashboard/settings"
          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-[#223c49] hover:text-white transition-all font-medium ${
            pathname === "/dashboard/settings" ? "bg-primary/10 text-primary border border-primary/20" : ""
          }`}
        >
          <span className="material-symbols-outlined text-xl">settings</span>
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  )
}
