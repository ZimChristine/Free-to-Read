var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var express = require('express');
var app = express();

var port = 8080;
var ip = '127.0.0.1';



app.use(express.static(__dirname + '/client'));

mongoose.connect('mongodb://127.0.0.1/list', {
  useMongoClient: true,
});
var db = mongoose.connection;

db.on('error', (error) => {
  console.log('Connection error!!!!!!!!!!!!!', error);
});

db.once('open', () => {
  console.log('Mongo working!');
});

// db.then((db) => {

// });

// app.get('/', function(request, response) {
//   // render index.html page
//   //response.sendStatus(200);
//   response.sendFile(path.join(__dirname, 'client/index.html'));
// })

app.listen(port, ip, function() {
  console.log('listening on: ', ip, ' port: ', port);
});