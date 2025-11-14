var express = require('express');
var app = express();

// Error-handling middleware
app.use(function (err, req, res, next) {
  console.error(err.stack); // Log the error stack trace
  res.status(500).send('Something broke!'); // Send a 500 response
});

// Example route that triggers an error
app.get('/error', (req, res) => {
  throw new Error('Deliberate error!'); // This will be caught by the error handler
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});