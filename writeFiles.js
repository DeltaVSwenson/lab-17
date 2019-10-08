'use strict';

const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

const hub = require('./hub');
require('./logger');

function fileWrite(file, text){
  return writeFile(file, Buffer.from(text)).then( () => hub.emit('saved', file));
}

module.exports = fileWrite;
