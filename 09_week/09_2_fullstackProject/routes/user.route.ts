import express from 'express'
import { loginUser, registerUser, VerifyUser } from '../controllers/user.controle'

const router = express.Router()

router.post('/login',loginUser)
router.post('/register',registerUser)
router.get('/verify/:token',VerifyUser)



export default router