import { generateLogger } from '../config/logger.js'
import { writeFile } from '../helpers/handleFile.js'
import { sanitizeObject } from '../helpers/sanitizeObject.js'

const logger = generateLogger('LoggerMiddleware')

const headersBlackList = ['authorization', 'accept-encoding', 'connection']
const bodyBlackList = ['password']

function loggerMiddleware(req, res, next) {
  const requestContent = {
    method: req.method,
    url: req.url,
    body: sanitizeObject(req.body, bodyBlackList),
    headers: sanitizeObject(req.headers, headersBlackList),
  }

  const originalRequest = structuredClone(requestContent)

  res.on('finish', () => {
    res.statusCode >= 400 && res.statusCode !== 500
      ? logger.warn({
          statusCode: res.statusCode,
          request: originalRequest,
          response: { statusCode: res.statusCode, body: JSON.stringify(res.body) },
        })
      : logger.info({ statusCode: res.statusCode, request: originalRequest })

    if (res.statusCode === 500) {
      logger.error({
        statusCode: res.statusCode,
        request: originalRequest,
        response: { statusCode: res.statusCode, body: JSON.stringify(res.body) },
      })

      writeFile('error.log', JSON.stringify({ statusCode: res.statusCode, request: originalRequest }))
    }
  })

  next()
}

export { loggerMiddleware }
