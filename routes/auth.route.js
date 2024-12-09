import { Router } from 'express'
import { login, getUserInfoFromToken } from '../controllers/auth.controller.js'

const router = Router()

router.post('/login', login).get('/me', getUserInfoFromToken)

export { router as authRouter }
