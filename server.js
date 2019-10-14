'use strict';

const express = require('express');
const swaggerTools = require('swagger-tools');
const app = express();

// TODO: setup config with env variables
// const PORT = process.env.PORT
const PORT = 8080;
const ENVIRONMENT = process.env.NODE_ENV;

var swaggerDoc = require('./spec/api.json');

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator({
        validateResponse: true
    }));

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter({
        controllers: './src/controllers',
        useStubs: ENVIRONMENT === 'development' ? true : false // Conditionally turn on stubs (mock mode)
    }));

    // Serve the Swagger documents and Swagger UI
    // localhost:8080/docs => Swagger UI
    // localhost:8080/api-docs => Swagger document
    app.use(middleware.swaggerUi());
});


// server is used in runServer and closeServer so it is defined out here
let server;

function runServer() {
    return new Promise((resolve, reject) => {
        server = app.listen(PORT, () => {
            console.log(`Your app is listening on port ${PORT}`);
            resolve();
        })
            .on('error', (err) => {
                reject(err);
            });
    });
}

// used for integration tests
function closeServer() {
    return new Promise((resolve, reject) => {
        console.log('Closing server');
        server.close((err) => {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
}

// if server.js is called directly (aka, with `node server.js`), this block runs
if (require.main === module) {
    runServer();
}

module.exports = { app, runServer, closeServer };
