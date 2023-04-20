const express = require("express");
const { connection } = require("mongoose");
const { userRouter } = require("./routes/user.routes");

const app = express();

app.use(express.json());

//registration

app.use()
//login

app.listen(4500, async () => {
  try {
    await connection;
    console.log("connect with db");
  } catch (err) {
    console.log(err, "something is wrong");
  }
  console.log("server running on 4500");
});
