const express = require('express');
const routes = require('./routes/apiroutes.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/freelancer')

app.use(bodyParser.json());

// initialize routes
app.use('/apiroutes', require('./routes/apiroutes'));

// listen for requests
app.listen(process.env.port || 3000, function() {
    console.log('now listening for requests');
});