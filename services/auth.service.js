import jsonwebtoken from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { userService } from './user.service.js'
import UnauthorizedException from '../exceptions/UnauthorizedException.js'

export const authService = {
  async login({ email, password }) {
    const user = await userService.findByEmail(email)

    if (!user) {
      throw new UnauthorizedException('Invalid credentials')
    }

    const isValidPassword = this.verifyPassword({ user, password })
    console.log(user.id)
    if (!isValidPassword) {
      await userService.update(user.id, { loginAttemps: user.loginAttemps + 1 })
      throw new UnauthorizedException('Invalid credentials')
    }

    console.log(user)

    const token = this.generateToken({ payload: user })

    return { token }
  },

  verifyPassword({ user, password }) {
    return bcrypt.compareSync(password, user.password)
  },

  generateToken({ payload }) {
    return jsonwebtoken.sign(JSON.stringify(payload), process.env.JWT_SECRET)
  },

  verifyToken({ token }) {
    return jsonwebtoken.verify(token, process.env.JWT_SECRET)
  },

  loginAttemptsReached({ user }) {
    return user.loginAttempts >= process.env.MAX_LOGIN_ATTEMPTS
  },
}
