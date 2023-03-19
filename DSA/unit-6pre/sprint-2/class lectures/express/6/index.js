const express = require("express")
const fs = require("fs")

const app = express()
app.use(express.json()) //Middleware

app.get("/", (req,res) => {
    res.setHeader("Content-type", "text/html")
    res.send("<h1>HOME PAGE</h1>")
})

app.get("/data", (req,res) => {
    const dataStream = fs.createReadStream("./data.json", "utf-8")
    dataStream.pipe(res)
})

app.post("/adddata", (req,res) => {
    console.log(req.body)
    res.send('data has been added')
})

app.get("/students", (req,res)=> {
    const data = fs.readFileSync("./data.json",'utf-8')
    const parse = JSON.parse(data)
    console.log(parse.students)
    res.send(parse.students)
})



app.post("/post", (req,res) => {
    // Get the complete data
    const data = fs.readFileSync("./data.json",'utf-8')
    // parse to add the data
    const parsed_data = JSON.parse(data)
    // add the data in students
    parsed_data.students.push(req.body)
    // adding to the database
    fs.writeFileSync('./data.json',JSON.stringify(parsed_data))
    res.send('look terminal')
})

app.delete('./delete',(req,res) => {
    // Get the complete data
    const data = fs.readFileSync("./data.json",'utf-8')
    // parse to add the data
    const parsed_data = JSON.parse(data)
    // filter the data
    const newdata = parsed_data.students.filter((el) => {
        return el.name !== "Munnu"
    })
    console.log(newdata)
    res.send("A")
})







app.listen(4500, () => {
    console.log('server is running')
})