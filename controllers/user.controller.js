import { userService } from "../services/user.service.js"
import { handleResponse } from "../helpers/handleResponse.js"
import { handleError } from "../helpers/handleError.js"
import NotFoundException from "../exceptions/NotFoundException.js"
import BadRequestException from "../exceptions/BadRequestException.js"

async function create(req, res) {
  try {
    const user = await userService.findByEmail(req.body.email)

    if (user) {
      throw new BadRequestException("User already exists")
    }

    const newUser = await userService.create(req.body)

    return handleResponse({ req, res, data: newUser, statusCode: 201 })
  } catch (error) {
    return handleError({
      error: error.message || error,
      req,
      res,
      statusCode: error.status || 500
    })
  }
}

async function findAll(req, res) {
  try {
    const { page, limit, skip } = req.pagination
    const { users, totalPages } = await userService.findAll({ limit, skip })
    return handleResponse({
      req,
      res,
      data: {
        users: users.map((user) => user.toPublicObject()),
        totalPages,
        page,
        limit
      },
      statusCode: 200
    })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

async function findOne(req, res) {
  try {
    const user = await userService.findById(req.params.id)

    if (!user) {
      throw new NotFoundException("User not found")
    }

    return handleResponse({
      req,
      res,
      data: user.toPublicObject(),
      statusCode: 200
    })
  } catch (error) {
    return handleError({
      error: error.message || error,
      req,
      res,
      statusCode: error.status || 500
    })
  }
}

async function update(req, res) {
  try {
    const user = await userService.findById(req.params.id)

    if (!user) {
      throw new NotFoundException("User not found")
    }

    const updatedUser = await userService.update(req.params.id, req.body)

    return handleResponse({
      req,
      res,
      data: updatedUser,
      statusCode: 200
    })
  } catch (error) {
    return handleError({
      error: error.message || error,
      req,
      res,
      statusCode: error.status || 500
    })
  }
}
export { create, findAll, findOne, update }
