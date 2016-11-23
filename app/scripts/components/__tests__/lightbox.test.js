jest.mock('../../flux/actions');
jest.mock('../../flux/store');

const Actions = require('../../flux/actions');
const Lightbox = require('../lightbox');
const mount = require('enzyme/mount');
const React = require('react');
const shallow = require('enzyme/shallow');
const Store = require('../../flux/store');

const clickEvent = (insideLightbox) => {
  return { target: { classList: { contains: () => insideLightbox } } };
};

describe('Lightbox', () => {
  describe('listens to store', () => {
    let triggerChange;
    Store.get = jest.fn();
    Store.get.mockReturnValueOnce('example.url');
    Store.addChangeListener = jest.fn((cb) => {
      triggerChange = cb;
    });

    const wrapper = mount(<Lightbox />);

    it('adds a store listener', () => {
      triggerChange();
      expect(wrapper.find('.lightbox__image').prop('src')).toBe('example.url');
    });
  });

  describe('on click', () => {
    Actions.setLightbox = jest.fn();

    const wrapper = shallow(<Lightbox />);
    wrapper.setState({ url: 'example.url' });

    describe('inside the lightbox', () => {
      it('resets the lighbox url', () => {
        wrapper.find('button').simulate('click', clickEvent(true));
        expect(Actions.setLightbox).not.toHaveBeenCalled();
      });
    });

    describe('outside the lightbox', () => {
      it('resets the lighbox url', () => {
        wrapper.find('button').simulate('click', clickEvent(false));
        expect(Actions.setLightbox).toHaveBeenCalledWith(null);
      });
    });
  });
});
