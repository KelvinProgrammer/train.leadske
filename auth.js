import NextAuth from "next-auth"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/mongodb"
import User from "@/models/User"
import { authConfig } from "./auth.config"

// Full auth config with Node.js-specific modules (MongoDB, bcrypt)
// Only used in API routes (Node.js runtime)
export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: MongoDBAdapter(clientPromise),
  providers: authConfig.providers.map((provider) => {
    if (provider.id === "credentials") {
      return {
        ...provider,
        async authorize(credentials) {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email and password are required")
          }

          // Find user using User model
          const user = await User.findByEmail(credentials.email)

          if (!user) {
            throw new Error("No user found with this email")
          }

          if (!user.password) {
            throw new Error("Please sign in with Google")
          }

          // Verify password using User model
          const isPasswordValid = await User.verifyPassword(
            credentials.password,
            user.password
          )

          if (!isPasswordValid) {
            throw new Error("Invalid password")
          }

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            image: user.image,
          }
        },
      }
    }
    return provider
  }),
  callbacks: {
    ...authConfig.callbacks,
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        return true
      }
      return true
    },
  },
})
