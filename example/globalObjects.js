////global objects////
console.log( __filename );
console.log( __dirname );

//setTimeout&clearTimeout//
function printHello(){
   console.log( "Hello, World!");
}
// Now call above function after 2 seconds
var t = setTimeout(printHello, 2000);
// Now clear the timer
clearTimeout(t);

//setInterval//
function printHello(){
   console.log( "Hello, World!");
}
// Now call above function after 2 seconds
setInterval(printHello, 2000);


//console//
console.info("Program Started");

var counter = 10;
console.log("Counter: %d", counter);

console.time("Getting data");
//
// Do some processing here...
// 
console.timeEnd('Getting data');

console.info("Program Ended")


//process//
// Printing to console
process.stdout.write("Hello World!" + "\n");

// Reading passed parameter
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// Getting executable path
console.log(process.execPath);

// Platform Information 
console.log(process.platform);

// Print the current directory
console.log('Current directory: ' + process.cwd());

// Print the process version
console.log('Current version: ' + process.version);

// Print the memory usage
console.log(process.memoryUsage());