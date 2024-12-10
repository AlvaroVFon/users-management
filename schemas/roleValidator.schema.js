import Joi from 'joi'
import { RolesEnum } from '../utils/enums/rolesEnum.js'

export const roleValidator = Joi.object({
  name: Joi.string()
    .valid(...RolesEnum)
    .required(),
})
