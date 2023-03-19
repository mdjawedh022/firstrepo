const express=require('express')
const {foodModel}=require("../Models/food.model")
const {fieldsAnalyzer}=require("../Middleware/fieldsAnalyzer.middleware")
const {record}=require("../Middleware/record.middleware")

const updateRouter=express.Router()
updateRouter.use(record)
updateRouter.use(fieldsAnalyzer)

updateRouter.patch("/update/:id",async(req,res)=>{
    let id=req.params.id
    let p=req.body
    try{
        await foodModel.findByIdAndUpdate({"_id":id},p)
        res.send(`Update the food id is ${id} `)
    }catch(er){
        console.log(er)
        res.send({"err":"Somethings went wrong"})
    }
})

updateRouter.delete("/delete/:id",async(req,res)=>{
    let id=req.params.id
    try{
        await foodModel.findByIdAndDelete({"_id":id})
        res.send(`Delete the Food id is ${id} `)
    }catch(er){
        res.send({"err":"Somethings went wrong"})
    }
})

module.exports={updateRouter}
