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

var bookSchema = mongoose.Schema({
  title: String,
  author: String,
  dateRead: Number
});

var Book = mongoose.model('Book', bookSchema);

var narnia = new Book({title: 'Narnia', author: 'CS Lewis'});
console.log(narnia.title, narnia.author);

app.listen(port, ip, function() {
  console.log('listening on: ', ip, ' port: ', port);
});

// create get and post endpoints
app.get('/list', (req, res) => {
  Book.find().then((results) => {
    res.status(200).send(results);
  })
  .catch((err) => {
    console.log('Oops! Error: ', err);
  })
})
//app.post()