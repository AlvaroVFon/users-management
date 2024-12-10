import { Router } from 'express'
import { create, findAll, remove } from '../controllers/roles.controller.js'
import { isValidTokenMiddleware } from '../middlewares/isValidTokenMiddleware.js'
import { isSuperadmin } from '../middlewares/isSuperadmin.js'
import { isValidRole } from '../middlewares/isValidRoleMiddleware.js'

const router = Router()

router
  .use(isValidTokenMiddleware)
  .get('/', [isSuperadmin], findAll)
  .post('/', [isSuperadmin, isValidRole], create)
  .delete('/:id', [isSuperadmin], remove)

export { router as rolesRouter }
