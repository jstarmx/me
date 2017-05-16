const Dispatcher = require('./dispatcher');

export const fetch = api =>
  api().then(({ action, payload }) => action(payload));

export const savePhotos = photos =>
  Dispatcher.dispatch({
    action: 'SAVE_PHOTOS',
    photos,
  });

export const setLightbox = url =>
  Dispatcher.dispatch({
    action: 'SET_LIGHTBOX',
    url,
  });
