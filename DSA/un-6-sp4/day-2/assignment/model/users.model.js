const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    pass:String
})

const UserModel = mongoose.model("student", userSchema)

module.exports = {
    UserModel
}