const fs = require('fs');

fs.readFile('./test.txt', {encoding: "utf-8"}, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});