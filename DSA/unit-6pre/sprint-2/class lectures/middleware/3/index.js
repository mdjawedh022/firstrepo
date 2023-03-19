const express = require("express")

const app = express()
app.use((req,res,next) => {
    if(true){
        next()
    }
    else{
        res.send("BYE")
    }
})

app.get("/", (req,res) => {
    res.send("Welcome to my page")
})
app.get("/contacts", (req,res) => {
    res.send("contacts")
})

app.get("/blogs", (req,res) => {
    res.send("blogs")
})

app.listen(8000, () => {
    console.log("server is running")
})