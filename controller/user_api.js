const User=require("../model/user")

// api to add
const createUser=async(req,res)=>{
    try {
        await User(req.body).save()
        res.send({message:"data added"})
    } catch (error) {
        console.log(error);
    }
}

// api to view
const viewUser=async(req,res)=>{
    try {
       const data= await User.find()
        res.send({data})
    } catch (error) {
        console.log(error);
    }
}


// api to delete
const deleteUser=async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.send({message:"Data deleted"})
    } catch (error) {
        console.log(error);
    }
}

// api to update
const updateUser=async(req,res)=>{
    try {
       const update= await User.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"Data Updated!"})
    } catch (error) {
        console.log(error);
    }
}




module.exports={createUser,viewUser,deleteUser,updateUser}