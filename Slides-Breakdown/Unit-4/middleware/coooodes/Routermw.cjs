// Import the Express module
const express = require("express");
// Create an Express application
const app = express();
// Create a new router object
const router = express.Router();
// -------------------- Router-level middleware --------------------
// This middleware runs only for routes handled by this router
router.use((req, res, next) => {
  console.log("Router middleware triggered!"); // Log message when router is accessed
  next(); // Pass control to the next middleware or route handler
});
// Define a route within the router
router.get("/info", (req, res) => {
  res.send("Student Info Page"); // Send response to the client
});
// Mount the router on the '/student' path
// Any route starting with '/student' will use this router
app.use("/student", router);
// Start the Express server on port 4000
app.listen(4000);
// router.use() → middleware that runs for all routes inside this router.
// router.get("/info") → defines a route /student/info.
// app.use("/student", router) → attaches the router to the main app.
// When you visit http://localhost:4000/student/info
// → the middleware runs first, then sends "Student Info Page" as the response.