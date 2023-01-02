require("dotenv").config();
const express = require("express")
const connect = require("./congif/db")
const cors = require("cors")
const PORT = process.env.PORT;
const userRoute =require("./features/user/user.route")
const blogRoute = require("./features/blog/blog.route")

const app = express()
app.use(express.json())
app.use(cors())

app.use("/users",userRoute)
app.use("/blogs",blogRoute)


app.listen(PORT,async()=>{
    await connect()
    console.log(`sever start at ${PORT}`)
})
