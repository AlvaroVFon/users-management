import {
  exceptionCodes,
  exceptionsMessages
} from "../utils/enums/exceptionsEnum.js"
import HttpException from "./HttpException.js"

class ForbiddenException extends HttpException {
  constructor(message = exceptionsMessages.FORBIDDEN, data) {
    super(message, exceptionCodes.FORBIDDEN, data)
  }
}

export default ForbiddenException
