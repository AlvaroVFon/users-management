import { dbConnect } from '../config/database.js'

async function createUsers(users = []) {
  const db = await dbConnect()
  await db.collection('users').drop()
  await db.collection('users').insertMany(users)
  console.log('Users created successfully')
}

export { createUsers }
