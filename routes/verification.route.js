import { Router } from 'express'
import {
  sendVerificationEmail,
  verifyCode
} from '../controllers/verification.controller.js'
import { emailVerificationMiddleware } from '../middlewares/emailVerificationMiddleware.js'
import { isValidTokenMiddleware } from '../middlewares/isValidTokenMiddleware.js'

const router = Router()

router
  .get(
    '/send-verification-email',
    isValidTokenMiddleware,
    sendVerificationEmail
  )
  .post(
    '/verify',
    isValidTokenMiddleware,
    emailVerificationMiddleware,
    verifyCode
  )

export { router as verificationRouter }
