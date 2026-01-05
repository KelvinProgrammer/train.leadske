"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Overview", href: "/dashboard/overview", icon: "space_dashboard" },
  { name: "Courses", href: "/dashboard/courses", icon: "school" },
  { name: "Labs", href: "/dashboard/labs", icon: "science" },
  { name: "Certifications", href: "/dashboard/certifications", icon: "workspace_premium" },
  { name: "Schedule", href: "/dashboard/schedule", icon: "calendar_month" },
  { name: "Community", href: "/dashboard/community", icon: "groups" },
]

export default function DashboardSidebar({ isOpen, onClose }) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Close sidebar when route changes on mobile
  useEffect(() => {
    if (isMobile && isOpen) {
      onClose?.()
    }
  }, [pathname])

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-64 flex flex-col border-r border-neutral-800 bg-neutral-950 shrink-0
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="p-6 flex items-center justify-between">
          <Link href="/dashboard/overview" className="flex items-center gap-3">
            <div className="size-10 rounded-lg bg-white flex items-center justify-center">
              <span className="material-symbols-outlined text-neutral-900 text-xl">school</span>
            </div>
            <div>
              <h1 className="text-base font-bold leading-none tracking-tight text-white">
                Train.LeadsKe
              </h1>
              <p className="text-xs text-neutral-500 mt-1">Training Platform</p>
            </div>
          </Link>
          {/* Close button for mobile */}
          <button
            onClick={onClose}
            className="lg:hidden p-2 hover:bg-neutral-800 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined text-neutral-400">close</span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 flex flex-col gap-1 mt-4 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== "/dashboard/overview" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive
                    ? "bg-white text-neutral-900"
                    : "text-neutral-400 hover:bg-neutral-800 hover:text-white"
                }`}
              >
                <span className={`material-symbols-outlined text-xl`}>{item.icon}</span>
                <span className="text-sm">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Progress Card */}
        <div className="p-4 mx-3 mb-4 rounded-lg bg-neutral-900 border border-neutral-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white text-sm font-medium">Your Progress</span>
            <span className="text-neutral-400 text-xs">67%</span>
          </div>
          <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
            <div className="h-full w-[67%] bg-white rounded-full"></div>
          </div>
          <p className="text-neutral-500 text-xs mt-3">4 of 6 modules completed</p>
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-neutral-800">
          <Link
            href="/dashboard/settings"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-white transition-all font-medium ${
              pathname === "/dashboard/settings" ? "bg-white text-neutral-900" : ""
            }`}
          >
            <span className="material-symbols-outlined text-xl">settings</span>
            <span className="text-sm">Settings</span>
          </Link>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-neutral-950 border-t border-neutral-800 lg:hidden z-30">
        <div className="flex items-center justify-around px-2 py-2 overflow-x-auto">
          {navItems.slice(0, 5).map((item) => {
            const isActive = pathname === item.href ||
              (item.href !== "/dashboard/overview" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg min-w-[60px] transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-neutral-500"
                }`}
              >
                <span className={`material-symbols-outlined text-xl ${isActive ? "text-white" : ""}`}>
                  {item.icon}
                </span>
                <span className="text-[10px] font-medium">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
