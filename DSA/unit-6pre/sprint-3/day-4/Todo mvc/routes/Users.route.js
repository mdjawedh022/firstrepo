const express = require("express")
const { UserModel } = require("../model/Users.model")

const usersRouter = express.Router()

usersRouter.get("/", async(req,res) => {
    let query = req.query;
    try{
        const users = await UserModel.find(query)
        res.send(users)
    }catch(err){
        res.send({"msg" : "Can not read", "err": err.message})
    }
})

usersRouter.post("/create", async(req,res) => {
    try{
        // console.log(req.body)
        const user= new UserModel(req.body)
        await user.save()
        res.send({"MSG": "user hasbeen registered"})
    }catch(err){
        res.send({"msg" : "Can not register", "err": err.message})
    }

})

usersRouter.patch("/todos/:id", async(req,res) => {
    const ID = req.params.id
    // res.send(ID)
    const payload = req.body
    try{
        await UserModel.findByIdAndUpdate({_id: ID},payload)
        res.send({"msg" : "User has been updated"})
    }catch(err){
        res.send({"msg" : "can not modify", "err": err.message})
    }
})

usersRouter.delete("/todos/:id", async(req,res) => {
    const ID = req.params.id
    try{
        await UserModel.findByIdAndDelete({_id: ID})
        res.send({"msg" : "User has been deleted"})
    }catch(err){
        res.send({"msg" : "can not delete", "err": err.message})
    }
})

module.exports = {
    usersRouter
}