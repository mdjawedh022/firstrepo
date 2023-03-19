const express = require("express")

const app = express()

app.use((req,res,next) => {
    console.log('Hello from Middleware')
    next()
})

app.get("/", (req,res) => {
    // console.log("Hello from Routes")
    res.send("Welcome")
})

app.get("/contacts", (req,res) => {
    res.send("Contacts")
})

app.get("/about",(req,res) => {
    res.send("About")
})

app.get("/blogs", (req,res) => {
    res.send("Blogs")
})

app.listen(4000, () => {
    console.log('server is running')
})