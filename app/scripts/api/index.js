const request = require('superagent');

module.exports = {
  flickr() {
    return new Promise((resolve, reject) => {
      request
        .get('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=998ecdecb64aac4b985032d25a283a12&photoset_id=72157628126089629&format=json&nojsoncallback=1')
        .end((error, response) => {
          if (response.ok) {
            resolve({
              action: 'savePhotos',
              payload: JSON.parse(response.text).photoset.photo,
            });
          } else {
            reject(error);
          }
        });
      });
  }
};
