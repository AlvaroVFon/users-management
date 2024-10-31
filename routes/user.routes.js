import { Router } from "express"
import { create, findAll } from "../controllers/user.controller.js"
import { createUserValidatorMiddleware } from "../middlewares/createUserMiddleware.js"
import { paginationMiddleware } from "../middlewares/paginationMiddleware.js"
const router = Router()

router
  .get("/", paginationMiddleware, findAll)
  .post("/", createUserValidatorMiddleware, create)

export { router as userRouter }
