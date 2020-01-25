import React from 'react';
import Stats from './Stats';
import renderer from 'react-test-renderer';

it('Cover renders correctly', () => {
    const tree = renderer.create(
      <Stats />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });