import { rolesService } from '../services/roles.service.js'
import { handleResponse } from '../helpers/handleResponse.js'
import { handleError } from '../helpers/handleError.js'

async function create(req, res) {
  try {
    const role = await rolesService.create(req.body)
    return handleResponse({ req, res, data: role, statusCode: 201 })
  } catch (error) {
    handleError({ error: error.message, req, res, statusCode: error.status })
  }
}

export { create }
