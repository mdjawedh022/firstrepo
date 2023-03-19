const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.setHeader("Content-type", "text/html")
        res.end("<h1>Hello everyone </h1>")
    }
})

server.listen(4500, () => {
    console.log("server is running")
})