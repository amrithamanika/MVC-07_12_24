const Product=require("../model/product")

// api to add
const createProduct=async(req,res)=>{
    try {
        await Product(req.body).save()
        res.send({message:"data added"})
    } catch (error) {
        console.log(error);
    }
}

// api to view
const viewProduct=async(req,res)=>{
    try {
       const data= await Product.find()
        res.send({data})
    } catch (error) {
        console.log(error);
    }
}

// api to delete
const deleteProduct=async(req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.send({message:"Data deleted"})
    } catch (error) {
        console.log(error);
    }
}

// api to update
const updateProduct=async(req,res)=>{
    try {
       const update= await Product.findByIdAndUpdate(req.params.id,req.body)
        res.send({message:"Data Updated!"})
    } catch (error) {
        console.log(error);
    }
}
module.exports={createProduct,viewProduct,deleteProduct,updateProduct}
