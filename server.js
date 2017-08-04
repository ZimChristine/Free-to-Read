var http = require('http');
var express = require('express');
var path = require('path');
var app = express();

var port = 8080;
var ip = '127.0.0.1';



app.use(express.static(path.join(__dirname, 'client')));

app.get('/', function(request, response) {
  // render index.html page
  //response.sendStatus(200);
  response.sendFile(path.join(__dirname, 'client/index.html'));
})

app.listen(port, ip, function() {
  console.log('listening on: ', ip, ' port: ', port);
});