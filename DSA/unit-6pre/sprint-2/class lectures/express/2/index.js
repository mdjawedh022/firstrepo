const http = require("http")

const server = http.createServer((req,res) => {
    if(req.url === "/adddata" && req.method === "POST"){
        let str = "" 
        req.on("data", (chunk) => {
            str+=chunk;
        })
        // console.log(str);
        req.on("end", () => {
            console.log(str);
        })
        res.end("data has been sent to the server")
    }
})

server.listen(4500, () => {
    console.log("Server is running on the port");
})