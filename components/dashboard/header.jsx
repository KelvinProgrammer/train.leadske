"use client"

import Link from "next/link"
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

export default function DashboardHeader({ user, onMenuClick }) {
  const initials = user?.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2) || "U"

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-neutral-800 px-4 md:px-6 py-3 bg-neutral-950 shrink-0">
      {/* Left side */}
      <div className="flex items-center gap-4">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-neutral-800 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined text-neutral-400">menu</span>
        </button>

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 w-80 focus-within:border-neutral-600 transition-colors">
          <span className="material-symbols-outlined text-neutral-500 text-xl">search</span>
          <input
            type="text"
            placeholder="Search courses, labs..."
            className="bg-transparent border-none outline-none text-sm text-white placeholder:text-neutral-500 w-full"
          />
          <kbd className="hidden lg:flex items-center gap-1 px-2 py-0.5 bg-neutral-800 rounded text-[10px] text-neutral-400 font-mono">
            <span className="text-xs">Ctrl</span>K
          </kbd>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        {/* Quick Action */}
        <Link
          href="/dashboard/courses"
          className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white hover:bg-neutral-200 text-neutral-900 rounded-lg text-sm font-medium transition-colors"
        >
          <span className="material-symbols-outlined text-lg">play_circle</span>
          <span>Continue Learning</span>
        </Link>

        {/* Notifications */}
        <button className="p-2.5 hover:bg-neutral-800 rounded-lg relative transition-colors">
          <span className="material-symbols-outlined text-neutral-400">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full ring-2 ring-neutral-950"></span>
        </button>

        {/* Help */}
        <button className="hidden sm:block p-2.5 hover:bg-neutral-800 rounded-lg transition-colors">
          <span className="material-symbols-outlined text-neutral-400">help</span>
        </button>

        {/* Divider */}
        <div className="hidden sm:block h-8 w-px bg-neutral-800 mx-2"></div>

        {/* User menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 hover:bg-neutral-800 rounded-lg p-2 transition-colors">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-white">{user?.name || "User"}</p>
                <p className="text-xs text-neutral-500">{user?.email || ""}</p>
              </div>
              <Avatar className="h-10 w-10 ring-2 ring-neutral-800">
                <AvatarImage src={user?.image} alt={user?.name} />
                <AvatarFallback className="bg-white text-neutral-900 font-medium">
                  {initials}
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-neutral-900 border-neutral-800">
            <DropdownMenuLabel className="text-white">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-neutral-800" />
            <DropdownMenuItem asChild className="text-neutral-300 hover:text-white hover:bg-neutral-800 cursor-pointer">
              <Link href="/dashboard/profile" className="flex items-center w-full">
                <span className="material-symbols-outlined mr-2 text-lg">person</span>
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="text-neutral-300 hover:text-white hover:bg-neutral-800 cursor-pointer">
              <Link href="/dashboard/certifications" className="flex items-center w-full">
                <span className="material-symbols-outlined mr-2 text-lg">workspace_premium</span>
                <span>My Certifications</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="text-neutral-300 hover:text-white hover:bg-neutral-800 cursor-pointer">
              <Link href="/dashboard/settings" className="flex items-center w-full">
                <span className="material-symbols-outlined mr-2 text-lg">settings</span>
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-neutral-800" />
            <DropdownMenuItem
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-neutral-300 hover:text-white hover:bg-neutral-800 cursor-pointer"
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
