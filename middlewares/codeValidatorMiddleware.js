import { codeValidator } from '../schemas/users/codeValidator.schema.js'
import { handleError } from '../helpers/handleError.js'

function codeValidatorMiddleware(req, res, next) {
  const { error } = codeValidator.validate(req.body)

  if (error) {
    return handleError({
      error: error.details[0].message,
      req,
      res,
      statusCode: 400,
    })
  }

  next()
}

export { codeValidatorMiddleware }
