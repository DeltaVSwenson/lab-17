'use strict';

const fileWrite = require('./writeFiles');
const upperCase = require('./upperCase');
const fs = require('fs');
function alterFile(file){
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    let newData = upperCase(data);
    fileWrite(file,newData);
  });
}

module.exports = alterFile;