import { createRoles } from '../factories/roles.factory.js'
import { createUsers } from '../factories/users.factory.js'

const users = [
  {
    username: 'superadmin',
    email: 'superadmin@email.com',
    password: 'superadmin',
    role: 'superadmin',
  },
  {
    username: 'admin',
    email: 'admin@email.com',
    password: 'admin',
    role: 'admin',
  },
  {
    username: 'user',
    email: 'user@email.com',
    password: 'user',
    role: 'user',
  },
]

export const seed = async () => {
  try {
    await createRoles()
    await createUsers(users)

    console.log('Seed completed')
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

seed()
