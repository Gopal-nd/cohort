import type { Request,Response } from "express"
import User from "../models/Users.model"
import bcrypt from "bcryptjs"
import crypto from 'crypto'
import * as jwt from 'jsonwebtoken'
import { transporter } from "../utils/mail"
export const registerUser = async(req:Request,res:Response)=>{
    const {email, name, password} = req.body

    if(!email||!password||!name){
        return res.json({
            message:"All filed required",
            status:300
        })
    }
    //get data
    // validate

    //check if user alredy exist
    let existingUer = await User.findOne({email})

    if(existingUer){
        return res.json({
            message:"User Already Exist",
            status:300
        })
    }
    const hashPassword = await bcrypt.hash(password,10)
    //create a user in database
    const newUser = await User.create({
        email,
        name,
        password:hashPassword
    })

    
    const token  = crypto.randomBytes(32).toString('hex')
    console.log(token)
    //create a verification token
    //save token in database
    newUser.verificationToken = token
    await newUser.save()
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
          <a href="${process.env.BASE_URL}/api/v1/users/verify/${token}" 
             style="display: inline-block; padding: 10px 20px; margin: 20px 0; font-size: 16px; color: #fff; background-color: #007BFF; text-decoration: none; border-radius: 5px;">
            Verify Email
          </a>
          <p>If the button doesn't work, copy and paste the following link into your browser:</p>
          <p style="word-wrap: break-word;">
            <a href="${process.env.BASE_URL}/api/v1/users/verify/${token}">
              ${process.env.BASE_URL}/api/v1/users/verify/${token}
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


export const loginUser = async(req:Request,res:Response)=>{
    // const all = await User.find({})
    const {email, password} = req.body
    const existingUer = await User.findOne({email})


    if(!existingUer){
        return res.json({
            message:"User not Exist",
            status:300
        })
    }
    console.log(existingUer)

    const isCorrect = await bcrypt.compare(existingUer?.password,password)
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
        id:existingUer._id,role:existingUer.role
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
    const user = await User.findOne({
        verificationToken:token
    })
    if(!user){
        return res.status(400).json({
            message:"User not found"
        })
    }
    if(user.verificationToken == token){

       await user.updateOne({
            isVerified:true
        })

       await user.save()
       return res.status(200).json({
        message:"User verified sucessfully sucess"
    })
    }
    
}



