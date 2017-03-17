////read stream////
var fs = require("fs");
var data = '';

// Create a readable stream 
//The function call fs.createReadStream() gives you a readable stream. Initially, the stream is in a static state. As soon as you listen to data event and attach a callback it starts flowing. 
var readerStream = fs.createReadStream('input.txt');
// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');
// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});
readerStream.on('end',function(){
   console.log(data);
});
readerStream.on('error', function(err){
   console.log(err.stack);
});
console.log("Program Ended");


////write stream////
var fs = require("fs");
var data = 'Simply Easy Learning';
// Create a writable stream
var writerStream = fs.createWriteStream('output.txt');
// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');
// Mark the end of file
writerStream.end();
// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});
writerStream.on('error', function(err){
   console.log(err.stack);
});
console.log("Program Ended");

