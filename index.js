const express=require("express");
const {connection}=require("./db")
require('dotenv').config();

const app=express();
app.use(express.json());


app.get("/",(req,res)=>{
    res.status(200).json({msg:"Welcome"});
})


app.listen(process.env.PORT, async()=>{
   try{
    await connection
    console.log("Connected to the DB.")
   }catch(error){
     console.log(error)
     console.log("Something went wrong.")
   }
    console.log(`Server is running on ${process.env.PORT}`)
})