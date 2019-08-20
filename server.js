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
        controllers: './controllers',
        useStubs: ENVIRONMENT === 'development' ? true : false // Conditionally turn on stubs (mock mode)
    }));

    // Serve the Swagger documents and Swagger UI
    // localhost:8080/docs => Swagger UI
    // localhost:8080/api-docs => Swagger document
    app.use(middleware.swaggerUi());

    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    });
});

