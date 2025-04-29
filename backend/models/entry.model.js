import mongoose from 'mongoose'

const entrySchema=new mongoose.Schema({
    tagline:{
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