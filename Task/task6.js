// . Create a REST API Endpoint
// Design an API endpoint "/add-user" that accepts POST requests with "name" and "email". The API should validate the inputs and store the data.
// Bonus: Mention status codes for success and failure

const express = require('express');
const app = express();

app.use(express.json());

app.post('/get-users', (req, res) => {
    const { name, email} = req.body;

    const users = {id: Date.now(), name, email};
    console.log(users);

    return res.status(201).json({
        message: 'User added successfully',
        user: users
    });
})


// shravani.siripuram@innovontek.com