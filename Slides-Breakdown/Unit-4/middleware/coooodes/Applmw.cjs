

// // Import the Express module
 var express = require('express');
 //Create an Express application
var app = express();
// -------------------- Application-level middleware --------------------
//This middleware runs for every incoming request to the server
app.use(function (req, res, next) {
  console.log('Time:', Date.now()); // Logs the current timestamp
  next(); // Pass control to the next middleware or route handler
});
// -------------------- Router-level middleware --------------------
// This middleware runs only for routes that match '/user/:id'
app.use('/user/:id', function (req, res, next) {
 console.log('Request Type:', req.method); // Logs the HTTP request method (GET, POST, etc.)
 next(); // Pass control to the next middleware or route
});

app.listen(7000, () => console.log("Server running on http://localhost:7000"));