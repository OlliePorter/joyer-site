import React from 'react';
import MissionBio from './MissionBio';
import renderer from 'react-test-renderer';

it('Cover renders correctly', () => {
    const tree = renderer.create(
      <MissionBio />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });