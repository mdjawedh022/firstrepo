const express = require("express");

const app = express()

app.use(express.json())

app.get("/", (req,res) => {
    res.send("Hello")
})

app.post("/add", (req,res) => {
    console.log(req.body);
    res.send("data has been post")
})

app.get('/details', (req,res) => {
    res.send("All details so far...")
})

app.listen(4500, () => {
    console.log('server is running')
})