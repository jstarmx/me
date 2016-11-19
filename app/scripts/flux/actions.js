const Dispatcher = require('./dispatcher');
const flickr = require('../api/flickr');

const Actions = {
  fetchPhotos () {
    flickr ()
      .then((photos) => {
        Actions.savePhotos(photos);
      }, () => {
        console.log('error');
      });
  },

  savePhotos (photos) {
    Dispatcher.dispatch({
      action: 'SAVE_PHOTOS',
      photos: photos,
    });
  },

  setLightbox (url) {
    Dispatcher.dispatch({
      action: 'SET_LIGHTBOX',
      url: url,
    });
  },
}

module.exports = Actions;
