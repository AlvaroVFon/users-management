import { Schema, model } from 'mongoose'
import { RolesEnum } from '../utils/enums/rolesEnum.js'

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: RolesEnum,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    loginAttempts: {
      type: Number,
      default: 0,
    },

    lockUntil: {
      type: Date,
      default: 0,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },

    updatedAt: {
      type: Date,
      default: null,
    },
  },
  {
    methods: {
      toPublicObject() {
        return {
          id: this._id,
          name: this.name,
          email: this.email,
          role: this.role,
          isVerified: this.isVerified,
          createdAt: this.createdAt,
          updatedAt: this.updatedAt,
        }
      },
    },
  },
)

export const User = model('User', userSchema)
