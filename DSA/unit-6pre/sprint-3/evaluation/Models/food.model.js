const mongoose = require("mongoose")

const foodschema = mongoose.Schema({
    dish_name:{type:String, required:true},
    price:{type:Number, required:true},
    cuisine:{type:String, required:true},
    rating:{type:Number, required:true}
},{
    versionKey:false
})

const foodModel = mongoose.model("foodData", foodschema)

module.exports = {
    foodModel
}