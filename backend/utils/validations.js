import validator from 'validator'

export const validateSignupData=(req)=>{
    const {name,email,password}=req.body
    if(!name){
        return res.status(400).json({message:"Invalid name"})
    }
    else if(!validator.isEmail(email)){
        throw new Error("Email is not valid")
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Password is not strong, please enter a strong password.")
    }


}