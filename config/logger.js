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

    dynamicMeta: (req, res) => {
      const { password, ...reqBody } = req.body

      return {
        responseTime: res.responseTime,
        req: {
          headers: req.headers,
          body: reqBody
        },
        res: {
          statusCode: res.statusCode
        }
      }
    }
  })
}

export { generateLogger, generateExpressLogger }
