const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
const data =   fs.readFileSync(`${__dirname}/userAPI/userapi.json`, "utf-8");
const OrgData = JSON.parse(data);
    // console.log(req.url);
    if (req.url == "/") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.end('Hello From the other side');  
    }
   
    else if (req.url == "/aboutus") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.end('Hello From the About Side');  
    }
   
    else if (req.url == "/contact") {
        res.writeHead(200, { "Content-type": "text/html" });
        res.end('Hello From the Contact Side');
    }
   
    else if (req.url == "/api") {
        res.writeHead(200, { "Content-type": "application/json" });
        res.write(`${__dirname}\n\n`);
        res.write("Hello From the api Side\n\n");
        console.log(__dirname);
        res.end(OrgData[1].name);
    }
  
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end('<h1>404 Error Page does not exist</h1>');
    }
});

server.listen(2411, "127.0.0.1",()=>{
    console.log("Listening to the port no 2411");
});