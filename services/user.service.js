import { User } from '../models/user.model.js'
import { hashPassword } from '../helpers/hashPassword.js'

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
  },

  async update(id, data) {
    if (data.password) {
      data.password = hashPassword(data.password)
    }

    return await User.findByIdAndUpdate(id, data)
  },

  async delete(id) {
    return await User.findByIdAndDelete(id)
  },

  async verifyUser(email) {
    return await User.findOneAndUpdate({ email }, { isVerified: true })
  },

  async isVerified(email) {
    const user = await User.findOne({ email })
    return user.isVerified
  },

  async incrementLoginAttempts(email) {
    return await User.findOne({ email }).updateOne({ $inc: { loginAttempts: 1 } })
  },

  async resetLoginAttempts(email) {
    return await User.findOne({ email }).updateOne({ loginAttempts: 0 })
  },

  async lockAccount(email) {
    return await User.findByIdAndUpdate({ email }, { lockUntil: Date.now() + process.env.LOCK_TIMEOUT })
  },
}
