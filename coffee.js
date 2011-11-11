var coffee = require('coffee-script');
var http = require('http');

http.createServer(function(request, response) {
  body = ''
  request.data(function(data){
    body += data; 
  });
  request.end(function() {
    response.writeHead(200, {'Content-Type:': 'text/javascript'});
    response.end(coffee.compile(body));
  });
}).listen(3000, '127.0.0.1');

console.log('Coffee Server, serves coffee!');
