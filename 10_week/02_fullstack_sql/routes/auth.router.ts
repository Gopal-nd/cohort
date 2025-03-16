import express from'express'


import { loginController, registerController, VerifyUser } from '../controllers/auth.controllers'
const router = express.Router()

router.post('/login',loginController)
router.post('/register',registerController)
router.get('/verify/:token',VerifyUser)

export default router