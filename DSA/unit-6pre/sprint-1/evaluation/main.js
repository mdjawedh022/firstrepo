const fs = require("fs")
const dns = require('dns')
var cowsay = require('cowsay')



const writeToFile = (website) => {
    dns.lookup(website, (err, address, family) => {
        let data = `URL: ${website} | Address: ${address} | Family: ${family}\n`;
        fs.appendFileSync('data.txt', data, {encoding: 'utf-8'})
    })
}

const readFile = (files) => {
    fs.readFile(files,{encoding: 'utf-8'},(err,data) => {
        if(err){
            console.log(err)
        }
        else{
            console.log(data)
        }
    })
}

const cowSayFile = (files) => {
    // const cowsay = require('cowsay')
    fs.readFile(files, {encoding: 'utf-8'},(err,data) => {
        if(err) throw err;
        console.log(cowsay.say({
            text : data,
            e : "OO",
        }))
})

}

const deleteFile = (files) => {
    fs.unlinkSync(files)
}
    


module.exports = {writeToFile,readFile,cowSayFile,deleteFile}