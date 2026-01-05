"use client"

import { useState } from "react"
import Link from "next/link"

const plans = [
  {
    id: "free",
    name: "Free",
    price: "KES 0",
    period: "forever",
    features: [
      "Access to 2 free courses",
      "Community access",
      "Basic certifications",
    ],
    current: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "KES 2,500",
    period: "/month",
    features: [
      "All courses & tracks",
      "Practical labs access",
      "All certifications",
      "Priority support",
      "LeadsKe tools sandbox",
    ],
    current: true,
    popular: true,
  },
  {
    id: "team",
    name: "Team",
    price: "KES 8,000",
    period: "/month",
    features: [
      "Everything in Pro",
      "Up to 5 team members",
      "Team analytics",
      "Custom training paths",
      "Dedicated support",
    ],
    current: false,
  },
]

const invoices = [
  { id: "INV-2024-012", date: "Jan 1, 2025", amount: "KES 2,500", status: "paid" },
  { id: "INV-2024-011", date: "Dec 1, 2024", amount: "KES 2,500", status: "paid" },
  { id: "INV-2024-010", date: "Nov 1, 2024", amount: "KES 2,500", status: "paid" },
  { id: "INV-2024-009", date: "Oct 1, 2024", amount: "KES 2,500", status: "paid" },
]

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("billing")
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sessionReminders: true,
    deadlineAlerts: true,
    marketingEmails: false,
  })

  return (
    <div className="p-6 space-y-6 max-w-5xl">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-neutral-400 mt-1">Manage your subscription and preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-neutral-800 pb-4">
        {[
          { key: "billing", label: "Billing", icon: "credit_card" },
          { key: "notifications", label: "Notifications", icon: "notifications" },
          { key: "preferences", label: "Preferences", icon: "tune" },
          { key: "security", label: "Security", icon: "shield" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
              activeTab === tab.key
                ? "bg-white text-neutral-900"
                : "text-neutral-400 hover:text-white hover:bg-neutral-800"
            }`}
          >
            <span className="material-symbols-outlined text-lg">{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Billing Tab */}
      {activeTab === "billing" && (
        <div className="space-y-6">
          {/* Current Plan */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-lg font-semibold text-white">Current Plan</h2>
                <p className="text-neutral-500 text-sm mt-1">You are currently on the Pro plan</p>
              </div>
              <span className="px-3 py-1 bg-white text-neutral-900 text-xs font-medium rounded-full">Active</span>
            </div>

            <div className="flex items-center gap-6 p-4 bg-neutral-900 border border-neutral-700 rounded-lg">
              <div className="size-14 rounded-lg bg-white flex items-center justify-center">
                <span className="material-symbols-outlined text-neutral-900 text-2xl">workspace_premium</span>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg">Pro Plan</h3>
                <p className="text-neutral-400 text-sm">Full access to all courses, labs, and certifications</p>
              </div>
              <div className="text-right">
                <p className="text-white text-2xl font-bold">KES 2,500</p>
                <p className="text-neutral-500 text-sm">/month</p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-800">
              <div>
                <p className="text-neutral-400 text-sm">Next billing date</p>
                <p className="text-white font-medium">February 1, 2025</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-neutral-800 text-white rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors">
                  Change Plan
                </button>
                <button className="px-4 py-2 bg-neutral-800 text-red-400 rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </div>

          {/* Available Plans */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Available Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`bg-neutral-950 border rounded-lg p-5 ${
                    plan.current ? "border-white" : "border-neutral-800"
                  }`}
                >
                  {plan.popular && (
                    <span className="px-2 py-0.5 bg-white text-neutral-900 text-xs font-medium rounded mb-3 inline-block">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-white font-semibold text-lg">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-white">{plan.price}</span>
                    <span className="text-neutral-500 text-sm">{plan.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-neutral-400 text-sm">
                        <span className="material-symbols-outlined text-green-400 text-sm">check</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full mt-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      plan.current
                        ? "bg-neutral-800 text-neutral-500 cursor-default"
                        : "bg-white text-neutral-900 hover:bg-neutral-200"
                    }`}
                    disabled={plan.current}
                  >
                    {plan.current ? "Current Plan" : "Upgrade"}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Payment Method</h2>
            <div className="flex items-center justify-between p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-lg bg-neutral-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">credit_card</span>
                </div>
                <div>
                  <p className="text-white font-medium">M-Pesa</p>
                  <p className="text-neutral-500 text-sm">**** 7890</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-neutral-800 text-white rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors">
                Update
              </button>
            </div>
            <button className="mt-4 text-neutral-400 text-sm hover:text-white transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">add</span>
              Add payment method
            </button>
          </div>

          {/* Billing History */}
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Billing History</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-800">
                    <th className="text-left text-neutral-500 text-xs font-medium py-3 px-2">Invoice</th>
                    <th className="text-left text-neutral-500 text-xs font-medium py-3 px-2">Date</th>
                    <th className="text-left text-neutral-500 text-xs font-medium py-3 px-2">Amount</th>
                    <th className="text-left text-neutral-500 text-xs font-medium py-3 px-2">Status</th>
                    <th className="text-right text-neutral-500 text-xs font-medium py-3 px-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b border-neutral-800 last:border-0">
                      <td className="py-3 px-2 text-white text-sm">{invoice.id}</td>
                      <td className="py-3 px-2 text-neutral-400 text-sm">{invoice.date}</td>
                      <td className="py-3 px-2 text-white text-sm">{invoice.amount}</td>
                      <td className="py-3 px-2">
                        <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-xs rounded capitalize">
                          {invoice.status}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <button className="text-neutral-400 text-sm hover:text-white transition-colors">
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === "notifications" && (
        <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-white mb-6">Notification Preferences</h2>
          <div className="space-y-4">
            {[
              { key: "email", label: "Email Notifications", desc: "Receive updates via email" },
              { key: "push", label: "Push Notifications", desc: "Browser push notifications" },
              { key: "sessionReminders", label: "Session Reminders", desc: "Get reminded before live sessions" },
              { key: "deadlineAlerts", label: "Deadline Alerts", desc: "Notifications for upcoming deadlines" },
              { key: "marketingEmails", label: "Marketing Emails", desc: "Receive offers and updates" },
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between py-3 border-b border-neutral-800 last:border-0">
                <div>
                  <p className="text-white font-medium">{item.label}</p>
                  <p className="text-neutral-500 text-sm">{item.desc}</p>
                </div>
                <button
                  onClick={() => setNotifications({ ...notifications, [item.key]: !notifications[item.key] })}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    notifications[item.key] ? "bg-white" : "bg-neutral-700"
                  }`}
                >
                  <span className={`block size-5 rounded-full bg-neutral-900 transition-transform ${
                    notifications[item.key] ? "translate-x-6" : "translate-x-0.5"
                  }`}></span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Preferences Tab */}
      {activeTab === "preferences" && (
        <div className="space-y-6">
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Learning Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="text-neutral-400 text-sm mb-2 block">Primary Learning Track</label>
                <select className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:border-neutral-600 outline-none transition-colors">
                  <option>Virtual Assistant Track</option>
                  <option>Social Media Manager Track</option>
                  <option>Digital Marketer Track</option>
                  <option>Sales & Pitching Track</option>
                </select>
              </div>
              <div>
                <label className="text-neutral-400 text-sm mb-2 block">Weekly Learning Goal</label>
                <select className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:border-neutral-600 outline-none transition-colors">
                  <option>5 hours per week</option>
                  <option>10 hours per week</option>
                  <option>15 hours per week</option>
                  <option>20+ hours per week</option>
                </select>
              </div>
              <div>
                <label className="text-neutral-400 text-sm mb-2 block">Preferred Session Times</label>
                <div className="flex flex-wrap gap-2">
                  {["Morning", "Afternoon", "Evening", "Weekend"].map((time) => (
                    <button
                      key={time}
                      className="px-4 py-2 bg-neutral-800 text-neutral-300 rounded-lg text-sm hover:bg-neutral-700 transition-colors"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-neutral-400 text-sm mb-2 block">Language</label>
                <select className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:border-neutral-600 outline-none transition-colors">
                  <option>English</option>
                  <option>Swahili</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Display</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Dark Mode</p>
                  <p className="text-neutral-500 text-sm">Use dark theme across the platform</p>
                </div>
                <button className="w-12 h-6 rounded-full bg-white">
                  <span className="block size-5 rounded-full bg-neutral-900 translate-x-6"></span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Compact View</p>
                  <p className="text-neutral-500 text-sm">Show more content with less spacing</p>
                </div>
                <button className="w-12 h-6 rounded-full bg-neutral-700">
                  <span className="block size-5 rounded-full bg-neutral-900 translate-x-0.5"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === "security" && (
        <div className="space-y-6">
          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Password</h2>
            <p className="text-neutral-400 text-sm mb-4">Change your password to keep your account secure</p>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="text-neutral-400 text-sm mb-2 block">Current Password</label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:border-neutral-600 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-neutral-400 text-sm mb-2 block">New Password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:border-neutral-600 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-neutral-400 text-sm mb-2 block">Confirm New Password</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:border-neutral-600 outline-none transition-colors"
                />
              </div>
              <button className="px-4 py-2 bg-white text-neutral-900 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors">
                Update Password
              </button>
            </div>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Two-Factor Authentication</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-neutral-400 text-sm">Add an extra layer of security to your account</p>
                <p className="text-neutral-500 text-xs mt-1">Status: <span className="text-red-400">Not enabled</span></p>
              </div>
              <button className="px-4 py-2 bg-neutral-800 text-white rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors">
                Enable 2FA
              </button>
            </div>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Sessions</h2>
            <p className="text-neutral-400 text-sm mb-4">Manage your active sessions across devices</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-neutral-400">computer</span>
                  <div>
                    <p className="text-white text-sm">Chrome on Windows</p>
                    <p className="text-neutral-500 text-xs">Nairobi, Kenya • Current session</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 bg-green-500/10 text-green-400 text-xs rounded">Active</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-neutral-400">phone_android</span>
                  <div>
                    <p className="text-white text-sm">Safari on iPhone</p>
                    <p className="text-neutral-500 text-xs">Nairobi, Kenya • 2 days ago</p>
                  </div>
                </div>
                <button className="text-red-400 text-sm hover:text-red-300 transition-colors">Revoke</button>
              </div>
            </div>
            <button className="mt-4 text-red-400 text-sm hover:text-red-300 transition-colors">
              Sign out of all other sessions
            </button>
          </div>

          <div className="bg-neutral-950 border border-red-900/30 rounded-lg p-6">
            <h2 className="text-lg font-semibold text-red-400 mb-2">Danger Zone</h2>
            <p className="text-neutral-400 text-sm mb-4">Permanently delete your account and all associated data</p>
            <button className="px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-lg text-sm font-medium hover:bg-red-500/20 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
