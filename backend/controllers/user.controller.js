const userModel=require('../models/user.model')
const addUser=async(req,res)=>{
    try{
     
     // const New_user=await userModel.create({firstName:"Rafik",lastName:"Hijazy",email:"Rafik@example.com",password:"Apocalypse55"});
      const user=await userModel.findOne({firstName:"Rafik"});
      res.status(200).json({user:user})
    }catch(err){
        console.log(err)
    }
}
module.exports=addUser