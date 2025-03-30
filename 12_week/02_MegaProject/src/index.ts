import app from "./app";
import { connectDB } from "./db/connectDB";

const port = process.env.PORT || 3000





connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    })
})