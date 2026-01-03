import { Manrope, Noto_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { AuthProvider } from "@/components/providers/session-provider"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
})
const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans"
})

export const metadata = {
  title: "Viralytics - AI Video Analysis Platform",
  description:
    "Analyze viral videos from TikTok, YouTube Shorts, and Instagram Reels. Get AI-powered insights, repurposing drafts, and viral scores.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${manrope.variable} ${notoSans.variable} font-sans antialiased bg-[#101c22] text-white`}>
        <AuthProvider>
          <Navbar />
          {children}
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  )
}
