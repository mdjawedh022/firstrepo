const mongoose=require("mongoose");

const connection=mongoose.coonect(`mongodb+srv://mdjawedh022:mdjawedh022@cluster0.rei2r1p.mongodb.net/authlecture?retryWrites=true&w=majority`)

module.exports={connection}