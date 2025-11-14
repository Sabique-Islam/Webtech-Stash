//Update One Document

// Update One Document in MongoDB

// Import MongoClient from the MongoDB package
const { MongoClient } = require('mongodb');
// MongoDB connection URL (local server)
const url = "mongodb://127.0.0.1:27017";
// Name of the database to be used
const dbName = "university";
// Connect to MongoDB server
MongoClient.connect(url)
  .then(client => {
    // Access the database
    const db = client.db(dbName);
    // Access the 'student' collection
    const collection = db.collection("student");
    // Define the search condition (document to update)
    const query = { name: "Ajay" };
    // Define the data to update (set new values)
    const update = { $set: { name: "Krishna", age: 21 } };
    // Update one document that matches the query
    return collection.updateOne(query, update)
      .then(res => {
        // Log the number of matched and modified documents
        console.log("Matched:", res.matchedCount, "Modified:", res.modifiedCount);

        // Close the database connection
        return client.close();
      });
  })
  .catch(err => {
    // Log any error that occurs during the operation
    console.error("Error:", err);
  });