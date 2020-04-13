import React from 'react';
import Cover from './Cover';
import renderer from 'react-test-renderer';

it('Cover renders correctly', () => {
   const tree = renderer.create(
     <Cover />
   ).toJSON();
    expect(tree).toMatchSnapshot();
 });