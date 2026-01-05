"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 bg-[#0a0a0a]">
      {/* CTA Section */}
      <div className="w-full py-16">
        <div className="max-w-[800px] mx-auto flex flex-col items-center text-center px-6">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Start your journey today
          </h2>
          <p className="text-neutral-400 text-base mb-8 max-w-md">
            Join professionals who are building real skills with real tools. Get certified. Get hired.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
            <Link
              href="/signup"
              className="flex-1 flex items-center justify-center rounded-lg h-12 px-6 bg-white text-black text-sm font-semibold transition-all hover:bg-neutral-200"
            >
              Start Free Trial
            </Link>
            <Link
              href="#tracks"
              className="flex-1 flex items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-neutral-700 text-white text-sm font-semibold transition-all hover:bg-white/5"
            >
              View Tracks
            </Link>
          </div>

          {/* Bottom Footer */}
          <div className="mt-16 pt-8 border-t border-neutral-800 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-sm">
            <p>© 2025 Train.LeadsKe.Pro</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
