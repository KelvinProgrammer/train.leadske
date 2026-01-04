"use client"

import { useState } from "react"

const certifications = [
  {
    id: 1,
    title: "Certified LeadsKe VA",
    description: "Validate your skills as a Virtual Assistant using LeadsKe tools",
    icon: "support_agent",
    track: "Virtual Assistant Track",
    requirements: {
      course: { total: 5, completed: 5, status: "complete" },
      labs: { total: 3, completed: 2, status: "in_progress" },
      assessment: { status: "locked", score: null },
    },
    status: "in_progress",
    earnedDate: null,
    badge: "va",
  },
  {
    id: 2,
    title: "Certified Social Media Manager",
    description: "Prove your expertise in social media management and content strategy",
    icon: "share",
    track: "Social Media Manager Track",
    requirements: {
      course: { total: 5, completed: 3, status: "in_progress" },
      labs: { total: 3, completed: 0, status: "locked" },
      assessment: { status: "locked", score: null },
    },
    status: "in_progress",
    earnedDate: null,
    badge: "smm",
  },
  {
    id: 3,
    title: "Certified Digital Marketer",
    description: "Demonstrate mastery of SEO, funnels, and digital marketing automation",
    icon: "campaign",
    track: "Digital Marketer Track",
    requirements: {
      course: { total: 5, completed: 0, status: "not_started" },
      labs: { total: 4, completed: 0, status: "locked" },
      assessment: { status: "locked", score: null },
    },
    status: "not_started",
    earnedDate: null,
    badge: "dm",
  },
  {
    id: 4,
    title: "Certified LeadsKe Sales Partner",
    description: "Become an authorized partner to sell and demo LeadsKe products",
    icon: "handshake",
    track: "Sales & Pitching Track",
    requirements: {
      course: { total: 5, completed: 0, status: "not_started" },
      labs: { total: 2, completed: 0, status: "locked" },
      assessment: { status: "locked", score: null },
    },
    status: "not_started",
    earnedDate: null,
    badge: "sales",
    featured: true,
  },
]

