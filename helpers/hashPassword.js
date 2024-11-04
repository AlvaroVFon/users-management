import bcrypt from 'bcrypt'

function hashPassword (password, salt = 10) {
  return bcrypt.hashSync(password, salt)
}

export { hashPassword }
