//Delete One Document

// Delete One Document from MongoDB

// Import MongoClient from the MongoDB package
const { MongoClient } = require('mongodb');

// MongoDB server URL
const url = "mongodb://127.0.0.1:27017";

// Database name
const dbName = "university";

// Connect to the MongoDB server
MongoClient.connect(url)
  .then(client => {
    // Access the database
    const db = client.db(dbName);

    // Access the 'student' collection
    const collection = db.collection("student");

    // Define the document to delete (condition)
    const query = { name: "Ayush" };

    // Delete one document that matches the query
    return collection.deleteOne(query)
      .then(res => {
        // Log how many documents were deleted
        console.log("Deleted:", res.deletedCount);

        // Close the database connection
        return client.close();
      });
  })
  .catch(err => {
    // Log any error that occurs
    console.error("Error:", err);
  });