"use client"

import { signOut } from "next-auth/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardHeader({ user }) {
  const initials = user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2) || "U"

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-[#223c49] px-6 py-3 bg-[#101d23] shrink-0">
      {/* Left side */}
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <button className="lg:hidden p-2 hover:bg-[#223c49] rounded-lg transition-colors">
          <span className="material-symbols-outlined text-slate-400">menu</span>
        </button>

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-[#182b34] border border-[#223c49] rounded-xl px-4 py-2 w-80 focus-within:border-primary/50 transition-colors">
          <span className="material-symbols-outlined text-slate-500 text-xl">search</span>
          <input
            type="text"
            placeholder="Search videos, analyses..."
            className="bg-transparent border-none outline-none text-sm text-white placeholder:text-slate-500 w-full"
          />
          <kbd className="hidden lg:flex items-center gap-1 px-2 py-0.5 bg-[#223c49] rounded text-[10px] text-slate-400 font-mono">
            <span className="text-xs">Ctrl</span>K
          </kbd>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        {/* Quick Add Video */}
        <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl text-sm font-bold transition-colors">
          <span className="material-symbols-outlined text-lg">add</span>
          <span>New Analysis</span>
        </button>

        {/* Notifications */}
        <button className="p-2.5 hover:bg-[#223c49] rounded-xl relative transition-colors">
          <span className="material-symbols-outlined text-slate-400">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full ring-2 ring-[#101d23]"></span>
        </button>

        {/* Help */}
        <button className="p-2.5 hover:bg-[#223c49] rounded-xl transition-colors">
          <span className="material-symbols-outlined text-slate-400">help</span>
        </button>

        {/* Divider */}
        <div className="h-8 w-px bg-[#223c49] mx-2"></div>

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 hover:bg-[#223c49] rounded-xl p-2 transition-colors">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-white">{user?.name || "User"}</p>
                <p className="text-xs text-slate-500">{user?.email || ""}</p>
              </div>
              <Avatar className="h-10 w-10 ring-2 ring-[#223c49]">
                <AvatarImage src={user?.image} alt={user?.name} />
                <AvatarFallback className="bg-primary text-white font-bold">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-[#182b34] border-[#223c49]">
            <DropdownMenuLabel className="text-white">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#223c49]" />
            <DropdownMenuItem
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-slate-300 hover:text-white hover:bg-[#223c49] cursor-pointer"
            >
              <span className="material-symbols-outlined mr-2 text-lg">logout</span>
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
