import mongoose from 'mongoose'
export const connectDB=async()=>{
<<<<<<< HEAD
    try{
    const conn=    await mongoose.connect(process.env.MONGO_URI)
    console.log("db connected successfully"+conn.connection.user);
    }catch(error){
        console.log("Error connecting db",error.message);
    }
=======
    await mongoose.connect(process.env.MONGO_URI)
    console.log("db connected successfully");
   
    
    

>>>>>>> f859783cb6e3d30e571260085a8540861c3d6e75
}