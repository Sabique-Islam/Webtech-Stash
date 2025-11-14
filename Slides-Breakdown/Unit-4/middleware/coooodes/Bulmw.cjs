const express = require("express");
const app = express();

app.use(express.json()); // Parse JSON data
app.use(express.static("public")); // Serve static files (HTML, CSS, etc.)

app.post("/data", (req, res) => {
  res.send(req.body);
});

app.listen(5000);