"use client"

const benefits = [
  {
    traditional: "Watch videos passively",
    leadsKe: "Execute real tasks in sandbox",
  },
  {
    traditional: "Generic curriculum",
    leadsKe: "Industry-specific tools training",
  },
  {
    traditional: "Certificates that prove attendance",
    leadsKe: "Certificates that prove skills",
  },
  {
    traditional: "No job readiness",
    leadsKe: "Immediate tool proficiency",
  },
]

export default function Comparison() {
  return (
    <section className="w-full py-20 bg-neutral-300">
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center items-center">
            <p className="text-neutral-500 text-sm font-medium uppercase tracking-wider">Why Media.LeadsKe.Pro</p>
            <h2 className="text-black tracking-tight text-3xl md:text-4xl font-bold leading-tight max-w-2xl">
              Theory vs. Practice
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="max-w-3xl mx-auto w-full">
            <div className="grid grid-cols-2 gap-px bg-neutral-400 rounded-lg overflow-hidden">
              {/* Headers */}
              <div className="bg-neutral-200 p-4">
                <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider">Traditional Courses</p>
              </div>
              <div className="bg-neutral-200 p-4">
                <p className="text-black text-xs font-medium uppercase tracking-wider">Media.LeadsKe.Pro</p>
              </div>

              {/* Rows */}
              {benefits.map((benefit, idx) => (
                <>
                  <div key={`trad-${idx}`} className="bg-neutral-200 p-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-neutral-400 text-lg">close</span>
                    <span className="text-neutral-500 text-sm">{benefit.traditional}</span>
                  </div>
                  <div key={`lk-${idx}`} className="bg-neutral-200 p-4 flex items-center gap-3">
                    <span className="material-symbols-outlined text-black text-lg">check</span>
                    <span className="text-black text-sm">{benefit.leadsKe}</span>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
