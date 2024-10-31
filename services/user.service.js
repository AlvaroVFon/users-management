import { User } from "../models/user.model.js"
import { hashPassword } from "../helpers/hashPassword.js"

export const userService = {
  async create(data) {
    data.password = hashPassword(data.password)
    return await User.create(data)
  },

  async findAll() {
    try {
      return await User.find()
    } catch (error) {
      throw new Error(error)
    }
  },

  async findById(id) {
    try {
      return await User.findById(id)
    } catch (error) {
      throw new Error(error)
    }
  },

  async findByEmail(email) {
    return await User.findOne({ email })
  }
}
