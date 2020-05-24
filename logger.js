const path = require('path');

let url = 'http://myrul.com';

log = (message) => {
    console.log(`Hello ${message}`);
}


module.exports.url = url;
module.exports.log = log;

let pathObj = path.parse(__filename);

console.log(pathObj);