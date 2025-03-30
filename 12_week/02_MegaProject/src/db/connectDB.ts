import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI!)
        console.log('database connected')
    } catch (error) {
        console.error('error is connection of database => ',error)
        process.exit(1)
    }
}