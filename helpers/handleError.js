import { generateLogger } from '../config/logger.js'
import path from 'node:path'

const logger = generateLogger(path.basename(import.meta.filename))

function handleError ({ error, req, res, statusCode = 500 }) {
  logger.error(
    JSON.stringify({
      level: 'error',
      request: {
        headers: req.headers,
        body: req.body
      },
      response: {
        statusCode,
        error
      }
    })
  )

  return res.status(statusCode).json({ error })
}

export { handleError }
