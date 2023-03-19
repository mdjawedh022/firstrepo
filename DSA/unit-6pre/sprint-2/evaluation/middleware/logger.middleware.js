const fs = require("fs");

const logger = (req, res, next) => {
  const start = new Date().getTime();

  next();
  const end = new Date().getTime();
  fs.appendFileSync(
    "logs.txt",
    `Method:${req.method} | Route:${req.url} | user-agent:${
      req.headers["user-agent"]
    } | Response Time:${end - start}\n`
  );
};

module.exports = {
  logger,
};
