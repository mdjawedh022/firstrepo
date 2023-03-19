const mongoose = require("mongoose")


// basic structure of the data
const userSchema = mongoose.Schema({
    title: {type: String, required:true},
    genre: {type: String, required: true},
    price: {type: Number, required: true},
    author: {type: String, required: true}
},{
    versionKey:false
})

const bookModel = mongoose.model("user", userSchema)

module.exports = {
    bookModel
}