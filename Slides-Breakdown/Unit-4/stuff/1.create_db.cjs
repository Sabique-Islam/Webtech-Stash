// Import MongoClient from the MongoDB module
const { MongoClient } = require('mongodb');
// Define the MongoDB connection URL (local MongoDB server)
const url = "mongodb://127.0.0.1:27017";
// Specify the database name you want to create or connect to
const dbName = "university";
// Connect to the MongoDB server
MongoClient.connect(url)
  .then((client) => {
    // If the connection is successful, log a confirmation message
    console.log("Database connection established successfully");
    // Create or connect to the database with the specified name
    const db = client.db(dbName);
    console.log(`Database "${dbName}" is created`);
    // Close the database connection
    client.close();
  })
  .catch((err) => {
    // If an error occurs during connection, display the error
    console.error("An error occurred:", err);
  });
