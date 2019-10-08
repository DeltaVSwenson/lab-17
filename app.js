'use strict';

require('./network-logger');
require('./logger')
const alterFile = require('./alterFile');

let file = process.argv.slice(2).shift();
alterFile(file);
