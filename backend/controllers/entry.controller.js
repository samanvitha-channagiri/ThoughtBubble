import Entry from "../models/entry.model.js";

export const addEntry=async (req,res)=>{
    try{
        const {tagLine,content}=req.body
        if(!tagLine||!content){
            return res.status(400).send({message:"fields cannot be empty"})
        }

        const entry=new Entry({
           user:req.user._id,tagLine,content
        })
        const data=await entry.save()
        res.json({message:"entry added successfully",data})
    
    }catch(error){
        console.log("Error while adding the entry in addEntry controller"+error.message);
        
        res.status(500).send({message:"Internal server error"})

    }
}
export const getAllEntries=async (req,res)=>{
    try{
        const user=req.user
        const allEntries=await Entry.find({user:user._id})
        if(!allEntries){
            return res.message("No entries found!");

        }
        return res.json({message:"All the enteries",data:allEntries})
        

    }catch(error){

        res.status(500).send({message:"Internal server error"})

    }
}