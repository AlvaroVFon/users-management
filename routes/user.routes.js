import { Router } from "express"
import { create, findAll } from "../controllers/user.controller.js"

const router = Router()

router.get("/", findAll).post("/", create)

export { router as userRouter }
