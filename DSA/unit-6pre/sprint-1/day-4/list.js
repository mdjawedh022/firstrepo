const fs = require("fs")


const dir = './node_modules/'

fs.readdir(dir, (err, files) => {
    if(err){
        console.log(err)
    }
    else{
        console.log(files)
    }
})