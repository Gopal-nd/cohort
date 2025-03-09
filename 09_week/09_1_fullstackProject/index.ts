import express from 'express'
import cors from 'cors'
import { connectDB } from './utils/db'
import router from './routes/user.route'


const app = express()
const port = process.env.PORT ||4000

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:process.env.BASE_URL,
    credentials:true,
    methods:['GET','POST',"DELETE"],
    allowedHeaders:['Authorization',"Content-Type"]
}))

app.use('/api/v1/users',router)

app.get('/',(req,res)=>{
res.send('website')
})



app.listen(port,()=>{
    connectDB()
    console.log(`Running on port ${port}`)
})