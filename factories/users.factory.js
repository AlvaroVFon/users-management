import { dbConnect } from '../config/database.js'

async function createUsers(users = []) {
  const db = await dbConnect()
  const collection = db.collection('users')
  await collection.drop()
  await collection.insertMany(users)
  console.log('Users created successfully')
}

export { createUsers }
