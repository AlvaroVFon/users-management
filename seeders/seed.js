import { createRoles } from '../factories/roles.factory.js'
import { createUsers } from '../factories/users.factory.js'
import { hashPassword } from '../helpers/hashPassword.js'

const users = [
  {
    name: 'superadmin',
    email: 'superadmin@email.com',
    password: hashPassword('superadmin'),
    role: 'superadmin',
    isVerified: true,
    loginAttempts: 0,
    lockUntil: 0,
    createAt: new Date(),
    updateAt: null,
  },
  {
    name: 'admin',
    email: 'admin@email.com',
    password: hashPassword('admin'),
    role: 'admin',
    isVerified: true,
    loginAttempts: 0,
    lockUntil: 0,
    createAt: new Date(),
    updateAt: null,
  },
  {
    name: 'user',
    email: 'user@email.com',
    password: hashPassword('user'),
    role: 'user',
    isVerified: true,
    loginAttempts: 0,
    lockUntil: 0,
    createAt: new Date(),
    updateAt: null,
  },
]

const seed = async () => {
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
