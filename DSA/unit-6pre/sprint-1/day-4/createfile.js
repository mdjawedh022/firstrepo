const fs = require("fs")

fs.writeFile('./test.txt', 'hello everyone!', (err,data) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("File Created!")
    }
})