const { Router } = require("express")
const { validator } = require("../middleware/validator.middleware")
const fs = require("fs")
const { json } = require("express");
const seriesRouter = Router();

seriesRouter.get("/", (req,res) => {
    const data = fs.readFileSync("./db.json", 'utf-8')
    const parsed_data = JSON.parse(data)
    res.send(parsed_data.series)
    console.log(parsed_data.series)
})

seriesRouter.get("/:id", (req,res) => {
    const id = req.params.id;
    const data = fs.readFileSync('./db.json', 'utf-8')
    let parsed_data = JSON.parse(data)
    let result;
    parsed_data.series.map((el) => {
        if(el.id == id){
            result = el;
        }
    })
    res.json(result)
})

seriesRouter.post('/addseries', (req,res) => {
    const data = fs.readFileSync('./db.json','utf-8')
    let parsed_data = JSON.parse(data)
    parsed_data.series.push(req.body);
    fs.writeFileSync('./db.json', JSON.stringify(parsed_data));
    res.send("Data has been posted successfully")

})

seriesRouter.use(validator);

seriesRouter.patch("/:id", (req, res) => {
    const idd = req.params.id;
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    data.movies.map((el) => {
      if (el.series_id == idd) {
        el.name = req.body.name;
        el.genre = req.body.genre;
        el.director = req.body.director
      }
    });
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.send("Patch Details Successfully");
});

seriesRouter.delete("/:id",(req,res)=>{
    const id=req.params.id
    const data=JSON.parse(fs.readFileSync("./db.json",'utf-8'))
    data.series=data.series.filter((el)=>{
      return el.series_id != id
    })
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send("Delete Details successfully")
})


module.exports = {
    seriesRouter
}