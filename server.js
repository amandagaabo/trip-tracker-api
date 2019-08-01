const express = require("express");
const bodyParser = require("body-parser");

// Set up the express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1/health', (req, res) => {
    res.status(200).send({
        success: true,
        message: 'API is healthy'
    })
});

// TODO: setup config with env variables
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
});