const mongoose = require('mongoose');

var productschema=mongoose.Schema({
   
    Name:String,
    Category:String,
    Price:Number,
    Count:Number,
    Description:String,
    
})

var ProductModel=mongoose.model("product",productschema)
module.exports=ProductModel