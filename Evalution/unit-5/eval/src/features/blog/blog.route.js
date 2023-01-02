const express = require("express")
const User = require("../user/user.model")
const Blog = require("./blog.model")
const app = express.Router();


const authMiddleware=async(req,res,next)=>{
    let token = req.headers.token
    if(!token){
        return res.send("Token not available")
    };

    let [_id,email,password] = token.split(":")
    try{
        let user = await User.findOne({_id:_id})
        if(user){
            if(email===user.email && password===user.password){
                req.userId= user.id
            }
            next()
        }else{
            res.status(401).send("Wrong Data")
        }
    }catch(e){
        res.status(404).send(e.message)

    }
}

app.use(authMiddleware)

app.post("/",async(req,res)=>{
   
    try{
       let blog = await Blog.create({
        ...req.body,author:req.userId
       })
       res.send(blog)
    }catch(e){
        res.status(404).send(e.message)
    }
})

app.get("/",async(req,res)=>{
    const {limit=5 ,page=1}= req.query
    try{
        let blog = await Blog.find({authod:req.userId}).limit(limit).skip((page-1)*limit)
        .populate([{path:"author",select:["name","email","gender"]}])
        res.send(blog)
    }catch(e){
        res.status(404).send(e.message)

    }
})

app.get("/:id",async(req,res)=>{
    let id = req.params.id;
    try{

        let blog = await Blog.find({author:res.userId,_id:id})
        res.send(blog)
    }catch(e){
        res.status(404).send(e.message)

    }
})

app.delete("/:id",async(req,res)=>{
    let id = req.params.id;
    try{
        let blog = await Blog.findByIdAndDelete(id)
        res.send("Delete Successfully")
    }catch(e){
        res.status(404).send(e.message)

    }
})

app.patch("/:id",async(req,res)=>{
    let id = req.params.id
    try{
        let blog = await Blog.findByIdAndUpdate(id,{...req.body},{new:true})
        res,send(blog)
    }catch(e){
        res.status(404).send(e.message)

    }
})


module.exports=app;