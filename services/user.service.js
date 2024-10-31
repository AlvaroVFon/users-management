import { User } from "../models/user.model.js"
import { hashPassword } from "../helpers/hashPassword.js"

export const userService = {
  async create(data) {
    data.password = hashPassword(data.password)
    return await User.create(data)
  },

  async findAll({ limit, skip }) {
    try {
      const total = await User.countDocuments()
      const totalPages = Math.ceil(total / limit)
      const users = await User.find().skip(skip).limit(limit)

      return { users, totalPages }
    } catch (error) {
      throw new Error(error)
    }
  },

  async findById(id) {
    return await User.findById(id)
  },

  async findByEmail(email) {
    return await User.findOne({ email })
  }
}
