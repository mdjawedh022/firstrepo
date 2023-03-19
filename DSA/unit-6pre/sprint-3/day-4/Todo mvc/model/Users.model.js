const mongoose = require("mongoose")


// basic structure of the data
const userSchema = mongoose.Schema({
    title:{type:String, required:true},
    status: {type:Boolean, required: true}
},{
    versionKey:false
})

const UserModel = mongoose.model("do", userSchema)

module.exports = {
    UserModel
}