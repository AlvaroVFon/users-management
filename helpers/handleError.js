import { generateLogger } from '../config/logger.js'
import path from 'node:path'

const logger = generateLogger(path.basename(import.meta.filename))

function handleError ({ error, req, res, statusCode = 500 }) {
  return res.status(statusCode).json({ error })
}

export { handleError }
