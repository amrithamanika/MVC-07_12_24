const mongoose = require('mongoose');

var Userschema=mongoose.Schema({
   
    Name:String,
    Age:Number,
    Phone:Number,
    City:String,
    
})

var UserModel=mongoose.model("user",Userschema)
module.exports=UserModel