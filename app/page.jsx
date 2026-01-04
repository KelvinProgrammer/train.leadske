import Hero from "@/components/Hero"
import TrustedBy from "@/components/TrustedBy"
import Features from "@/components/Features"
import Stats from "@/components/Stats"
import Agents from "@/components/Agents"
import Comparison from "@/components/Comparison"
import Pricing from "@/components/Pricing"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Media.LeadsKe.Pro - Professional Training Platform",
  description:
    "Master digital skills with structured learning paths. Get certified as a Virtual Assistant, Social Media Manager, Digital Marketer, or Sales Partner. Hands-on training with real LeadsKe tools.",
}

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <TrustedBy />
      <Features />
      <Stats />
      <Agents />
      <Comparison />
      <Pricing />
      <Footer />
    </main>
  )
}
