import { type Request,type Response,type NextFunction, request } from "express"

export const asyncHandler = (requestHandler:any) =>{
    return (req:Request,res:Request,next:NextFunction)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
}
