import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../button'

it('is a div', () => {
  const json = renderer.create(<Button />).toJSON()
  expect(json).toMatchSnapshot()
})