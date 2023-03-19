const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/textsync':
            fs.readFile('data.txt', (err, data) => {
                if (err){
                    console.log(err)
                };
                res.end(data);
            });
            break;
        case '/textasync':
            fs.readFile('data.txt', (err, data) => {
                if (err){
                    console.log(err)
                };
                res.end(data);
            });
            break;
        case '/textstream':
            const stream = fs.createReadStream('data.txt');
            stream.pipe(res);
            break;
        default:
            res.end('Invalid');
            break;
    }
});

server.listen(3000, () => {
    console.log('Server is running');
});
