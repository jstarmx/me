jest.mock('../flux/actions');
jest.mock('../components/gallery');
jest.mock('../components/lightbox');

const Actions = require('../flux/actions');

const DOMElements = {};

Actions.savePhotos = jest.fn();
window.__PRELOADED_STATE__ = 'photoset';
document.getElementById = jest.fn((id) => {
  DOMElements[id] = document.createElement('div');
  return DOMElements[id];
});

require('../app');

describe('App', () => {
  it('saves preloaded photos', () => {
    expect(Actions.savePhotos).toBeCalledWith('photoset');
  });

  it('renders React components to the DOM', () => {
    expect(DOMElements.gallery.innerHTML).toBe('<!-- react-empty: 1 -->');
    expect(DOMElements.lightbox.innerHTML).toBe('<!-- react-empty: 1 -->');
  });
});
