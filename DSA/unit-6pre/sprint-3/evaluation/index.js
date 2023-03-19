const express = require("express")
const { connection } = require("./db")
require('dotenv').config()
const { postfoodRouter } = require("./Routes/Post.route")
const { updateRouter } = require("./Routes/update.route")
const { getRouter } = require("./Routes/Get.route")


const app = express()
app.use(express.json())


app.use("/foods", postfoodRouter)
app.use("/", getRouter)
app.use("/foods", updateRouter)


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