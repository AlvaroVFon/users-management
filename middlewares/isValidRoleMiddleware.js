import { rolesService } from '../services/roles.service.js'
import { roleValidator } from '../schemas/roleValidator.schema.js'
import { handleError } from '../helpers/handleError.js'
import BadRequestException from '../exceptions/BadRequestException.js'

async function isValidRole(req, res, next) {
  const { error } = roleValidator.validate(req.body)

  if (error) {
    return handleError({ error: error.details[0].message, req, res, statusCode: 400 })
  }

  try {
    const { name } = req.body
    const role = await rolesService.findOneByName(name)

    if (role) {
      throw new BadRequestException('Role already exists')
    }
  } catch (error) {
    return handleError({ error: error.message, req, res, statusCode: error.status })
  }

  next()
}

export { isValidRole }
