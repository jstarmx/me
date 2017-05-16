import React from 'react';
import renderer from 'react-test-renderer';

import Lightbox from '../lightbox';

it('renders a Lightbox component', () => {
  const component = renderer.create(<Lightbox />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
