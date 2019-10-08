'use strict';

require('../logger');
const EE = require('../hub');

describe('logger!', ()=>{
  beforeEach(() =>{
    jest.spyOn(console, 'log');
    jest.spyOn(EE, 'emit');
  });
  afterEach(() =>{
    jest.restoreAllMocks();
  });

  describe('save', ()=>{
    it('logs a save event', () =>{
      let payload = {id: 'haha' };
     
      EE.emit('save', payload);

      expect(console.log)
        .toHaveBeenCalledWith(`File haha is saved brotha!`);
    });
  });
  it('logs an error', ()=> {
    let payload = {id: 'oopsie poopsie'};

    EE.emit('err', payload);

    expect(console.log)
      .toHaveBeenCalledWith(`File oopsie poopsie could not be saved`);
  });
});
