import { authService } from "../services/auth.service.js"

async function login(req, res) {
  try {
    const { email, password } = req.body
    const token = await authService.login({ email, password })
    return res.status(200).json(token)
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message })
  }
}

export { login }
