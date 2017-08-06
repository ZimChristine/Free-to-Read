var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');
var app = express();

var port = 8080;
var ip = '127.0.0.1';



app.use(express.static(__dirname + '/client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, ip, function() {
  console.log('listening on: ', ip, ' port: ', port);
});

mongoose.connect('mongodb://127.0.0.1/list', {
  useMongoClient: true,
});
var db = mongoose.connection;

db.on('error', (error) => {
  console.log('Connection error!!!!!!!!!!!!!', error);
});

db.once('open', () => {
  //I duconsole.log('Mongo working!');
});

var bookSchema = mongoose.Schema({
  title: String,
  author: String,
  dateRead: Number
});

var Book = mongoose.model('Book', bookSchema);

// var narnia = new Book({title: 'Narnia', author: 'CS Lewis'});
// console.log(narnia.title, narnia.author);


// create get and post endpoints
app.get('/list', function(req, res){
  console.log('inside GET');
  Book.find({}).exec((err, results) => {
    if (err) {
      console.log('Oops! erorr:', err);
    } else {
      console.log('RESULTS: ', results);
      res.status(201).send(results);
    }
  });
});

app.post('/list', (req, res) => {
  var newBook = new Book({title: req.body.title, author: req.body.author});
  newBook.save((err, results) => {
    if (err) {
      console.log('Oops! Error in POST request: ', err)
    } else {
      res.status(200).send('RESULTS FROM POST', results);
    }
  });
});



