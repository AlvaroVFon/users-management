import { emailVerificationSchema } from '../schemas/users/emailVerification.schema.js'
import { handleError } from '../helpers/handleError.js'

function emailVerificationMiddleware (req, res, next) {
  const { error } = emailVerificationSchema.validate(req.body)

  if (error) {
    return handleError({
      error: error.details[0].message,
      req,
      res,
      statusCode: 400
    })
  }

  next()
}

export { emailVerificationMiddleware }
