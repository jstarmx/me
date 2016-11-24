jest.mock('../../flux/store');

const Gallery = require('../gallery');
const React = require('react');
const shallow = require('enzyme/shallow');
const Store = require('../../flux/store');
const Thumb = require('../thumb');

const imageAttrs = {
  id: '4739346163',
  secret: '9472a26e5c',
  server: '4075',
  farm: 5,
  title: 'Cairngorm'
};

describe('<Gallery />', () => {
  Store.get = jest.fn();
  Store.get.mockReturnValue([imageAttrs]);

  const wrapper = shallow(<Gallery />);

  describe('store returns one image', () => {
    it('renders one <Thumb /> component', () => {
      expect(wrapper.find(Thumb).length).toBe(1);
      expect(wrapper.find(Thumb).nodes[0].props).toEqual(imageAttrs);
    });
  });
});
