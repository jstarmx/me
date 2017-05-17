require('core-js/fn/object/assign');
const Dispatcher = require('./dispatcher');
const EventEmitter = require('events').EventEmitter;

const _store = {
  lightboxUrl: null,
  photos: [],
};

const Store = Object.assign(EventEmitter.prototype, {
  set(data) {
    Object.assign(_store, data);
    this.emit('change');
  },

  get(item) {
    return _store[item];
  },

  has(item) {
    return _store[item].length > 0;
  },

  addChangeListener(callback) {
    this.on('change', callback);
  },
});

Dispatcher.register((payload) => {
  switch (payload.action) {
    case 'SAVE_PHOTOS':
      Store.set({ photos: payload.photos });
      break;

    case 'SET_LIGHTBOX':
      Store.set({ lightboxUrl: payload.url });
      break;

    default:
      return true;
  }

  return true;
});

module.exports = Store;
