const express = require("express")
const { userModel } = require("../model/user.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRouter = express.Router()

userRouter.post('/register', async (req, res) => {
    const { name, email, pass } = req.body
    try {
        bcrypt.hash(pass, 4, async (err, hash) => {
            const user = new userModel({ name, email, pass: hash })
            await user.save()
            res.send({ "msg": 'user has been registered' })
        });
    } catch (err) {
        res.send({ "msg": "Something went wrong", "error": err.message })
        console.log(err)
    }
})

userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body
    try {
        const user = await userModel.find({ email })
        if (user.length > 0) {
            bcrypt.compare(pass, user[0].pass, (err, result) => {
                if (result) {
                    const token = jwt.sign({ course: 'backend' }, "masai");
                    res.send({ msg: "Login Successful", "token": token })
                } else {
                    res.send({ msg: 'Wrong Credntials' })
                }
            });
        }else{
            res.send({msg:"Wrong Credntials"})
        }

    } catch (err) {
        res.send({msg:"Something went Wrong", "error":err.message})
    }
})

module.exports = {
    userRouter
}