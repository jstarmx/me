import { fetch, savePhotos, setLightbox } from '../actions';
import Api from '../../api';
import { dispatch } from '../dispatcher';

jest.mock('../dispatcher');
jest.mock('../../api');

Api.flickr = jest.fn(() =>
  new Promise((resolve) => {
    resolve({ action: savePhotos, payload: 'photos' });
  })
);

it('despatches a "SET_LIGHTBOX" action', () => {
  setLightbox('url');

  expect(dispatch).toHaveBeenCalledWith({
    action: 'SET_LIGHTBOX',
    url: 'url',
  });
});

it('fetches photos and calls the "SAVE_PHOTOS" action', () =>
  fetch(Api.flickr).then(() => {
    expect(dispatch).toHaveBeenCalledWith({
      action: 'SAVE_PHOTOS',
      photos: 'photos',
    });
  })
);
