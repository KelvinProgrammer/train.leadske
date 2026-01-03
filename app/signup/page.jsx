"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"

const features = [
  { icon: "analytics", text: "AI-powered viral score predictions" },
  { icon: "tag", text: "Smart tagging for maximum reach" },
  { icon: "autorenew", text: "One-click content repurposing" },
  { icon: "trending_up", text: "Real-time trend detection" },
]

export default function SignUpPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [generalError, setGeneralError] = useState("")

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!agreeTerms) {
      newErrors.terms = "You must agree to the terms and privacy policy"
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setGeneralError("")
    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true)
      try {
        const response = await fetch("/api/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            password: formData.password,
          }),
        })

        const data = await response.json()

        if (!response.ok) {
          setGeneralError(data.error || "An error occurred during signup")
          return
        }

        const signInResult = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: false,
        })

        if (signInResult?.error) {
          setGeneralError("Account created but failed to sign in. Please try logging in.")
          router.push("/login")
        } else {
          router.push("/dashboard/overview")
          router.refresh()
        }
      } catch (error) {
        setGeneralError("An error occurred. Please try again.")
      } finally {
        setIsLoading(false)
      }
    } else {
      setErrors(newErrors)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    try {
      await signIn("google", { callbackUrl: "/dashboard/overview" })
    } catch (error) {
      setGeneralError("Failed to sign in with Google")
      setIsLoading(false)
    }
  }

  const passwordStrength = formData.password.length >= 12 ? "strong" : formData.password.length >= 8 ? "medium" : "weak"

  return (
    <main className="w-full min-h-screen bg-[#101c22] flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 overflow-y-auto">
        <div className="w-full max-w-md py-8">
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-lg bg-primary/20 p-2.5 text-primary">
                <span className="material-symbols-outlined text-2xl">smart_toy</span>
              </div>
              <span className="text-xl font-bold text-white">ViralEngine</span>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-white mb-2">Start for free</h2>
            <p className="text-slate-400">Create your account and go viral</p>
          </div>

          {generalError && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm flex items-center gap-3">
              <span className="material-symbols-outlined">error</span>
              {generalError}
            </div>
          )}

          {/* Google Sign In */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full py-3.5 bg-[#182b34] border border-[#223c49] text-white font-medium rounded-lg hover:bg-[#1a3340] transition-colors flex items-center justify-center gap-3 disabled:opacity-50 mb-6"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#223c49]" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#101c22] text-slate-500">or sign up with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                  <span className="material-symbols-outlined text-xl">person</span>
                </span>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full pl-12 pr-4 py-3.5 rounded-lg border bg-[#182b34] text-white placeholder-slate-500 transition-colors focus:outline-none ${
                    errors.fullName
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#223c49] focus:border-primary focus:ring-1 focus:ring-primary"
                  }`}
                />
              </div>
              {errors.fullName && (
                <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </span>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full pl-12 pr-4 py-3.5 rounded-lg border bg-[#182b34] text-white placeholder-slate-500 transition-colors focus:outline-none ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#223c49] focus:border-primary focus:ring-1 focus:ring-primary"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                  <span className="material-symbols-outlined text-xl">lock</span>
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className={`w-full pl-12 pr-12 py-3.5 rounded-lg border bg-[#182b34] text-white placeholder-slate-500 transition-colors focus:outline-none ${
                    errors.password
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#223c49] focus:border-primary focus:ring-1 focus:ring-primary"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              {formData.password && !errors.password && (
                <div className="mt-2 flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-[#223c49] rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${
                        passwordStrength === "strong"
                          ? "w-full bg-green-500"
                          : passwordStrength === "medium"
                          ? "w-2/3 bg-yellow-500"
                          : "w-1/3 bg-red-500"
                      }`}
                    />
                  </div>
                  <span className={`text-xs font-medium ${
                    passwordStrength === "strong"
                      ? "text-green-400"
                      : passwordStrength === "medium"
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}>
                    {passwordStrength === "strong" ? "Strong" : passwordStrength === "medium" ? "Good" : "Weak"}
                  </span>
                </div>
              )}
              {errors.password && (
                <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                  <span className="material-symbols-outlined text-xl">lock</span>
                </span>
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className={`w-full pl-12 pr-12 py-3.5 rounded-lg border bg-[#182b34] text-white placeholder-slate-500 transition-colors focus:outline-none ${
                    errors.confirmPassword
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#223c49] focus:border-primary focus:ring-1 focus:ring-primary"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">
                    {showConfirmPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              {formData.confirmPassword && formData.password === formData.confirmPassword && !errors.confirmPassword && (
                <p className="text-green-400 text-sm mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Passwords match
                </p>
              )}
              {errors.confirmPassword && (
                <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => {
                  setAgreeTerms(e.target.checked)
                  if (errors.terms) setErrors((prev) => ({ ...prev, terms: "" }))
                }}
                className="w-5 h-5 mt-0.5 rounded border-[#223c49] bg-[#182b34] text-primary focus:ring-primary focus:ring-offset-0"
              />
              <label htmlFor="terms" className="text-sm text-slate-400">
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:text-primary/80 font-medium transition-colors">
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-400 text-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">error</span>
                {errors.terms}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-primary text-[#101c22] font-bold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(37,175,244,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">progress_activity</span>
                  Creating account...
                </>
              ) : (
                <>
                  Create Account
                  <span className="material-symbols-outlined">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          <p className="text-center text-slate-400 text-sm mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-bold hover:text-primary/80 transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image/Hero */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBteg7f8evK2lCYBWBzO2laq401r_fBqc1fAek2tAnG7cExMehdIQE3XekU8OMUzwqX8z7mHo_k-ttZZzbZzIsvWsfuQ37Qdxts-CF37GZi25u7t4yI3CqXK83Eh5colBx05ZxCO3F0P5MtX41SD2ZWpbQ_zOao8moklTzi0T4UITsIiWEkZgAJHYc4zUx08JLFRDL69D8uynYdAlk7rsctc1nY2p8dHLibMtMSSMChD-qznMQWMEn0NCR8nhD67hEPbgzxp-0L5I0e")`,
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#101c22]/90 via-[#101c22]/70 to-primary/30"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-lg bg-primary/20 p-2.5 text-primary">
              <span className="material-symbols-outlined text-2xl">smart_toy</span>
            </div>
            <span className="text-xl font-bold text-white">ViralEngine</span>
          </Link>

          {/* Main Content */}
          <div className="max-w-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-6">
              <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
              <span>14-Day Free Trial</span>
            </div>

            <h1 className="text-4xl font-black text-white mb-6 leading-tight">
              Join 50,000+ creators going <span className="text-primary">viral</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Start analyzing your content in minutes. No credit card required.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">{feature.icon}</span>
                  </div>
                  <span className="text-slate-300">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-[#182b34]/80 backdrop-blur-sm border border-[#223c49] rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              {/* Avatar Stack */}
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 border-2 border-[#182b34] flex items-center justify-center text-white font-bold text-xs"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="material-symbols-outlined text-lg">star</span>
                  ))}
                </div>
                <p className="text-slate-400 text-sm">from 2,000+ reviews</p>
              </div>
            </div>
            <p className="text-white font-medium">
              "The best investment I've made for my content strategy."
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
