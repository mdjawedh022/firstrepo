const express = require("express")
const { connection } = require("./db")
require('dotenv').config()
const { usersRouter } = require("./routes/Users.route")

const app = express()
app.use(express.json())


app.get("/", (req,res) => {
    res.send("Welcome")
})

app.use("/users", usersRouter)

app.listen(process.env.port, async() => {
    try{
        await connection
        console.log("connected to the DB")
    }catch(err){
        console.log("cannot connect to DB")
        console.log(err)
    }
    console.log(`server is runnig at port ${process.env.port}`)
})