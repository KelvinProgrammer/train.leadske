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
    <main className="w-full min-h-screen bg-neutral-200 flex">
      {/* Left Side - Image/Hero */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-neutral-300">
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-lg bg-black/10 p-2.5">
              <span className="material-symbols-outlined text-2xl text-black">school</span>
            </div>
            <span className="text-xl font-bold text-black">Media.LeadsKe.Pro</span>
          </Link>

          {/* Main Content */}
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-black mb-6 leading-tight">
              Master digital skills.
              <br />
              <span className="text-neutral-500">Get certified.</span>
            </h1>
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
              Professional training platform for Virtual Assistants, Social Media Managers, Digital Marketers, and Sales professionals.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-black">4</div>
                <p className="text-neutral-500 text-sm">Career Tracks</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-black">20+</div>
                <p className="text-neutral-500 text-sm">Modules</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-black">Real</div>
                <p className="text-neutral-500 text-sm">Tool Access</p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-neutral-200 border border-neutral-400 rounded-xl p-6">
            <p className="text-neutral-600 italic mb-4">
              "The practical labs made all the difference. I was job-ready within weeks of completing my certification."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold">
                SM
              </div>
              <div>
                <p className="text-black font-medium">Sarah M.</p>
                <p className="text-neutral-500 text-sm">Certified LeadsKe VA</p>
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
              <div className="flex items-center justify-center rounded-lg bg-black/10 p-2.5">
                <span className="material-symbols-outlined text-2xl text-black">school</span>
              </div>
              <span className="text-xl font-bold text-black">Media.LeadsKe.Pro</span>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-2">Welcome back</h2>
            <p className="text-neutral-500">Sign in to continue your learning journey</p>
          </div>

          {generalError && (
            <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg text-red-600 text-sm flex items-center gap-3">
              <span className="material-symbols-outlined">error</span>
              {generalError}
            </div>
          )}

          {/* Google Sign In */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full py-3.5 bg-neutral-300 border border-neutral-400 text-black font-medium rounded-lg hover:bg-neutral-400 transition-colors flex items-center justify-center gap-3 disabled:opacity-50 mb-6"
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
              <div className="w-full border-t border-neutral-400" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-neutral-200 text-neutral-500">or sign in with email</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
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
                  className={`w-full pl-12 pr-4 py-3.5 rounded-lg border bg-neutral-100 text-black placeholder-neutral-500 transition-colors focus:outline-none ${
                    errors.email
                      ? "border-red-500 focus:border-red-500"
                      : "border-neutral-400 focus:border-black focus:ring-1 focus:ring-black"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500">
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
                  className={`w-full pl-12 pr-12 py-3.5 rounded-lg border bg-neutral-100 text-black placeholder-neutral-500 transition-colors focus:outline-none ${
                    errors.password
                      ? "border-red-500 focus:border-red-500"
                      : "border-neutral-400 focus:border-black focus:ring-1 focus:ring-black"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-700 transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">error</span>
                  {errors.password}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-neutral-400 bg-neutral-100 text-black focus:ring-black focus:ring-offset-0"
                />
                <span className="text-neutral-600 text-sm">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-black hover:text-neutral-700 text-sm font-medium transition-colors">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-black text-white font-bold rounded-lg hover:bg-neutral-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

          <p className="text-center text-neutral-500 text-sm mt-8">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-black font-bold hover:text-neutral-700 transition-colors">
              Start learning free
            </Link>
          </p>

          {/* Trust badges */}
          <div className="mt-8 pt-8 border-t border-neutral-300">
            <div className="flex items-center justify-center gap-6 text-neutral-500">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600 text-lg">verified</span>
                <span className="text-xs">SSL Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-600 text-lg">lock</span>
                <span className="text-xs">256-bit Encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
