import { Router } from 'express'
import { login, getUserInfoFromToken } from '../controllers/auth.controller.js'
import { isValidTokenMiddleware } from '../middlewares/isValidTokenMiddleware.js'
import { isUserOwner } from '../middlewares/isUserOwner.js'

const router = Router()

router.post('/login', login).get('/me', [isValidTokenMiddleware, isUserOwner], getUserInfoFromToken)

export { router as authRouter }
