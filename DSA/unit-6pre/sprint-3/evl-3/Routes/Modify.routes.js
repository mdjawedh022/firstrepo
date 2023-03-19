const express = require("express")
const {BookModel} = require("../models/Book.model")
const {record} = require("../middleware/record.middleware")

const modifyRouter = express.Router()
modifyRouter.use(record)

modifyRouter.patch("/update/:id", async(req,res) => {
    let id = req.params.id
    try{
        await BookModel.findByIdAndUpdate({"_id": id},req.body)
        res.send(`updated the book whose id is ${id}`)
    }catch(err){
        console.log(err)
        res.send({"msg": "Something went wrong"})
    }
})

modifyRouter.delete("/delete/:id", async(req,res) => {
    let id = req.params.id
    try{
        await bookModel.findByIdAndDelete({"_id": id})
        res.send(`${id} hasbeen deleted`)
    }catch(err){
        console.log(err)
        res.send({"msg": "Something went wrong"})
    }
})

module.exports = {
    modifyRouter
}