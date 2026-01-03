import clientPromise from "./mongodb"

let cachedDb = null

export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb
  }

  const client = await clientPromise
  const db = client.db(process.env.MONGODB_DB || "test")
  cachedDb = db
  return db
}

export async function getUserByEmail(email) {
  const db = await connectToDatabase()
  return db.collection("users").findOne({ email: email.toLowerCase() })
}

export async function createUser(userData) {
  const db = await connectToDatabase()
  const result = await db.collection("users").insertOne({
    ...userData,
    email: userData.email.toLowerCase(),
    createdAt: new Date(),
    updatedAt: new Date(),
  })
  return result
}

export async function getUserById(id) {
  const db = await connectToDatabase()
  const { ObjectId } = await import("mongodb")
  return db.collection("users").findOne({ _id: new ObjectId(id) })
}
