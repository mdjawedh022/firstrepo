const http = require("http")
const fs = require("fs")
const server = http.createServer((req, res) => {
    if (req.url === "/data") {
        fs.readFile("./text.txt", { encoding: "utf-8" }, (err, data) => {
            if (err) {
                res.write("No data\n")
                res.end(err)
            } else {
                res.end(data)
            }
        })
    }
})
server.listen(4500, () => {
    console.log("Listening on the port 4500")
})
