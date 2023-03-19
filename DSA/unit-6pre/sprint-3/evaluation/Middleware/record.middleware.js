const fs = require('fs')

const record = (req, res, next) => {
    if (req.method == "DELETE") {
        next()
        const id = req.params.id;
        const date = new Date()
        fs.appendFileSync("./record.txt", `The dish with id:${id} has been deleted | ${date} \n`)
    } else if (req.method == "PATCH") {

        next()
        const id = req.params.id;
        const date = new Date()
        fs.appendFileSync("./record.txt", `The dish with id:${id} has been updated | ${date}\n`)
    }
}

module.exports = { record }