import { Router } from "express"
import { create, findAll, findOne } from "../controllers/user.controller.js"
import { createUserValidatorMiddleware } from "../middlewares/createUserMiddleware.js"
import { paginationMiddleware } from "../middlewares/paginationMiddleware.js"
const router = Router()

router
  .get("/", paginationMiddleware, findAll)
  .post("/", createUserValidatorMiddleware, create)
  .get("/:id", findOne)

export { router as userRouter }
