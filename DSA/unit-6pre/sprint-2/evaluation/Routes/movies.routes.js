const { Router } = require("express")
const { validator } = require("../middleware/validator.middleware")
const fs = require("fs")
const { json } = require("express");
const moviesRouter = Router();

moviesRouter.get("/", (req,res) => {
    const data = fs.readFileSync("./db.json", 'utf-8')
    const parsed_data = JSON.parse(data)
    res.send(parsed_data.movies)
    console.log(parsed_data.movies)
})

moviesRouter.get("/:id", (req,res) => {
    const id = req.params.id;
    const data = fs.readFileSync('./db.json', 'utf-8')
    let parsed_data = JSON.parse(data)
    let result;
    parsed_data.movies.map((el) => {
        if(el.id == id){
            result = el;
        }
    })
    res.json(result)
})

moviesRouter.post('/addmovie', (req,res) => {
    const data = fs.readFileSync('./db.json','utf-8')
    let parsed_data = JSON.parse(data)
    parsed_data.movies.push(req.body);
    fs.writeFileSync('./db.json', JSON.stringify(parsed_data));
    res.send("Data has been posted successfully")

})

moviesRouter.use(validator);

moviesRouter.patch("/:id", (req, res) => {
    const idd = req.params.id;
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    data.movies.map((el) => {
      if (el.movie_id== idd) {
        el.name = req.body.name;
        el.genre = req.body.genre;
        el.director = req.body.director
      }
    });
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.send("Patch Details Successfully");
});

moviesRouter.delete("/:id",(req,res)=>{
    const idd=req.params.id
    const dat=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    dat.movies=dat.movies.filter((el)=>{
        return el.movie_id!=idd
    })
    fs.writeFileSync("./db.json",JSON.stringify(dat))
    res.send("Delete Movie details")
})



module.exports = {
    moviesRouter
}