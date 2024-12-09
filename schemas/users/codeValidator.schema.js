import joi from 'joi'

export const codeValidator = joi.object({
  code: joi.string().required().length(4),
})
