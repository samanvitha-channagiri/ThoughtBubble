import mongoose from 'mongoose'
import validator from 'validator'
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:4,
        maxLength:50

    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        // validate(value){
        //     if(!validator.isEmail(value)){
        //         throw new Error("Invalid email address "+value)
        //     }
        // }

    },
    password:{
        type:String,
        required:true,
    //     validate(value){
    //     if(!validator.isStrongPassword(value)){
    //         throw new Error("Enter a stronger password, it should include atleast one Uppercase letter and a symbol ")
    //     }
    // }
    }

},{timestamps:true})

const User=mongoose.model('User',userSchema)
export default User
