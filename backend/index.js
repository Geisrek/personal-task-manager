const express=require("express")
const{connect}=require("./config/db.configs")
require("dotenv").config();
const app=express();
const {USER_ROLE}=require("./units/USERS_ROLES_ENUMS");

const userRout=require("./routes/user.routs")
app.use(express.json());
app.use("/",userRout)
app.listen(3000,(req,res)=>{
    console.log("listen on http://localhost:3000")
    connect()
})