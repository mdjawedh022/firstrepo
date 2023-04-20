const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1]
    if(token){
        const decoded=jwt.verify(token,"masai")
        if(decoded){
            req.body.userID=decoded.userID
            next()
        } else {
            res.status(400).send({"msg":"Please Login First!"})
        }
    } else {
        res.status(400).send({"msg":"Please Login First!"})
    }
}

module.exports={
    auth
}