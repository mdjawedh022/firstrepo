const express=require("express");
const app=express();

const multer=require("multer");
// const upload=multer();

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/')
    },
    filename:function(req,file,cb){
    const uniqueSuffix=Date.now()+ '-'+Math.round(Math.random()*1E9)
    cb(null,file.fieldname+ "-"+uniqueSuffix+".jpg")
    }
})
const upload=multer({storage:storage})

app.post("/",upload.single("avatar"),(req,res)=>{
    res.send("Hello")
})


app.listen(8080,()=>{
    console.log("server running on http://localhost:8080")
})





// const midddleware=(req,res,next)=>{
//     console.log("In home router")
//     next();
// }
// app.use(midddleware)