const React = require('react');
const Actions = require('../flux/actions');

const Thumb = React.createClass({
  render () {
    return (
      <li className="gallery__thumb" style={this._style()} >
        <a
          className="gallery__link"
          href={this._url('c')}
          onClick={this._handleClick}
          target="_blank"
        />
      </li>
    );
  },

  _handleClick (e) {
    e.preventDefault();
    Actions.setLightbox(this._url('c'));
  },

  _style () {
    return { backgroundImage: 'url(' + this._url() + ')' };
  },

  _url (size) {
    const photo = this.props.photo;
    const suffix = size ? ('_' + size) : '';

    return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
      '/' + photo.id + '_' + photo.secret + suffix + '.jpg';
  },
});

module.exports = Thumb;
