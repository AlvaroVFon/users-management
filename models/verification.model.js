import { Schema, model } from 'mongoose'

const VerificationSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
  },

  expiresAt: {
    type: Date,
    required: true,
  },
})

export const Verification = model('Verification', VerificationSchema)
