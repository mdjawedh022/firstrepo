const { Router } = require("express")

const teachers = Router();

teachers.post("/post", (req,res) => {
    res.send("welcome")
})

teachers.put("/update", (req,res) => {
    res.send("update")
})

teachers.get("/get", (req,res) => {
    res.send("teacher get")
})

teachers.delete("/delete", (req,res) => {
    res.send("delete")
})

module.export = teachers;