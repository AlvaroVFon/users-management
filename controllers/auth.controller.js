import { authService } from '../services/auth.service.js'
import { handleResponse } from '../helpers/handleResponse.js'
import { handleError } from '../helpers/handleError.js'

async function login (req, res) {
  try {
    const { email, password } = req.body
    const token = await authService.login({ email, password })

    return handleResponse({ req, res, data: token, statusCode: 200 })
  } catch (error) {
    return handleError({
      error: error.message,
      req,
      res,
      statusCode: error.status
    })
  }
}

export { login }
