const Gallery = require('../gallery');
const React = require('react');
const renderer = require('react-test-renderer');

describe('<Gallery /> (Snapshot)', () => {
  it('renders a gallery component', () => {
    const component = renderer.create(<Gallery />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
