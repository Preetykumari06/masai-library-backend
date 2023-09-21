const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
   name:{type:String, required:true},
   email:{type:String, required:true},
   password:{type:String, required:true},
   isAdmin:{type:Boolean}
})

const userModel=mongoose.model("user", userSchema);

module.exports={
    userModel
}

//  {
//   _id: ObjectId,
//   name: String,
//   email: String,
//   password: String,
//   isAdmin: Boolean
// }

// "name":"Preety",
// "email":"preety123@gmail.com",
// "password":"preety",
// "isAdmin":true