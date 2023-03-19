const express = require("express")
const { moviesRouter } = require('./Routes/movies.routes')
const { seriesRouter } = require('./Routes/series.routes')
const { logger } = require("./middleware/logger.middleware")
const app = express()

app.use(express.json())
app.use(logger)

app.get("/", (req,res) => {
    res.send("HOME PAGE")
})

app.use('/movies', moviesRouter)
app.use('/series', seriesRouter)

app.listen(4500, () => {
    console.log("Server is running on the port 4500")
})