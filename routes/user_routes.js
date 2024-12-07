const express = require('express')

const router=express.Router()

const {createUser,viewUser,deleteUser,updateUser}=require("../controller/user_api")


// Routes
router.post("/",createUser);
router.get("/",viewUser);
router.delete("/:id",deleteUser);
router.put("/:id",updateUser);
module.exports=router;