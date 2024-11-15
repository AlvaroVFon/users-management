import winston from 'winston'
import expressWinston from 'express-winston'
import 'colors'

function generateLogger(namespace) {
    return winston.createLogger({
        transports: new winston.transports.Console(),
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
        )
    })
}


export {generateLogger,}
