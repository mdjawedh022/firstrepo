const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
})

const Blog = mongoose.model("blog",blogSchema)
module.exports= Blog