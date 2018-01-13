import React from 'react';
import App from '../client/src/index.jsx';
import renderer from 'react-test-renderer';

test('app renders correctly', () => {
  const tree = renderer
    .create(<App />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});