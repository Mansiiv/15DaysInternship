var http = require('http');

http.createServer(function(req,res){

    res.end("Welcome to nodejs");
}).listen(3000);
console.log("Server is started on port number 3000");