const Actions = require('../flux/actions');
const Gallery = require('../components/gallery');
const Lightbox = require('../components/lightbox');
const React = require('react');
const ReactDOM = require('react-dom');

Actions.savePhotos(window.__PRELOADED_STATE__);

ReactDOM.render(<Gallery />, document.querySelector('#gallery'));
ReactDOM.render(<Lightbox />, document.querySelector('#lightbox'));
