import type { Request, Response } from "express"
import { prisma } from "../lib/prisma"
import crypto from 'crypto'
import { transporter } from "../lib/mail"
import jwt from 'jsonwebtoken'

export async function registerController(req:Request,res:Response) {
    const {name, email, password ,age, phone,username} = req.body
    console.log(name,email,password, age)
    if(!name || !email||!password ||!age){
        return res.status(400).json({
            success:false,
            message:"All fileds are rrquired"
        })
    }
  try {
      const user = await prisma.user.findUnique({
          where:{
              email
          }
      })
      if(user){
        return res.status(500).json({
            message:"User exist "
        })
    }
  } catch (error) {
    console.log(error)
  }
  
    const hashedPassword =await hashPassword(password)
    const token  = crypto.randomBytes(32).toString('hex')
    console.log(token)
    const expire = Date.now()+ 1000 * 60 * 60 *24 
    const newUser = await prisma.user.create({
        data:{
            age,
            email,
            name,
            password:hashedPassword,
            role:'ADMIN',
            username:'ok',
            isVerified:false,
            verificationToken:token,
            verificationExpire:new Date(expire)
        }
       })
 
    
    // send token as email to user
    const mailOption = {
        from: process.env.MAIL_SENDEREMAIL, // sender address
        to: newUser.email, // list of receivers
        subject: "Verify Your Email", // Subject line
        text: `Please click on the following Link ${process.env.BASE_URL}/api/v1/users/verify/${token}`, // plain text body
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333;">Verify Your Email</h2>
          <p>Thank you for signing up! Please verify your email by clicking the button below:</p>
          <a href="${process.env.BASE_URL}/api/auth/verify/${token}" 
             style="display: inline-block; padding: 10px 20px; margin: 20px 0; font-size: 16px; color: #fff; background-color: #007BFF; text-decoration: none; border-radius: 5px;">
            Verify Email
          </a>
          <p>If the button doesn't work, copy and paste the following link into your browser:</p>
          <p style="word-wrap: break-word;">
            <a href="${process.env.BASE_URL}/api/auth/verify/${token}">
              ${process.env.BASE_URL}/api/auth/verify/${token}
            </a>
          </p>
          <p style="color: #666; font-size: 12px;">If you didn't request this, please ignore this email.</p>
        </div>
      ` // html body
      }

     await transporter.sendMail(mailOption)
    //send sucess status to user
    return res.status(200).json({
        message:"User registration sucess"
    })


    

}

export function hashPassword(password:string):Promise<string>{
    return new Promise((resolve,reject)=>{
        crypto.scrypt(password,'salt',64,(err,hash)=>{
            if(err) reject(err)
            resolve(hash.toString('hex').normalize())
        })
    })
}


export const loginController = async(req:Request,res:Response)=>{
    // const all = await User.find({})
    const {email, password} = req.body
    const existingUer = await prisma.user.findUnique({where:{email}})


    if(!existingUer){
        return res.json({
            message:"User not Exist",
            status:300
        })
    }
    console.log(existingUer)

    const hash = await hashPassword(password)
    const isCorrect = hash !==existingUer.password

    console.log(isCorrect)
    if(isCorrect){


        return res.json({
            message:"Inncoret password",
            status:300
        })
    
    }

    if(existingUer.isVerified==false){
        return res.json({
            message:"Verify email",
            status:300
        })
    }
   const token =  jwt.sign({
        id:existingUer.id,role:existingUer.role
    },"secret",{
        expiresIn:'24h',
    }
)
    const cookieOptions = {
        httpOnly:true,
          secure:true,
        maxAge:24*60*60*1000
    }
    
    res.cookie('sessionId', token,cookieOptions );
    res.status(200).json({
        message:"Login SucessFully",
        user:{
            name:existingUer.name,
           role: existingUer.role
        }
    })
}
export const VerifyUser = async(req:Request,res:Response)=>{
    const {token}= req.params
    console.log(token)
    const user = await prisma.user.findFirst({
       where:{ verificationToken:token}
    })
    if(!user){
        return res.status(400).json({
            message:"User not found"
        })
    }
    if(user.verificationToken == token){

       await prisma.user.update({
        where:{
            id:user.id
        },
        data:{
            isVerified:true
        }
       })

       
       return res.status(200).json({
        message:"User verified sucessfully sucess"
    })
    }
    
}
