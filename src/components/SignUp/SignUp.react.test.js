import React from 'react';
import SignUp from './SignUp';
import renderer from 'react-test-renderer';

it('SignUp renders correctly', () => {
    const tree = renderer.create(
        <SignUp />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});