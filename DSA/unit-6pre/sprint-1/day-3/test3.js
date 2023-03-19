const fs = require("fs")

fs.appendFile("./text.txt", "This is my first project\n", (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("appended")
    }
})

fs.appendFile("./text.txt", "This is my second project\n", (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("appended")
    }
})