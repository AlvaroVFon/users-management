import { createRoles } from '../factories/roles.factory.js'
import { createUsers } from '../factories/users.factory.js'
import { hashPassword } from '../helpers/hashPassword.js'

const users = [
  {
    username: 'superadmin',
    email: 'superadmin@email.com',
    password: hashPassword('superadmin'),
    role: 'superadmin',
  },
  {
    username: 'admin',
    email: 'admin@email.com',
    password: hashPassword('admin'),
    role: 'admin',
  },
  {
    username: 'user',
    email: 'user@email.com',
    password: hashPassword('user'),
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
