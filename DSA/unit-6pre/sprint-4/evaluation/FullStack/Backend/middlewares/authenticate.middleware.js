const jwt = require("jsonwebtoken");
require("dotenv").config();




const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, process.env.key, (err, decoded) => {
            if (decoded) {
                console.log(decoded);
                req.body.user = decoded.userID;
                next();
            } else {
                res.send({ msg: "User already exist, please login" });
            }
        });
    } else {
        res.send({ msg: "User already exist, please login" });
    }
};

module.exports = {
    authenticate,
};