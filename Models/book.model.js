const mongoose=require("mongoose");

const bookSchema=mongoose.Schema({
   title:{type:String, required:true},
   author:{type:String, required:true},
   category:{type:String, required:true},
   price:{type:Number},
   quantity:{type:Number}
})

const bookModel=mongoose.model("book", bookSchemaSchema);

module.exports={
    bookModel
}

// {
//     _id: ObjectId,
//     title: String,
//     author: String,
//     category: String,
//     price: Number,
//     quantity: Number
//   }
