const fs = require('fs');
const yaml = require('js-yaml');

const index = yaml.safeLoad(fs.readFileSync('./spec/index.yaml', 'utf8'));

index.paths = {
    ...yaml.safeLoad(fs.readFileSync('./spec/paths/health.yaml', 'utf8')),
    ...yaml.safeLoad(fs.readFileSync('./spec/paths/user.yaml', 'utf8'))
};

index.definitions = {
    ...yaml.safeLoad(fs.readFileSync('./spec/definitions/responses.yaml', 'utf8'))
};

fs.writeFileSync('./spec/api.json', JSON.stringify(index, null, 2));