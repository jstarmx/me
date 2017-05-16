const React = require('react');
const Actions = require('../flux/actions');

const Thumb = React.createClass({
  propTypes: {
    farm: React.PropTypes.number,
    id: React.PropTypes.string,
    secret: React.PropTypes.string,
    server: React.PropTypes.string,
    title: React.PropTypes.string,
  },

  _onClick(e) {
    e.preventDefault();
    Actions.setLightbox(this._url('c'));
  },

  _style() {
    return { backgroundImage: `url("${this._url()}")` };
  },

  _url(size) {
    const suffix = size ? (`_${size}`) : '';

    return `https://farm${this.props.farm}.staticflickr.com/${this.props.server}` +
      `/${this.props.id}_${this.props.secret}${suffix}.jpg`;
  },

  render() {
    return (
      <li className="thumb" style={ this._style() } >
        <a
          className="thumb__link"
          href={ this._url('c') }
          onClick={ this._onClick }
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="thumb__title">{this.props.title}</span>
        </a>
      </li>
    );
  },
});

module.exports = Thumb;
