import React from 'react';
import renderer from 'react-test-renderer';

import Thumb from '../thumb';

const props = { path: 'path', thumb: 'thumb', title: 'title' };

it('renders a Thumb component', () => {
  const component = renderer.create(<Thumb { ...props } />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
