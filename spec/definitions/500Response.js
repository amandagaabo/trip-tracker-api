module.exports = {
    type: 'object',
    properties: {
        status: {
            type: 'integer',
            description: 'Status code',
            example: 500
        },
        message: {
            type: 'string',
            description: 'Error message',
            example: 'Service unavailable'
        }
    }
};