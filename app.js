const https = require("node:http");
const hostname = '127.0.0.1';

const port = 3000;


const server = https.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.end("hello wolrd this is my firts backend program")
});

server.listen(hostname, port, () => {
    console.log(`server is running at https: //${hostname}:${port}/`);
});

// console.log("hello")
