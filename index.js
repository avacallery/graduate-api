const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Joi = require('joi'); 
const graduates = require('./routes/graduates');
require('dotenv/config');
const app = express();
const fetch = require('node-fetch');
const frontend = require('./public/app'); 

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB.'))
    .catch(err => console.error('Cannot connect to MongoDB.'));

app.use(cors());
// app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/api/graduates', graduates);
app.use('/', frontend); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({extended: false})); 

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});