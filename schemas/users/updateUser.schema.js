import joi from 'joi'

export const updateUserSchema = joi
  .object({
    name: joi.string(),
    email: joi.string().email(),
    password: joi.string()
  })
  .min(1)
