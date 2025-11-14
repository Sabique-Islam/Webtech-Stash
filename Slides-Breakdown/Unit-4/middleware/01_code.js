var express = require('express');
var app = express();

// Middleware function to log the time of request
app.use(function (req, res, next) {
  console.log('Time:', new Date().toLocaleString());
  next(); // pass control to the next handler
});

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});