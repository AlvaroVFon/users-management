import { userService } from "../services/user.service.js"

async function create(req, res) {
  try {
    const user = await userService.create(req.body)
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

async function findAll(req, res) {
  try {
    const users = await userService.findAll()
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { create, findAll }
