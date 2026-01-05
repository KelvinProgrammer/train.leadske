"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import DashboardSidebar from "@/components/dashboard/sidebar"
import DashboardHeader from "@/components/dashboard/header"

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  if (status === "loading") {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-neutral-950">
        <div className="flex flex-col items-center gap-4">
          <div className="size-10 rounded-lg bg-white flex items-center justify-center animate-pulse">
            <span className="material-symbols-outlined text-neutral-900 text-xl">school</span>
          </div>
          <p className="text-neutral-400 text-sm">Loading...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="flex h-screen w-full bg-neutral-950 overflow-hidden">
      <DashboardSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <DashboardHeader
          user={session.user}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <main className="flex-1 overflow-y-auto bg-neutral-900 pb-20 lg:pb-0">
          {children}
        </main>
      </div>
    </div>
  )
}
