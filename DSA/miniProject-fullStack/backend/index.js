const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const app=express();
app.use(express.json())
app.use(cors())

const connetion=async()=>{
    try{
await mongoose.connect(`mongodb+srv://mdjawedh022:mdjawedh022@cluster0.rei2r1p.mongodb.net/miniproject?retryWrites=true&w=majority`)
console.log("connet with db")    
} catch(err){
        console.log(err)
    }
}

app.listen(8000,()=>{
    connetion();
    console.log("server is working fine")
})