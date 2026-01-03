import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

// Edge-compatible auth config (no Node.js specific modules)
// Used by middleware for route protection
export const authConfig = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Credentials provider is defined here but authorize runs in Node.js runtime
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isProtectedRoute = nextUrl.pathname.startsWith("/dashboard")
      const isAuthRoute = nextUrl.pathname === "/login" || nextUrl.pathname === "/signup"

      if (isProtectedRoute && !isLoggedIn) {
        return false // Redirect to login
      }

      if (isAuthRoute && isLoggedIn) {
        return Response.redirect(new URL("/dashboard/overview", nextUrl))
      }

      return true
    },
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id
      }
      if (account?.provider === "google") {
        token.provider = "google"
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id
        session.user.provider = token.provider
      }
      return session
    },
  },
  trustHost: true,
}
