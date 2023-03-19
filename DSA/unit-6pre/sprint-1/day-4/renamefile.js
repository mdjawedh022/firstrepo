const fs = require("fs")

fs.rename('test.txt', 'new.txt', (err) => {
    if(err){
        console.log("Can not rename the file")
        console.log(err)
    }
    else{
        console.log("Renamed")
    }
})