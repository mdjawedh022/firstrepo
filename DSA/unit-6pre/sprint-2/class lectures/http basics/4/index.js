const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.end("This is the home page")
    }
    else if(req.url === "/data"){
        fs.readFile('./data.json', "utf-8", (err,data) => {
            if(err){
                res.write(err)
                res.end()
            }
            else{
                res.end(data)
            }
        })
        // res.end("Data is sending to the server")
    }
    else if(req.url === "/todos"){
        fs.readFile('./todo.json', (err,data) => {
            if(err){
                res.write(err)
                res.end()
            }
            else{
                res.end(data)
            }
        })
        // res.end("This is the blog data page")
    }
    else{
        res.end(http.STATUS_CODES["404"])
    }
})

server.listen(4500, () => {
    console.log('Server is running on the port')
})