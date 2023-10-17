const https = require('http');

const port = 3000;


const server = https.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.end("hello wolrd this is my backend program")
});

server.listen(port, () => {
    console.log(`server is running at https: ${port}/`);
});

// console.log("hello")
