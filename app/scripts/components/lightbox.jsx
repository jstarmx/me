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

  render () {
    if (this.state.url) {
      return (
        <div className="lightbox__overlay" onClick={this._onClick}>
          <img src={this.state.url} className="lightbox__image" />
        </div>
      );
    }

    return null;
  },

  _onChange () {
    this.setState({ url: Store.get('lightboxUrl') });
  },

  _onClick (e) {
    if (!e.target.classList.contains('lightbox__image')) {
      Actions.setLightbox(null);
    }
  },
});

module.exports = Lightbox;
