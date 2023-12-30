require('dotenv').config();

const mongoose = require('mongoose');

// Connect to the MongoDB server using the environment variable
mongoose.connect("mongodb+srv://admin:admin@cluster0.go13hgj.mongodb.net/", {
    serverSelectionTimeoutMS: 5000, // Optional but recommended

}).then(console.log("databse started "));

