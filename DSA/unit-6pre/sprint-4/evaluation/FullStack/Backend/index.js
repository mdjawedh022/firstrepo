const express = require("express");
const { connection } = require("./config/db");
const app = express();
const { userRouter } = require("./router/user.router");
const { linkidinRouter } = require("./router/linkedin.route");
const { authenticate } = require("./middlewares/authenticate.middleware");
require("dotenv").config();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Welcome");
});
app.use("/users", userRouter);
// app.use(authenticate);
app.use("/posts", linkidinRouter);

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("connected to DB");
    } catch (error) {
        console.log({ msg: "somthing went wrong"});
    }
    console.log(`server is running on ${process.env.PORT}`);
});