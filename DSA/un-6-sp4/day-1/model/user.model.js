const mongoose=require("mongoose");

const userSchema =mongoose.model({
    email:String,
    pass:String,
    age:Number,
   location:String,
},{
    versionKey:false
})

const UserModel = mongoose.model("user", userSchema)

module.exports = {
    UserModel
}