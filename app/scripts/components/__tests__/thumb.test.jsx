import React from 'react';
import { shallow } from 'enzyme';

import { setLightbox } from '../../flux/actions';
import Thumb from '../thumb';

jest.mock('../../flux/actions');

const e = { preventDefault: jest.fn() };
const props = { path: 'path', thumb: 'thumb', title: 'title' };

const wrapper = shallow(<Thumb { ...props } />);

describe('<Thumb />, on click', () => {
  beforeEach(() => {
    wrapper.find('.thumb__link').simulate('click', e);
  });

  it('prevents the link opening', () => {
    expect(e.preventDefault).toHaveBeenCalled();
  });

  it('sets the correct lightbox url', () => {
    expect(setLightbox).toHaveBeenCalledWith('path');
  });
});
