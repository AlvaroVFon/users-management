import { authService } from '../services/auth.service.js'

function isValidTokenMiddleware (req, res, next) {
  const token = req.headers.authorization.split(' ')[1]
  const payload = authService.verifyToken({ token })

  req.user = payload

  next()
}

export { isValidTokenMiddleware }
