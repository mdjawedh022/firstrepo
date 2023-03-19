const express = require('express');
const linkidinRouter = express.Router();
const { LinkedinModel } = require("../model/linkedin.model");


linkidinRouter.get("/", async (req, res) => {
    try {
        const linkedin = await LinkedinModel.find();
        res.send({ linkedin });

    } catch (error) {
        res.send({ "msg": "something gone wrong", "error": error.message });
    }
});


linkidinRouter.post("/create", async (req, res) => {
    try {

        const payload = req.body;
        const newLinkedinPost = new LinkedinModel(payload);
        await newLinkedinPost.save();

        res.send("Linkedin created");

    } catch (error) {
        res.send({ "msg": "somthing went wrong", "error": error.message });
    }
});

linkidinRouter.patch("/update/:id", async (req, res) => {
    let id = req.params.id;
    let p = req.body;
    try {
        await LinkedinModel.findByIdAndUpdate({ "_id": id }, p);
        res.send(`Linkiedin Updated with id ${id} `);
    } catch (error) {
        res.send({ "msg": "somthing went wrong", "error": error.message });
    }
});


linkidinRouter.delete("/delete/:id", async (req, res) => {
    let id = req.params.id;
    try {
        await LinkedinModel.findByIdAndDelete({ "_id": id });
        res.send(`Linkiedin Deleted with id ${id}`);
    } catch (error) {
        res.send({ "msg": "somthing is wrong", "error": error.message });
    }
});

module.exports = { linkidinRouter };