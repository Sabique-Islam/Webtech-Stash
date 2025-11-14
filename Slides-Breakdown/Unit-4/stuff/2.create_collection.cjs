// Import MongoClient from the MongoDB package
const { MongoClient } = require('mongodb');

// MongoDB server URL (localhost)
const url = "mongodb://127.0.0.1:27017";

// Name of the database to connect to
const dbName = "university";

// Connect to the MongoDB server
MongoClient.connect(url)
  .then(client => {
    // Connect or create the database
    const db = client.db(dbName);

    // Create a new collection named 'student'
    return db.createCollection("student")
      .then(() => {
        // If collection creation is successful, print confirmation
        console.log("Collection 'student' created.");

        // Close the database connection
        return client.close();
      });
  })
  .catch(err => {
    // Handle any errors during the process
    console.error("Error occurred:", err);
  });