const express=require("express");
const {bookModel}=require("../Models/book.model")
const bookRouter=express.Router();
const jwt=require('jsonwebtoken');

// add
bookRouter.post("/api/books", async(req,res) => {
    try{
        const book=new bookModel(req.body)
        await book.save()
        res.status(201).json({msg:"Book added", "addedBook":req.body})
    }catch(err){
       res.status(400).json({"error":err.message})
    }
});

// all book
bookRouter.get("/api/books", async(req,res) => {
    try{
        const books=await bookModel.find();
        res.status(200).json({msg:"All the books present in the database.",books})
    }catch(err){
        res.status(400).json({"error":err.message})
    }
})

// book by id
bookRouter.get("/api/books/:id", async(req,res) => {
    const {id}=req.params;
    try{
        const books=await bookModel.find({_id:id},req.body);
        res.status(200).json({msg:"Specific book present in the database.",books})
    }catch(err){
        res.status(400).json({"error":err.message})
    }
})

// book update by id
bookRouter.patch("/api/books/:id", async(req,res) => {
    const {id}=req.params;
    try{
        await bookModel.findByIdAndUpdate({_id:id},req.body);
        res.status(204).json({msg:"Book has been updated."})
    }catch(err){
        res.status(400).json({"error":err.message})
    }
})

// book delete by id
bookRouter.delete("/api/books/:id", async(req,res) => {
    const {id}=req.params;
    try{
        await bookModel.findByIdAndDelete({_id:id},req.body);
        res.status(202).json({msg:"Book has been deleted."})
    }catch(err){
        res.status(400).json({"error":err.message})
    }
})



module.exports={
    bookRouter
}


// "title":"Harry potter",
// "author": "XYZ",
// "category":"Thriller",
//   "price": 300,
//   "quantity": 1