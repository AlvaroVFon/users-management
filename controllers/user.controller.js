import { userService } from "../services/user.service.js"
import { handleResponse } from "../helpers/handleResponse.js"
import { handleError } from "../helpers/handleError.js"

async function create(req, res) {
  try {
    const user = await userService.findByEmail(req.body.email)
    if (user) {
      return handleError({
        error: "User already exists",
        req,
        res,
        statusCode: 400
      })
    }

    const newUser = await userService.create(req.body)

    handleResponse({ req, res, data: newUser, statusCode: 201 })
  } catch (error) {
    return res
      .status(error.statusCode || 500)
      .json({ error: error.message || error })
  }
}

async function findAll(req, res) {
  try {
    return await userService.findAll()
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

export { create, findAll }
