import { Role } from '../models/role.model.js'

class RolesService {
  async create(role) {
    await Role.create(role)
  }

  async getRoleById(id) {
    return await Role.findById(id)
  }

  async findByName(name) {
    return await Role.findOne({ name })
  }
}

export const rolesService = new RolesService()
