const express = require("express")

const User = require("./user.model")
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
                
            }
            next()
        }else{
            res.status(401).send("Wrong Data")
        }
    }catch(e){
        res.status(404).send(e.message)

    }
}

app.post("/",async(req,res)=>{
    const {name,email,password,age,gender}= req.body
    try{
        let existUser = await User.findOne({email});
        if(existUser){
            res.status(401).send(`Already exist ${email}`)
        }else{
            let user = await User.create({
                name,email,password,age,gender
            });
            res.send({
                token:`${user._id}:${user.email}:${user.password}`
            })
        }

    }catch(e){
        res.status(404).send(e.message)
    }
})

app.get("/",async(req,res)=>{
    try{
        let user = await User.find({},{"password":0})
        console.log(user)
        res.send(user)
    }catch(e){
        res.status(404).send(e.message)

    }
})

app.get("/:id",authMiddleware,async(req,res)=>{
    let id = req.params.id;
    try{

        let user = await User.findById(id)
        res.send(user)
    }catch(e){
        res.status(404).send(e.message)

    }
})

app.delete("/:id",authMiddleware,async(req,res)=>{
    let id = req.params.id;
    try{
        let user = await User.findByIdAndDelete(id)
        res.send("Delete Successfully")
    }catch(e){
        res.status(404).send(e.message)

    }
})


module.exports=app;