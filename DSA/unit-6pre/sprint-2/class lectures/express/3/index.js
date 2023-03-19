const { createReadStream } = require("fs")
const http = require("http")


// without stream

// const server = http.createServer((req,res) => {
//     if(req.url === "/movies"){
//         res.end(movie)
//     }
// })

// with stream
const server = http.createServer((req,res) => {
    if(req.url === "/movies"){
        const moviestream = createReadStream('./dummy.txt', 'utf-8')
        moviestream.pipe(res)
    }
})

server.listen(4500, () => {
    console.log("server is running on the port")
})