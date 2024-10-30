import mongoose from 'mongoose'
import { generateLogger } from './logger.js'

const logger = generateLogger(import.meta.filename)

async function dbConnect () {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    logger.info('Database connected')
  } catch (error) {
    logger.error(error)
  }
}

export { dbConnect }
