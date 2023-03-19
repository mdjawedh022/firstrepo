const mains = require('./main')
const [node,file, operate, ...params] = process.argv;

if(operate == "write"){
    mains.writeToFile(params[0])
}
else if(operate == "read"){
    mains.readFile(params[0])
}
else if(operate == 'cow'){
    mains.cowSayFile(params[0])
}
else if(operate == 'delete'){
    mains.deleteFile(params[0])
}
else{
    console.log('Invalid')
}