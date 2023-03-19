const express = require("express")
const fs = require("fs")

const app = express()

// middleware
app.use(express.json())

app.get("/students", (req,res) => {
    const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'))
    data.students.push(req.body)
    fs.writeFileSync('./db.json',data)
})

app.delete("")

app.listen(4500, () => {
    console.log('server is running')
})