import Hero from "@/components/Hero"
import TrustedBy from "@/components/TrustedBy"
import Stats from "@/components/Stats"
import Agents from "@/components/Agents"
import Features from "@/components/Features"
import Comparison from "@/components/Comparison"
import Pricing from "@/components/Pricing"
import Footer from "@/components/Footer"

export const metadata = {
  title: "AI Workforce Platform - Replace 2-5 Admin & Sales Roles",
  description:
    "Agentic AI system for sales, operations, and admin. Calendar scheduling, lead qualification, onboarding, reporting, and operations management - 24/7.",
}

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <TrustedBy />
      <Stats />
      <Agents />
      <Features />
      <Comparison />
      <Pricing />
      <Footer />
    </main>
  )
}
