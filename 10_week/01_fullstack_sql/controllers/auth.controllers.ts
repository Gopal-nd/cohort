import type { Request, Response } from "express"
import { prisma } from "../lib/prisma"


export async function loginController(req:Request,res:Response) {
    res.send('login')
}
export async function registerController(req:Request,res:Response) {
    
    res.send('register')
}