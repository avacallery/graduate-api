const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser')
const app = express();
const router = express.Router();

// fetch('http://localhost:5000/api/graduates', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'Ody the New Student',
//         email: 'odywhycallery@gmail.com',
//         dateOfGraduation: "04/20/2020",
//         bio: "Cat school was not for me."
//     })
// })

    // .then(res => res.json())
    // .then(json => console.log(json))
    // .catch(error => console.error('ERROR!', error));

module.exports = router;