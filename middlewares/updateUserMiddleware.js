import { handleError } from '../helpers/handleError.js'
import { updateUserSchema } from '../schemas/users/updateUser.schema.js'

function updateUserMiddleware (req, res, next) {
  const { error } = updateUserSchema.validate(req.body)

  if (error) {
    return handleError({
      error: error.details.map((error) => error.message).join(', '),
      req,
      res,
      statusCode: 400
    })
  }

  next()
}

export { updateUserMiddleware }
