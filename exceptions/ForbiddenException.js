import {
  exceptionCodes,
  exceptionMessages
} from '../utils/enums/exceptionsEnum.js'
import HttpException from './HttpException.js'

class ForbiddenException extends HttpException {
  constructor (message = exceptionMessages.FORBIDDEN, data) {
    super(message, exceptionCodes.FORBIDDEN, data)
  }
}

export default ForbiddenException