const earnedCertifications = [
  {
    id: 101,
    title: "LeadsKe Fundamentals",
    description: "Basic understanding of the LeadsKe ecosystem",
    icon: "verified",
    earnedDate: "Dec 15, 2024",
    credentialId: "LK-2024-001234",
  },
]

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Certifications</h1>
          <p className="text-neutral-400 mt-1">Validate your skills and build trust</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Earned", value: "1", icon: "workspace_premium" },
          { label: "In Progress", value: "2", icon: "pending" },
          { label: "Available", value: "4", icon: "school" },
          { label: "Profile Views", value: "47", icon: "visibility" },
        ].map((stat) => (
          <div key={stat.label} className="bg-neutral-950 border border-neutral-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="material-symbols-outlined text-neutral-500">{stat.icon}</span>
              <span className="text-xl font-bold text-white">{stat.value}</span>
            </div>
            <p className="text-neutral-400 text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Earned Certifications */}
      {earnedCertifications.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Earned Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {earnedCertifications.map((cert) => (
              <div key={cert.id} className="bg-gradient-to-r from-neutral-900 to-neutral-950 border border-neutral-700 rounded-lg p-5">
                <div className="flex items-start gap-4">
                  <div className="size-14 rounded-lg bg-white flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-neutral-900 text-2xl">{cert.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-semibold">{cert.title}</h3>
                      <span className="material-symbols-outlined text-green-400 text-lg">verified</span>
                    </div>
                    <p className="text-neutral-500 text-sm">{cert.description}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-neutral-500 text-xs">Earned: {cert.earnedDate}</span>
                      <span className="text-neutral-600 text-xs">ID: {cert.credentialId}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-neutral-800">
                  <button className="px-4 py-2 bg-neutral-800 text-white rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors">
                    View Certificate
                  </button>
                  <button className="px-4 py-2 bg-neutral-800 text-white rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors">
                    Share
                  </button>
                  <button className="px-4 py-2 bg-neutral-800 text-white rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors">
                    Add to LinkedIn
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Available Certifications */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Available Certifications</h2>
        <div className="space-y-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`bg-neutral-950 border rounded-lg p-5 ${
                cert.featured ? "border-neutral-600" : "border-neutral-800"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`size-14 rounded-lg flex items-center justify-center shrink-0 ${
                  cert.status === "not_started" ? "bg-neutral-800" : "bg-neutral-800"
                }`}>
                  <span className={`material-symbols-outlined text-2xl ${
                    cert.status === "not_started" ? "text-neutral-500" : "text-white"
                  }`}>{cert.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-semibold">{cert.title}</h3>
                    {cert.featured && (
                      <span className="px-2 py-0.5 bg-white text-neutral-900 text-xs font-medium rounded">Recommended</span>
                    )}
                    {cert.status === "in_progress" && (
                      <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-400 text-xs rounded">In Progress</span>
                    )}
                  </div>
                  <p className="text-neutral-500 text-sm">{cert.description}</p>
                  <p className="text-neutral-600 text-xs mt-2">Track: {cert.track}</p>
                </div>
              </div>

              {/* Requirements */}
              <div className="mt-4 pt-4 border-t border-neutral-800">
                <p className="text-neutral-400 text-xs mb-3">Certification Requirements</p>
                <div className="grid grid-cols-3 gap-4">
                  {/* Course Progress */}
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neutral-400 text-xs">Course</span>
                      {cert.requirements.course.status === "complete" ? (
                        <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                      ) : cert.requirements.course.status === "in_progress" ? (
                        <span className="material-symbols-outlined text-yellow-400 text-sm">pending</span>
                      ) : (
                        <span className="material-symbols-outlined text-neutral-600 text-sm">radio_button_unchecked</span>
                      )}
                    </div>
                    <p className="text-white text-sm font-medium">
                      {cert.requirements.course.completed}/{cert.requirements.course.total} modules
                    </p>
                    {cert.requirements.course.status !== "not_started" && (
                      <div className="mt-2 w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            cert.requirements.course.status === "complete" ? "bg-green-400" : "bg-white"
                          }`}
                          style={{ width: `${(cert.requirements.course.completed / cert.requirements.course.total) * 100}%` }}
                        ></div>
                      </div>
                    )}
                  </div>

                  {/* Labs Progress */}
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neutral-400 text-xs">Labs</span>
                      {cert.requirements.labs.status === "complete" ? (
                        <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                      ) : cert.requirements.labs.status === "in_progress" ? (
                        <span className="material-symbols-outlined text-yellow-400 text-sm">pending</span>
                      ) : cert.requirements.labs.status === "locked" ? (
                        <span className="material-symbols-outlined text-neutral-600 text-sm">lock</span>
                      ) : (
                        <span className="material-symbols-outlined text-neutral-600 text-sm">radio_button_unchecked</span>
                      )}
                    </div>
                    <p className="text-white text-sm font-medium">
                      {cert.requirements.labs.completed}/{cert.requirements.labs.total} labs
                    </p>
                    {cert.requirements.labs.status !== "locked" && cert.requirements.labs.status !== "not_started" && (
                      <div className="mt-2 w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-white rounded-full"
                          style={{ width: `${(cert.requirements.labs.completed / cert.requirements.labs.total) * 100}%` }}
                        ></div>
                      </div>
                    )}
                  </div>

                  {/* Assessment */}
                  <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neutral-400 text-xs">Assessment</span>
                      {cert.requirements.assessment.status === "passed" ? (
                        <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                      ) : (
                        <span className="material-symbols-outlined text-neutral-600 text-sm">lock</span>
                      )}
                    </div>
                    <p className="text-white text-sm font-medium">
                      {cert.requirements.assessment.status === "passed"
                        ? `${cert.requirements.assessment.score}%`
                        : "Final Exam"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end mt-4 pt-4 border-t border-neutral-800">
                {cert.status === "not_started" ? (
                  <button className="px-4 py-2 bg-neutral-800 text-white rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors">
                    Start Track
                  </button>
                ) : cert.status === "in_progress" ? (
                  <button className="px-4 py-2 bg-white text-neutral-900 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors">
                    Continue
                  </button>
                ) : (
                  <button className="px-4 py-2 bg-white text-neutral-900 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors">
                    Take Assessment
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How it Works */}
      <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
        <h3 className="text-white font-semibold mb-4">How Certification Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="size-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0">
              <span className="text-white text-sm font-medium">1</span>
            </div>
            <div>
              <p className="text-white font-medium text-sm">Complete Course</p>
              <p className="text-neutral-500 text-xs mt-1">Finish all modules in your chosen track</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="size-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0">
              <span className="text-white text-sm font-medium">2</span>
            </div>
            <div>
              <p className="text-white font-medium text-sm">Pass Practical Labs</p>
              <p className="text-neutral-500 text-xs mt-1">Demonstrate your skills with real tools</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="size-8 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0">
              <span className="text-white text-sm font-medium">3</span>
            </div>
            <div>
              <p className="text-white font-medium text-sm">Final Assessment</p>
              <p className="text-neutral-500 text-xs mt-1">Pass the exam with 80% or higher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
