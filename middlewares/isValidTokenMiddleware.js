import UnauthorizedException from '../exceptions/UnauthorizedException.js'
import { handleError } from '../helpers/handleError.js'
import { authService } from '../services/auth.service.js'

function isValidTokenMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '')

    if (!token) {
      throw new UnauthorizedException('Token not provided')
    }

    const payload = authService.verifyToken({ token })

    req.user = payload
  } catch (error) {
    return handleError({ error: error.message, req, res, statusCode: error.status })
  }

  next()
}

export { isValidTokenMiddleware }
