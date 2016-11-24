jest.mock('../../flux/actions');

const Actions = require('../../flux/actions');
const React = require('react');
const shallow = require('enzyme/shallow');
const Thumb = require('../thumb');

const e = {};
const photo = {
  id: '4739346163',
  secret: '9472a26e5c',
  server: '4075',
  farm: 5,
  title: 'Cairngorm',
};
const url = 'https://farm5.staticflickr.com/4075/4739346163_9472a26e5c_c.jpg';

describe('<Thumb />', () => {
  Actions.setLightbox = jest.fn();
  e.preventDefault = jest.fn();

  const wrapper = shallow(
    <Thumb
      farm={photo.farm}
      id={photo.id}
      key={photo.id}
      secret={photo.secret}
      server={photo.server}
      title={photo.title}
    />
  );

  describe('on click', () => {
    beforeEach(() => {
      wrapper.find('.thumb__link').simulate('click', e);
    });

    it('prevents the link opening', () => {
      expect(e.preventDefault).toHaveBeenCalled();
    });

    it('sets the correct lightbox url', () => {
      expect(Actions.setLightbox).toHaveBeenCalledWith(url);
    });
  });
});
