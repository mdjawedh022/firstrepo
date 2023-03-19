const express = require("express")
const { noteModel } = require("../model/notes.model")


const notesRouter = express.Router()

notesRouter.get("/", async (req, res) => {
    const notes = await noteModel.find()
    res.send({ notes })
})

notesRouter.post("/create", async (req, res) => {
    try {
        const payload = req.body;
        const newnotes = new noteModel(payload)
        await newnotes.save()
        res.send({ "msg": "Note Created" })
    }catch(err){
        res.send({'msg':"Something error", 'error':err.message})
    }
})

notesRouter.patch("/update/:id", async (req, res) => {
    let id = req.params.id
    let p = req.body
    try {
        await noteModel.findByIdAndUpdate({ "_id": id }, p)
        res.send(`Notes with id ${id} has been updated`)
    } catch (er) {
        console.log(er)
        res.send({ "err": "Somethings went wrong" })
    }
})

notesRouter.delete("/delete/:id", async (req, res) => {
    const noteId = req.params.id
    await noteModel.findByIdAndDelete({ _id: noteId })
    res.send({ "msg": `Note with id ${noteID} has been deleted` })
})

module.exports = {
    notesRouter
}