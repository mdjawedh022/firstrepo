const express = require("express")
const { connection } = require("./Utils/db")
require('dotenv').config()
const {getRouter} = require("./Routes/Get.routes")
// const { postRouter }= require("./Routes/Post.routes")
// const { modifyRouter } = require("./Routes/Modify.routes")

const app = express()
app.use(express.json())
app.use("/", getRouter)
// app.use("/books/addbook", postRouter)
// app.use("/books", modifyRouter)

// app.use("/" , (req,res) => {
//     res.send("Welcome")
// })

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