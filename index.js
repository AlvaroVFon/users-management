import express from "express"
import { dbConnect } from "./config/mongoose.js"
import { userRouter } from "./routes/user.routes.js"
process.loadEnvFile()

const app = express()
const PORT = process.env.PORT

// Middlewares

app.use(express.json())
// Routes

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Alvaro's App"
  })
})

app.use("/users", userRouter)

async function startApp() {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
    await dbConnect()
  } catch (error) {
    console.error(error)
  }
}

startApp()
