/* You'll need to have your Node server running for these tests to pass. 
 * 
 * Use this reference page for 'matcher' syntax
 * https://facebook.github.io/jest/docs/en/expect.html
*/

const axiosLib = require('axios');
const request = require('request');
const url = 'https://lawa-ig-staging.herokuapp.com/';

var axios = axiosLib.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
  headers: { 'Access-Control-Allow-Origin': '*' }
});

describe('/profile endpoint', () => {
  test('to respond to get requests with profile user names', () => {
    return axios.get('/profile')
      .then(response => {
        expect(response.data[0].label).toBe('Albert Wong');
      })
  });
  test('to respond to get requests with profile user ids', () => {
    return axios.get('/profile')
      .then(response => {
        expect(response.data[0].name).toBe(1);
      })
  });
});
