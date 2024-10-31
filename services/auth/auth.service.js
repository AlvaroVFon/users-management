import jsonwebtoken from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { userService } from '../user.service.js'
process.loadEnvFile()

export const authService = {
    async login({ email, password }) {
        const user = await userService.findByEmail(email)

        if (!user) {
            throw new Error({ message: 'User not found', statusCode: 404 })
        }

        const isValidPassword = this.verifyPassword({ user, password })

        if (!isValidPassword) {
            throw new Error({ message: 'Invalid credentials', statusCode: 401 })
        }

        const token = this.generateToken({ payload: user })

        return { token }
    },

    verifyPassword({ user, password }) {
        return bcrypt.compareSync(password, user.password)
    },

    generateToken({ payload }) {
        return jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '3h',
        })
    },
}
