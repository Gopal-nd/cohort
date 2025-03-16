import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from './routes/auth.router'
import { authMiddleware } from './middleware/auth'
import { getMeController, logoutController } from './controllers/auth.controllers'

const port =process.env.PORT||5000
const app = express()

app.use(cors())
app.use(cookieParser())
app.use(cors({
    origin:'*'
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/auth',authRoutes)
app.get("/api/me", authMiddleware, getMeController);

// Logout route (you can protect this if desired)
app.post("/api/logout", logoutController);

app.get('/',(req,res)=>{
    res.send('alive')
})


app.listen(port,()=>{
    console.log('Application running on port :',port)
})