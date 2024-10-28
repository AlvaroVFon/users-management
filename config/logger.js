import winston from "winston"
import expressWinston from "express-winston"
import "colors"

function generateLogger(namespace) {
  return winston.createLogger({
    transports: new winston.transports.Console(),
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(({ timestamp, level, message }) => {
        return (
          `${timestamp} | `.green +
          ` [ level: ${level}] | `.yellow +
          ` ${namespace} | `.blue +
          ` ${message}`
        )
      })
    )
  })
}
function generateExpressLogger() {
  return expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.json()
    ),
    bodyWhitelist: ["body"]
  })
}

export { generateLogger, generateExpressLogger }
