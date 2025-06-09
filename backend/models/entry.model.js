import mongoose from 'mongoose'

const entrySchema=new mongoose.Schema({
<<<<<<< HEAD
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    tagLine:{
=======
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tagline:{
>>>>>>> f859783cb6e3d30e571260085a8540861c3d6e75
        type:String,
        required:true,
        maxLength:100
    },
    content:{
        type:String,
        required:true,
        minLength:5
    }
},{timestamps:true})

const Entry=mongoose.model('Entry',entrySchema)
export default Entry