import { connectToDatabase } from "@/lib/db"
import { ObjectId } from "mongodb"
import bcrypt from "bcryptjs"

// User Schema Definition (for reference)
export const UserSchema = {
  name: { type: "string", required: true },
  email: { type: "string", required: true, unique: true },
  password: { type: "string", required: false }, // Optional for OAuth users
  image: { type: "string", required: false },
  emailVerified: { type: "date", required: false },
  provider: { type: "string", required: false }, // 'google', 'credentials', etc.
  company: { type: "string", required: false },
  createdAt: { type: "date", required: true },
  updatedAt: { type: "date", required: true },
}

const COLLECTION_NAME = "users"

export const User = {
  // Get collection
  async getCollection() {
    const db = await connectToDatabase()
    return db.collection(COLLECTION_NAME)
  },

  // Find user by ID
  async findById(id) {
    const collection = await this.getCollection()
    return collection.findOne({ _id: new ObjectId(id) })
  },

  // Find user by email
  async findByEmail(email) {
    const collection = await this.getCollection()
    return collection.findOne({ email: email.toLowerCase() })
  },

  // Find one user by query
  async findOne(query) {
    const collection = await this.getCollection()
    return collection.findOne(query)
  },

  // Find multiple users
  async find(query = {}, options = {}) {
    const collection = await this.getCollection()
    return collection.find(query, options).toArray()
  },

  // Create new user
  async create(userData) {
    const collection = await this.getCollection()

    // Check if user already exists
    const existingUser = await this.findByEmail(userData.email)
    if (existingUser) {
      throw new Error("User with this email already exists")
    }

    // Hash password if provided
    let hashedPassword = null
    if (userData.password) {
      hashedPassword = await bcrypt.hash(userData.password, 12)
    }

    const newUser = {
      name: userData.name,
      email: userData.email.toLowerCase(),
      password: hashedPassword,
      image: userData.image || null,
      emailVerified: userData.emailVerified || null,
      provider: userData.provider || "credentials",
      company: userData.company || null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const result = await collection.insertOne(newUser)
    return { ...newUser, _id: result.insertedId }
  },

  // Update user by ID
  async updateById(id, updateData) {
    const collection = await this.getCollection()

    // If updating password, hash it
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 12)
    }

    const result = await collection.findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...updateData,
          updatedAt: new Date()
        }
      },
      { returnDocument: "after" }
    )
    return result
  },

  // Update user by email
  async updateByEmail(email, updateData) {
    const collection = await this.getCollection()

    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 12)
    }

    const result = await collection.findOneAndUpdate(
      { email: email.toLowerCase() },
      {
        $set: {
          ...updateData,
          updatedAt: new Date()
        }
      },
      { returnDocument: "after" }
    )
    return result
  },

  // Delete user by ID
  async deleteById(id) {
    const collection = await this.getCollection()
    return collection.deleteOne({ _id: new ObjectId(id) })
  },

  // Verify password
  async verifyPassword(plainPassword, hashedPassword) {
    return bcrypt.compare(plainPassword, hashedPassword)
  },

  // Count users
  async count(query = {}) {
    const collection = await this.getCollection()
    return collection.countDocuments(query)
  },
}

export default User
