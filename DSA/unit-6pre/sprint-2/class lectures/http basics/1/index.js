const http = require("http")

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.end("Hello")
        
    }
    else if(req.url === "/reports"){
        res.end("Reports of the data")
    }
    else if(req.url === "/data"){
        res.end("data...")
    }
    else{
        res.end("Invalid end point")
    }
})

server.listen(4500, () => {
    console.log("server is running on the port 4500")
})