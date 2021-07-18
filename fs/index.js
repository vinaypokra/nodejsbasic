const fs = require("fs");
//fs.writeFileSync("read.txt","Welcome TO new Page");
//fs.appendFileSync('read.txt',"Hello I am Vinay");

//const buf_data = fs.readFileSync("read.txt");
//console.log(buf_data);

//org_data = buf_data.toString();
//console.log(org_data);

fs.renameSync('read.txt','readwrite.txt');