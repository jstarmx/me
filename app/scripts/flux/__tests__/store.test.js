import Dispatcher from '../dispatcher';
import Store from '../store';

beforeEach(() => {
  spyOn(Store, 'emit').and.callThrough();
});

afterEach(() => {
  Store.emit.calls.reset();
});

describe('public methods', () => {
  it('sets a lightboxUrl', () => {
    Dispatcher.dispatch({
      action: 'SET_LIGHTBOX',
      url: 'example.url',
    });

    expect(Store.get('lightboxUrl')).toBe('example.url');
    expect(Store.emit).toHaveBeenCalledWith('change');
    expect(Store.has('lightboxUrl')).toBe(true);
  });

  it('sets a photoset', () => {
    Dispatcher.dispatch({
      action: 'SAVE_PHOTOS',
      photos: [{ key: 'value' }],
    });

    expect(Store.get('photos')).toEqual([{ key: 'value' }]);
    expect(Store.emit).toHaveBeenCalledWith('change');
    expect(Store.has('photos')).toBe(true);
  });

  it('registers change listeners', () => {
    const exampleFn = jest.fn();
    Store.addChangeListener(exampleFn);
    Store.emit('change');

    expect(exampleFn).toHaveBeenCalled();
  });
});

describe('actions', () => {
  it('does nothing if an action is not registered', () => {
    Dispatcher.dispatch({ action: 'ANOTHER_ACTION' });

    expect(Store.emit).not.toHaveBeenCalled();
  });

  it('does nothing if a dispatch contains no action', () => {
    Dispatcher.dispatch({});

    expect(Store.emit).not.toHaveBeenCalled();
  });
});
