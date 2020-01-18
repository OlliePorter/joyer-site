import React from 'react';
import SignUpForm from './SignUpForm';
import renderer from 'react-test-renderer';

it('SignUpForm renders correctly', () => {
    const tree = renderer.create(
      <SignUpForm />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });