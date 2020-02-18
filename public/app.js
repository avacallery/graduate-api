const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser')
const app = express();
const router = express.Router();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

fetch('https://localhost:5000/api/graduates', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'New Student',
        email: 'new@gmail.com',
        dateOfGraduation: "04/20/2020",
        bio: "I am willing to do whatever it takes to be the next Pokemon Master."
    })
})
    // })  .then(res => {
    //         return res.json();
    // })

    .then(res => res.json())
    .then(json => console.log(json))
    .catch(error => console.error('ERROR!', error));


// .then(data => console.log(data))
//     .catch(error => console.error('ERROR!', error));

module.exports = router;