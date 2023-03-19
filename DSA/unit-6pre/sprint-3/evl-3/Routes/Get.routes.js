const express = require("express")
const { BookModel } = require("../models/Book.model")

const getRouter = express.Router()

getRouter.get("/books", async(req,res) => {
    const price_low = req.query.price_low
    const price_high = req.query.price_high
    if(price_high && price_low){
        try{
            let books = await bookModel.find({$and:[{price:{$gt:price_low}},{price:{$gt:price_high}}]})
            res.send(books)
        }catch(err){
            console.log(err)
            res.send({"err": "Something went wrong"})
        }
    }
    else{
        try{
            let books = await bookModel.find()
            res.send(books)
        }catch(err){
            console.log(err)
            res.send({"err": "Something went wrong"})
        }
    }
})

module.exports = {
    getRouter
}