import { Router } from 'express'
import {
  sendVerificationEmail,
  verifyCode
} from '../controllers/verification.controller.js'
import { codeValidatorMiddleware } from '../middlewares/codeValidatorMiddleware.js'
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
    codeValidatorMiddleware,
    verifyCode
  )

export { router as verificationRouter }
