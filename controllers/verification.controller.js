import { handleError } from "../helpers/handleError.js"
import { handleResponse } from "../helpers/handleResponse.js"
import { verificationService } from "../services/verification.service.js"
// import { mailService } from "../services/mail.service.js"
import BadRequestException from "../exceptions/BadRequestException.js"
import { userService } from "../services/user.service.js"

async function sendVerificationEmail(req, res) {
  try {
    const { email } = req.user

    if (!email) {
      throw new BadRequestException("Email is required")
    }

    const isUserVerified = await userService.isVerified(email)

    if (isUserVerified) {
      throw new BadRequestException("User is already verified")
    }

    const code = await verificationService.generateCode()

    await verificationService.create(email, code)

    // const mailContent = {
    //   email,
    //   subject: "Verification code",
    //   text: `Your verification code is ${code}`
    // }

    // await mailService.sendMail(mailContent)

    return handleResponse({
      req,
      res,
      data: { code },
      statusCode: 200
    })
  } catch (error) {
    return handleError({
      error: error.message,
      req,
      res,
      statusCode: error.status
    })
  }
}

async function verifyCode(req, res) {
  try {
    const { code } = req.body
    const { email } = req.user

    const userCode = await verificationService.findVerificationCode(email)

    if (!userCode) {
      throw new BadRequestException("Verification code not found")
    }

    const isCodeValid = verificationService.verifyCode(userCode, code)

    if (!isCodeValid) {
      throw new BadRequestException("Invalid code")
    }

    await userService.verifyUser(email)

    await verificationService.deleteVerificationCode(email)

    return handleResponse({
      req,
      res,
      data: { message: "User verified" },
      statusCode: 200
    })
  } catch (error) {
    return handleError({
      error: error.message,
      req,
      res,
      statusCode: error.status
    })
  }
}

export { sendVerificationEmail, verifyCode }
