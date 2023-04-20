const express=require("express")
const noteRouter=express.Router()
const {NoteModel}=require("../model/note.model")
const jwt=require("jsonwebtoken")

noteRouter.get("/",async(req,res)=>{
    const token=req.headers.authorization.split(" ")[1]
    const decoded=jwt.verify(token,"masai")
    try{
        if(decoded){
            const notes=await NoteModel.find({"userID":decoded.userID})
            res.status(200).send(notes)
        }
    } catch(err){
        res.status(400).send({"msg":err.message}) 
    }
})

noteRouter.post("/add",async(req,res)=>{
    try{
        const note=new NoteModel(req.body)
        await note.save()
        res.status(200).send({"msg":"A new Note has been added"}) 
    }catch(err){
        res.status(400).send({"msg":err.message}) 
    }
})

noteRouter.patch("/update/:noteID",async(req,res)=>{
    //write the patch logic by your own
})

noteRouter.delete("/delete/:noteID",async(req,res)=>{
    //write the delete logic by your own
})

module.exports={
    noteRouter
}


