const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const tasksSchema=new mongoose.Schema({
    tag:{
        type:String,
        default:"start",
        enum:["Start","In progress","done"]
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
const userSchema=new mongoose({
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
    tasks:{
        type:[tasksSchema],
    default:[]}
})
const User = mongoose.model("User", userSchema);

module.exports = User;