import NextAuth from "next-auth"
import { authConfig } from "./auth.config"

// Use edge-compatible auth config (no Node.js crypto dependencies)
export const { auth: middleware } = NextAuth(authConfig)

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
}
