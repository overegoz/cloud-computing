var http = require('http'); 
var server = http.createServer(function(request,response){ 
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('Hello node.js!!');
});
server.listen(8088, function(){ 
    console.log('Server is running...');
});
