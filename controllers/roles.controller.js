import { rolesService } from '../services/roles.service.js'
import { handleResponse } from '../helpers/handleResponse.js'
import { handleError } from '../helpers/handleError.js'
import NotFoundException from '../exceptions/NotFoundException.js'

async function create(req, res) {
  try {
    const role = await rolesService.create(req.body)
    return handleResponse({ req, res, data: role, statusCode: 201 })
  } catch (error) {
    handleError({ error: error.message, req, res, statusCode: error.status })
  }
}

async function findAll(req, res) {
  try {
    const roles = await rolesService.findAll()
    return handleResponse({ req, res, data: roles })
  } catch (error) {
    handleError({ error: error.message, req, res, statusCode: error.status })
  }
}

async function remove(req, res) {
  try {
    const role = await rolesService.delete(req.params.id)

    if (!role) {
      throw new NotFoundException('Role not found')
    }

    return handleResponse({ req, res, data: role })
  } catch (error) {
    handleError({ error: error.message, req, res, statusCode: error.status })
  }
}

export { create, findAll, remove }
