jest.mock('../../app/scripts/flux/actions');
jest.mock('../../app/scripts/api');
jest.mock('../../app/scripts/components/gallery');
jest.mock('../../app/scripts/flux/store');

const Actions = require('../../app/scripts/flux/actions');
const Api = require('../../app/scripts/api');
const Store = require('../../app/scripts/flux/store');

const res = { render: (template, options) => ({ template, options }) };
Actions.fetch = jest.fn();
Api.flickr = jest.fn();
Store.callbacks = [];
Store.addChangeListener = jest.fn(callback => Store.callbacks.push(callback));
Store.get = jest.fn(data => data);

const Pages = require('../pages');

const galleryData = {
  template: 'pages/snap',
  options: {
    body: '<!-- react-empty: 1 -->',
    preloadedState: 'photos',
  },
};

describe('Pages', () => {
  describe('Gallery', () => {
    describe('store already has photos', () => {
      beforeEach(() => {
        Store.has = jest.fn(() => true);
      });

      it('returns a rendered request', () => {
        expect(Pages.gallery(null, res)).toEqual(galleryData);
      });
    });

    describe('store does not have photos', () => {
      beforeEach(() => {
        Store.has = jest.fn(() => false);
        Pages.gallery(null, res);
      });

      it('adds the render fn to the Store listeners', () => {
        expect(Store.callbacks[0]()).toEqual(galleryData);
      });
    });
  });
});
