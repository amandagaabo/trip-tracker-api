const fs = require('fs');
const index = require('./spec/index');


index.paths = {
    '/health': require('./spec/paths/health')
};

index.definitions = {
    '404Response': require('./spec/definitions/404Response'),
    '500Response': require('./spec/definitions/500Response')
};

fs.writeFileSync('./spec/api.json', JSON.stringify(index, null, 2));