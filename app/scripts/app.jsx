const _ = require('lodash');
const Actions = require('./flux/actions');
const Gallery = require('./components/gallery');
const Lightbox = require('./components/lightbox');
const React = require('react');
const ReactDOM = require('react-dom');

Actions.savePhotos(window.__PRELOADED_STATE__);

const components = {
  '#gallery': <Gallery />,
  '#lightbox': <Lightbox />,
};

_.each(components, (component, selector) => {
  if (document.querySelector(selector)) {
    ReactDOM.render(component, document.querySelector(selector));
  }
});
