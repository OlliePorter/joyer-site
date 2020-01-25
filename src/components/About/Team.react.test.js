import React from 'react';
import Team from './Team';
import renderer from 'react-test-renderer';

it('Cover renders correctly', () => {
    const tree = renderer.create(
      <Team />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });