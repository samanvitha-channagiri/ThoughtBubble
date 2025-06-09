import mongoose from 'mongoose'

const entrySchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    tagLine:{
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