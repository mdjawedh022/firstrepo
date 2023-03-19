const express = require("express")
const { connection, UserModel } = require("./db")

const app = express()
app.use(express.json())

app.get("/", (req,res) => {
    res.send("Welcome")
})

app.get("/users", async(req,res) => {
    let query = req.query;
    try{
        const users = await UserModel.find(query)
        res.send(users)
    }catch(err){
        res.send({"msg" : "Can not read", "err": err.message})
    }
})

app.post("/register", async(req,res) => {
    try{
        // console.log(req.body)
        const user= new UserModel(req.body)
        await user.save()
        res.send({"MSG": "user hasbeen registered"})
    }catch(err){
        res.send({"msg" : "Can not register", "err": err.message})
    }

})

app.patch("/update/:id", async(req,res) => {
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

app.delete("/delete/:id", async(req,res) => {
    const ID = req.params.id
    try{
        await UserModel.findByIdAndDelete({_id: ID})
        res.send({"msg" : "User has been deleted"})
    }catch(err){
        res.send({"msg" : "can not delete", "err": err.message})
    }
})

app.listen(4500, async() => {
    try{
        await connection
        console.log("connected to the DB")
    }catch(err){
        console.log("cannot connect to DB")
        console.log(err)
    }
    console.log("server is runnig at 4500")
})