const express = require('express');
const mongoose = require('mongoose');
const Joi = require('joi'); 
const graduates = require('./routes/graduates');
require('dotenv/config');
const app = express();

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB.'))
    .catch(err => console.error('Cannot connect to MongoDB.'));

app.use(express.json());
app.use('/', graduates);
app.use(express.static('public')); 

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});