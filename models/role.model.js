import { Schema, model } from 'mongoose'
import { RolesEnum } from '../utils/enums/rolesEnum.js'

const roleSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    enum: RolesEnum,
  },
})

export const Role = model('Role', roleSchema)
