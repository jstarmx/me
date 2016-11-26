jest.mock('../dispatcher');
jest.mock('../../api');

const Actions = require('../actions');
const Api = require('../../api');
const Dispatcher = require('../dispatcher');

Api.flickr = jest.fn();
Api.flickr.mockReturnValue(
  new Promise((resolve) => {
    resolve({ action: 'savePhotos', payload: 'photos' });
  })
);
Dispatcher.dispatch = jest.fn();

describe('Actions', () => {
  it('despatches a "SET_LIGHTBOX" action', () => {
    Actions.setLightbox('url');

    expect(Dispatcher.dispatch).toHaveBeenCalledWith({
      action: 'SET_LIGHTBOX',
      url: 'url'
    });
  });

  it('fetches photos and calls the "SAVE_PHOTOS" action', () =>
    Actions.fetch(Api.flickr).then(() => {
      expect(Dispatcher.dispatch).toHaveBeenCalledWith({
        action: 'SAVE_PHOTOS',
        photos: 'photos'
      });
    })
  );
});
