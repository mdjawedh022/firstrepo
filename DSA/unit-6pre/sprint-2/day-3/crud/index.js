const express = require("express")
const fs = require("fs")

const app = express()
app.use(express.json())

app.get("/", (req,res) => {
    const data = fs.readFileSync('./data.json', 'utf-8')
    const parse = JSON.parse(data)
    console.log(parse)
    res.send(parse)
})

app.post("/", (req,res) => {
    const data = fs.readFileSync('./data.json', 'utf-8')
    const parsed_data = JSON.parse(data)
    parsed_data.teachers.push(req.body)
    fs.writeFileSync('./data.json',JSON.stringify(parsed_data))
    // console.log(req.body)
    res.send(parsed_data)
})

app.delete("/", (req,res) => {
    const data = fs.readFileSync('./data.json', 'utf-8')
    const parsed_data = JSON.parse(data)
   
    const newdata = parsed_data.teachers.filter((el) => {
        return el.name !== "Ankush"
    })
    console.log(newdata)
    fs.writeFileSync('./data.json',JSON.stringify(newdata))
    res.send("filterdata")
})





app.listen(8000, () => {
    console.log('server is running on the port')
})