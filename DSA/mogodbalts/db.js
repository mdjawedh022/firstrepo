const mongoose=require("mongoose")


const connection=mongoose.connect(process.env.mongoURL)

const userSchema=mongoose.Schema({
    name:String,
    age:Number,
    iS_married:Boolean,
    city:String,
    language:String
},{
    versionKey:false
})

const UserModel=mongoose.model("user",userSchema)

module.exports={connection,
UserModel
}


//mdjawedh022:mdjawedh022@cluster0.rei2r1p.mongodb.net/Auth?retryWrites=true&w=majority

//mongodb://127.0.0.1:27017/metausers