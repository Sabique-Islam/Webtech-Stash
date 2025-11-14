//Drop Collection

// Drop/Delete a Collection from MongoDB

// Import MongoClient from the MongoDB package
const { MongoClient } = require('mongodb');

// MongoDB server URL (local connection)
const url = "mongodb://127.0.0.1:27017";

// Name of the database
const dbName = "university";

// Connect to MongoDB server
MongoClient.connect(url)
  .then(client => {
    // Access the database
    const db = client.db(dbName);

    // Drop (delete) the 'student' collection
    return db.collection("student").drop()
      .then(res => {
        // Log confirmation of collection deletion
        console.log("Collection dropped:", res);

        // Close the database connection
        return client.close();
      });
  })
  .catch(err => {
    // Log any errors that occur during the process
    console.error("Error:", err);
  });