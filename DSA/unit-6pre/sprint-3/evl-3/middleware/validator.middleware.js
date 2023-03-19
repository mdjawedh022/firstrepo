const validator = (req,res,next) => {
    if(req.body.title && req.body.genre && req.body.price && req.body.author){
        next()
    }
    else{
        res.send({"err" : "some field are missing"})
    }
}

module.exports = {
    validator
}