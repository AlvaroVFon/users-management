import {
  exceptionCodes,
  exceptionMessages
} from '../utils/enums/exceptionsEnum.js'
import HttpException from './HttpException.js'

class BadRequestException extends HttpException {
  constructor (message = exceptionMessages.BAD_REQUEST, data) {
    super(message, exceptionCodes.BAD_REQUEST, data)
  }
}

export default BadRequestException
