import { Verification } from '../models/verification.model.js'

async function findVerificationCode(email) {
  const verificationEntity = await Verification.findOne({ email }, { code: 1, _id: 0 })

  return verificationEntity ? verificationEntity.code : null
}


async function findVerificationEntity(email) {
  return Verification.findOne({ email })
}

//TODO: implement limit of 3 attempts
async function generateCode() {
  return Math.floor(1000 + Math.random() * 9000)
}

function verifyCode(code, userCode) {
  return code === userCode
}

async function create(email, code) {
  const expiresAt = new Date() + Number(process.env.VERIFICATION_TTL)
  return Verification.create({ email, code, expiresAt })
}

async function deleteVerificationCode(email) {
  return await Verification.deleteOne({ email })
}

export const verificationService = {
  findVerificationCode,
  findVerificationEntity,
  generateCode,
  verifyCode,
  create,
  deleteVerificationCode,
}
