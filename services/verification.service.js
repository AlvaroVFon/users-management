import { Verification } from "../models/verification.model.js"

async function findVerificationCode(email) {
  return await Verification.findOne({ email })
}

async function generateCode() {
  return Math.floor(1000 + Math.random() * 9000)
}

async function verifyCode(code, userCode) {
  //TODO: Implement a time-based verification code===userCode && code.expiresAt > new Date()
  return code === userCode
}

async function create(email, code) {
  const expiresAt = new Date() + process.env.VERIFICATION_TTL
  return Verification.create({ email, code, expiresAt })
}

async function deleteVerificationCode(email) {
  return Verification.deleteOne({ email })
}

export const verificationService = {
  findVerificationCode,
  generateCode,
  verifyCode,
  create,
  deleteVerificationCode
}
