import Entry from "../models/entry.model";

export const addEntry=async (req,res)=>{
    try{
        const {tagLine,content}=req.body
        if(!tagLine||!content){
            return res.status(400).send({message:"fields cannot be empty"})
        }

        const entry=new Entry({
           tagLine,content
        })
        const data=await entry.save()
        res.json({message:"entry added successfully",data})
    
    }catch(error){
        res.status(500).send({message:"Internal server error"})

    }
}