jest.mock('../../flux/actions');
jest.mock('../../flux/store');

const Actions = require('../../flux/actions');
const Lightbox = require('../lightbox');
const mount = require('enzyme/mount');
const React = require('react');
const Store = require('../../flux/store');

describe('<Lightbox />', () => {
  const callbacks = {};
  Actions.setLightbox = jest.fn();
  Store.addChangeListener = jest.fn((cb) => { callbacks._onChange = cb; });
  Store.get = jest.fn();
  Store.get.mockReturnValue('example.url');

  const wrapper = mount(<Lightbox />);

  describe('on mount', () => {
    it('renders nothing', () => {
      expect(wrapper.html()).toBe(null);
    });
  });

  describe('on receiving an image url', () => {
    beforeEach(() => callbacks._onChange());
    afterEach(() => wrapper.setState({ url: null }));

    it('renders the image in a lightbox', () => {
      expect(wrapper.find('.lightbox__image').prop('src')).toBe('example.url');
    });

    describe('when clicking', () => {
      describe('inside the lightbox', () => {
        it('does nothing', () => {
          wrapper.find('.lightbox__image').simulate('click');
          expect(Actions.setLightbox).not.toHaveBeenCalled();
        });
      });

      describe('outside the lightbox', () => {
        it('resets the lighbox url', () => {
          wrapper.find('button').simulate('click');
          expect(Actions.setLightbox).toHaveBeenCalledWith(null);
        });
      });
    });
  });
});
