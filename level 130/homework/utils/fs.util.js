const fs = require('fs');

function readFile(path) {
    const data = fs.readFileSync(path, 'utf-8');

    return JSON.parse(data);
}

function writeFile(path, data) {
    fs.writeFileSync(path, data);
}

module.exports = {
    readFile,
    writeFile
};