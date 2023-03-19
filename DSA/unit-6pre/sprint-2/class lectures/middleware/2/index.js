const express = require("express")

const app = express()
app.use((req,res,next) => {
    console.log("Hello from middleware")
    next()
    console.log("Bye from middleware")
})


app.get("/", (req,res) => {
    console.log("Hello from routes")
    res.send("Welcome")
})


app.listen(8000, () => {
    console.log('server is running');
})