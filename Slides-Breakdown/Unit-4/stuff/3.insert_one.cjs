
// Import MongoClient from the MongoDB package
const { MongoClient } = require('mongodb');

// MongoDB connection URL (local server)
const url = "mongodb://127.0.0.1:27017";

// Name of the database to connect to
const dbName = "university";

// Connect to the MongoDB server
MongoClient.connect(url)
  .then(client => {
    // Access the database
    const db = client.db(dbName);

    // Access the 'student' collection
    const collection = db.collection("student");

    // Insert a single document into the 'student' collection
    return collection.insertOne({ name: "PAC", srn: "000" })
      .then(res => {
        // Log the inserted document's ID
        console.log("1 document inserted:", res.insertedId);

        // Close the database connection
        return client.close();
      });
  })
  .catch(err => {
    // Log any errors that occur during the process
    console.error("Error:", err);
  });