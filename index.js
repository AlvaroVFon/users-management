import express from 'express'
import cors from 'cors'
import { dbConnect } from './config/mongoose.js'
import { userRouter } from './routes/user.routes.js'
import { authRouter } from './routes/auth.route.js'
import { verificationRouter } from './routes/verification.route.js'
import { loggerMiddleware } from './middlewares/LoggerMiddleware.js'
import cors from 'cors'

process.loadEnvFile()

const app = express()
const PORT = process.env.PORT

// Middlewares
app.use(express.json())
app.use(cors())
app.use(loggerMiddleware) *
  // Routes
  []
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to Alvaro's App",
  })
})

app.use('/users', userRouter)
app.use('/auth', authRouter)
app.use('/verification', verificationRouter)

// Bootstrap

async function startApp() {
  try {
    await dbConnect()
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error(error)
  }
}

startApp()
