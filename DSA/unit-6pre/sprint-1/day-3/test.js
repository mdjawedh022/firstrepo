const fs = require("fs")


// this function readfile act like as asychronous function
fs.readFile("./readme.md", {encoding: "utf-8"}, (err, data) => {
    if(err){
        console.log("Can not read the file")
        console.log(err)
    }
    else{
        console.log(data)
    }
})




// let data = fs.readFileSync("./readme.md" , {encoding: "utf-8"})
// console.log(data)

console.log("BYEEEEEEE")

