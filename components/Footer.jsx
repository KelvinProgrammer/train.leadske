"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#223c49] bg-[#182b34]">
      {/* CTA Section */}
      <div className="w-full pt-16 pb-12">
        <div className="max-w-[800px] mx-auto flex flex-col items-center text-center px-6">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight">Ready to go viral?</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl">
            Join thousands of creators who are scaling their content output by 10x without hiring a team.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input
              className="flex-1 rounded-lg bg-[#101c22] border border-[#223c49] px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-slate-600"
              placeholder="Enter your email address"
              type="email"
            />
            <button
              className="bg-primary hover:bg-primary/90 text-[#101c22] font-bold py-3 px-6 rounded-lg transition-colors shadow-[0_0_15px_rgba(37,175,244,0.3)]"
              type="button"
            >
              Get Started
            </button>
          </form>

          {/* Bottom Footer */}
          <div className="mt-16 pt-8 border-t border-[#223c49] w-full flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© 2025 ViralEngine. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
