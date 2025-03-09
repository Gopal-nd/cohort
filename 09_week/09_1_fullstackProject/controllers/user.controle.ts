import type { Request,Response } from "express"
export const registerUser = async(req:Request,res:Response)=>{
    res.send('registerUser')
}

export const loginUser = async(req:Request,res:Response)=>{
    res.send('login')
}



