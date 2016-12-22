const Actions = require('./flux/actions');
const Gallery = require('./components/gallery');
const Lightbox = require('./components/lightbox');
const React = require('react');
const ReactDOM = require('react-dom');

Actions.savePhotos(window.__PRELOADED_STATE__);

const components = [
  { selector: '#gallery', tag: <Gallery /> },
  { selector: '#lightbox', tag: <Lightbox /> },
];

components.forEach((component) => {
  const el = document.querySelector(component.selector);
  if (el) ReactDOM.render(component.tag, document.querySelector(el));
});
