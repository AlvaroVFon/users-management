import express from "express"
import { generateLogger } from "./config/logger.js"
process.loadEnvFile()

const app = express()
const PORT = process.env.PORT
const logger = generateLogger(import.meta.filename)

// Middlewares

app.use(express.json())

// Routes

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Alvaro's App"
  })
})

// Server

try {
  app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)
  })
} catch (error) {
  logger.error(error)
}
