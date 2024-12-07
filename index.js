// importing
const express = require('express')
const dotenv=require('dotenv')
const Productroutes=require("./routes/productroutes")
const User_routes=require("./routes/user_routes")

// intializing
const app=express()
dotenv.config()
require("./config/database")


// mid
app.use(express.json());

// useroutes
app.use("/api/products",Productroutes)
app.use("/api/user",User_routes)

// port setting
const PORT =process.env.PORT

app.listen(PORT,()=>{
    console.log(`port is running ${PORT}`);
});