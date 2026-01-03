import { NextResponse } from "next/server"
import User from "@/models/User"

export async function POST(request) {
  try {
    const { name, email, password, company } = await request.json()

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      )
    }

    // Validate password length
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await User.findByEmail(email)
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      )
    }

    // Create user (password is auto-hashed in User.create)
    const newUser = await User.create({
      name,
      email,
      password,
      company: company || null,
      provider: "credentials",
    })

    return NextResponse.json(
      {
        message: "User created successfully",
        userId: newUser._id.toString()
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Signup error:", error)

    // Handle duplicate key error
    if (error.message?.includes("already exists")) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: "An error occurred during signup" },
      { status: 500 }
    )
  }
}
