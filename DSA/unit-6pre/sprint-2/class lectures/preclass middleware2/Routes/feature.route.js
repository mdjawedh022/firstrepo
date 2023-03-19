const { Router } = require("express")

const featureRouter = Router();

featureRouter.get("/contacts",(req,res)=>{
    res.send("Contacts")
    })
    
featureRouter.get("/about",(req,res)=>{
    res.send("Hello from the about route")
    })

module.exports = {
    featureRouter
}