"use client"

import Link from "next/link"

const pricingPlans = [
  {
    name: "Starter",
    price: "$19",
    period: "/month",
    description: "For individual creators",
    cta: "Start Free Trial",
    features: [
      "10 video analyses/month",
      "Basic viral score insights",
      "Auto-generated tags & keywords",
      "AI summaries & key takeaways",
      "Export to 1 format",
    ],
  },
  {
    name: "Creator",
    price: "$49",
    period: "/month",
    description: "For serious content creators",
    cta: "Start Free Trial",
    highlighted: true,
    features: [
      "Everything in Starter, plus...",
      "50 video analyses/month",
      "Advanced viral score breakdown",
      "Repurpose to TikTok, Reels, Shorts",
      "Trend tracking dashboard",
      "Priority processing",
    ],
  },
  {
    name: "Agency",
    price: "$149",
    period: "/month",
    description: "For teams & agencies",
    cta: "Start Free Trial",
    features: [
      "Everything in Creator, plus...",
      "Unlimited video analyses",
      "Multi-platform repurposing",
      "Team collaboration (5 seats)",
      "API access",
      "White-label exports",
      "Dedicated support",
    ],
  },
]

export default function Pricing() {
  return (
    <section className="w-full py-20 bg-[#182b34]/30">
      <div className="w-full">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center items-center px-6">
            <h2 className="text-white tracking-tight text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              Simple pricing for <span className="text-primary">every creator</span>
            </h2>
            <p className="text-slate-400 text-lg font-normal leading-normal max-w-[720px]">
              All plans include a 14-day free trial. No credit card required.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 lg:p-10 border border-[#223c49] transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-br from-primary to-[#1a8fd4] md:scale-105 z-10 md:-my-4"
                    : "bg-[#182b34]"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-white text-[#101c22] text-xs font-bold rounded-full shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? "text-white/80" : "text-slate-400"}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className={`text-5xl lg:text-6xl font-black ${plan.highlighted ? "text-white" : "text-white"}`}>
                    {plan.price}
                  </span>
                  <span className={`ml-2 ${plan.highlighted ? "text-white/80" : "text-slate-400"}`}>
                    {plan.period}
                  </span>
                </div>

                <Link
                  href="/signup"
                  className={`flex w-full items-center justify-center rounded-lg h-14 font-bold mb-8 transition-all ${
                    plan.highlighted
                      ? "bg-white text-[#101c22] hover:bg-white/90 shadow-lg"
                      : "bg-primary text-[#101c22] hover:bg-primary/90 shadow-[0_0_20px_rgba(37,175,244,0.3)]"
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className={`flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-white" : "text-primary"
                      }`}>
                        <span className="material-symbols-outlined text-lg">check_circle</span>
                      </span>
                      <span className={`text-sm ${plan.highlighted ? "text-white/90" : "text-slate-400"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Enterprise option */}
          <div className="mx-6 lg:mx-16 text-center p-10 lg:p-12 bg-[#182b34] border border-[#223c49]">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="material-symbols-outlined text-primary text-3xl">corporate_fare</span>
              <h3 className="text-2xl lg:text-3xl font-bold text-white">Enterprise</h3>
            </div>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Custom solutions for media companies, agencies, and large teams with advanced needs
            </p>
            <button className="px-10 py-4 bg-white text-[#101c22] rounded-lg font-bold hover:bg-white/90 transition-all inline-flex items-center gap-2">
              <span className="material-symbols-outlined">calendar_today</span>
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
