"use client"

import Link from "next/link"
import Footer from "@/components/Footer"

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

const faqs = [
  {
    q: "How does the free trial work?",
    a: "Start with full access for 14 days. No credit card required. Cancel anytime before the trial ends.",
  },
  {
    q: "Can I change plans anytime?",
    a: "Yes, upgrade or downgrade instantly. Changes take effect at the next billing cycle with prorated adjustments.",
  },
  {
    q: "What video formats are supported?",
    a: "We support YouTube links, MP4, MOV, and most common video formats up to 4K resolution.",
  },
  {
    q: "Do you offer refunds?",
    a: "Full refund within 30 days if you're not satisfied. No questions asked.",
  },
]

const comparisons = [
  { feature: "Video analyses", starter: "10/mo", creator: "50/mo", agency: "Unlimited" },
  { feature: "Viral score insights", starter: "Basic", creator: "Advanced", agency: "Advanced+" },
  { feature: "Auto-tagging", starter: true, creator: true, agency: true },
  { feature: "AI summaries", starter: true, creator: true, agency: true },
  { feature: "Export formats", starter: "1", creator: "All", agency: "All + Custom" },
  { feature: "Trend tracking", starter: false, creator: true, agency: true },
  { feature: "Team seats", starter: "1", creator: "1", agency: "5" },
  { feature: "API access", starter: false, creator: false, agency: true },
  { feature: "Priority support", starter: false, creator: true, agency: "Dedicated" },
]

export default function PricingPage() {
  return (
    <main className="w-full bg-[#101c22]">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-[#101c22] to-[#101c22] pointer-events-none"></div>

        <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-6">
            <span className="material-symbols-outlined text-[16px]">payments</span>
            <span>Simple, Transparent Pricing</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Plans for <span className="text-primary">every creator</span>
          </h1>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Start free, scale as you grow. All plans include a 14-day free trial with no credit card required.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className="text-white font-medium">Monthly</span>
            <div className="relative inline-flex items-center bg-[#182b34] border border-[#223c49] rounded-full p-1 h-8 w-16 cursor-pointer">
              <div className="absolute left-1 w-6 h-6 bg-primary rounded-full transition-transform duration-200" />
            </div>
            <span className="text-slate-500">Annually</span>
            <span className="ml-2 inline-block bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full">
              Save 20%
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards - Full Width */}
      <section className="w-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 lg:p-12 border border-[#223c49] transition-all ${
                plan.highlighted
                  ? "bg-gradient-to-br from-primary to-[#1a8fd4] md:scale-105 z-10 md:-my-6"
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

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-white/80" : "text-slate-400"}`}>
                {plan.description}
              </p>

              <div className="mb-8">
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
                    <span className={`flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-white" : "text-primary"}`}>
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
      </section>

      {/* Enterprise Section */}
      <section className="w-full py-20 bg-[#101c22]">
        <div className="px-6 lg:px-16">
          <div className="max-w-4xl mx-auto text-center p-10 lg:p-16 bg-[#182b34] border border-[#223c49] rounded-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-4xl">corporate_fare</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Enterprise</h2>
            </div>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Custom solutions for media companies, agencies, and large teams with advanced needs and dedicated support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-white text-[#101c22] rounded-lg font-bold hover:bg-white/90 transition-all inline-flex items-center gap-2">
                <span className="material-symbols-outlined">calendar_today</span>
                Schedule a Demo
              </button>
              <button className="px-8 py-4 bg-transparent border border-[#223c49] text-white rounded-lg font-bold hover:bg-[#223c49] transition-all inline-flex items-center gap-2">
                <span className="material-symbols-outlined">mail</span>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="w-full py-20 bg-[#182b34]/30">
        <div className="px-6 lg:px-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Compare plans</h2>
            <p className="text-slate-400 text-lg">See which plan is right for you</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#223c49]">
                  <th className="text-left py-4 px-4 text-slate-400 font-medium">Feature</th>
                  <th className="text-center py-4 px-4 text-white font-bold">Starter</th>
                  <th className="text-center py-4 px-4 text-primary font-bold">Creator</th>
                  <th className="text-center py-4 px-4 text-white font-bold">Agency</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="border-b border-[#223c49]/50">
                    <td className="py-4 px-4 text-slate-300">{row.feature}</td>
                    <td className="text-center py-4 px-4">
                      {typeof row.starter === "boolean" ? (
                        row.starter ? (
                          <span className="material-symbols-outlined text-green-400">check</span>
                        ) : (
                          <span className="material-symbols-outlined text-slate-600">close</span>
                        )
                      ) : (
                        <span className="text-slate-400">{row.starter}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4 bg-primary/5">
                      {typeof row.creator === "boolean" ? (
                        row.creator ? (
                          <span className="material-symbols-outlined text-primary">check</span>
                        ) : (
                          <span className="material-symbols-outlined text-slate-600">close</span>
                        )
                      ) : (
                        <span className="text-primary font-medium">{row.creator}</span>
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {typeof row.agency === "boolean" ? (
                        row.agency ? (
                          <span className="material-symbols-outlined text-green-400">check</span>
                        ) : (
                          <span className="material-symbols-outlined text-slate-600">close</span>
                        )
                      ) : (
                        <span className="text-slate-400">{row.agency}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-20 bg-[#101c22]">
        <div className="px-6 lg:px-16 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Frequently asked questions</h2>
            <p className="text-slate-400 text-lg">Everything you need to know about our pricing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#182b34] border border-[#223c49] rounded-xl p-6 hover:border-primary/50 transition-colors">
                <h3 className="font-bold text-white mb-3 flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary flex-shrink-0">help</span>
                  {faq.q}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="w-full py-16 bg-[#182b34]/30">
        <div className="px-6 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-400 mb-6">
            <span className="material-symbols-outlined text-3xl">verified</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">30-Day Money Back Guarantee</h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Not satisfied? Get a full refund within 30 days. No questions asked, no hassle. We're confident you'll love ViralEngine.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
