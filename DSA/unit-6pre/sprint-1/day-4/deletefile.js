const fs = require("fs")

fs.unlink('./test.txt', (err) => {
    if(err){
        console.log("Can not delete the file")
        console.log(err)
    }
    else{
        console.log('File deleted!')
    }
})