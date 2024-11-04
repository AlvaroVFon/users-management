import path from 'node:path'
import { generateLogger } from '../config/logger.js'

const logger = generateLogger(path.basename(import.meta.filename))

function handleResponse ({ req, res, data, statusCode = 200 }) {
  logger.info(
    JSON.stringify({
      level: 'info',
      request: {
        headers: req.headers,
        body: req.body
      },
      response: {
        statusCode,
        data
      }
    })
  )

  return res.status(statusCode).json({
    statusCode,
    data
  })
}

export { handleResponse }
