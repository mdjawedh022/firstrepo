const express = require("express")
const fs = require("fs")

const app = express()


app.use((req,res,next) => {
    const startTime = new Date().getTime()
    next()
    const endTime= new Date().getTime()
    fs.appendFileSync('./detail.txt', `Route Visited: ${req.url} | Method: ${req.method} | RespondTime: ${endTime-startTime}ms\n`)
})

app.get("/", (req,res) => {
    res.send("Home Page")
})

app.get("/about",(req,res)=> {
    res.send("About Page")
})

app.get("/contact",(req,res) => {
    res.send("Contact Page")
})

app.get("/data", (req,res) => {
    res.send('Data Page')
})

app.listen(3000,() => {
    console.log('server is running')
})