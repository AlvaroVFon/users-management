import joi from 'joi'

export const emailVerificationSchema = joi.object({
  code: joi.string().required().length(4)
})
