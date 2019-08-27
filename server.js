// Import config from .env file
require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000

// Init MongoDB Connection
var db = mongoose.connection;
db.on('error', () => {
    console.error('Error Connection to MongoDB')
});
db.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connect(process.env.mongodb_uri, {useNewUrlParser: true});


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Unit Test MongoDB with Jest app listening on port ${port}!`))