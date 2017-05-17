import React from 'react';
import renderer from 'react-test-renderer';

import Gallery from '../gallery';

const images = [
  {
    id: 0,
    title: 'dummy gallery',
    images: [{ path: 'path', thumb: 'thumb', title: 'title' }],
  },
];

it('renders a Gallery component', () => {
  const component = renderer.create(<Gallery images={ images } />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
