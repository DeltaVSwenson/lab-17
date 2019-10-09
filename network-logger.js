'use strict';

const EE = require('./hub');


const io = require('socket.io-client');
const client = io.connect('http://localhost:3001/database');

client.on('error', () => {
  console.warn('she gone');
});

initializeLogger();

function initializeLogger() {
  console.log('systems online');

  EE.on('save', log('save'));

  function log(eventType) {
    return payload => {
      let json = JSON.stringify({
        eventType,
        payload,
      });
      client.write(`${json}\r\n`);
    };
  }
}