const validator = (req, res, next) => {
    if (req.method === "PATCH" || req.method === "DELETE") {
      if (req.query.role && req.query.password) {
        if (req.query.role === "admin") {
          if (req.query.password === "5567") {
            next();
          }else{
              res.send("You are not authorised to do this operation")
          }
        } else {
          res.send("You are not authorised to do this operation");
        }
      } else {
        res.send("You are not authorised to do this operation");
      }
    } else {
      res.send("You are not authorised to do this operation");
    }
  };
  
  module.exports={validator}