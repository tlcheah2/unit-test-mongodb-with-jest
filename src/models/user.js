const mongoose = require('mongoose');

// Create a simple User's schema 
const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    gender: { type: String, required: true},
    dob: Date,
    loginUsing: String,
});

const userModel = new mongoose.model('User', userSchema);


module.exports = userModel