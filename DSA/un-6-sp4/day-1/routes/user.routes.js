const express=require("express");
const userRouter=express.Router();
const {UserModel}=require("../model/user.model");

//registration 

app.post("/register", async(req, res) => {
 try{
    const user=new UserModel(req.body);
    await user.save()
    res.status(200).send({"msg":"Registration has been done"})
 } catch(err){
 res.status(400).send({"msg":"Registration has been fail"})
  }
});

//login
app.post("/login", async(req, res) => {
    const {pass,email}=req.body
   try{
 const user=await UserModel.find({email:email,pass:pass})
console.log(user)
  res.status(200).send({"msg":"Registration has been done"})
} catch(err){
res.status(400).send({"msg":err.message})
}
  });

  module.exports={userRouter}