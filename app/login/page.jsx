"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [generalError, setGeneralError] = useState("")

  const validateForm = () => {
    const newErrors = {}

    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!password) {
      newErrors.password = "Password is required"
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setGeneralError("")
    const newErrors = validateForm()

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true)
      try {
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false,
        })

        if (result?.error) {
          setGeneralError(result.error)
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

  return (
    <main className="w-full min-h-screen bg-[#101c22] flex">
      {/* Left Side - Image/Hero */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuApv_hYd0tl_7QYavmaS3Dl1phgrvViIXB29WIeV5STUwpBjw-2Yp534pH8y39XVmdtxN1GMmR5f3MzZReMj_CPf23t10ADquRkTiWVBeDewCM8ZMnoiah8P20j6xewdvG4lMsZzdiy0QHLKtVgV1P3T-SXv_soVTMliHfUWlGO9mF7wndrENZAVy1k0xxLSCjAwFmDXhVQV6qMJwGQbnzBx4HmXRcz0Yd0YNE4LHtXYQGnR8DA_6GT6GlfqVNCZz8T1FmJQH5FkJ85")`,
          }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#101c22]/90 via-[#101c22]/70 to-primary/30"></div>

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
            <h1 className="text-4xl font-black text-white mb-6 leading-tight">
              Turn your content into a <span className="text-primary">viral ecosystem</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              AI-powered analysis that helps you understand, optimize, and scale your content across every platform.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-black text-white">10M+</div>
                <p className="text-slate-400 text-sm">Videos Analyzed</p>
              </div>
              <div>
                <div className="text-3xl font-black text-white">50K+</div>
                <p className="text-slate-400 text-sm">Creators</p>
              </div>
              <div>
                <div className="text-3xl font-black text-white">87%</div>
                <p className="text-slate-400 text-sm">Accuracy</p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-[#182b34]/80 backdrop-blur-sm border border-[#223c49] rounded-xl p-6">
            <p className="text-slate-300 italic mb-4">
              "ViralEngine helped me 3x my views in just 2 months. The viral score predictions are incredibly accurate."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold">
                JM
              </div>
              <div>
                <p className="text-white font-medium">Jake Morrison</p>
                <p className="text-slate-400 text-sm">2.5M subscribers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
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
            <h2 className="text-3xl font-black text-white mb-2">Welcome back</h2>
            <p className="text-slate-400">Sign in to your account to continue</p>
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
              <span className="px-4 bg-[#101c22] text-slate-500">or sign in with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
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
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) setErrors({ ...errors, email: "" })
                  }}
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) setErrors({ ...errors, password: "" })
                  }}
                  placeholder="Enter your password"
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
              {errors.password && (
                <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {errors.password}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#223c49] bg-[#182b34] text-primary focus:ring-primary focus:ring-offset-0"
                />
                <span className="text-slate-400 text-sm">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-primary text-[#101c22] font-bold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(37,175,244,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="material-symbols-outlined animate-spin">progress_activity</span>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <span className="material-symbols-outlined">arrow_forward</span>
                </>
              )}
            </button>
          </form>

          <p className="text-center text-slate-400 text-sm mt-8">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary font-bold hover:text-primary/80 transition-colors">
              Sign up free
            </Link>
          </p>

          {/* Trust badges */}
          <div className="mt-8 pt-8 border-t border-[#223c49]">
            <div className="flex items-center justify-center gap-6 text-slate-500">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500 text-lg">verified</span>
                <span className="text-xs">SSL Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-500 text-lg">lock</span>
                <span className="text-xs">256-bit Encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
