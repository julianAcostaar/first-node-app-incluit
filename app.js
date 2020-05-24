const logger = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');

// let sayHello = (nombre) => {
//     console.log(`Hola ` + nombre);
// }

// sayHello('Julián');

// console.log(module);

// console.log(logger);

// logger.log('Julián');

let pathObj = path.parse(__filename);

console.log(pathObj);

let freeMem = os.freemem();
let totalMem = os.totalmem();

console.log(freeMem);
console.log(totalMem);


let rootDir = fs.readdirSync('./');
console.log(rootDir);

fs.readdir( './', (err, files) => {
    (err) ? console.log(err) : console.log('async', files);
})

console.log('sync', rootDir);