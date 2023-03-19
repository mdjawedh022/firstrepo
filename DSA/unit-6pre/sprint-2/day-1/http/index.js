const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url);
    let filePath = path.join(__dirname, pathname);
    fs.readdir(filePath, (err, files) => {
        if (err) {
            res.end("404 Error");
        } else {
            res.setHeader('Content-Type', 'text/html');
            let data = '<ul style= "list-style-type: none; " >';
            files.forEach(file => {
                data += `<li><img src="https://i.pinimg.com/236x/5f/06/05/5f0605b5b39f767f0a9f4c0715ec433e.jpg" alt="" width="20px"><a href="${path.join(pathname, file)}">${file}</a></li>`;
            });
            data += '</ul>';
            res.end(data);
        }
    });
});

server.listen(3000,  () => {
    console.log(`Server running at port 3000`);
    

});
