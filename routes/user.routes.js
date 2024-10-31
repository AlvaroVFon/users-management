import { Router } from "express"
import { create, findAll } from "../controllers/user.controller.js"
import { createUserValidatorMiddleware } from "../middlewares/createUserMiddleware.js"
const router = Router()

router.get("/", findAll).post("/", createUserValidatorMiddleware, create)

export { router as userRouter }
