const express=require("express");
const {orderModel}=require("../Models/order.model")
const orderRouter=express.Router();



orderRouter.post("/api/order", async(req,res) => {
    const {user,books}=req.body;
    if(!user || !books) return res.send({msg: "Please provide the User and Books ID (user, books)"})

    try{
        let order=new orderModel(req.body)
        await order.save()
        res.status(201).json({msg:"Order successfully", "order":req.body})
    }catch(err){
        res.status(400).json({"error":err.message})
    }
})


orderRouter.get("/api/orders", async(req,res) => {
    try{
        let orderData=await orderModel.find().populate('user').populate('books')
        res.status(200).send({orderData})
    }catch(err){
        res.status(400).json({"error":err.message})
    }
})


module.exports={
    orderRouter
}

