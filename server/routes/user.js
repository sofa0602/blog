import express from "express"
import { userController } from "../controllers/user.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"
import { schemaRegistration, schemaLogin } from "../validation-schemas/validation-schemas.js"
import { validation } from "../middlewares/validation.middleware.js"


const router = express.Router()

router.get('/', userController.getUsers)
router.get('/refresh', userController.refresh)
// router.get('/:id', userController.getUserOne)
router.get('/login', userController.getUser)
router.post('/registration', validation(schemaRegistration), userController.registration)
router.post('/login', validation(schemaLogin), userController.login)
router.post('/logout', userController.logout)



export default router
