import React from 'react';
import Testimonials from './Testimonials';
import renderer from 'react-test-renderer';

it('Testimonials renders correctly', () => {
    const tree = renderer.create(
      <Testimonials />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });