const React = require('react');
const Thumb = require('./thumb');
const Store = require('../flux/store');

const Gallery = React.createClass({
  getInitialState () {
    return { photos: Store.get('photos') };
  },

  render () {
    return (
      <ul className="gallery">
        {this.state.photos.map(photo =>
          <Thumb
            farm={photo.farm}
            id={photo.id}
            key={photo.id}
            secret={photo.secret}
            server={photo.server}
            title={photo.title}
          />
        )}
      </ul>
    );
  },
});

module.exports = Gallery;
