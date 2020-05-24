const fs = require('fs');


// 1.Create a method to get all the files inside a given path
let myPath = (route) => {  //Async form
    fs.readdir(route, (err, files) => {
        (err) ? console.log(err) : console.log(files);
        }
    );
}


// 2.Create a method to print all the files
let detailsMyPath = (route) => {
    fs.readdir(route, (err, files) => {
        let countfiles = files.length;
        if(err){console.log(err)}
        else{
            for(id = 0; id<countfiles; id++)
            {
                console.log(`Archivo Nº${id}: <nombre-archivo>: ${files[id]}`);
            }
            } 
        }
    );
}


// 3. Create a method to inverse sort and print the files of a given path
let sortMyfiles = (route) => {
    fs.readdir(route, (err, files) => {
        let countfiles = files.length;
        if(err){console.log(err)}
        else{
            console.log('Archivos obtenidos en bruto:');
            for(id = 0; id<countfiles; id++)
            {
                console.log(`Archivo ID Nº${id}: <nombre-archivo>: ${files[id]}`);
            }
            let sorteados = files.sort().reverse();
            console.log('Archivos ordenados de forma inversa:');
            for(id = 0; id<countfiles; id++)
            {
                console.log(`Archivo ID Nº${id}: <nombre-archivo>: ${sorteados[id]}`);
            }
            } 
        }
    );
}

// 4. Create a method to get the amount of files starting with one letter
let filesforLetter = (route, letter) => {
    fs.readdir(route, (err, files) => {
        let countfiles = files.length;
        if(err){console.log(err)}
        else{
            console.log(`Letra ingresada: ${letter}`);
            console.log('Coincidencias: '+ files.filter(file => file.charAt(0) == letter));
            } 
        }
    );
}

module.exports.myPath = myPath;
module.exports.detailsMyPath = detailsMyPath;
module.exports.sortMyfiles = sortMyfiles;
module.exports.filesforLetter = filesforLetter;