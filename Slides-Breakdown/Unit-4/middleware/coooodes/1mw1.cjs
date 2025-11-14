//Example demonstrates how middleware functions execute in order 
// — from top to bottom — before and after the route handler.
 // Import the Express module
var express = require('express');

// Create an Express application
var app = express();

// 1️⃣ Application-level middleware (executed for every request)
app.use(function(req, res, next) {
    console.log("First MW Function");
    next(); // Pass control to the next middleware
});

// 2️⃣ Route-level middleware for path "/"
app.use("/", function(req, res, next) {
    console.log("Route MW Function 1");
    next();
});

// 3️⃣ Another route-level middleware for path "/"
app.use("/", function(req, res, next) {
    console.log("Route MW Function 2");
    next();
});

// 4️⃣ Route handler for GET request to "/"
app.get("/", function(req, res, next) {
    console.log("Route Function");
    res.send("Welcome to my page!!!"); // Send response to client
    next(); // Move to next middleware (if any)
});

// 5️⃣ Middleware after the route (still for "/")
app.use("/", function(req, res, next) {
    console.log("Route MW Function 3");
    next();
});

// 6️⃣ Final middleware (called after all route handlers)
app.use(function(req, res) {
    console.log("Last MW Function");
});

// 7️⃣ Start the server on port 5000
app.listen(7000, function() {
    console.log("Server listening on 7000");
});

// First MW Function → (Global middleware)

// Route MW Function 1

// Route MW Function 2

// Route Function → Sends response “Welcome to my page!!!”

// Route MW Function 3

// Last MW Function

