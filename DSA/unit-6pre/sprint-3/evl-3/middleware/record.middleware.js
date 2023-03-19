const fs = require("fs")

const record = (req,res,next) => {
    if(req.method === "patch"){
        next()
        const id = req.params.id
        fs.appendFileSync("./records.txt", `The document with id:${id} has been updated\n`)
    }
    else if(req.method==="Delete"){
        next()
        const id = req.params.id
        fs.appendFileSync("./records.txt", `The document with id: ${id} has been deleted\n`)
    }
}

module.exports = {
    record
}