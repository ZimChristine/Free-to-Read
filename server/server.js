var http = require('http');
var express = require('express');

var port = 8080;
var ip = '127.0.0.1';


var app = express();

app.get('/', function(request, response) {
  // render index.html page
  response.end("YOYOYO");
})

// var app = http.createServer((request, response) => {
//   if (request.method === 'GET') {
//     response.writeHead(200);
//     response.end("HELLO Christine!");
//   }
//   if (request.method === 'POST') {
//     response.writeHead(200);
//     response.end("Hello Winnie-Kitty!");
//   }

// })

app.listen(port, ip, function() {
  console.log('listening on: ', ip, ' port: ', port);
});