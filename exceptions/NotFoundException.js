import {
  exceptionCodes,
  exceptionMessages
} from '../utils/enums/exceptionsEnum.js'
import HttpException from './HttpException.js'

class NotFoundException extends HttpException {
  constructor (message = exceptionMessages.NOT_FOUND, data) {
    super(message, exceptionCodes.NOT_FOUND, data)
  }
}

export default NotFoundException
