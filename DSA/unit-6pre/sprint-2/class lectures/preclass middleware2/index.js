const express=require("express")
const { feature } = require("./middleware/feature.middleware")
const { featureRouter } = require('./Routes/feature.route')
const app=express()
app.use(feature)


app.get("/",(req,res)=>{
res.send("Hello from the base route")
// res.send("Welcome")
})

app.use('/feature', featureRouter)

app.listen(4500, () => {
    console.log('server is running')
})
