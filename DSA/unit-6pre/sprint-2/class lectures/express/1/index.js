const http = require("http")

const server = http.createServer((req,res) => {
    // if(req.url === "/"){
    //     res.end("Homepage")
    // }
    if(req.url === "/adddata" && req.method === "POST"){
        res.end("data has been recorded")
    }
    // else{
    //     res.end(http.STATUS_CODES['404'])
    // }
})

server.listen(4500, () => {
    console.log("Server is running")
})