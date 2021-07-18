const http = require("http");
const fs = require("fs");


const homeFile = fs.readFileSync("index.html", "utf-8");


const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "Content-type": "text/html" });
       res.end(homeFile); 
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end('<h1>404 Error Page does not exist</h1>');
    }

});

server.listen(8000, "127.0.0.1");