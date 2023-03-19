const fs=require('fs');
// const { loadavg } = require('os');
// fs.readFile('file.txt','utf8',(err,data)=>{
// console.log(err,data);
// })

// const a=fs.readFileSync('file.txt')
// console.log(a.toString());

// fs.writeFile('file2.txt','this is a data',()=>{
//     console.log("written to the file");
// })

const a1=fs.writeFileSync('file2.txt',"this is a data")
console.log(a1);
console.log('finsihed reading file')