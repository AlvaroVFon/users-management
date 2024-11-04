import {
  exceptionMessages,
  exceptionCodes
} from '../utils/enums/exceptionsEnum.js'

class HttpException extends Error {
  constructor (
    message = exceptionMessages.INTERNAL_SERVER_ERROR,
    status = exceptionCodes.INTERNAL_SERVER_ERROR,
    data
  ) {
    super(message)
    this.status = status
    this.data = data
  }
}

export default HttpException
