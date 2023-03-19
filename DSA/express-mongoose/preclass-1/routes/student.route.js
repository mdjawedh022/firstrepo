const {Router}=require("express");

const studentRouter=Router()


studentRouter.post("/create",(req,res)=>{
    res.send("create")
})

studentRouter.put("/update",(req,res)=>{
    res.send("update")
})

studentRouter.get("/get",(req,res)=>{
    res.send("get")
})

studentRouter.delete("/delete",(req,res)=>{
    res.send("delete")
})

module.exports={studentRouter}