
 const feature = (req,res,next)=>{
    console.log("Hello from Middleware")
    next()
}

module.exports = {
    feature
}