const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end("Hello, World!");
})

const port = 3000;

server.listen(port, 'localhost', () => {
    console.log('This server is running at http://localhost:3000')
})