import { handleError } from "../helpers/handleError.js"
import { userSchema } from "../schemas/users/createUser.schema.js"

function createUserValidatorMiddleware(req, res, next) {
  const { error } = userSchema.validate(req.body)

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

export { createUserValidatorMiddleware }
