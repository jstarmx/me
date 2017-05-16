import React from 'react';
import { mount } from 'enzyme';

import Lightbox from '../lightbox';
import Store from '../../flux/store';

jest.mock('../../flux/actions');
jest.mock('../../flux/store');

const callbacks = {};
Store.addChangeListener = jest.fn((cb) => { callbacks._change = cb; });
Store.get = jest.fn(() => 'example.url');

const wrapper = mount(<Lightbox />);

describe('on mount', () => {
  it('renders an empty container', () => {
    expect(wrapper.html()).toBe('<div></div>');
  });
});

describe('on receiving an image url', () => {
  beforeEach(() => callbacks._change());
  afterEach(() => wrapper.setState({ url: null }));

  it('renders the image in a lightbox', () => {
    expect(wrapper.find('.lightbox__image').prop('src')).toBe('example.url');
  });

  describe('when clicking', () => {
    describe('inside the lightbox', () => {
      it('does nothing', () => {
        wrapper.find('.lightbox__image').simulate('click');
        expect(wrapper.state('url')).toBe('example.url');
      });
    });

    describe('outside the lightbox', () => {
      it('resets the lighbox url', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.state('url')).toBe(null);
      });
    });
  });
});
