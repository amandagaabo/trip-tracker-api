module.exports = {
  get: {
    description: 'Get API health',
    'x-swagger-router-controller': 'Health',
    operationId: 'getHealth',
    tags: [
      'health'
    ],
    responses: {
      '200': {
        description: 'Successful Request',
        schema: {
          type: 'object',
          properties: {
            status: {
              type: 'integer',
              description: 'Status code',
              example: 200
            },
            success: {
              type: 'boolean',
              description: 'Successful request true or false',
              example: true
            },
            message: {
              type: 'string',
              description: 'Message',
              example: 'API is healthy'
            }
          }
        }
      },
      '404': {
        description: 'Bad Request',
        schema: {
          $ref: '#/definitions/404Response'
        }
      },
      '500': {
        description: 'Server Error',
        schema: {
          $ref: '#/definitions/500Response'
        }
      }
    }
  }
};