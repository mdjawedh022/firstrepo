const http = require("http")
const fs = require("fs")

const dir = './node_modules/'
const server = http.createServer((req,res) => {
    if(req.url === "/"){
        fs.readdir(dir, (err, files) => {
            if(err){
                res.write(err)
                res.end()
            }
            else{
                
                res.end(files)
            }
        })
    }
})

server.listen(4500, () => {
    console.log("server is running on the port")
})