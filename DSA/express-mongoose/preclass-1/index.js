const express=require("express");
const { studentRouter } = require("./routes/student.route");
const { teacherRouter } = require("./routes/teacher.route");

const app=express();
app.use((req,res,next)=>{
    
})
app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.use("/teacher",teacherRouter)
app.use("/student",studentRouter)

app.listen(4500,()=>{
    console.log("listen server on http://localhost:4500")
})