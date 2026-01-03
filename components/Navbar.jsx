"use client"

import Link from "next/link"
import { useState } from "react"
import { useSession, signOut } from "next-auth/react"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session, status } = useSession()
  const pathname = usePathname()

  if (pathname?.startsWith("/dashboard")) {
    return null
  }

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#resources", label: "Resources" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#223c49] bg-[#101c22]/80 backdrop-blur-md">
      <div className="w-full flex items-center justify-between py-4 px-6 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-white cursor-pointer">
          <div className="flex items-center justify-center rounded-lg bg-primary/20 p-2 text-primary">
            <span className="material-symbols-outlined">smart_toy</span>
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">ViralEngine</h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-3">
            {status === "loading" ? (
              <div className="w-20 h-9 bg-[#182b34] animate-pulse rounded-lg"></div>
            ) : session ? (
              <>
                <Link
                  href="/dashboard/overview"
                  className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-transparent border border-[#223c49] text-white hover:bg-white/5 transition-colors text-sm font-bold gap-2"
                >
                  <span className="material-symbols-outlined text-lg">dashboard</span>
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 text-slate-400 hover:text-white transition-colors text-sm font-medium gap-2"
                >
                  <span className="material-symbols-outlined text-lg">logout</span>
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-transparent border border-[#223c49] text-white hover:bg-white/5 transition-colors text-sm font-bold"
                >
                  <span>Login</span>
                </Link>
                <Link
                  href="/signup"
                  className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary hover:bg-primary/90 transition-colors text-[#101c22] text-sm font-bold shadow-[0_0_15px_rgba(37,175,244,0.3)]"
                >
                  <span>Get Started</span>
                </Link>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">{isOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-[#223c49] py-4 px-6 space-y-4 bg-[#101c22]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-white font-medium text-sm py-2"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-[#223c49]">
            {session ? (
              <>
                <Link
                  href="/dashboard/overview"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-4 py-3 bg-[#182b34] border border-[#223c49] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">dashboard</span>
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    signOut({ callbackUrl: "/" })
                  }}
                  className="w-full text-center px-4 py-3 text-slate-400 font-medium hover:text-white transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">logout</span>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-4 py-3 bg-[#182b34] border border-[#223c49] text-white font-bold rounded-lg transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-4 py-3 bg-primary text-[#101c22] font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(37,175,244,0.3)]"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
