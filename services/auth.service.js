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

    if (user.lockUntil && user.lockUntil > Date.now()) {
      throw new UnauthorizedException('Account locked, try again later')
    }

    if (this.loginAttemptsReached({ user })) {
      await this.resetLoginAttempts({ user })
      await this.blockAccount({ user })
      throw new UnauthorizedException('Max login attempts reached')
    }

    if (!isValidPassword) {
      await this.increaseLoginAttempts({ user })
      throw new UnauthorizedException('Invalid credentials')
    }

    await this.resetLoginAttempts({ user })
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

  async increaseLoginAttempts({ user }) {
    return await userService.update(user.id, { loginAttempts: user.loginAttempts + 1 })
  },

  async resetLoginAttempts({ user }) {
    return await userService.update(user.id, { loginAttempts: 0 })
  },

  async blockAccount({ user }) {
    return await userService.update(user.id, { lockUntil: Date.now() + Number(process.env.LOCK_TIME) })
  },
}
