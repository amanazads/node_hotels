const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels' //Replace 'mydatabase' with your database name

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    // useNewUrlPraser: true,
    // useUnifiedTopology: true
})

// Get the default conncetion
// Mongoose maintains a defaults connection object representing the MongoDB connecton.
const db = mongoose.connection;

// Define event listeners for database connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection

module.exports = db;