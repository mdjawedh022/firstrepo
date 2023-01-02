const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    age:{
        type:String,
        min:20,
        max:100

    },
    gender:{
        type:String,
        enum:["Male","Female"]

    },
})


const User = mongoose.model("user",userSchema)
module.exports= User