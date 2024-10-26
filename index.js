import express from "express"
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

// Server

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})
