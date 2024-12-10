import { Router } from 'express'
import { create } from '../controllers/roles.controller.js'
import { isValidTokenMiddleware } from '../middlewares/isValidTokenMiddleware.js'
import { isSuperadmin } from '../middlewares/isSuperadmin.js'
import { isValidRole } from '../middlewares/isValidRoleMiddleware.js'

const router = Router()

router.use(isValidTokenMiddleware).post('/', [isSuperadmin, isValidRole], create)

export { router as rolesRouter }
