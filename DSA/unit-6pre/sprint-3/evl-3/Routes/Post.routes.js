const express = require("express")
// const { validator } = require("../middleware/validator.middleware")
const { BookModel } = require("../models/Book.model")


const postRouter = express.Router()

// postRouter.use(validator)
postRouter.post("/", async(req,res) => {
    try{
        let book = new BookModel(req.body)
        await book.save()
        res.send("Books has been Added")
    }catch(err){
        console.log(err)
        res.send({"err": "Something went wrong"})
    }
})

module.exports = {
    postRouter
}