// Insert Multiple Documents into MongoDB Collection

// Import MongoClient from the MongoDB package
const { MongoClient } = require('mongodb');

// MongoDB connection URL (local server)
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

    // Array of multiple documents to insert
    const docs = [
      { name: "Ayush", srn: "104" },
      { name: "Ajay", srn: "105" }
    ];

    // Insert multiple documents into the collection
    return collection.insertMany(docs)
      .then(res => {
        // Log the number of documents inserted
        console.log(`${res.insertedCount} documents inserted.`);

        // Close the database connection
        return client.close();
      });
  })
  .catch(err => {
    // Log any errors that occur
    console.error("Error:", err);
  });
