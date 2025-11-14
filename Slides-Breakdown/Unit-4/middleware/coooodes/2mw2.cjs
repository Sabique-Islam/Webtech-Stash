// Import the Express module
const express = require("express");

// Create an Express application
const app = express();

// 1 Application-level middleware (runs for every request)
app.use((req, res, next) => {
  console.log("Start");  // Logs when request starts processing
  next();                // Pass control to the next middleware or route handler
});

// 2️ Route handler for GET request to "/"
app.get("/", (req, res, next) => {
  console.log("Processing route...");     // Logs that route is being handled
  res.send("Middle - Home Page");         // Sends response to client
  next();                                 // Continue to the next middleware
});

// 3️ Final middleware (runs after response is sent)
app.use((req, res) => {
  console.log("End");   // Logs after route handler has finished
});

// 4️  Start the server on port 3000
app.listen(3000, () => console.log("Server running on http://localhost:3000"));


// Execution Flow (when you visit /):
// Start → (First middleware runs)
// Processing route... → (Route / executes and sends response)
// End → (Final middleware runs after next() from route)
// This example demonstrates how middleware functions in Express run in 
// sequence — app.use() → app.get() → next app.use(), showing the flow of request and response processing.