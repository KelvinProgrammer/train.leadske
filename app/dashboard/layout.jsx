import { auth } from "@/auth"
import { redirect } from "next/navigation"
import DashboardSidebar from "@/components/dashboard/sidebar"
import DashboardHeader from "@/components/dashboard/header"

export const metadata = {
  title: "Dashboard - Media.LeadsKe.Pro",
  description: "Master digital skills with structured learning paths and hands-on training",
}

export default async function DashboardLayout({ children }) {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="flex h-screen w-full bg-neutral-950 overflow-hidden">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <DashboardHeader user={session.user} />
        <main className="flex-1 overflow-y-auto bg-neutral-900">
          {children}
        </main>
      </div>
    </div>
  )
}
