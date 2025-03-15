import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from './routes/auth.router'

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

app.get('/',(req,res)=>{
    res.send('alive')
})


app.listen(port,()=>{
    console.log('Application running on port :',port)
})