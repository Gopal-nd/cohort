import express from'express'


import { loginController, registerController } from '../controllers/auth.controllers'
const router = express.Router()

router.post('/login',loginController)
router.post('/register',registerController)

export default router