// Find Documents from the 'student' collection

// Import MongoClient from the MongoDB package
const { MongoClient } = require('mongodb');

// MongoDB server URL (local host)
const url = "mongodb://127.0.0.1:27017";

// Name of the database
const dbName = "university";

// Connect to MongoDB server
MongoClient.connect(url)
  .then(client => {
    // Access the database
    const db = client.db(dbName);

    // Access the 'student' collection
    const collection = db.collection("student");

    // Find all documents but display only the 'name' field (exclude _id)
    return collection.find({}, { projection: { _id: 0, name: 1 } }).toArray()
      .then(docs => {
        // Display the found documents in the console
        console.log("Documents found:", docs);

        // Close the database connection
        return client.close();
      });
  })
  .catch(err => {
    // Display any errors that occur
    console.error("Error:", err);
  });