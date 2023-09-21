const express=require("express");
const {userModel}=require("../Models/user.model");
const userRouter=express.Router();
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

userRouter.post("/api/register", async (req,res)=>{
  const {name,email,password,isAdmin}=req.body;
  try{
    bcrypt.hash(password, 5, async (err,hash) => {
        if(err){
            res.status(400).json({error:err.message})
        } else {
            const user=new userModel({name,email,password:hash,isAdmin})
            await user.save();
        }
    })
    res.status(201).json({"msg":"The new user has ben registered", "registeredUser":req.body})
  }catch(err){
   if(err.code===11000){
    return res.status(400).json({"error":"User with the same email already exists."})
   }
   res.status(400).json({"error":err.message})
  }
})


userRouter.post("/api/login", async(req,res)=>{
  const {email,password}=req.body;
  try{
    const user=await userModel.findOne({email})
    if(user){
        bcrypt.compare(password, user.password, (err,result) => {
            if(result){
                var token=jwt.sign({course:'backend'}, 'masai', {expiresIn:'2m'})
                res.status(201).json({"msg":"Login successfulLy", "token":token})
            } else {
                res.status(400).json({"error":err.message})
            }
        })
    } else {
        res.status(200).json({"msg":"user not found"})
    }
  }catch(err){
    res.status(400).json({"error":err.message})
  }  
})


module.exports={
  userRouter
}