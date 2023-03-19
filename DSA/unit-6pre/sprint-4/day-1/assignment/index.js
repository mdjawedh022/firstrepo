const express = require("express")
const connection = require('./config/db')
const { UserModel } = require('./model/users.model')
require("dotenv").config()
const jwt = require('jsonwebtoken');

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.post("/register", async (req, res) => {
    try {
        const user = new UserModel(req.body)
        await user.save()
    } catch (err) {
        console.log(err)
    }
    res.send("Registered")
})



app.post("/login", async (req, res) => {
    const { email, pass } = req.body;
    const token = jwt.sign({ "course": "backend" }, "secret")
    try {
        const user = await UserModel.find({ email, pass })

        if (user.length > 0) {
            res.send({ "msg": "Login Successful", "token": token })
        }
        else {
            res.send("Login Failed")
        }
    } catch (err) {
        console.log(err)
    }

})

app.get("/product", (req, res) => {
    const token = req.headers.authorization
    jwt.verify(token, 'secret', (err, decoded) => {
        if (decoded) {
            res.send({ "msg": "Product is here..." })
        }
        else {
            res.send({ "Msg": "Something went wrong", "error": err.message })
        }
    });
})

app.get("/cart", (req, res) => {

})


app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("connected to the db")
    } catch (err) {
        console.log(err)
    }
    console.log(`server is running at port ${process.env.port}`)
})