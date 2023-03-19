const express = require("express")

const app = express()
app.use((req, res, next) => {
    const startTime = newDate().getTime()
    next()
    const endTime = newDate().getTime()
    console.log(endTime - startTime)
})

app.get("/", (req, res) => {
    res.send("Welcome")
})
app.get("/contacts", (req, res) => {
    res.send("Contacts")
})
app.get("/about", (req, res) => {
    res.send("About")
})
app.get("/blogs", (req, res) => {
    const data = fs.readFileSync("./lecture.txt", "utf-8")
    res.send(data)
})


app.listen(4500, () => {
    console.log("Server is running")
})