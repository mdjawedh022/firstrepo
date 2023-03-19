const fs = require("fs")

fs.appendFile("./test.txt", "This is my first project\n", (err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("appended")
    }
})