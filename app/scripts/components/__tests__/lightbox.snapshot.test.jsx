const Lightbox = require('../lightbox');
const React = require('react');
const renderer = require('react-test-renderer');

describe('<Lightbox /> (Snapshot)', () => {
  it('renders a lightbox container', () => {
    const component = renderer.create(<Lightbox />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
