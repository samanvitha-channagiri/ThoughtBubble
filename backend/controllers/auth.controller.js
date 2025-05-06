import User from "../models/user.model.js";
import { hashPassword } from "../utils/password.js";
import jwt from 'jsonwebtoken'
import bcrypt from'bcrypt'
import { validateSignupData } from "../utils/validations.js";
export const signup=async(req,res)=>{
    const {name,email,password}=req.body
   
    
    try{
        validateSignupData(req);
        if(!name||!email||!password){
           return res.status(400).json({message:"Enter all the fields"})
        }
    const hashedPassword=await hashPassword(password)

      const doesEmailExist= await User.findOne({email});
   

     if(doesEmailExist){
        return res.status(400).json({message:"Email already exists",data:email})

    }
    const newUser=new User({name,email,password:hashedPassword})
   
   
  
    
    return  res.json({userId:data._id,name:data.name,email:data.email})

    }catch(error){
        console.log("Error in signup controller: ",error.message);
        
       return res.status(500).json({message:"Internal server error"})

    }
}

export const login=async(req,res)=>{
    const {email,password}=req.body
    try{
       const  data=await User.findOne({email})
        if(!data){
           return  res.status(400).json({message:"Invalid credentials"})
        }
        const isCorrectPassword=await bcrypt.compare(password,data.password)
        if(!isCorrectPassword){
           return res.status(400).json({message:"Invalid credentials"})
        }
        console.log("data._id",data._id);
        
       const  userId=data._id

        const token= jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'1d'})
        res.cookie('token', token, {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),  // 1 day
            httpOnly: true,
            sameSite:"strict",
            secure:process.env.NODE_ENV!='development'
          });
          return res.json({message:"User logged in successfully",data:email})
    }catch(error){
        console.log("Error in login controller",error.message);
        
      return   res.status(500).json({message:"Internal server error"})

    }
}

export const logout=async (req,res)=>{
    res.clearCookie('token')
    res.json({message:"User loggedout successfully"})

}