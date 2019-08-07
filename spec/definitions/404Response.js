module.exports = {
    type: 'object',
    properties: {
        status: {
            type: 'integer',
            description: 'Status code',
            example: 404
        },
        message: {
            type: 'string',
            description: 'Error message',
            example: 'Bad request'
        }
    }
};