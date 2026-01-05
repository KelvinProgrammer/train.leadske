import NextAuth from "next-auth"
import { authConfig } from "./auth.config"

// Use edge-compatible auth config (no Node.js crypto dependencies)
export default NextAuth(authConfig).auth

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/signup"],
}
