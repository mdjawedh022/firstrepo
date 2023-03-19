const fieldsAnalyzer = (req, res, next) => {
    if (req.body.dish_name && req.body.price && req.body.cuisine && req.body.rating) {
        next()
    } else {
        res.send({ err: "Few fields are missing, cannot process the request" })
    }
}

module.exports = {
    fieldsAnalyzer
}