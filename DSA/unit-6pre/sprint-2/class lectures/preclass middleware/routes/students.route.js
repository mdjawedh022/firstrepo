const { Router } = require("express")

const students = Router();

students.post("/post", (req,res) => {
    res.send("welcome")
})

students.put("/update", (req,res) => {
    res.send("update")
})

students.get("/get", (req,res) => {
    res.send("student get")
})

students.delete("/delete", (req,res) => {
    res.send("delete")
})

module.exports = students;
