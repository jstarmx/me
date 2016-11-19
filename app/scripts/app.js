const React = require('react');
const ReactDOM = require('react-dom');
const Gallery = require('./components/gallery');
const Lightbox = require('./components/lightbox');
const Actions = require('./flux/actions');

Actions.savePhotos(window.__PRELOADED_STATE__);
ReactDOM.render(<Gallery />, document.getElementById('gallery'));
ReactDOM.render(<Lightbox />, document.getElementById('lightbox'));
