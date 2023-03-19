const express = require("express")
const connection = require('./config/db')
const {userRouter } = require("./Routes/user.routes")
const { notesRouter } = require('./Routes/notes.router')
const { authenticate }= require("./middleware/authenticate.middleware")
require('dotenv').config()
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req,res) => {
    res.send("Welcome")
})

app.use("/users", userRouter)
// app.use(authenticate)
app.use("/notes", notesRouter)

app.listen(process.env.port, async() => {
    try{
        await connection
        console.log("connected to the db")
    }catch(err){
        console.log("something went wrong")
    }
    console.log(`server is running at port ${process.env.port}`)
})