import {
  exceptionCodes,
  exceptionMessages
} from '../utils/enums/exceptionsEnum.js'
import HttpException from './HttpException.js'

class UnauthorizedException extends HttpException {
  constructor (message = exceptionMessages.UNAUTHORIZED, data) {
    super(message, exceptionCodes.UNAUTHORIZED, data)
  }
}

export default UnauthorizedException
