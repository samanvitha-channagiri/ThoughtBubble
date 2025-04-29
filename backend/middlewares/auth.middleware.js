import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'


export const userAuth=async(req,res,next)=>{
    try{
        const token=req.cookies.token
        if(!token){
            throw new Error("Token is invalid!!")
        }
        const decoded= jwt.verify(token,process.env.JWT_SECRET)
        console.log("decoded"+decoded);
        console.log("decoded.userId"+decoded.userId);
        const user=await User.findById(decoded.userId).select("-password")
        if(!user){
            throw new Error("user not found")
        }

        req.user=user
        next();
    }catch(error){
        
        
        res.status(500).send("Internal server error")
    }

}