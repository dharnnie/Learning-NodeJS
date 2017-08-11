var http = require("http");

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/plain' });

    res.end('Hello Daniel');
    console.log('Daniel has been called');
}).listen(8081);

console.log("Server is running at 127.0.0.1:8081 ");
