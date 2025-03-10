import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExprires: {
        type: String
    }

}, { timestamps: true })

userShema.pre("save",async function (next){
    // do some thing
    // if(this.isModified('password')){
    //     this.password =await bcrypt.hash(this.password,10)
    // }
    next()
})

const User = mongoose.model('User', userShema)

export default User