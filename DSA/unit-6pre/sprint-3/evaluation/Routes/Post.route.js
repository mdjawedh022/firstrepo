const express = require("express")
const { foodModel } = require('../Models/food.model')

const postfoodRouter = express.Router()

postfoodRouter.post('/POST', async (req, res) => {

    try {
        const data = new foodModel(req.body)
        console.log(req.body)
        await data.save()
        res.send({ "msg": "data posted successfully" })
    } catch (err) {
        res.send({ "msg": "data can not post" })
        console.log(err)

    }
})

module.exports = {
    postfoodRouter
}