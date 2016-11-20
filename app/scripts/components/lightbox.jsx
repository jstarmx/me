const React = require('react');
const Actions = require('../flux/actions');
const Store = require('../flux/store');

const Lightbox = React.createClass({
  getInitialState () {
    return { url: null };
  },

  componentDidMount () {
    Store.addChangeListener(this._onChange);
  },

  _onChange () {
    this.setState({ url: Store.get('lightboxUrl') });
  },

  _onClick (e) {
    if (!e.target.classList.contains('lightbox__image')) {
      Actions.setLightbox(null);
    }
  },

  render () {
    if (this.state.url) {
      return (
        <button className="lightbox__overlay" onClick={this._onClick}>
          <img src={this.state.url} className="lightbox__image" role="presentation" />
        </button>
      );
    }

    return null;
  },
});

module.exports = Lightbox;
