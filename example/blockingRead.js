var fs = require("fs");
var data = fs.readFileSync('input.txt');  //blocking
console.log(data.toString());
console.log("Program Ended");