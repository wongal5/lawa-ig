// refer to jasmine docs here --> https://jasmine.github.io/api/2.8/global.html

var server = require('../client/dist/bundle.js');

describe('TESTING TESTS WITH TRAVISCI', function () {
  
  it('Should always be true', function () {
    expect(true).toBe(true);
  });
});


