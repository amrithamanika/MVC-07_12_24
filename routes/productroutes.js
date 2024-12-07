const express = require('express')

const router=express.Router()

const {createProduct,viewProduct,deleteProduct,updateProduct}=require("../controller/productapi")


// Routes
router.post("/",createProduct);
router.get("/",viewProduct);
router.delete("/:id",deleteProduct);
router.put("/:id",updateProduct);
module.exports=router;