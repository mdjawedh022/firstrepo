const fs = require("fs")

fs.writeFile("./text.txt", "My name is hulk", (err) => {
    if(err) {
        console.log("Can not write into the file")
        console.log(err)
    }
    else{
        console.log("Data has been entered")
    }
})

// fs.writeFileSync("./text.txt", "my name is tillue")

console.log("BYEEEEEE")