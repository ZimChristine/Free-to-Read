var http = require('http');

var app = http.createServer((request, response) => {
  if (request.method === 'GET') {
    response.writeHead(200);
    response.end("HELLO Christine!");
  }
  if (request.method === 'POST') {
    response.writeHead(200);
    response.end("hello Winnie-Kitty!");
  }

})