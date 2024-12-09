import { RolesEnum } from '../utils/enums/rolesEnum.js'
import { dbConnect } from '../config/database.js'

const db = await dbConnect()

export const createRoles = async () => {
  const roles = RolesEnum.map((role) => ({
    name: role,
  }))

  await db.collection('roles').drop()
  await db.collection('roles').insertMany(roles)
  console.log('Roles created')
}
