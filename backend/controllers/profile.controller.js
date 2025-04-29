import User from "../models/user.model.js";

export const viewProfile=async (req,res)=>{

    try{
        
      
        
        const user=req.user;
      
        res.send(user)
    }catch(error){
        res.status(400).send("ERROR " + error.message);

    }

}