import {
  exceptionsMessages,
  exceptionCodes
} from "../utils/enums/exceptionsEnum.js"

class HttpException extends Error {
  constructor(
    message = exceptionsMessages.INTERNAL_SERVER_ERROR,
    status = exceptionCodes.INTERNAL_SERVER_ERROR,
    data
  ) {
    super(message)
    this.status = status
    this.data = data
  }
}

export default HttpException
