var express = require('express'); //import express module
var app = express(); //create an express application

app.use(function (req, res, next) {
  console.log("Start");
  next();
});

app.get('/', (req, res) => {
  res.send('Gang');
});

// implement a GET method route '/fetch' that sends 'Details' as response
app.get('/fetch', (req, res) => {
  res.send('Details');
});

// implement a POST method route '/submit' that sends 'Submitted' as response
app.post('/submit', (req, res) => {
  res.send('Submitted');
});

// POST /write -> accept JSON and return it back
app.post('/write', (req, res) => {
  const data = req.body; // whatever JSON
  console.log("Received JSON:", data);
  res.json({
    message: "JSON received",
    data: data
  });
});

app.use(function (req, res, next) {
  console.log("End");
  next();
});

app.listen(4000)