const fs = require('fs')
const getData = (File_URL) => {
    return JSON.parse(fs.readFileSync(File_URL));
};

const storeData = (FILE_URL, DATA) => {
    fs.writeFileSync(FILE_URL, JSON.stringify(DATA));
};

module.exports = {getData, storeData}