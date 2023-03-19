const express=require("express");
const { connection, UserModel } = require("./db");


const app=express();

app.get("/",(req,res)=>{
    res.send("HOME PAGE");
})

app.post("/adduser",async(req,res)=>{
  try{
    const payload=req.body
    const user=UserModel(payload);
    await user.save()
    res.status(200).send({"msg":"New user has been updated"})
  }
  catch(err){
    res.status(400).send({"msg":err.message})
  }
})

app.get("/user",async(req,res)=>{
    const query=req.query
    // console.log(query)
    try{
        const users =await UserModel.find(query);
        res.status(200).send(users)
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

//update
app.patch("/updateuser/:userID",async(req,res)=>{
    const {userID}=req.params
    try{
        await UserModel.findByIdAndUpdate({_id:userID},payload)
      res.status(200).send({"msg":"The user details has been update"})
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})

//delete
app.delete("/deleteuser/:userID",async(req,res)=>{
    const {userID}=req.params
    try{
        await UserModel.findByIdAndDelete({_id:userID})
        res.status(200).send({"msg":"user has been deleted in db"})
    }catch(err){
        res.status(400).send({"msg":err.message})
    
    }
})


app.listen(4500,async()=>{
try{
    await connection
    //if we have disconnect mongoose so simple write
    // connection.disconnect()
    console.log("cennected to mongo")
} catch(err){
    console.log(err)
}
    console.log("server listening on http://loacalhost:4500")
})