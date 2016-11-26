const Dispatcher = require('./dispatcher');

module.exports = {
  fetch (api) {
    return api()
      .then((response) => {
        this[response.action](response.payload);
      }, () => {
        // error
      });
  },

  savePhotos (photos) {
    Dispatcher.dispatch({
      action: 'SAVE_PHOTOS',
      photos,
    });
  },

  setLightbox (url) {
    Dispatcher.dispatch({
      action: 'SET_LIGHTBOX',
      url,
    });
  },
};
