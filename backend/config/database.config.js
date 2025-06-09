import mongoose from 'mongoose'
export const connectDB=async()=>{
    try{
    const conn=    await mongoose.connect(process.env.MONGO_URI)
  
    }catch(error){
        console.log("Error connecting db",error.message);
    }
}