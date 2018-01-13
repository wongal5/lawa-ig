/* You'll need to have your Node server running for these tests to pass. 
 * 
 * Use this reference page for 'matcher' syntax
 * https://facebook.github.io/jest/docs/en/expect.html
*/

var axios = require('axios');

// Opens connection to lawa_db database. This won't work in travisCI

describe('/profile endpoint', () => {
  test('to respond to get requests', () => {
    return expect(axios.get('http://localhost:3000/profile')).resolves.toBeDefined();
  });
  test('')
});
