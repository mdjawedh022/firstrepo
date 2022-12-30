// Start here
const express = require("express")
const fs = require("fs")
let db = require("../person.json")

const app = express()
app.use(express.json())



// app.get('/person',(req,res)=>{
//     res.send(db)
// })

app.get("/person/:id",(req,res)=>{
    let id = Number(req.params.id);
    let user = db.find((el)=>el.id===id)
    res.send(user)
})
app.delete("/person/:id",(req,res)=>{
    let id = Number(req.params.id);
    let newData = db.filter((el)=>el.id!==id)
    db=newData
    fs.writeFile("./person.json",JSON.stringify(db),'utf-8',()=>{
        res.send(db)

    })
})

app.post("/person",(req,res)=>{
    db.push({
        ...req.body,
        id:Date.now()
    })
    fs.writeFile("./person.json",JSON.stringify(db),'utf-8',()=>{
        res.send(db)
    })
})

app.get("/person",(req,res)=>{
    let {birth,current,visited} =req.query;
    let newData = db;
    if(birth){
        newData=newData.filter((el)=>el.birth===birth)
    }
    if(current){
        newData=newData.filter((el)=>el.current===current)
    }
    if(visited){
        newData=newData.filter((el)=>el.visited===visited)
        
    }

    res.send(newData)
})

app.listen(8000,()=>{
    console.log("start")
})