'use strict';

const EE = require('./hub');
const net = require('net');
const client = new net.Socket();

const PORT = process.env.PORT || 3001;

EE.on('save', handleSave);
EE.on('err', handleError);

client.connect(PORT, 'localhost', ()=>{
  console.log(`connect on port ${PORT}`);
});

client.on('data', data => {
  console.log('LOG', data.toString());
});

client.on('close', () => {
  console.log('Connection closed');
});
function handleSave(payload){
  console.log(`File ${payload.id} is saved brotha!`);

}

function handleError(payload){
  console.log(`File ${payload.id} could not be saved`);
}

console.log(handleSave);
console.log(handleError);