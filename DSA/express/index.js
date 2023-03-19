const express = require("express");
const fs=require("fs")
const app = express();
app.use(express.json()); //middleware

app.get("/", (req, res) => {
  res.send("WELCOME TO HOME PAGE");
});
app.get("/reports", (req, res) => {
  res.send("Reports Page");
});

app.post("/add", (req, res) => {
  console.log(req.body);
  res.send("Data send");
});

app.get("/students",(req,res)=>{
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"));
    res.send(data.students);
   
})

app.post("/addteacher",(req,res)=>{
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"));
    data.teachers.push(req.body);
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send('Data has  been post successfully into db')
})

app.patch("/updatestudent",(req,res)=>{
    const {id}=req.params;

})
// app.get("/students", (req, res) => {
//   const data = JSON.parse(fs.readFileSync("/db.json", "utf-8"));
//   console.log(data.students);
//   res.json(data.students);
// });

// app.post("/addstudent", (req, res) => {
//   const data = JSON.parse(fs.readFileSync("/db.json", "utf-8"));
//   data.students.push(req.body);
//   fs.writeFileSync("./db.json", data);
// });
// app.delete("") ==> //try it by your own as everything boils down to basic logic
app.listen(4500, () => {
  console.log("running on port 4500");
});
