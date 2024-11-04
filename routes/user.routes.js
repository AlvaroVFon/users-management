import { Router } from 'express'
import {
  create,
  findAll,
  findOne,
  update,
  remove
} from '../controllers/user.controller.js'
import { createUserValidatorMiddleware } from '../middlewares/createUserMiddleware.js'
import { paginationMiddleware } from '../middlewares/paginationMiddleware.js'
import { updateUserMiddleware } from '../middlewares/updateUserMiddleware.js'

const router = Router()

router
  .get('/', paginationMiddleware, findAll)
  .post('/', createUserValidatorMiddleware, create)
  .get('/:id', findOne)
  .patch('/:id', updateUserMiddleware, update)
  .delete('/:id', remove)

export { router as userRouter }
