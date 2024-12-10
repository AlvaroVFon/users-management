import { Role } from '../models/role.model.js'

export const rolesService = {
  async create(role) {
    return await Role.create(role)
  },

  async findAll() {
    return await Role.find()
  },

  async findOne(id) {
    return await Role.findById(id)
  },

  async findOneByName(name) {
    return await Role.findOne({ name })
  },

  async delete(id) {
    return await Role.findByIdAndDelete(id)
  },
}
