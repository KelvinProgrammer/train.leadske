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
    { href: "#tracks", label: "Tracks" },
    { href: "#tools", label: "Tools" },
    { href: "#certification", label: "Certification" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-300 bg-neutral-200/90 backdrop-blur-md">
      <div className="w-full flex items-center justify-between py-4 px-6 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-black cursor-pointer">
          <div className="flex items-center justify-center rounded-lg bg-black/10 p-2">
            <span className="material-symbols-outlined text-black">school</span>
          </div>
          <h2 className="text-black text-xl font-bold leading-tight tracking-[-0.015em]">Media.LeadsKe.Pro</h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div className="flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-600 hover:text-black text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-3">
            {status === "loading" ? (
              <div className="w-20 h-9 bg-neutral-300 animate-pulse rounded-lg"></div>
            ) : session ? (
              <>
                <Link
                  href="/dashboard/overview"
                  className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-transparent border border-neutral-400 text-black hover:bg-black/5 transition-colors text-sm font-bold gap-2"
                >
                  <span className="material-symbols-outlined text-lg">dashboard</span>
                  <span>Dashboard</span>
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 text-neutral-500 hover:text-black transition-colors text-sm font-medium gap-2"
                >
                  <span className="material-symbols-outlined text-lg">logout</span>
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-transparent border border-neutral-400 text-black hover:bg-black/5 transition-colors text-sm font-bold"
                >
                  <span>Login</span>
                </Link>
                <Link
                  href="/signup"
                  className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-black hover:bg-neutral-800 transition-colors text-white text-sm font-bold"
                >
                  <span>Start Learning</span>
                </Link>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black p-2"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">{isOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-300 py-4 px-6 space-y-4 bg-neutral-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-neutral-600 hover:text-black font-medium text-sm py-2"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-neutral-300">
            {session ? (
              <>
                <Link
                  href="/dashboard/overview"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-4 py-3 bg-neutral-300 border border-neutral-400 text-black font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">dashboard</span>
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    signOut({ callbackUrl: "/" })
                  }}
                  className="w-full text-center px-4 py-3 text-neutral-500 font-medium hover:text-black transition-colors flex items-center justify-center gap-2"
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
                  className="w-full text-center px-4 py-3 bg-neutral-300 border border-neutral-400 text-black font-bold rounded-lg transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center px-4 py-3 bg-black text-white font-bold rounded-lg hover:bg-neutral-800 transition-colors"
                >
                  Start Learning
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
