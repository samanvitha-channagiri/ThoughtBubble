import Entry from "../models/entry.model.js";

export const addEntry=async (req,res)=>{
    try{
        const {tagline,content}=req.body
        
        const userId=req.user._id;
        if(!tagline||!content){
            return res.status(400).send({message:"fields cannot be empty"})
        }

        const entry=new Entry({
           user:userId,tagline,content
        })
        const data=await entry.save()
        res.json({message:"entry added successfully",data})
    
    }catch(error){
        console.log("Error in addEntry controller :"+error.message);
        
        res.status(500).send({message:"Internal server error"})

    }
}