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
        {this.state.photos.map((photo) => {
          return <Thumb photo={photo} key={photo.id} />;
        })}
      </ul>
    );
  },
});

module.exports = Gallery;
