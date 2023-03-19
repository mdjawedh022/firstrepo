const {Router}=require("express");

const teacherRouter=Router()


teacherRouter.post("/create",(req,res)=>{
    res.send("create")
})

teacherRouter.put("/update",(req,res)=>{
    res.send("update")
})

teacherRouter.get("/get",(req,res)=>{
    res.send("get")
})

teacherRouter.delete("/delete",(req,res)=>{
    res.send("delete")
})

module.exports={teacherRouter}