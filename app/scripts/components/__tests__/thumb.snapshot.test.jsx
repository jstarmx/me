const Thumb = require('../thumb');
const React = require('react');
const renderer = require('react-test-renderer');

describe('<Thumb /> (Snapshot)', () => {
  it('renders a thumbnail component', () => {
    const component = renderer.create(<Thumb />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
