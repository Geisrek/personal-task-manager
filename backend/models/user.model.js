const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const tasksSchema=new mongoose.Schema({
    tag:{
        type:String,
       
    },
    description:{
        type:String,
        default:"start",
        enum:["Start","In progress","done"]
    },
    file:{
        type:String,
        default:"start",
        enum:["Start","In progress","done"]
    }
})
const columnSchema=new mongoose.Schema({
    col_name:{
        type:String,
        
    },
    tasks:{
        type:[tasksSchema],
        default:[]
    }
})
const userSchema=new mongoose.Schema({
    firstName:{
        require:"firstname required",
        type:String
    },
    lastName:{
        require:"lastname required",
        type:String
    },
    email:{
        require:"email required",
        type:String,
        
    },
    password:{
        require:"password required",
        type:String
    },
    column:{
        type:[columnSchema],
    default:[]}
})
const User = mongoose.model("User", userSchema);

module.exports = User;