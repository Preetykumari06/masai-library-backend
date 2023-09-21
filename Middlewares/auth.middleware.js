const jwt=require('jsonwebtoken')
const {user}=require("../Models/user.model")

const auth=async(req,res,next) => {
    try{
        const token=req.headers.authorization.aplit(" ")[1];
        const decoded=jwt.verify(token,"masai");
        const user=await user.findById(decoded.userId);

        if(!user){
            throw new Error();
        }
        req.user=user;
        next();
    }catch(err){
      res.status(400).json({error:"Authentication failed"});
    }
}

module.exports={
    auth
}