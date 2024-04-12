const express =require("express");
const router=express.Router();

module.exports=router.get("/router",(req,res)=>{
    res.status(200).json({"message":"Hello from router"})
})
