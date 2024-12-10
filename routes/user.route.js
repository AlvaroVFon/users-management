import { Router } from 'express'
import { create, findAll, findOne, update, remove } from '../controllers/user.controller.js'
import { createUserValidatorMiddleware } from '../middlewares/createUserMiddleware.js'
import { paginationMiddleware } from '../middlewares/paginationMiddleware.js'
import { updateUserMiddleware } from '../middlewares/updateUserMiddleware.js'
import { isValidTokenMiddleware } from '../middlewares/isValidTokenMiddleware.js'
import { isSuperadmin } from '../middlewares/isSuperadmin.js'
import { isAdmin } from '../middlewares/isAdmin.js'
import { isUserOwner } from '../middlewares/isUserOwner.js'

const router = Router()

router
  .use(isValidTokenMiddleware)
  .get('/', [isAdmin, paginationMiddleware], findAll)
  .post('/', [createUserValidatorMiddleware], create)
  .get('/:id', [isAdmin, isUserOwner], findOne)
  .patch('/:id', [isAdmin, isUserOwner, updateUserMiddleware], update)
  .delete('/:id', [isSuperadmin, isUserOwner], remove)

export { router as userRouter }
