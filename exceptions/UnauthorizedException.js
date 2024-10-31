import {
  exceptionCodes,
  exceptionsMessages
} from "../utils/enums/exceptionsEnum.js"
import HttpException from "./HttpException.js"

class UnauthorizedException extends HttpException {
  constructor(message = exceptionsMessages.UNAUTHORIZED, data) {
    super(message, exceptionCodes.UNAUTHORIZED, data)
  }
}

export default UnauthorizedException
