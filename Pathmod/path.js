const { parse } = require('path');
const path = require('path');

// console.log(path.dirname("I:/node/node/Pathmod/path.js"));
// console.log(path.extname("I:/node/node/Pathmod/path.js"));
// console.log(path.basename("I:/node/node/Pathmod/path.js"));

const mypath = path.parse("I:/node/node/Pathmod/path.js");
console.log(mypath.base);