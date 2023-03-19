const express = require("express");
const { foodModel } = require("../Models/food.model");

const getRouter = express.Router();


getRouter.get("/food", async (req, res) => {
    let query = req.query
    try {
        const food = await foodModel.find(query)
        res.send(food)
        console.log(food)
    } catch (err) {
        res.send({ msg: "Can't get the foods ", error: err.message })
    }

});

module.exports = { getRouter }