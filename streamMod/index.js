const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on('request', (req, res)=>{
    //First Way to Get Data

  /*  fs.readFile("input.txt",(err,data)=>{
       if(err)
       {
           return err;
       }
       else{
           res.end(data.toString());
       }
   }); */


   // Second Way to Get Data
   
  /*  const rstream = fs.createReadStream("input.txt");
   rstream.on('data',(chunckdata)=>{
    res.write(chunckdata);
   });
    rstream.on('end', () => {
        res.end();
    });
    rstream.on('error', (err) => {
        console.log(err);
        res.end("FIle Not Found");
    }); */


    //3rd Way
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
});

server.listen(4406,"127.0.0.1");