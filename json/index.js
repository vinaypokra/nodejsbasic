const fs = require('fs');

const bioData = [
    {
        name: "vinay",
        age: "20",
        DOB: "24/11/2000"
    },
    {
        name: "vinay",
        age: "20",
        DOB: "24/11/2000"
    }
];

//Convert object to JSON

const jsondata = JSON.stringify(bioData);
fs.writeFile('json1.json', jsondata, (err) => {
    console.log("Done");
});

//read Json File

fs.readFile("json1.json","utf-8",(err,data) => {
   // console.log(data);
   const orgData = JSON.parse(data);
   console.log(data);
   console.log(orgData);
});

/* //Convert JSON to object

const objectData = JSON.parse(jsondata);
console.log(objectData); */
