import React from 'react';
import App from '../client/src/index.jsx';
import renderer from 'react-test-renderer';
<<<<<<< HEAD
import fetch from 'node-fetch'
=======
>>>>>>> f534aabddb7870d11cd5bdaa781f673d664b2d81

test('app renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});