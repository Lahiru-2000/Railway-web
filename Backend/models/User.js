// models/User.js

const mongoose = require('mongoose');

// Define the schema for User
const UserSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true, // Ensure email is unique
    lowercase: true, // Convert email to lowercase to avoid case sensitivity issues
    trim: true // Remove leading and trailing whitespace
  },
  password: { 
    type: String, 
    required: true 
  }
});

// Export the User model
module.exports = mongoose.model('login', UserSchema);
