const express = require("express")
const teachersRoutes = require("./routes/teachers.route")
const studentsRoutes = require("./routes/students.route")

const app = express()

app.use("/teachers", teachersRoutes)
app.use("/students", studentsRoutes)


app.listen(8080, () => {
    console.log("Server is running")
})