import joi from 'joi'

export const userSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  role: joi.string(),
  isVerified: joi.boolean(),
  createdAt: joi.date(),
  updatedAt: joi.date()
})
