import express, { type Request ,type Response} from 'express'
import { APIError } from './utils/api-error'

const app = express()

app.route('/').get((req:Request,res:Response)=>{
   res.json(new APIError({status:404,message:'Not Found'}))
})

export default app