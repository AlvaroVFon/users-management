import { authService } from '../services/auth.service.js'
import { handleResponse } from '../helpers/handleResponse.js'
import { handleError } from '../helpers/handleError.js'
import { sanitizeObject } from '../helpers/sanitizeObject.js'

async function login(req, res) {
  try {
    const { email, password } = req.body
    const token = await authService.login({ email, password })

    return handleResponse({ req, res, data: token, statusCode: 200 })
  } catch (error) {
    return handleError({
      error: error.message,
      req,
      res,
      statusCode: error.status,
    })
  }
}

async function getUserInfoFromToken(req, res) {
  try {
    const token = req.headers.authorization.replace('Bearer ', '')
    const userInfo = authService.verifyToken({ token })

    const blackList = ['password', 'lockUntil', 'createdAt', 'updatedAt']
    const publicUserInfo = sanitizeObject(userInfo, blackList)

    return handleResponse({ req, res, data: publicUserInfo, statusCode: 200 })
  } catch (error) {
    return handleError({
      error: error.message,
      req,
      res,
      statusCode: error.status,
    })
  }
}

export { login, getUserInfoFromToken }
