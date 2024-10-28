import { User } from "../models/user.model.js"

export const userService = {
  async create(data) {
    try {
      return await User.create(data)
    } catch (error) {
      throw new Error(error)
    }
  },

  async findAll() {
    try {
      await User.find()
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
  }
}
