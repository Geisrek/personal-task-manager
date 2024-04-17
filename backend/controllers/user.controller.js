const userModel=require('../models/user.model')
const addUser=async(req,res)=>{
    try{
     
     // const New_user=await userModel.create({firstName:"Rafik",lastName:"Hijazy",email:"Rafik@example.com",password:"Apocalypse55"});
      const user=await userModel.findOne({firstName:"Rafik"});
      if(user){
        return res.status(500).json({
            status:"failed",
            message:"user already exist"
        })
      
      }
      else{
        user.create(req.body)
        return res.status(201).json({
            status:"success",
            message:"user created successfully"
        })
    }
    }catch(err){
        console.log(err)
    }
}
module.exports=addUser